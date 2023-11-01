import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./erros";
import cors from "cors";

import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import { postRoutes } from "./routes/posts.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/posts", postRoutes);

app.use(handleErros);

export default app;
