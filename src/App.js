import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";;
import './css/continue.css';
import "./css/App.css";
import CalculatorStage from "./Components/CalculatorStage";
import { ModeProvider } from "./Context/Mode/ModeContext";

const App = () => {
    const [showCalculator, setShowCalculator] = useState(false);
    return (
        <div>
            <ModeProvider>
            {
                showCalculator ? <CalculatorStage /> : <Continue setShowCalculator={setShowCalculator}/>
            }
            </ModeProvider>
        </div>
    )
}

const Continue = ({setShowCalculator}) => {
    // The backspace button choke sha and i'm too lazy to figure something out. So do it yourself
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div>
                <div className="display-6 m-4">Teslim's Calculator</div>
            <button className="continue-btn mx-auto" onClick={() => setShowCalculator(true)}>Continue</button>
            </div>
        </div>
    )
}

export default App;