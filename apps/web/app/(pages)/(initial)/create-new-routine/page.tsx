"use client"
import { CButton } from "@/app/components/shared/cbutton";
import { CInput } from "@/app/components/shared/cinput"
import { useForm } from "react-hook-form"
import { IoIosAdd, IoMdTrash } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { Dispatch, SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { routineSchema, routineSchemaType } from "../../../../../../packages/types";
import { useCreateRoutineHook } from "@/app/hooks/routineHook";
import { useGetAuthUser } from "@/app/hooks/authHook";

export default function CreateNewRoutinePage() {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: zodResolver(routineSchema)
    })
    const [habitsArr, setHabitsArr] = useState<string[]>([])



    const { mutate: createRoutine, isPending } = useCreateRoutineHook();

    const { id } = useGetAuthUser();

    const handleSubmitRoutine = (data: routineSchemaType) => {

        const finalData = { ...data, habits: habitsArr, user: id }

        createRoutine(finalData)
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
                        <HabitsComponent isPending={isPending} habitsArr={habitsArr} setHabitsArr={setHabitsArr} />
                    </>

                    <div className="flex">
                        <CButton isDisabled={habitsArr.length == 0} type="submit" className="gap-2" icon={<FaCheck />} variant={"standard"} isLoading={isPending} loadingText="Creating routine..." label="Create routine" />
                    </div>

                </form>

            </div>

        </div>
    )
}



interface IHabitsProps {
    habitsArr: string[],
    setHabitsArr: Dispatch<SetStateAction<string[]>>,
    isPending: boolean
}

const HabitsComponent = ({ habitsArr, setHabitsArr, isPending }: IHabitsProps) => {
    const [currentHabit, setcurrentHabit] = useState<string>("")



    const handleAddHabit = () => {
        if (currentHabit) {
            setHabitsArr((prev: string[]) => ([...prev, currentHabit]))
            setcurrentHabit("")
        }
    }

    const handleDeleteHabit = (key: number) => {
        setHabitsArr((prev: string[]) => ([...prev.slice(0, key), ...prev.slice(key + 1)]))
    }

    const handleClear = () => {
        setHabitsArr([])
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
                        <div className="col-span-1 pt-2"><CButton isDisabled={!currentHabit} handler={handleAddHabit} icon={<IoIosAdd />} variant={"outline"} /></div>
                    </div>

                    {habitsArr.length > 1 && <div className="mb-2 flex justify-end">
                        <button onClick={handleClear} className="text-xs hover:cursor-pointer">Clear</button>
                    </div>}

                    <div>
                        {
                            habitsArr.map((item, key) => <div key={key} className="">

                                <div key={key} className="rounded-lg border-2 border-stone-200 py-2 p-2 mb-2 text-xs flex justify-between items-center">

                                    <div>{item}</div>
                                    <div className=""><CButton handler={() => handleDeleteHabit(key)} className="border-0 text-red-400 hover:bg-white text-lg" icon={<IoMdTrash />} variant={"outline"} /></div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}