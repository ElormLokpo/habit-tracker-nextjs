import { cn } from "@/app/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ReactElement } from "react"

interface IButtonProps extends VariantProps<typeof buttonVariants> {
    className?: string,
    type?: "submit" | "reset" | "button",
    icon?: ReactElement,
    label?: string,
    isDisabled?: boolean,
    isLoading?: boolean,
    loadingText?: string, 
    handler?: ()=>void

}


const buttonVariants = cva("hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-80", {
    variants: {
        variant: {
            auth: "bg-black w-full flex  items-center justify-center text-white py-3.5 rounded-lg hover:bg-stone-800 ",
            outline: "border-2 flex  items-center justify-center border-black w-full text-black py-1.5 rounded-lg hover:bg-stone-100",
            standard: "bg-black w-auto flex  items-center justify-center text-white py-1.5 px-3 rounded-sm hover:bg-stone-800 ",


        }
    },
    defaultVariants: {
        variant: "auth"
    }
}
)


export const CButton = ({
    className,
    type = "button",
    variant,
    icon,
    label,
    isDisabled,
    isLoading,
    loadingText,
    handler
}: IButtonProps) => {

    return <button
        type={type}
        disabled={isLoading || isDisabled}
        className={cn(buttonVariants({ variant }), className,)}
        onClick={handler}
    >
        {icon && icon}{isLoading ? loadingText : (label && label)}
    </button>
}