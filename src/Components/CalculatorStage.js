import React, { useContext, useState } from "react";
import { ModeContext } from "../Context/Mode/ModeContext";
import CalculatorNavbar from "./CalculatorNavbar";
import CalcDashboard from "./CalcDashboard";
import CalculatorScene from "./CalculatorScene";
import Panel from "./Panel";



const CalculatorStage = () => {
    const { mode, changeMode } = useContext(ModeContext);

    return (
        <div className="stage">
            <CalculatorNavbar />
            <CalculatorScene>
                <CalcDashboard mode={mode}/>
                <Panel/>
            </CalculatorScene>
        </div>
    )
}

export default CalculatorStage