import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux"
import { useMutation } from "@tanstack/react-query"
import { axiosClient } from "../api";
import { authSchemaType } from "../../../../packages/types"
import { toast } from "sonner"


const successHandler = () => {
    toast.success("Register successfulsss")
}

export const useRegister = () => {
    // const dispatch: AppDispatch = useDispatch();
    console.log("Iniside use register", process.env.NEXT_PUBLIC_BACKEND_URL_DEV)

    return useMutation({
        mutationFn: async (data: authSchemaType) => await axiosClient.post(BACKEND_URLS.REGISTER, data),
        onSuccess: () => successHandler()
    });
}