import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import {
    createPostController,
    listPostController,
    updatePostController,
} from "../controllers/post.controller";
import { createPostSchema, updatePostSchema } from "../schemas/post.schema";

const postRoutes: Router = Router();

postRoutes.post("/:id", validateData(createPostSchema), createPostController);
postRoutes.patch("/:id", validateData(updatePostSchema), updatePostController);
postRoutes.get("", listPostController);

export { postRoutes };
