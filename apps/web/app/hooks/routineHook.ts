import { useMutation } from "@tanstack/react-query"
import { routineSchemaType } from "../../../../packages/types";
import { axiosClient } from "../api";
import { BACKEND_URLS } from "../constants";
import { toast } from "sonner";



interface ICreateRoutine extends routineSchemaType {
    habits: string[]
}

export const useCreateRoutineHook = () => {

    return useMutation({
        mutationFn: (data: ICreateRoutine) => axiosClient.post(BACKEND_URLS.ROUTINE.CREATE, data),
        onSuccess: () => {
            toast.success("Routine created successfully")
        },
        onError: (error) => {
            console.log("Error", error)
        }
    });
}