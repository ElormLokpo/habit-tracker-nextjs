
import { hash, compare } from "bcrypt";
import {createTransport} from "nodemailer";


export const hashPassword = async (password: string) => await hash(password, 10);
export const comparePassword = async (passwordHash: string, password: string) => await compare(password, passwordHash)


export function generateResetCode() {
  return Number(Math.floor(100000 + Math.random() * 900000).toString())
}



export const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
