import React from "react";
import style from "./Input.module.css"
const Input = ({Placeholder, ClassName}) => {
    return(
        <input placeholder={Placeholder} className={`${style.input} ${ClassName}`}/>
    )
}

export default Input