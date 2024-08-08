import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import GetUserFilterDto from './dto/get-user-filter.dto';
import { UserDto } from './dto/user.dto';
import { SignInDto } from './dto/sign-in,dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(GetUserFilterDto: GetUserFilterDto): Promise<{
        items: UserDto[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/user.entity").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
    verification(dto: SignInDto): Promise<boolean>;
}
