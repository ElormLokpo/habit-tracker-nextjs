import {pgTable, varchar, uuid} from "drizzle-orm/pg-core"
import { timestamps } from "./timestamps"


export const UserModel = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    email: varchar().unique().notNull(), 
    passwordHash: varchar().notNull(),

    ...timestamps
})