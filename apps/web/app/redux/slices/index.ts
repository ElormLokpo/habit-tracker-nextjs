import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "./auth.slice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


export const combinedReducers = combineReducers({
    auth: authSlice
})


const config = {
    key: "root",
    storage
}


export const persistedReducer = persistReducer(config, combinedReducers)