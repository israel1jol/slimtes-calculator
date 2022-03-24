import React, { createContext, useState } from "react";


const _lightTheme = {
    setting:"light",
    components:{
        stage:{
            body:"stage-light"
        },
        navbar:{
            menubar:"menu-btn-light",
            slidingMenu:"sliding-menu-light",
            help:"help-btn-light",
            calType:"cal-type-light"
        },
        dashboard:{
            body:"dashboard-light"
        },
        frame:{
            numPad:"light"
        }
    }
}

const _darkTheme = {
    setting:"dark",
    components:{
        stage:{
            body:"stage-dark"
        },
        navbar:{
            menubar:"menu-btn-dark",
            slidingMenu:"sliding-menu-dark",
            help:"help-btn-dark",
            calType:"cal-type-dark"
        },
        dashboard:{
            body:"dashboard-dark"
        },
        frame:{
            numPad:"dark"
        }
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isLight, setIsLight] = useState(true);
    const [theme, setTheme] = useState(_lightTheme);

    const switchTheme = () => {
        if(isLight){
            setTheme(_darkTheme)
        }
        else{
            setTheme(_lightTheme)
        }
        setIsLight(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{theme:theme ,switchTheme:switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}