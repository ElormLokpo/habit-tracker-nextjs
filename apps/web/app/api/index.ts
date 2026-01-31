import axios, { AxiosError } from "axios"


export const axiosClient = axios.create({
    baseURL: "http://localhost:5000"
})


axiosClient.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
        if (error.response) {
            console.log(error.response)

            throw {
                status: error.response.status,
                message: error.response.data
            }
        }

        throw {
            status: 500,
            message: "Error reaching server!"
        }
    }
)