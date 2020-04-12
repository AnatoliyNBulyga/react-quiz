import React from "react";
import c from './Button.module.css';

const Button = (props) => {
    const cls = [
        c.button,
        c[props.type]
    ]
    return (
        <button
            className={cls.join(' ')}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}
export default Button;