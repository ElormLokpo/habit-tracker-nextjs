import { routineSchemaType } from "../../../../packages/types";


export interface CreateRoutineDto extends routineSchemaType{
    habits: string[]
}