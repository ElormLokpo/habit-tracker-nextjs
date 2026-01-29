import { registerUserService, loginUserService } from "../services"
import { Context } from "hono"



export const registerController = async (c: Context) => {

    //Dont' forget to validate with zod
    const { email, password } = await c.req.json()
    const authResponse = await registerUserService({ email, password })


    return c.json({ token: authResponse })

}


export const loginController = async (c: Context) => {
    const { email, password } = await c.req.json()
    const authResponse = await loginUserService({ email, password })


    return c.json({ token: authResponse })
}