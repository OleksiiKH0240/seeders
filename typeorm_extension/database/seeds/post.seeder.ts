import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Post } from '../entities/post';

export default class PostSeeder implements Seeder {
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
        const repository = dataSource.getRepository(Post);

        // ---------------------------------------------------

        const postFactory = await factoryManager.get(Post);
        // save 1 factory generated entity, to the database
        await postFactory.save();

        // save 5 factory generated entities, to the database
        await postFactory.saveMany(5);
    }
}
