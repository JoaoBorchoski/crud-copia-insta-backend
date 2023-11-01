import { Request, Response } from "express";
import { createPostService } from "../services/posts/createPost.service";
import { listPostsService } from "../services/posts/listPosts.service";
import { updatePostService } from "../services/posts/updatePost.service";

const createPostController = async (req: Request, res: Response) => {
    const postData = req.body;
    const userID: number = +req.params.id;

    const newPost = await createPostService(postData, userID);
    return res.status(201).json(newPost);
};

const listPostController = async (req: Request, res: Response) => {
    const listPosts = await listPostsService();
    return res.status(201).json(listPosts);
};

const updatePostController = async (req: Request, res: Response) => {
    const postData = req.body;
    const postID: number = +req.params.id;

    const update = await updatePostService(postID, postData)
    return res.json(update).status(200)
};


export { createPostController, listPostController, updatePostController }