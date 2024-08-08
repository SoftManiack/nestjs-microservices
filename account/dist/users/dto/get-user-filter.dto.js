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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GetUserFilterDto {
}
exports.default = GetUserFilterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '',
        type: [String],
        required: false,
        example: ['518f7913-36b8-4c0a-c0f1-c742e251acdf']
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true, message: 'Поля в массиве "usersIds" должны быть строками' }),
    __metadata("design:type", Array)
], GetUserFilterDto.prototype, "userIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '',
        type: [String],
        required: false,
        example: ['79001110102', '79001110103']
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true, message: 'Поля в массиве "usersIds" должны быть строками' }),
    __metadata("design:type", Array)
], GetUserFilterDto.prototype, "phones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '',
        type: Number,
        required: false,
        example: 20
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUserFilterDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '',
        type: Number,
        required: false,
        example: 20
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUserFilterDto.prototype, "skip", void 0);
//# sourceMappingURL=get-user-filter.dto.js.map