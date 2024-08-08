import { IsEnum, IsString } from '@nestjs/class-validator'
import { Environment } from './types/configurations.enums'

export class ApplicationsConfig {
    @IsEnum(Environment, { always: true })
    NODE_ENV: Environment;

    @IsString( {always: true })
    HTTP_HOST:  string;

    @IsString( {always: true })
    HTTP_PORT:  string;

    @IsString( {always: true })
    HTTP_PREFIX:  string;

    @IsString( {always: true })
    HTTP_VERSION:  string;
}