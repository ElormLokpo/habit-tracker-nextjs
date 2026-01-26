import * as t from "drizzle-orm/pg-core"
import { timestamps } from "./timestamps"


export const UserModel = t.pgTable("users", {
    id: t.uuid().primaryKey().defaultRandom(),
    email: t.varchar().unique().notNull(), 
    passwordHash: t.varchar().notNull(),

    ...timestamps
})