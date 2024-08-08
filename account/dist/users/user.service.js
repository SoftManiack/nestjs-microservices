"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const crypto = require("node:crypto");
const argon2 = require("argon2");
const user_dto_1 = require("./dto/user.dto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const salt = crypto.randomBytes(32);
        const hash = await argon2.hash(createUserDto.password, { salt });
        await this.userRepository.createUser({
            passwordHash: hash,
            passwordSalt: salt.toString('hex'),
            ...createUserDto,
        });
    }
    async findAll(GetUserFilterDto) {
        const { items: users, total } = await this.userRepository.findAndCount(GetUserFilterDto);
        const dtos = users.map((user) => new user_dto_1.UserDto(user));
        return { items: dtos, total };
    }
    findOne(id) {
        return this.userRepository.findById(id);
    }
    update(id, updateUserDto) {
        return this.userRepository.updateUser({ userId: id, ...updateUserDto });
    }
    remove(id) {
        return this.userRepository.deleteUser(id);
    }
    async verification({ login, password }) {
        const user = await this.userRepository.findByLogin(login);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return argon2.verify(password, user.passwordHash);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map