import { setSeederFactory } from 'typeorm-extension';
import { Post } from '../entities/post';

export default setSeederFactory(Post, (faker) => {
    const post = new Post();
    post.title = faker.lorem.words({ min: 3, max: 5 });
    post.desc = post.title + ":\n" + faker.lorem.sentence({ min: 5, max: 10 });


    return post;
})
