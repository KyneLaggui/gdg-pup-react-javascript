import React, { useState } from "react";
import "./AssignmentOne.css";

function AssignmentOne() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount(count + 1);
  const decrementCounter = () => setCount(count - 1);

  return (
    <>
      <div className="counter-container">
        <h1 className="counter-title">Simple Counter</h1>
        <p className="counter-value">Current Count: {count}</p>
        <div className="button-container">
          <button className="increment-button" onClick={incrementCounter}>
            Increment
          </button>
          <button className="decrement-button" onClick={decrementCounter}>
            Decrement
          </button>
        </div>
        <div className="assignment-container">
          <p>
            This code teaches React basics by demonstrating how to build a
            simple counter app. It covers creating functional components,
            managing state using the useState hook to remember the counter
            value, and handling user interactions through button click events to
            update the state. Additionally, it introduces JSX, which combines
            HTML-like syntax with JavaScript logic to dynamically display the
            counter value. This example highlights essential concepts for
            building interactive and state-driven applications in React.
          </p>
          <p>
            <span className="bold-text">Bonus:</span> You can enhance this by
            adding an if-else condition to prevent the counter from going below
            zero.
          </p>
        </div>
      </div>
    </>
  );
}

export default AssignmentOne;
