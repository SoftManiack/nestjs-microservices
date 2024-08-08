import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import GetUserFilterDto from './dto/get-user-filter.dto';
import { UserDto } from './dto/user.dto';
import { SignInDto } from './dto/sign-in,dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(GetUserFilterDto: GetUserFilterDto): Promise<{
        items: UserDto[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/user.entity").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
    verification({ login, password }: SignInDto): Promise<boolean>;
}
