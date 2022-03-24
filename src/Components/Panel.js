import React, { useContext } from "react";
import "../css/panel.css";
import { ModeContext } from "../Context/Mode/ModeProvider";
import { ThemeContext } from "../Context/Theme/ThemeProvider";
import { StandardPanelFrame, ScientificPanelFrame, CConverterPanelFrame } from "./PanelFrame";

const Panel = () => {
    const { mode } = useContext(ModeContext);
    const { theme } = useContext(ThemeContext);
    return (
        <div className="panel">
            {
                mode.type === "Standard" ? 
                <StandardPanelFrame theme={theme.setting}/> :
                <>
                    {
                        mode.type === "Scientific" ? <ScientificPanelFrame theme={theme.setting}/> : <CConverterPanelFrame/>
                    }
                </>
            }
        </div>
    )
}

export default Panel;