
import { relations } from "drizzle-orm"
import { UserModel } from "./users.model"
import { RoutineModel } from "./routine.model"
import { HabitModel } from "./habits.model"


export const userRoutineRelations = relations(UserModel, ({ many }) => ({
    routine: many(RoutineModel)
}))

export const routineUserRelations = relations(RoutineModel, ({ one }) => ({
    user: one(UserModel, {
        fields: [RoutineModel.user],
        references: [UserModel.id]
    })
}))


export const routineHabitRelations = relations(RoutineModel, ({ many }) => ({
    habit: many(HabitModel)
}));


export const habitRoutineRelations = relations(HabitModel, ({ one }) => ({
    routine: one(RoutineModel, {
        fields: [HabitModel.routine],
        references: [RoutineModel.id],
    })
}))