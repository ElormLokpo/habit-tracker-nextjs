"use client"

import { authSchema, authSchemaType } from "@/schema";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const AuthPage = () => {
    const [isLogin, useIsLogin] = useState(true);
    const {handleSubmit} = useForm<authSchemaType>({
        resolver: zodResolver(authSchema)
    })


    const submitHandler = (data: authSchemaType)=>{
        console.log(data)
    }

    return (
        <div className="h-screen bg-stone-900 text-stone-100 flex items-center justify-center">
            <form onSubmit={()=>submitHandler(handleSubmit)}>
                
            </form>
        </div>
    )
}


export default AuthPage;