import { createSlice } from "@reduxjs/toolkit";

interface IAuthInitialState {
    token: string
}

const initialState: IAuthInitialState = {
    token: ""
}


export const AuthSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        storeToken: (state, action) => {
            state.token = action.payload
        },
        clearToken: (state, _action) => {
            state.token = ""
        }
    }
})


export const { storeToken, clearToken } = AuthSlice.actions;
export default AuthSlice.reducer;