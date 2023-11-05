import { ReactNode } from "react"
import "./card.css"

interface CardProps {
    children: ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="contact-card">{children}</div>
    )
}

export default Card