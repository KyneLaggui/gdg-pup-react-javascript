## 🚀 Project Assignment: Tenzie Game

## Project Overview

The Tenzie Game is a fun and interactive dice game. The objective is to roll the dice until all dice show the same value. Players can click on individual dice to freeze their values between rolls. The game provides a great way to practice state management and conditional rendering in React.

### Directory Overview

This directory has a sample implementation of the Tenzies game project, which you can use as reference if you need help in developing your own implementation of the project. Use the key development steps below as a guide. 

### Key Development Steps

1. **Create Components**:
    - Create a `TenziesProject` component to manage the game logic and state.
    - Create a `Die` component to represent individual dice.

2. **State Management**:
    - Use the `useState` hook to manage the state of the dice.
    - Initialize the dice state with an array of objects, each representing a die with a value and a clicked status.

3. **Game Logic**:
    - Implement a function to generate new dice values.
    - Implement a function to roll the dice, updating only the dice that are not clicked.
    - Implement a function to toggle the clicked status of a die when it is clicked.

4. **Conditional Rendering**:
    - Use conditional rendering to display a winning message when all dice have the same value.
    - Update the button text based on the game state (e.g., "Roll" or "New Game").

5. **Styling**:
    - Apply CSS to style the game interface, including the dice and buttons.
    - Use dynamic styles to change the appearance of clicked dice.

### Reminders

- Use Math.ceil(Math.random() * 6) for die values
- Implement proper state updates using previous state
- Use logical conditions to determine the game state and render the appropriate UI elements.
- Test win conditions thoroughly (based on having all button clicked with the same values);