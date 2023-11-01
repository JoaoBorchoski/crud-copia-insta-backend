import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import { AppError } from "../../erros";
import { iCreatePost, iPostRepo } from "../../interfaces/posts.interface";

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