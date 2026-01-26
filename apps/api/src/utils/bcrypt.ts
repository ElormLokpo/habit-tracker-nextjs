import { hash, compare } from "bcrypt";


export const hashPassword = async (password: string) => await hash(password, 10);
export const comparePassword = async (passwordHash: string, password: string) => await compare(password, passwordHash)