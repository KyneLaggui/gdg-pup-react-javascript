# 🧑🏻‍💻 React JavaScript Study Jam 🚀

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

Welcome to the **React JavaScript Workshop** hosted by GDG-PUP Web Development!

This workshop is designed to introduce you to the world of React.js, one of the most powerful and widely-used JavaScript libraries for building interactive user interfaces. Whether you’re just starting with JavaScript or already have experience, this study jam will help you gain hands-on experience with React concepts and practical skills to build modern web applications.

---

### 🚀 Why This Workshop is Necessary

React.js is the foundation for many modern web applications, and mastering it is essential for front-end developers. This study jam provides a structured approach to learning React through practical assignments and projects. By completing the assignments, you'll build a strong understanding of React's core concepts, such as state management, props, and effects. The project will tie everything together by giving you the chance to create a fully-functional application—a note-taking app—applying your newly acquired skills.

---

### 👀 What's Inside It

This repository contains the following **main** folders:

1. **Assignments folder**: A collection of exercises designed to solidify your understanding of React concepts.
2. **Project folder**: The main project that you will build as part of this workshop.

---

## 📅 Assignments

### ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) React Assignments

| No. | Topic                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Increment-Decrement Counter**         | Build a simple counter application to understand state management in React using `useState`. Create buttons to increment and decrement the counter value. Display the current count on the screen. **Bonus:** Add logic to prevent negative numbers by conditionally disabling the decrement button or displaying a warning. This introduces conditional rendering and basic logic handling in React.                                           |
| 2   | **Top 3 Major Projects Using Props**    | Create a parent component that holds information about your top 3 project ideas for 2025. Pass the project details (title and description) as props to child components. Dynamically render each project inside the child components. This exercise helps in understanding how to pass data between components and maintain modular, reusable structures in React.                                                                              |
| 3   | **Fetching User Data with `useEffect`** | Fetch and display user information from the API: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users). Use `useEffect` to make the API call when the component is mounted. Store the fetched data using `useState` and dynamically render a list displaying each user's name and email. **Bonus:** Implement error handling to show an error message if the API request fails or data is not fetched.       |
| 4   | **Conditional Rendering: My Address**   | Create a component that fetches your address from [https://psgc.cloud/api](https://psgc.cloud/api). Use `useEffect` to fetch the data and `useState` to store it. Render the address only when it has been successfully retrieved. **Bonus:** Add error handling to display a message if the API call fails and show a loading spinner while the data is being fetched. This exercise demonstrates the power of conditional rendering in React. |

---

## 🚀 Project Assignment: Tenzie Game

## Project Overview

The Tenzie Game is a fun and interactive dice game. The objective is to roll the dice until all dice show the same value. Players can click on individual dice to freeze their values between rolls. The game provides a great way to practice state management and conditional rendering in React.


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

### Skills Practiced

- **State Management**: Learn how to manage state using the `useState` hook to keep track of the dice values and their clicked status.
- **Conditional Rendering**: Understand how to conditionally render elements based on the game state, such as displaying a winning message when all dice have the same value.
- **Component Composition**: Practice breaking down the UI into reusable components, such as the `Die` component for individual dice.
- **Event Handling**: Handle user interactions by implementing click events to freeze dice values and roll new dice.
- **Styling**: Apply CSS to style custom React components for a user-friendly interface.

---

## 🌟 Getting Started with GDG-PUP Repository Template

Follow these steps to set up your own repository using the GDG-PUP template, complete with an existing directory structure and files to participate in the React JavaScript workshop.

1. **Access the Template**:

- Go to the main page of the GDG-PUP repository on GitHub.
- Click on the **Use this template** button.

![Step 1](./Assets/Images/Setup/1.png)

2. **Name and Visibility**:

- Name the new repository following the format `gdg-pup-react-basics`
- Ensure it is set to public.

![Step 2](./Assets/Images/Setup/2.png)

3. **Create the Repository**:

- Click Create repository on the lower right to generate it in your GitHub account.

![Step 2](./Assets/Images/Setup/3.png)

4. **Clone the Repository**:

- Go to the repository’s main page, click on the Code button, and choose Open with GitHub Desktop to launch it in GitHub Desktop.

![Step 3](./Assets/Images/Setup/4.png)

5. **Complete the Clone**:

In GitHub Desktop, click Clone to download the repository to your local machine.

![Step 4](./Assets/Images/Setup/5.png)

---

## 🛠 How to Run the Repository Locally

To run this React project on your local machine, follow these steps carefully:

### 1️⃣ **Clone the Repository**

Open your terminal and run the following command:

```bash
git clone https://github.com/KyneLaggui/gdg-pup-react-javascript.git
```

### 2️⃣ **Navigate to the Project Directory**

After cloning, navigate into the project folder:

```bash
cd gdg-pup-react-javascript
```

### 3️⃣ **Install Dependencies**

Ensure you have Node.js installed. Install the required dependencies by running the command:

```bash
npm install
```

This will install all the necessary packages specified in the `package.json` file.

### 4️⃣ **Run the Development Server**

Start the React development server with the following command:

```bash
npm run dev
```

### 5️⃣ **Access the Application**

Once the development server is running, open your browser and go to:

```bash
http://localhost:3000
```

You will now see your React project running locally.

---

## 📥 Submission

- For submission, an assignment in Google Classroom will be provided where you can upload the necessary requirements for this workshop. Please check Google Classroom for further details and deadlines for each assignment.

---

## 👥 Collaborators

- [Kyne Laggui](https://github.com/KyneLaggui)
- [Angelo Rodelas](https://github.com/Gelatino03083)
- [Rowine Mabiog](https://github.com/Rowine)

---

## 🎉 Happy Coding!

We’re excited to see your creativity and dedication shine through this project. Let’s make this an amazing learning experience together. Remember, every line of code you write brings you one step closer to mastering React. Good luck, and enjoy the journey! 🚀💻
