"use client"
import { useGetAuthUser } from "@/app/hooks/authHook";
import { DashboardNav } from "./(components)/nav";
import { emailTrim } from "@/app/lib/utils";



export default function DashboardPage() {

    const { email: userEmail } = useGetAuthUser();

    return (
        <div>
            <div className="flex items-center justify-center mb-15">
                <DashboardNav />
            </div>


            <div className="mb-4 text-sm">
                <div className="text-xs">Hello, <span className="font-semibold">{emailTrim(userEmail)}</span></div>
                <div className="text-stone-600">Your daily habits are synced and ready.</div>
            </div>


            <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="">
                    <MetricsComponent />
                </div>
                <div className="bg-white rounded-lg">
                    b
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="h-[20rem] bg-white rounded-lg">

                </div>
                <div className="bg-white rounded-lg">
                    <div>Habits</div>
                </div>
            </div>
        </div>
    )
}



const MetricsComponent = () => {
    const rootCardStyle = "col-span-2 bg-white rounded-lg p-2"

    return (
        <div className="h-[15rem]">
            <div className="grid grid-cols-3 gap-2 h-[15rem]">
                <div className={`${rootCardStyle}`}>s</div>

                <div className="col-span-1 grid gap-2">
                    {[1, 2].map((_i, key) => <div className={`${rootCardStyle}`} key={key}>b</div>)}
                </div>
            </div>
        </div>

    )
}