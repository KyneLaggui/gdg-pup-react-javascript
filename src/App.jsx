import React, { useState } from "react";
import AssignmentOne from "./Assignments/AssignmentOne/AssignmentOne";
import AssignmentTwo from "./Assignments/AssignmentTwo/AssignmentTwo";
import AssignmentThree from "./Assignments/AssignmentThree/AssignmentThree";
import AssignmentFour from "./Assignments/AssignmentFour/AssignmentFour";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("one");

  const handleTabChange = (tab) => setSelectedTab(tab);

  const tabButtons = [
    { id: "one", label: "Assignment 1" },
    { id: "two", label: "Assignment 2" },
    { id: "three", label: "Assignment 3" },
    { id: "four", label: "Assignment 4" },
  ];

  return (
    <>
      <div className="tabs">
        {tabButtons.map((tab) => (
          <button
            key={tab.id}
            className={selectedTab === tab.id ? "active" : ""}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
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
