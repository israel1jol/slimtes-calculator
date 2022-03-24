import React, { useState, useContext } from "react";
import { ModeContext } from "../Context/Mode/ModeProvider";
import { ThemeContext } from "../Context/Theme/ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import "../css/navbar.css";

const CalculatorNavbar = () => {
    const [toggled, setToggled] = useState(false);

    const { mode, changeMode } = useContext(ModeContext);

    const { theme } = useContext(ThemeContext);
    
    const toggleMenu = () => {
        const btn = document.getElementById("sliding-btn");
        const menu = document.getElementById("sliding-menu");

        if(toggled){
            btn.classList.remove("open");
            menu.classList.remove("open")
        }
        else{
            btn.classList.add("open");
            menu.classList.add("open");
        }
        setToggled(prev => !prev);
    }

    const handleChange = (str="") => {
        changeMode(str)
        toggleMenu()
    }
    return (
        <>
            <div>
                <div className="d-flex justify-content-between mx-4">
                    <div className=" navbar navbar-expand">
                        <div className={`mx-2 ${theme.components.navbar.menubar}`} id="sliding-btn" onClick={toggleMenu}></div>
                        <div className={`mx-3 ${theme.components.navbar.calType}`}>{ mode.type }</div>
                    </div>
                    <div className="d-flex jusify-content-between align-items-center">
                        <ThemeToggle />
                        <button className={`mx-2 ${theme.components.navbar.help}`}>?</button>
                    </div>
                </div>
            </div>
            <div className={`${theme.components.navbar.slidingMenu} sliding-menu`} id="sliding-menu">
                <nav className="w-75 mx-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center p-4 pointer"><div onClick={() => handleChange()}>Standard</div></li>
                        <li className="nav-item text-center p-4 pointer"><div  onClick={() => handleChange("sci")}>Scientific</div></li>
                        <li className="nav-item text-center p-4 pointer"><div  onClick={() => handleChange("curr")}>Currency Converter</div></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default CalculatorNavbar;