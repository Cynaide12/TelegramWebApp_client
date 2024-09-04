import React from "react";
import style from "./Button.module.css"

const Button = ({ ClassName, Type, children }) => {
    const type = Type ? Type : "button"
    return <button className={`${style.button} ${ClassName || ''}`} type={type}>{children}</button>
}

export default Button