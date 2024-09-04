
import React from "react"
import style from "./NavPanel.module.css"
import { useTelegram } from "../../../hooks/useTelegram"
const NavPanel = () => {
    const { user } = useTelegram()
    return (
        <>

            <div className={style.hello_container}>
                <p>Привет, {user.first_name}</p>
            </div>
                <nav className={style.nav_container}>
                    <div className={style.links_container}>
                        <span>погода</span>
                        <span>история</span>
                        <span>FAQ</span>
                    </div>
                </nav>
        </>
    )
}
export default NavPanel