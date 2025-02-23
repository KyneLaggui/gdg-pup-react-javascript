import React, { useState } from "react";
import "./TenziesProject.css";
import Die from "./Die";

export default function TenziesProject() {

    const [dice, setDice] = useState(() => generateAllNewDice());

    const gameWon = dice.every(die => die.isClicked) && 
                    dice.every(die => die.value === dice[0].value);

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
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isClicked ? die : { ...die, value: Math.ceil(Math.random() * 6) } 
            ));    
        }
        else {
            setDice(generateAllNewDice());
        }
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
                <h1 className="title">
                    {gameWon ? "Congrats, You Won!" : "Tenzies"} 
                </h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

                <div className="dice-container">
                    {diceElements}
                </div>

                <button className="roll-dice-btn" onClick={rollDice}>
                    {gameWon ? "New Game" : "Roll"}
                </button>
            </main>
        </div>
    )
}
