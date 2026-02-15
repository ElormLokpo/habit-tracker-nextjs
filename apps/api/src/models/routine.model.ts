import { pgTable, varchar, date, uuid } from "drizzle-orm/pg-core"
import { UserModel } from "./users.model"
import { timestamps } from "./timestamps"


export const RoutineModel = pgTable("routines", {
    id: uuid().defaultRandom().primaryKey(),
    routineName: varchar("routine_name").notNull(),
    startDate: date().notNull(),
    endDate: date().notNull(),
    user: uuid().references(() => UserModel.id).notNull(),

    ...timestamps
})