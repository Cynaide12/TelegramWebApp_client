import React from "react";
import style from "./Section.module.css"

const Section = ({ ClassName, children }) => {
    return <section className={`${style.section} ${ClassName || ''}`}>
        {children}
    </section>
}

export default Section