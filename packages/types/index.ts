import { z } from "zod"


export const authSchema = z.object({
  email: z.email().min(1, { message: "Username is a required field." }),
  password: z.string().min(1, { message: "Password is a required field" })
})


export const emailSchema = authSchema.omit({ password: true })

export type authSchemaType = z.infer<typeof authSchema>;



export const routineSchema = z.object({
  routineName: z.string().min(1, { message: "Routine name is required" }),
  startDate: z.coerce.date().refine((date) => {
    let today = new Date();
    today.setHours(0, 0, 0, 0)

    return date >= today;
  }, { message: "Must be future date." }),
  endDate: z.coerce.date().refine((date) => {
    let today = new Date();
    today.setHours(0, 0, 0, 0)

    return date >= today;
  }, { message: "Must be future date." }),
})

export type routineSchemaType = z.infer<typeof routineSchema>


export enum STATUS_CODES {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,

  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}
