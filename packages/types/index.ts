import { z } from "zod"


export const authSchema = z.object({
  email: z.email().min(1, { message: "Username is a required field." }),
  password: z.string().min(1, { message: "Password is a required field" })
})


export const emailSchema = authSchema.omit({ password: true })

export type authSchemaType = z.infer<typeof authSchema>;


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
