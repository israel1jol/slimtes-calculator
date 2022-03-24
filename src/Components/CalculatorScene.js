import React from "react";
import "../css/scene.css";

const CalculatorScene = ({children}) => {
    return (
        <div className="scene">
            {children}
        </div>
    )
}

export default CalculatorScene;