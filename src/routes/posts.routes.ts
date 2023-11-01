import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import {
    createPostController,
    listPostController,
} from "../controllers/post.controller";
import { createPostSchema } from "../schemas/post.schema";

const postRoutes: Router = Router();

postRoutes.post("/:id", validateData(createPostSchema), createPostController);
postRoutes.get("", listPostController);

export { postRoutes };
