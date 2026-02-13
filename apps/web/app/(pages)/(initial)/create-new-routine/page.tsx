"use client"
import { CButton } from "@/app/components/shared/cbutton";
import { CInput } from "@/app/components/shared/cinput"
import { useForm } from "react-hook-form"
import { IoIosAdd, IoMdTrash } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { Dispatch, SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { routineSchema, routineSchemaType } from "../../../../../../packages/types";

export default function CreateNewRoutinePage() {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: zodResolver(routineSchema)
    })
    const [habitsArr, setHabitsArr] = useState<string[]>([])

    const isPending = false;

    const handleSubmitRoutine = (data: routineSchemaType) => {

        const finalData = { ...data, habits: habitsArr }
        console.log(finalData)
    }

    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="h-screen bg-stone-100 flex justify-center items-center text-xs">
            <div>
                <div className="flex gap-2 mb-3">
                    <div className="text-sm font-semibold">Create A Routine </div>
                    <div className="text-sm text-stone-700">{`>`} Enter routine details below</div>
                </div>
                <form onSubmit={handleSubmit(handleSubmitRoutine)}>


                    <div className="bg-white rounded-lg p-2 w-[35rem] mb-4">
                        <div className="grid grid-cols-4 gap-3">
                            <div className="mb-1.5 col-span-2">
                                <CInput isDisabled={isPending} label="Routine Name:" placeholder="Enter routine name" inputType="text" name="routineName" register={register} errors={errors} />
                            </div>

                            <div className="mb-1.5">
                                <CInput min={today} fieldType="date" isDisabled={isPending} label="Start Date:" placeholder="Pick start date" inputType="text" name="startDate" register={register} errors={errors} />
                            </div> <div className="mb-1.5">
                                <CInput min={today} fieldType="date" isDisabled={isPending} label="End Date:" placeholder="Pick end date" inputType="text" name="endDate" register={register} errors={errors} />
                            </div>
                        </div>


                    </div>


                    <>
                        <HabitsComponent habitsArr={habitsArr} setHabitsArr={setHabitsArr} />
                    </>

                    <div className="flex">
                        <CButton type="submit" className="gap-2" icon={<FaCheck />} variant={"standard"} label="Create routine" />
                    </div>

                </form>

            </div>

        </div>
    )
}



interface IHabitsProps {
    habitsArr: string[],
    setHabitsArr: Dispatch<SetStateAction<string[]>>
}

const HabitsComponent = ({ habitsArr, setHabitsArr }: IHabitsProps) => {
    const [currentHabit, setcurrentHabit] = useState<string>("")
    const isPending = false;


    const handleAddHabit = () => {
        setHabitsArr((prev: string[]) => ([...prev, currentHabit]))
        setcurrentHabit("")
    }

    const handleDeleteHabit = (key: number) => {
        setHabitsArr((prev: string[]) => ([...prev.slice(0, key), ...prev.slice(key + 1)]))
    }

    return (
        <>
            <div className="mb-2">
                <p className="font-semibold">Add Habbits</p>
            </div>

            <div className="bg-white rounded-lg mb-4 p-2 w-[35rem]">

                <div className="">


                    <div className="grid grid-cols-12 gap-1 items-center mb-5">
                        <div className="mb-1.5 col-span-11">
                            <CInput value={currentHabit} handleChange={(e) => setcurrentHabit(e.target.value)} isDisabled={isPending} label="Habit Name:" placeholder="Enter routine name" inputType="text" name="routineName" />
                        </div>
                        <div className="col-span-1 pt-2"><CButton handler={handleAddHabit} icon={<IoIosAdd />} variant={"outline"} /></div>
                    </div>

                    <div>
                        {
                            habitsArr.map((item, key) => <div key={key} className="grid grid-cols-12">

                                <div key={key} className="rounded-lg border-2 border-stone-200 py-4 p-3 mb-2 text-xs col-span-11">

                                    <div>{item}</div>
                                </div>
                                <div className="col-span-1 pt-2"><CButton handler={() => handleDeleteHabit(key)} className="border-0 text-red-400 hover:bg-white text-lg" icon={<IoMdTrash />} variant={"outline"} /></div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}