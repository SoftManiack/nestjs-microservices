"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const dotenv = require("dotenv");
const ENV_FILE = `.env`;
dotenv.config({ path: ENV_FILE });
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: +process.env.DB_PORT,
    synchronize: false,
    entities: [user_entity_1.UserEntity],
});
//# sourceMappingURL=orm.datasource.js.map