import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import User from "../../entities/users.entity";
import { AppError } from "../../erros";
import { iCreatePost, iPostRepo } from "../../interfaces/posts.interface";
import { iUserRepo } from "../../interfaces/users.interface";
import { returnPostSchema } from "../../schemas/post.schema";

const createPostService = async (postData: iCreatePost, userID: number) => {
    const postRepo: iPostRepo = AppDataSource.getRepository(Post);
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userID });
    if (!user) {
        throw new AppError("User not found", 409);
    }
    const post = postRepo.create({
        ...postData,
        user: user,
    });
    await postRepo.save(post);

    return returnPostSchema.parse(post);
};

export { createPostService };
