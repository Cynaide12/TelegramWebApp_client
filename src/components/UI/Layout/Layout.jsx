import React from "react";
import NavPanel from "../Nav/NavPanel";

const Layout = ({ children }) => {
    return (
        <>
            <NavPanel />
            <main className="main">
                {children}
            </main>
        </>
    )
}

export default Layout