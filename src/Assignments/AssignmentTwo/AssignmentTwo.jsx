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
    {
      title: "Portfolio Website",
      content:
        "A personal website to showcase my projects, skills, and experience. It will include an interactive UI, blog section, and a contact form.",
    },
    {
      title: "Chess Learning Website",
      content:
        "An interactive 3D chess website built with Three.js that teaches users how to play chess through tutorials, challenges, and AI-driven practice games.",
    },
    {
      title: "Startup Website",
      content:
        "A professional website for my team and I to showcase our freelance work, services, and completed projects. It will include a portfolio section and a client contact form.",
    },
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
