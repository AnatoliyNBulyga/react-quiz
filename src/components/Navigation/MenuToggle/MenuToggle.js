import React from "react";
import c from "./MenuToggle.module.css";

const MenuToggle = (props) => {
    const cls = [
        c.menuToggle,
        'fa'
    ]
    if (props.isOpen) {
        cls.push('fa-times');
        cls.push(c.open)
    } else {
        cls.push('fa-bars')
    }
    return (
        <i className={cls.join(' ')}
           onClick={props.onToggle}
        >

        </i>
    );
}
export default MenuToggle;