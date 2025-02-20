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
                isClicked: false,
                id: i + 1 
            };
            newDice.push(rand);
        }

        return newDice;
    }

    function rollDice() {
        setDice(generateAllNewDice());
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ? { ...die, isClicked: !die.isClicked } : die
        ));
    }

    const diceElements = dice.map(dieObj => (
        <Die 
            key = {dieObj.id}
            value = {dieObj.value} 
            isClicked = {dieObj.isClicked}
            hold = {hold}
            id = {dieObj.id}
        />
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
