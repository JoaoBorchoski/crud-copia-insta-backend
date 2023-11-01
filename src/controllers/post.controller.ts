import { Request, Response } from "express";
import { createPostService } from "../services/posts/createPost.service";
import { listPostsService } from "../services/posts/listPosts.service";

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

export { createPostController, listPostController };
