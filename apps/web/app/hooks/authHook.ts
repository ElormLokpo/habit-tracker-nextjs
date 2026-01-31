import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux"
import { useMutation } from "@tanstack/react-query"
import { axiosClient } from "../api";
import { authSchemaType } from "../../../../packages/types"
import { toast } from "sonner"
import { BACKEND_URLS } from "../constants"
import { storeToken } from "../redux/slices/auth.slice";

interface IAuthResponse {
    data: {
        token: string
    }
}

const successHandler = (dispatch: AppDispatch, isLogin: boolean, data: IAuthResponse) => {
    toast.success(isLogin ? "Login successful" : "Account created successfully")

    console.log(data)
    dispatch(storeToken(data?.data.token))
}

export const useRegister = () => {
    const dispatch: AppDispatch = useDispatch();

    return useMutation({
        mutationFn: async (data: authSchemaType) => await axiosClient.post(BACKEND_URLS.REGISTER, data),
        onSuccess: (data: IAuthResponse) => successHandler(dispatch, false, data),
        onError: (error) => toast.error(error.message)
    });
}

export const useLogin = () => {
    const dispatch: AppDispatch = useDispatch();


    return useMutation({
        mutationFn: async (data: authSchemaType) => await axiosClient.post(BACKEND_URLS.LOGIN, data),
        onSuccess: (data: unknown) => successHandler(dispatch, true, data),
        onError: (error) => toast.error(error.message)
    })
}