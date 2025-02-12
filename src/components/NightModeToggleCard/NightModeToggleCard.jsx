import React, { useContext } from 'react';
import './NightModeToggleCard.css';
import { DarkModeContext } from '../DarkModeContext/DarkModeContext';

const NightModeToggleCard = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="night-mode-toggle-card">
      <button className="toggle-buttonN" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️ Light Mode' : '🌙 Night Mode'}
      </button>
    </div>
  );
};

export default NightModeToggleCard;