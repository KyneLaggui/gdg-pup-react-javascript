import React, { useState } from "react";
import "./AssignmentOne.css";

function AssignmentOne() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount(count + 1);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Simple Counter</h1>
      <p className="counter-value">Current Count: {count}</p>
      <button className="increment-button" onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
}

export default AssignmentOne;
