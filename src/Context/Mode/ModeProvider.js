import React, { createContext, useState } from "react";

const _modeStandard = {
    type:"Standard"
}

const _modeScientific = {
    type:"Scientific"

}

const _modeCurrencyConverter = {
    type:"Currency Converter"
}

export const ModeContext = createContext()


export const ModeProvider = ({children}) => {
    const [mode, setMode] = useState(_modeStandard)

    const changeMode = (type=null) => {
        if(type === "curr"){
             setMode(_modeCurrencyConverter)
        }
        else if(type === "sci"){
             setMode(_modeScientific)
        }
        else{
            setMode(_modeStandard)
        }
    }

    return  (
        <ModeContext.Provider value={{ mode:mode, changeMode:changeMode }}>
            {children}
        </ModeContext.Provider>
    )
}
