import "dotenv/config";
import { DataSource, DataSourceOptions } from 'typeorm';
import { createDatabase, runSeeders, SeederOptions, generateMigration } from 'typeorm-extension';
import postFactory from "../database/factories/post.factory";
import userFactory from '../database/factories/user.factory';
import PostSeeder from "../database/seeds/post.seeder";
import UserSeeder from '../database/seeds/user.seeder';
import { User } from '../database/entities/user';
import { Post } from '../database/entities/post';


export const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.host,
    port: Number(process.env.port),
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    schema: process.env.schema,
    // ssl: { rejectUnauthorized: false },
    synchronize: true,

    entities: [User, Post],
    seeds: [UserSeeder, PostSeeder],
    factories: [userFactory, postFactory]
};

export const dataSource = new DataSource(options);


