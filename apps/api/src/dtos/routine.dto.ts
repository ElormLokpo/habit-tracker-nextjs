import { routineSchemaType } from "../../../../packages/types";


export interface CreateRoutineDto {
    routineName:string,
    startDate:string,
    endDate:string,
    user:string;
    habits: string[]
}