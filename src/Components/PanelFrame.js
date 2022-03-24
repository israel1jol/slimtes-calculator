import React, { useContext } from "react";
import { useStandardButtonSet, useScientificButtonSet } from "../Hooks/ButtonSet";
import "../css/Frame.css";

export const StandardPanelFrame = ({theme}) => {
    const [UpperBound, firstButtonSet, secondButtonSet, thirdButtonSet, fourthButtonSet, fifthButtonSet, sixthButtonSet] = useStandardButtonSet();
    return (
        <div className={`frame ${theme}`}>
            <div className="standard-upperbound-grid">
                {UpperBound.map((button, id) => ( 
                    <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    )) }
            </div>
            <div className="standard-button-grid">
                { firstButtonSet.map((button, id) => ( 
                    <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="standard-button-grid">
                {secondButtonSet.map((button, id) => (
                    <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="standard-button-grid">
                { thirdButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="standard-button-grid">
                {fourthButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="standard-button-grid">
                {fifthButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="standard-heavy-grid">
                {sixthButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
        </div>
    )
}

export const ScientificPanelFrame = ({theme}) =>{
    const [UpperBound, firstButtonSet, secondButtonSet, thirdButtonSet, fourthButtonSet, fifthButtonSet, sixthButtonSet] = useScientificButtonSet();
    return (
        <div className={`frame ${theme}`}>
            <div className="scientific-upperbound-grid">
                {UpperBound.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="scientific-upperbound-grid">
                {firstButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="scientific-upperbound-grid">
                {secondButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="scientific-upperbound-grid">
                {thirdButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="scientific-upperbound-grid">
                {fourthButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="scientific-upperbound-grid">
                {fifthButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
            <div className="scientific-heavy-grid">
                {sixthButtonSet.map((button, id) => (
                        <li key={id} className="button-item"><button className={`${button.type}`}>{button.name}</button></li>
                    ))}
            </div>
        </div>
    )
}

export const CConverterPanelFrame = () => {
    return (
        <div>

        </div>
    )
}
