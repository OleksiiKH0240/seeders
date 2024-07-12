import { setSeederFactory } from 'typeorm-extension';
import { Profile, User } from '../../schemas';

export default setSeederFactory(Profile, (faker) => {
    const profile = new Profile();
    profile.avatar = faker.string.uuid();
    profile.cover = faker.string.alphanumeric();

    return profile;
})
