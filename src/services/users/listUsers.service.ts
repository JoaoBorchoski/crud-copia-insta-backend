import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { AppError } from "../../erros";
import { iReturnUser, iUserRepo } from "../../interfaces/users.interface";
import {
    multipleUserSchema,
    returnUserSchema,
} from "../../schemas/user.schemas";

const listUsersService = async () => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const users = await userRepository.find({
        order: {
            id: "ASC",
        },
    });

    if (!users) {
        throw new AppError("User not exist", 409);
    }

    const newUser = multipleUserSchema.parse(users);

    return newUser;
};

export { listUsersService };
