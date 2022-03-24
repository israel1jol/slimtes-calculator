import React, { useContext } from "react";
import "../css/panel.css";
import { ModeContext } from "../Context/Mode/ModeContext";
import { StandardPanelFrame, ScientificPanelFrame, CConverterPanelFrame } from "./PanelFrame";

const Panel = () => {
    const { mode } = useContext(ModeContext);
    return (
        <div className="panel panel-light">
            {
                mode.type === "Standard" ? 
                <StandardPanelFrame /> :
                <>
                    {
                        mode.type === "Scientific" ? <ScientificPanelFrame/> : <CConverterPanelFrame/>
                    }
                </>
            }
        </div>
    )
}

export default Panel;