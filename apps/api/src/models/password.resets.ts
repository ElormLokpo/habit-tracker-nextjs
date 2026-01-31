import { pgTable, varchar, integer, uuid } from "drizzle-orm/pg-core";


export const EmailCodeModel = pgTable("emailcodes",{
    id: uuid().defaultRandom().primaryKey(),
    email: varchar(),
    expiration: integer(),
    code: integer(),
})