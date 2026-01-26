import { Hono } from "hono";
import { registerController } from "../controller"

export const authRoutes = new Hono();


authRoutes.post("register", registerController)