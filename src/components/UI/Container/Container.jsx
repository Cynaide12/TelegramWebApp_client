import React from "react";
import style from "./Container.module.css"

const Container = ({ ClassName, children }) => {
    return <div className={`${style.container} ${ClassName || ''}`}>{children}</div>
}

export default Container