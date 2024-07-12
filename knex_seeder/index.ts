import { Knex, knex } from 'knex';
import config from './knexfile';



interface User {
    id: number;
    age: number;
    name: string;
    active: boolean;
    departmentId: number;
}


const knexInstance = knex(config);



const main = async () => {
    const users = await knexInstance<User>('users').select('id', 'age');
}

main();
