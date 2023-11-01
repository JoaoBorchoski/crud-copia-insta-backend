import { Request, Response } from "express";
import { iCreateUser } from "../interfaces/users.interface";
import createUserService from "../services/users/createUser.service";
import { retriveUserService } from "../services/users/retriveUser.service";
import { listUsersService } from "../services/users/listUsers.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: iCreateUser = req.body;

    const newUser = await createUserService(userData);

    return res.status(201).json(newUser);
};

const retriveUserController = async (req: Request, res: Response) => {
    const userID: number = +req.params.id;
    const user = await retriveUserService(userID);

    return res.status(200).json(user);
};

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();

    return res.status(200).json(users);
};

export { createUserController, retriveUserController, listUsersController };
