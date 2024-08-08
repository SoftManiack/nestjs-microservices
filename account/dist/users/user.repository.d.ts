import { UserEntity } from './entities/user.entity';
import { DeepPartial, Repository, SelectQueryBuilder } from 'typeorm';
import { SearchUserParams, CheckExistUserParams } from './user.types';
export declare class UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser<T extends DeepPartial<UserEntity>>(entity: T): Promise<UserEntity>;
    findById(userId: string): Promise<UserEntity | undefined>;
    findAndCount(params: SearchUserParams): Promise<{
        items: UserEntity[];
        total: number;
    }>;
    updateUser(params: DeepPartial<UserEntity>): Promise<void>;
    deleteUser(id: string): Promise<void>;
    checkExistUser(params: CheckExistUserParams, alias?: string): Promise<boolean>;
    findByLogin(login: string): Promise<UserEntity | undefined>;
    gb(params?: SearchUserParams, alias?: string): SelectQueryBuilder<UserEntity>;
}
