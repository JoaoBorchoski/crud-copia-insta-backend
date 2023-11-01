import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import { iPostRepo } from "../../interfaces/posts.interface";

const listPostsService = async () => {
    const postRepo: iPostRepo = AppDataSource.getRepository(Post);

    const result = postRepo.find({
        relations: {
            user: true,
        },
    });

    return result;
};

export { listPostsService };
