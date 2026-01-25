import { ReactNode } from "react"



export const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen bg-stone-50 grid grid-cols-3">
            <div className="col-span-1">
                <div className="p-3"> 
                    <p className="font-semibold">TRCKR</p>
                </div>
                {children} 
            </div>
            <div style={{
                background:`url('./auth.jpeg')`
            }} className="col-span-2 bg-red-500"></div>
        </div>
    )
}

export default AuthLayout;