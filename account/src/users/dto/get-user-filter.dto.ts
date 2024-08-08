import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export default class GetUserFilterDto {
    @ApiProperty({
        description: '',
        type: [String],
        required: false,
        example: ['518f7913-36b8-4c0a-c0f1-c742e251acdf']
    })
    @IsOptional()
    @IsString({ each: true, message: 'Поля в массиве "usersIds" должны быть строками'})
    readonly userIds?: string[];

    @ApiProperty({
        description: '',
        type: [String],
        required: false,
        example: ['79001110102', '79001110103']
    })
    @IsOptional()
    @IsString({ each: true, message: 'Поля в массиве "usersIds" должны быть строками'})
    readonly phones?: string[];

    @ApiProperty({
        description: '',
        type: Number,
        required: false,
        example: 20
    })
    @IsOptional()
    @IsNumber()
    readonly take?: number;

    @ApiProperty({
        description: '',
        type: Number,
        required: false,
        example: 20
    })
    @IsOptional()
    @IsNumber()
    readonly skip?: number;
    
}