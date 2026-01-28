"use client"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import { persistedStore, store } from "@/app/redux"
import { ReactNode } from "react"


export const ReduxProvider = ({ children }: { children: ReactNode }) => <Provider store={store}>
    <PersistGate persistor={persistedStore}>{children}</PersistGate>
</Provider>



