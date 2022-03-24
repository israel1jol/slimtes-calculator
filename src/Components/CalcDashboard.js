import React, { useContext, useState } from "react";
import "../css/dashboard.css";
import { ThemeContext } from "../Context/Theme/ThemeProvider";

const CalcDashboard = () => {
    const { theme } = useContext(ThemeContext);
    const [opened, setOpened] = useState(false);
    
    const toggle = () => {
        console.log(opened);
        const dashboard = document.getElementById("dashboard");
        if(!opened){
            dashboard.classList.add("open")
        }
        else{
            dashboard.classList.remove("open")
        }
        setOpened(prev => !prev);
    }
    return (
        <div className={`${theme.components.dashboard.body} dashboard`} id="dashboard" onClick={toggle}>
            <div className="inner-dash-panel">
                <div className="view-text">Click this window to view history</div>
                <RegularDashboard />
            </div>
        </div>
    )
}

const RegularDashboard = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <p className="lead">Sike...No Content</p>
        </div>
    )
}

const CurrencyDashboard = () => {}

export default CalcDashboard