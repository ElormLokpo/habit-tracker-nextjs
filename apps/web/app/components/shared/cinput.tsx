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
}


const inputVariants = cva(`disabled:cursor-not-allowed`, {
  variants: {
    variant: {
      auth: "w-full border-2 p-3 border-stone-600 text-xs rounded-md",
      regular: ""
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
  isError
}: InputProps<T>) => {

  const inputTypes: Record<string, ReactElement> = {
    text: (

      <div>
        {label && <p className="text-xs">{label}</p>}
        <input
          disabled={isLoading || isDisabled}
          type={fieldType}
          placeholder={placeholder}
          className={cn(inputVariants({ variant }), classname, (errors?.name || isError) && "border-red-400")}
          {...(register ? register(name) : {})}
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
