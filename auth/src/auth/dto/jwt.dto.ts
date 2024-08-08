import { ApiProperty } from '@nestjs/swagger';

export class JwtDto {
    @ApiProperty({
        type: String,
        description: 'access JWT',
        required: true
    })
    access: string

    @ApiProperty({
        type: String,
        description: 'refresh JWT',
        required: true
    })
    refresh: string
}

export class RefresJwtDto {
    @ApiProperty({
        type: String,
        description:'refres JWT',
        required: true
    })
    readonly refresh: string
}