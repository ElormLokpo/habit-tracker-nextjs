import { Hono } from "hono";
import { loginController, registerController } from "../controller"
import { zValidator } from "@hono/zod-validator"
import { authSchema } from "../../../../packages/types";

export const authRoutes = new Hono();


authRoutes.post("register", zValidator("json", authSchema), registerController)
authRoutes.post("login", zValidator("json", authSchema), loginController)
