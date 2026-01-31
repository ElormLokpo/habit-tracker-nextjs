"use client"

import { authSchema, authSchemaType } from "../../../../../../packages/types";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CInput } from "@/app/components/shared/cinput";
import { CButton } from "@/app/components/shared/cbutton";
import { useLogin, useRegister } from "@/app/hooks/authHook";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { handleSubmit, register, formState: { errors } } = useForm<authSchemaType>({
        resolver: zodResolver(authSchema)
    })


    const { mutate: registerUser, isPending, isError, error } = useRegister()
    const { mutate: loginUser, isPending: isLoginPending, isError: isLoginError, error: loginError } = useLogin()


    console.log('ERRROR', loginError)

    const submitHandler = (data: authSchemaType) => {
        if (isLogin) {
            loginUser(data)
        } else {
            console.log("this run")
            registerUser(data);
        }

        console.log(data, isLogin)
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <form onSubmit={handleSubmit(submitHandler)} className="w-[18rem]">
                    <div className="mb-2">
                        <p className="tracking-[0.3rem] font-semibold text-stone-700 text-center">{isLogin ? "LOGIN" : "REGISTER"}</p>
                    </div>

                    <div className="mb-1.5">
                        <CInput isError={isLogin ? isLoginError : isError} isDisabled={isPending || isLoginPending} placeholder="Enter email" inputType="text" variant="auth" name="email" register={register} errors={errors} />
                    </div>

                    <div className="mb-2.5">
                        <CInput isError={isLogin ? isLoginError : isError} isDisabled={isPending || isLoginPending} placeholder="Enter password" inputType="text" variant="auth" name="password" fieldType="password" register={register} errors={errors} />
                    </div>

                    <div className="mb-4">
                        {isLogin && <p className="text-xs underline hover:cursor-pointer">Forgot password?</p>}
                    </div>


                    <div className="mb-4">
                        <p className="text-xs text-red-400 hover:cursor-pointer">{isLogin ? loginError?.message : error?.message}</p>
                    </div>

                    <div className="mb-2">
                        <CButton isLoading={isPending || isLoginPending} loadingText={isLogin ? "Loggin In" : "Creating account"} type="submit" label={isLogin ? "Login" : "Register"} />
                    </div>

                    <div className="mb-4 flex items-center justify-center">
                        <button type="button" onClick={
                            () => {
                                setIsLogin(!isLogin)
                            }
                        } className="text-xs text-center hover:cursor-pointer">
                            {isLogin ? `Don't have an account? Create one.` : "Already have an account? Login"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}


export default AuthPage;