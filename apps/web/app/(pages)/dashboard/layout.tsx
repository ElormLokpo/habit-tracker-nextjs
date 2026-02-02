import { ReactNode } from "react";



export default function DashobardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="px-[30rem] py-[5rem] h-screen bg-stone-100">
            {children}
        </div>
    )
}