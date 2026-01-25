import z from "zod";


export const authSchema = z.object({
    email: z.email().min(1, { message: "Username is a required field." }),
    password: z.string().min(1, { message: "Password is a required field" })
})



export type authSchemaType = z.infer<typeof authSchema>;