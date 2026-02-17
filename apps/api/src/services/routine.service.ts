import { HTTPException } from "hono/http-exception";
import { db } from "..";
import { CreateRoutineDto } from "../dtos/routine.dto";
import { HabitModel, RoutineModel } from "../models";

export const createRoutineService = async (routineData: CreateRoutineDto) => {

    const { habits, ...routine } = routineData;

    return db.transaction(async (tx) => {
        const [createdRoutine] = await tx.insert(RoutineModel).values(routine).returning({ id: RoutineModel.id });

        for (const habit of habits) {
            try {
                const newHabit = {
                    habitName: habit,
                    routine: createdRoutine.id
                }

                await tx.insert(HabitModel).values(newHabit)
            } catch (e) {
                throw new HTTPException(500, { message: "Error adding habits" })
            }
        }


    });
}   