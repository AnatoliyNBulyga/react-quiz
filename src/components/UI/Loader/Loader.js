import React from "react";
import c from './Loader.module.css';

const Loader = (props) => {
    return (
        <div className={c.loader_wrap}>
            <div className={c.loader}>
                <div/><div/><div/><div/><div/><div/><div/><div/>
            </div>

        </div>
    )
}

export default Loader;