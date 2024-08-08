import { DataSource } from 'typeorm';
import { UserEntity } from '../users/entities/user.entity';
import * as dotenv from 'dotenv'

const ENV_FILE = `.env`

dotenv.config({path: ENV_FILE })

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: +process.env.DB_PORT,
    synchronize: false,
    entities: [UserEntity],
})