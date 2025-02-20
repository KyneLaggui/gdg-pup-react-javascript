import React, { useState } from "react";
import "./TenziesProject.css";
import Die from "./Die";

export default function TenziesProject() {

    function generateAllNewDice () {
        const newDice = [];

        for (let i = 0; i < 10; i++) {
            const rand = Math.ceil(Math.random() * 6);
            newDice.push(rand);
        }

        return newDice;
    }

    console.log(generateAllNewDice());

    return ( 
        <div className="project-container">
            <main>
                <div className="dice-container">
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                    <Die value={1}/>
                </div>
            </main>
        </div>
    )
}
