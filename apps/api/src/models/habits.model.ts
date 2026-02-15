import { pgTable, varchar, uuid, integer } from "drizzle-orm/pg-core";
import { RoutineModel } from "./routine.model";
import { timestamps } from "./timestamps";




export const HabitModel = pgTable("habits", {
    id: uuid().defaultRandom().primaryKey(),
    habitName: varchar("habit_Name"),
    daysConsistent: integer("days_consistent").default(0),
    daysMissed: integer("days_missed").default(0),
    routine: uuid().references(() => RoutineModel.id).notNull(),
    ...timestamps
})