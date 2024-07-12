import "dotenv/config";
import { DataSource, DataSourceOptions } from 'typeorm';
import { createDatabase, runSeeders, SeederOptions } from 'typeorm-extension';
import profileFactory from "../database/factories/profile.factory";
import userFactory from '../database/factories/user.factory';
import ProfileSeeder from "../database/seeds/profile.seeder";
import UserSeeder from '../database/seeds/user.seeder';
import { Profile, User } from '../schemas';

(async () => {
    const options: DataSourceOptions & SeederOptions = {
        type: 'postgres',
        host: process.env.host,
        port: Number(process.env.port),
        username: process.env.user,
        password: process.env.password,
        database: process.env.database,
        schema: process.env.schema,
        // ssl: { rejectUnauthorized: false },

        entities: [User],
        seeds: [UserSeeder],
        factories: [userFactory]
    };

    // Create the database with specification of the DataSource options
    await createDatabase({
        options
    });

    const dataSource = new DataSource(options);
    await dataSource.initialize();

    runSeeders(dataSource);
    // do something with the DataSource
})();
