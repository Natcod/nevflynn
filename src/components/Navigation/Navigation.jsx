import React, { useContext } from 'react';
import "./Navigation.css"; // Import styles (optional)
import { DarkModeContext } from '../DarkModeContext/DarkModeContext';

const Navigation = ({ setActiveSection }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`navigation ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={() => setActiveSection("all")}>All</button>
      <button onClick={() => setActiveSection("about")}>About</button>
      <button onClick={() => setActiveSection("projects")}>Projects</button>
      <button onClick={() => setActiveSection("media")}>Media</button>
    </nav>
  );
};

export default Navigation;