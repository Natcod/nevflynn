import React, { useContext } from 'react';
import './ReadMoreCard.css';
import { DarkModeContext } from '../../DarkModeContext/DarkModeContext';

const ReadMoreCard = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
       <div className={`read-more-card ${isDarkMode ? 'dark-mode' : ''}`}>
      <p className="description">
      <strong>How it started vs. how it's going</strong>
      <p>A short personal history as it relates to design and development, and how I've found value in the cross-section between both disciplines.</p>
      </p>
      <div className="actions">
        <button className="read-more-button">
          <span className="arrow">↑</span> Read More
        </button>
        <span className="date">March 15, 2023</span>
      </div>
    </div>
  );
};

export default ReadMoreCard;