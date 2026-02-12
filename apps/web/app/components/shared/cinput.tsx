import { cn } from "@/app/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import { ReactElement } from "react";
import { FieldValues, FieldErrors, UseFormRegister, Path } from "react-hook-form";





interface InputProps<T extends FieldValues> extends VariantProps<typeof inputVariants> {
  label?: string,
  classname?: string,
  register?: UseFormRegister<T>,
  errors?: FieldErrors<T>
  name: Path<T>,
  inputType?: string,
  fieldType?: string,
  placeholder?: string,
  isDisabled?: boolean
  isLoading?: boolean,
  isError?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string,
  value?: string
}


const inputVariants = cva(`disabled:cursor-not-allowed`, {
  variants: {
    variant: {
      auth: "w-full border-2 p-3 border-stone-600 text-xs rounded-md",
      regular: "text-xs rounded-md p-2 rounded-md border-stone-200 border-1 w-full"
    }
  },
  defaultVariants: {
    variant: "regular"
  }
})


export const CInput = <T extends FieldValues>({
  label,
  variant,
  classname,
  register,
  errors,
  name,
  inputType = "text",
  fieldType = "text",
  placeholder,
  isDisabled,
  isLoading,
  isError,
  handleChange,
  min,
  value
}: InputProps<T>) => {

  const inputTypes: Record<string, ReactElement> = {
    text: (

      <div>
        {label && <p className="text-xs mb-1 text-stone-500">{label}</p>}
        <input
          min={min}
          disabled={isLoading || isDisabled}
          type={fieldType}
          placeholder={placeholder}
          value={value}
          className={cn(inputVariants({ variant }), classname, (errors?.name || isError) && "border-red-400")}
          {...(register ? register(name) : {})}
          onChange={handleChange}
        />

        {
          errors?.[name] && <p className="text-xs text-red-400">{errors?.[name].message?.toString()}</p>
        }
      </div>
    )
  }


  return (
    <>
      {inputTypes[inputType]}
    </>
  )
}
