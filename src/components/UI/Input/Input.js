import React from "react";
import c from "./Input.module.css";

function isInvalid({valid, touched, shouldValidate}) {
  return  !valid && shouldValidate && touched;
}
const Input = (props) => {
    const inputType = props.type || 'text';
    const cls = [c.input];
    const htmlFor = `${inputType}-${Math.random()}`;
    if (isInvalid(props)) {
        cls.push(c.invalid);
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props) && <span>{props.errorMessage || 'Введите верное значение'}</span>
            }

        </div>
    )
}
export default Input;