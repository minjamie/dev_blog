import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./Button.interface";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const Button: FC<any> = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}: ButtonProps) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/sign-up" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
