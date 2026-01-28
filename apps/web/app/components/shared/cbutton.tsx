import { cn } from "@/app/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ReactElement } from "react"


interface IButtonProps extends VariantProps<typeof buttonVariants> {
    className?: string,
    type?: "submit" | "reset" | "button",
    icon?: ReactElement,
    label?: string

}


const buttonVariants = cva("hover:cursor-pointer", {
    variants: {
        variant: {
            auth: "bg-black w-full text-white py-3.5 rounded-lg hover:bg-stone-800"
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
    label }: IButtonProps) => {

    return <button
        type={type}
        className={cn(buttonVariants({ variant }), className,)}
    >
        {icon && icon}{label && label}
    </button>
}