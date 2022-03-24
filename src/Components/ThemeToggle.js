import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../css/themetoggler.css";
import { ThemeContext } from "../Context/Theme/ThemeProvider";

const ThemeToggle = () => {
    const { theme, switchTheme } = useContext(ThemeContext);

    const toggle = () => {
        const piece = document.getElementById("toggle-piece");
        const sun = document.getElementById("sun")
        const moon = document.getElementById("moon")

        if(theme.setting === "light"){
            piece.classList.add("open")
            sun.classList.add("open")
            moon.classList.add("close")
        }
        else{
            piece.classList.remove("open")
            sun.classList.remove("open")
            moon.classList.remove("close")
        }
        setTimeout(() => {
            switchTheme();
        }, 300)
    }
    return (
        <div className="theme-toggler mx-4">
            <div className="toggle-piece" id="toggle-piece"></div>
            <div className="toggle-track">
                <FaSun className="sun" id="sun" onClick={toggle}/>
                <FaMoon className="moon" id="moon" onClick={toggle}/>
            </div>
        </div>
    )
}

export default ThemeToggle