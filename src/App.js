import React, { useState, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";;
import './css/continue.css';
import "./css/App.css";
import { ModeProvider } from "./Context/Mode/ModeProvider";
import { ThemeProvider } from "./Context/Theme/ThemeProvider";
import { Loader } from "./Components/Loader";

const App = () => {
    const [showCalculator, setShowCalculator] = useState(false);

    const CalculatorStage = React.lazy(() => import("./Components/CalculatorStage"))

    return (
        <div>
            <Suspense fallback={<Loader />}>
                <ThemeProvider>
                    <ModeProvider>
                    {
                        showCalculator ? <CalculatorStage /> : <Continue setShowCalculator={setShowCalculator}/>
                    }
                    </ModeProvider>
                </ThemeProvider>
            </Suspense>
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