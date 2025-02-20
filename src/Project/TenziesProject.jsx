import React, { useState } from "react";
import "./TenziesProject.css";
import Die from "./Die";

export default function TenziesProject() {

    const [dice, setDice] = useState(generateAllNewDice());

    function generateAllNewDice () {
        const newDice = [];

        for (let i = 0; i < 10; i++) {
            const rand = { 
                value: Math.ceil(Math.random() * 6), 
                isClicked: false 
            };
            newDice.push(rand);
        }

        return newDice;
    }

    function rollDice() {
        setDice(generateAllNewDice());
    }

    const diceElements = dice.map(dieObj => (
        <Die value = {dieObj.value} isHeld = {dieObj.isClicked}/>
    ));

    return ( 
        <div className="project-container">
            <main>
                <div className="dice-container">
                    {diceElements}
                </div>

                <button className="roll-dice-btn" onClick={rollDice}>Roll</button>
            </main>
        </div>
    )
}
