import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createUserSchema } from "../schemas/user.schemas";
import {
    createUserController,
    listUsersController,
    retriveUserController,
} from "../controllers/users.controllers";

const usersRoutes: Router = Router();

usersRoutes.post("", validateData(createUserSchema), createUserController);
usersRoutes.get("/:id", retriveUserController);
usersRoutes.get("", listUsersController);

export default usersRoutes;
