import { IconType } from "react-icons";
import React from "react";

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    small?: boolean;
    //icon?: IconType;
    disabled?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={`rounded-lg p-3 ${small ? "w-[250px]" : "w-full"} ${outline ? "border text-black" : "bg-black text-white"}`} onClick={onClick}>
            {text}

        </button>
    );
};

export default Button;
