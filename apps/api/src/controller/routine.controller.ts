import { Context } from "hono";
import { createRoutineService } from "../services";
import { CreateRoutineDto } from "../dtos/routine.dto";


export const createRoutineController = async (c: Context) => {
    await createRoutineService(await c.req.json() as CreateRoutineDto);

    return c.json({message:"Routine created successfully."})
}