import React from "react";
import "./Navigation.css"; // Import styles (optional)

const Navigation = ({ setActiveSection }) => {
  return (
    <nav className="navigation">
      <button onClick={() => setActiveSection("about")}>About</button>
      <button onClick={() => setActiveSection("projects")}>Projects</button>
      <button onClick={() => setActiveSection("media")}>Media</button>
      <button onClick={() => setActiveSection("all")}>All</button>
    </nav>
  );
};

export default Navigation;