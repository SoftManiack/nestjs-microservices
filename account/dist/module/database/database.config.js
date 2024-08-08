"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseOptions = void 0;
const databaseOptions = (config) => ({
    type: config.get('DB_TYPE'),
    host: config.get('DB_HOST'),
    port: Number(config.get('DB_PORT')),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_DATABASE'),
    logging: config.get('DB_LOGGING') == true,
    synchronize: false,
    autoLoadEntities: true
});
exports.databaseOptions = databaseOptions;
//# sourceMappingURL=database.config.js.map