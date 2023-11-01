import { z } from "zod";
import { returnUserSchema } from "./user.schemas";

const createPostSchema = z.object({
    imageURL: z.string(),
    description: z.string(),
});

const returnPostSchema = createPostSchema.extend({
    id: z.number(),
    created_at: z.string(),
    user: returnUserSchema,
});

export { createPostSchema, returnPostSchema };
