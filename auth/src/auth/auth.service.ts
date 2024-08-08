import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InternalAccountService } from 'src/internal/account/account.service'
import { SignInDto } from './dto/sign-in.dto'
import { JwtDto, RefresJwtDto } from './dto/jwt.dto'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
    constructor (
        private readonly accountServiceInternal: InternalAccountService,
        private readonly jwtService: JwtService,
        private readonly config: ConfigService,
    ) {}

    async login(params: SignInDto): Promise<JwtDto> {
        const isPasswordCorrect = await this.accountServiceInternal.verification(
            params,
        );
        if (!isPasswordCorrect){
            throw new UnauthorizedException();
        }

        const users = await this.accountServiceInternal.GetUsersByFilter({
            login: params.login,
        });

        const payload = { login: params.login, userId: users.items[0].userId }

        const access = this.jwtService.sign( payload, {
            secret: this.config.get('JWT_ACCESS_SECRET')
        });
        
        const refresh = this.jwtService.sign(payload, {
            secret: this.config.get('JWT_REFRESH_SECRET')
        })

        return {
            access,
            refresh
        }
    }

    async refreshToken(params: RefresJwtDto): Promise<JwtDto> {
        let jwtPaylod: {
            userId: string,
            login: string
        }

        try {
            jwtPaylod = this.jwtService.verify( params.refresh, {
                secret: this.config.get('JWT_REFRESH_SECRET')
            });
        } catch(error: unknown) {
            throw new UnauthorizedException();
        }

        const { items: users } = await this.accountServiceInternal.GetUsersByFilter(
            {
                userIds: [jwtPaylod.userId]
            }
        );

        if(users.length){
            throw new NotFoundException('user not found')
        }

        const payload = { login: users[0].login, userId: users[0].userId };
        
        const access = this.jwtService.sign(payload,
            this.config.get('JWT_ACCESS_SECRET'),
        )

        const refresh = this.jwtService.sign( payload, {
            secret: this.config.get('JWT_ACCESS_SECRET'),
        });

        return {
            access,
            refresh
        }
    }
}
