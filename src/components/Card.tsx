import type { ReactNode } from "react";
import { cn } from "../utils/helpers";

interface CardProps {
    children: ReactNode,
    className?: string,
}

const Card = ({children, className}: CardProps) => {
    return (
        <div className={cn("p-[30px] bg-[#262932] border border-[#374558] rounded-[15px] shadow-[1px_1px_2px_1px_rgba(29,28,28,0.08)]", className)}>
            {children}
        </div>
    )
}

export default Card;