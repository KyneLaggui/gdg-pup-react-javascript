import React, { useState } from "react";
import "./TenziesProject.css";
import Die from "./Die";

export default function TenziesProject() {
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
