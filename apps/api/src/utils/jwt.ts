import { sign, decode } from "hono/jwt"

const secret = process.env.TOKEN_SECRET!;
export const generateToken = async (payload: { email: string, id: string }) => await sign(payload, secret)
export const verifyToken = async (token: string) => await decode(token)