import { z } from "zod";

const createUserSchema = z.object({
    name: z.string().max(127),
    email: z.string().email().max(127),
    password: z.string().max(255),
    avatar: z
        .string()
        .nullable()
        .transform((av) => {
            return (
                av ??
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            );
        }),
});

const returnUserSchema = createUserSchema
    .extend({
        id: z.number(),
    })
    .omit({ password: true });

const updateUserSchema = createUserSchema.partial();

const multipleUserSchema = returnUserSchema.array();

export {
    createUserSchema,
    returnUserSchema,
    updateUserSchema,
    multipleUserSchema,
};
