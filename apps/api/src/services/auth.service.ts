import { IAuthDto } from "../dtos/auth.dto";
import { UserModel } from "../models";
import { db } from "..";
import { eq } from "drizzle-orm";
import { HTTPException } from "hono/http-exception"
import { STATUS_CODES } from "../../../../packages/types/index"
import { comparePassword, generateResetCode, hashPassword, sendOtpEmail } from "../utils";
import { generateToken } from "../utils/jwt";
import { EmailCodeModel } from "../models/password.resets";


export const findUserByEmail = async (email: string) => await db.select().from(UserModel).where(eq(UserModel.email, email)).limit(1);



export const registerUserService = async ({ email, password }: IAuthDto) => {

    if ((await findUserByEmail(email)).length >= 1) {
        throw new HTTPException(STATUS_CODES.CONFLICT, { message: "User already exists." });
    }


    const finalauthData = { email, passwordHash: await hashPassword(password) as string };

    try {
        await db.insert(UserModel).values(finalauthData);
    } catch (e) {
        console.error("Trouble insertintg into database", e)
    }

    return await generateToken({ email });

}


export const loginUserService = async ({ email, password }: IAuthDto) => {
    const foundUser = await findUserByEmail(email);

    if (foundUser.length == 0) {
        throw new HTTPException(STATUS_CODES.NOT_FOUND, { message: "User does not exist." });

    }

    if (!await comparePassword(foundUser[0].passwordHash, password)) {
        throw new HTTPException(STATUS_CODES.UNAUTHORIZED, { message: "Incorrect password." });
    }

    return await generateToken({ email });

}

export const initiateResetPasswordService = async (email: string) => {
    const foundUser = await findUserByEmail(email);

    if (foundUser.length == 0) {
        throw new HTTPException(STATUS_CODES.NOT_FOUND, { message: "User does not exist." });

    }

    const resetCode = generateResetCode();
    const expiration = 900000

    try {

        await sendOtpEmail(email, `${resetCode}`);
    } catch (e) {
        console.log("email errorrr", e)
        throw new HTTPException(STATUS_CODES.SERVICE_UNAVAILABLE, { message: "Email service unavailable" })
    }

    await db.insert(EmailCodeModel).values({ email, expiration, code: resetCode });

    return true;
}