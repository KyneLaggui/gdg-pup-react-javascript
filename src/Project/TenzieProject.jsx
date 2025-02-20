import { useState, useEffect } from "react";
import "./TenzieProject.css";
import Confetti from "react-confetti";

const TenzieProject = () => {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  function allNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die, index) =>
        index === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  return (
    <>
      {tenzies ? <Confetti /> : ""}
      <div className="tenzi-game">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">
          {dice.map((die, index) => (
            <div
              key={index}
              className={`dice ${die.isHeld ? "held" : ""}`}
              onClick={() => holdDice(index)}
            >
              {die.value}
            </div>
          ))}
        </div>
        <button className="tenzi-btn" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </>
  );
};

export default TenzieProject;
