import React, { useState } from "react";
import AssignmentOne from "./Assignments/AssignmentOne/AssignmentOne";
import AssignmentTwo from "./Assignments/AssignmentTwo/AssignmentTwo";
import AssignmentThree from "./Assignments/AssignmentThree/AssignmentThree";
import AssignmentFour from "./Assignments/AssignmentFour/AssignmentFour";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("one");

  const handleTabChange = (tab) => setSelectedTab(tab);

  return (
    <>
      <div className="tabs">
        <button onClick={() => handleTabChange("one")}>Assignment 1</button>
        <button onClick={() => handleTabChange("two")}>Assignment 2</button>
        <button onClick={() => handleTabChange("three")}>Assignment 3</button>
        <button onClick={() => handleTabChange("four")}>Assignment 4</button>
      </div>

      <div className="tab-content">
        {selectedTab === "one" && <AssignmentOne />}
        {selectedTab === "two" && <AssignmentTwo />}
        {selectedTab === "three" && <AssignmentThree />}
        {selectedTab === "four" && <AssignmentFour />}
      </div>
    </>
  );
}

export default App;
