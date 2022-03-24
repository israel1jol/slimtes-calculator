import React, { useContext } from "react";
import { ModeContext } from "../Context/Mode/ModeProvider";
import { ThemeContext } from "../Context/Theme/ThemeProvider";
import CalculatorNavbar from "./CalculatorNavbar";
import CalcDashboard from "./CalcDashboard";
import CalculatorScene from "./CalculatorScene";
import Panel from "./Panel";
import "../css/stage.css"


const CalculatorStage = () => {
    const { mode, changeMode } = useContext(ModeContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`stage ${ theme.components.stage.body }`}>
            <CalculatorNavbar />
            <CalculatorScene>
                <CalcDashboard mode={mode}/>
                <Panel/>
            </CalculatorScene>
        </div>
    )
}

export default CalculatorStage