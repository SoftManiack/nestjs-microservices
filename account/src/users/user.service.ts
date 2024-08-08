import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import * as crypto from 'node:crypto'
import * as argon2 from 'argon2'
import GetUserFilterDto from './dto/get-user-filter.dto';
import { UserDto } from './dto/user.dto'
import { SignInDto } from './dto/sign-in,dto';

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository){}

  async create(createUserDto: CreateUserDto): Promise<void> {

    const salt = crypto.randomBytes(32);
    const hash = await argon2.hash(createUserDto.password, { salt });

    await this.userRepository.createUser({
      passwordHash: hash,
      passwordSalt: salt.toString('hex'),
      ...createUserDto,
    })

  }

  async findAll(GetUserFilterDto: GetUserFilterDto):Promise<{ items: UserDto[]; total: number; }> {
    const { items: users, total } = await this.userRepository.findAndCount(GetUserFilterDto);
    const dtos = users.map((user) => new  UserDto(user));
    return { items: dtos, total}
  }

  findOne(id: string) {
    return this.userRepository.findById(id)
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return  this.userRepository.updateUser({ userId: id, ...updateUserDto})
  }

  remove(id: string) {
    return this.userRepository.deleteUser(id);
  }

  async verification( { login, password }: SignInDto): Promise<boolean> {
    const user = await this.userRepository.findByLogin(login);

    if(!user){
      throw new NotFoundException('User not found');
    }

    return argon2.verify(password, user.passwordHash)
  }
}
