import { IAuthDto } from "../dtos/auth.dto";
import { UserModel } from "../models";
import { db } from "..";
import { eq } from "drizzle-orm";
import { HTTPException } from "hono/http-exception"
import { STATUS_CODES } from "../../../../packages/types/index"
import { comparePassword, generateResetCode, hashPassword, transporter } from "../utils";
import { generateToken } from "../utils/jwt";
import { EmailCodeModel } from "../models/password.resets";


export const findUserByEmail = async (email: string) => await db.select().from(UserModel).where(eq(UserModel.email, email)).limit(1);

export async function sendResetEmail(email: string, code: string) {
  await transporter.sendMail({
    from: `"Support" <${process.env.SMTP_FROM}>`,
    to: email,
    subject: "Password Reset Code",
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Password Reset</h2>
        <p>Use the code below to reset your password:</p>
        <h1 style="letter-spacing: 4px;">${code}</h1>
        <p>This code expires in 15 minutes.</p>
        <p>If you didn’t request this, ignore this email.</p>
      </div>
    `,
  });
}



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

export const initialResetPassword = async (email: string) => {
    const foundUser = await findUserByEmail(email);

    if (foundUser.length == 0) {
        throw new HTTPException(STATUS_CODES.NOT_FOUND, { message: "User does not exist." });

    }

    const resetCode = generateResetCode();
    const expiration = 900000
    await sendResetEmail(email, `${resetCode}`);

    await db.insert(EmailCodeModel).values({email, expiration, code: resetCode});
}