import { IconType } from "react-icons";

interface ButtonProps {
    text: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    small?: boolean
    icon: IconType
    disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled, icon: Icon }) => {
    return (
        <div>
            <button onClick={() => { }}>Button</button>
        </div>
    )
}

export default Button
