// import React, { FC } from "react";
// import { Link, Link } from "react-router-dom";
import { ButtonProps } from "./Button.interface";

// const STYLES = ["btn--primary", "bts-outline"];
// const SIZES = ["btn--medium", "bts--large"];

// export const Button: FC<any> = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize,
// }: ButtonProps) => {
//     const checkBtnStyle = STYLES.includes(buttonStyle)
//         ? buttonStyle
//         : STYLES[0];
//     const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
//     return (
//         <Link to="/sign-up" className="btn-mobile">
//             <button
//                 className={`btn ${checkBtnStyle} ${checkBtnSize}`}
//                 onClick={onClick}
//                 type={type}
//             >
//                 {children}
//             </button>
//         </Link>
//     );
// };

import "./Button.css";
import { Link } from "react-router-dom";
import { FC } from "react";

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
