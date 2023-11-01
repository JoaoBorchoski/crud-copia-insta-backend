import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import User from "../../entities/users.entity";
import { AppError } from "../../erros";
import { iCreatePost, iPostRepo, iUpdatePost } from "../../interfaces/posts.interface";
import { iUserRepo } from "../../interfaces/users.interface";
import { returnPostSchema } from "../../schemas/post.schema";

const updatePostService = async (postID: number, postData: iCreatePost) =>  {
    const postRepo: iPostRepo = AppDataSource.getRepository(Post)
    
    const oldData = await postRepo.findOneBy({
        id: postID
    })

    if(!oldData){
        throw new AppError('Post not found', 404)
    }

    const newData = postRepo.create({
        ...oldData,
        ...postData
    })

    await postRepo.save(newData)

    return newData
}
export { updatePostService }