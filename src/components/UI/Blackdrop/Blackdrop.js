import React from "react";
import c from "./Blackdrop.module.css";

const BlackDrop = (props) => {
    return (
        <div className={c.blackdrop} onClick={props.onClick}></div>
    );
}
export default BlackDrop;