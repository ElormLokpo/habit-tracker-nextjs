import { ReactNode } from "react"
import { ReduxProvider } from "./redux-provider"
import { Toaster } from "sonner"
import { QueryProvider } from "./query-provider"


export const RootProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <QueryProvider>
                <ReduxProvider>
                    <Toaster />
                    {children}
                </ReduxProvider>
            </QueryProvider>

        </>
    )
}