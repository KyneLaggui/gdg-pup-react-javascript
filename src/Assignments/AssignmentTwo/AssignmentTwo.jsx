import React from "react";
import "./AssignmentTwo.css";

// Box Component that receives title and content as props
function Box({ title, content }) {
  return (
    <div className="box">
      <h2 className="box-title">{title}</h2>
      <p className="box-content">{content}</p>
    </div>
  );
}

function AssignmentTwo() {
  const data = [
    { title: "Box One", content: "This is the content for Box One." },
    { title: "Box Two", content: "This is the content for Box Two." },
    { title: "Box Three", content: "This is the content for Box Three." },
  ];

  return (
    <div className="box-container">
      {data.map((item, index) => (
        <Box key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default AssignmentTwo;
