import React, { useState, useContext } from "react";
import { ModeContext } from "../Context/Mode/ModeContext";
import "../css/navbar.css";

const CalculatorNavbar = () => {
    const [toggled, setToggled] = useState(false);

    const { mode, changeMode } = useContext(ModeContext);
    
    const toggleMenu = () => {
        const menu = document.getElementById("sliding-btn");

        if(toggled){
            menu.classList.remove("open");
        }
        else{
            menu.classList.add("open");
        }


        setToggled(prev => !prev);
    }
    return (
        <>
            <div>
                <div className="d-flex justify-content-between mx-4">
                    <div className=" navbar navbar-expand">
                        <div className="menu-btn-light mx-2" id="sliding-btn" onClick={toggleMenu}></div>
                        <div className="cal-type-light mx-3">{ mode.type }</div>
                    </div>
                <button className="help-btn-light">?</button>
                </div>
            </div>
            { toggled ? 
                <div className="sliding-menu-light">
                    <nav className="w-50 mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item text-center p-4 pointer"><div onClick={() => changeMode()}>Standard</div></li>
                            <li className="nav-item text-center p-4 pointer"><div  onClick={() => changeMode("sci")}>Scientific</div></li>
                            <li className="nav-item text-center p-4 pointer"><div  onClick={() => changeMode("curr")}>Currency Converter</div></li>
                        </ul>
                    </nav>
                </div>
                : 
                <></>
            }
        </>
    )
}

export default CalculatorNavbar;