import React from 'react';
import './ReadMoreCard.css';

const ReadMoreCard = () => {
  return (
    <div className="read-more-card">
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
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