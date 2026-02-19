import { Hono } from "hono";
import { createRoutineController } from "../controller";




export const routineRoutes = new Hono();

routineRoutes.post("/create-routine", createRoutineController)