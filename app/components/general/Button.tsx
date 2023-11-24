import { IconType } from "react-icons";

interface ButtonProps {
    text: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    small?: boolean
    //icon?: IconType
    disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled }) => {
    return (
        <button className={`rounded-lg ${outline ? "border text-black" : "bg-black text-white"}`} onClick={onClick}>
            {text}
        </button>

    )
}

export default Button
