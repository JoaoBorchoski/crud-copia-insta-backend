import { z } from "zod";
import { Repository } from "typeorm";
import { createPostSchema, returnPostSchema, updatePostSchema } from "../schemas/post.schema";
import Post from "../entities/posts.entity";

type iCreatePost = z.infer<typeof createPostSchema>;
type iReturnPost = z.infer<typeof returnPostSchema>;
type iUpdatePost = z.infer<typeof updatePostSchema>;
type iPostRepo = Repository<Post>;



export type { iCreatePost, iReturnPost, iUpdatePost, iPostRepo }