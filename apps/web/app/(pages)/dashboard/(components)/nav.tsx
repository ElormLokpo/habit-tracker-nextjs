"use client"



export const DashboardNav = () => {

    const navButtons = [
        {
            title: "Settings",
            action: () => { }
        },
        {
            title: "Logout",
            action: () => { }
        },
    ]

    return (
        <div className="w-[30rem] text-stone-100 bg-stone-900 rounded-2xl p-3 text-sm flex justify-between items-center">
            <div className="font-bold">
                TRACKR
            </div>
            <div className="text-xs text-stone-200">
                11:45 am
            </div>
            <div className="text-xs text-stone-200 flex gap-3">
                {
                    navButtons.map(({ title, action }, index) => <button className="hover:text-stone-300 hover:cursor-pointer" key={index} onClick={action} >{title}</button>)
                }
            </div>

        </div>
    )
}