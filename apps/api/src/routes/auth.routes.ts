import { Hono } from "hono";
import { initiateResetPasswordController, loginController, registerController } from "../controller"
import { zValidator } from "@hono/zod-validator"
import { authSchema, emailSchema } from "../../../../packages/types";

export const authRoutes = new Hono();


authRoutes.post("register", zValidator("json", authSchema), registerController)
authRoutes.post("login", zValidator("json", authSchema), loginController)
authRoutes.post("send-reset-otp", zValidator("json", emailSchema), initiateResetPasswordController)