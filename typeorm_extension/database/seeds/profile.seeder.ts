import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Profile } from '../../schemas';

export default class ProfileSeeder implements Seeder {
    /**
     * Track seeder execution.
     *
     * Default: false
     */
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository(Profile);

        // ---------------------------------------------------

        const profileFactory = await factoryManager.get(Profile);
        // save 1 factory generated entity, to the database
        await profileFactory.save();

        // save 5 factory generated entities, to the database
        await profileFactory.saveMany(5);
    }
}
