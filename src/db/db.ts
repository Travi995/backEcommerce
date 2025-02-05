import { DataSource } from "typeorm";
import { User } from "../entities/user";


export const db = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [User],
});