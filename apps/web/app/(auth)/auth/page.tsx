"use client"

import { authSchema, authSchemaType } from "@/schema";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CInput } from "@/components/shared/cinput";

const AuthPage = () => {
    const [isLogin, useIsLogin] = useState(true);
    const { handleSubmit, register, formState: { errors } } = useForm<authSchemaType>({
        resolver: zodResolver(authSchema)
    })


    const submitHandler = (data: authSchemaType) => {
        console.log(data)
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <form onSubmit={handleSubmit(submitHandler)} className="w-[18rem]">
                    <div className="mb-2">
                        <p className="tracking-[0.3rem] font-semibold text-stone-700 text-center">{isLogin ? "LOGIN" : "REGISTER"}</p>
                    </div>

                    <div className="mb-1.5">
                        <CInput placeholder="Enter email" inputType="text" variant="auth" name="email" register={register} errors={errors} />
                    </div>

                    <div className="mb-2.5">
                        <CInput placeholder="Enter password" inputType="text" variant="auth" name="password" fieldType="password" register={register} errors={errors} />
                    </div>

                    <div>
                        {isLogin && <p className="text-xs underline hover:cursor-pointer">Forgot password?</p>}
                    </div>

                </form>
            </div>
        </div>
    )
}


export default AuthPage;