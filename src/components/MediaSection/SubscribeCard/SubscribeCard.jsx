import React, { useState, useContext } from 'react';
import './SubscribeCard.css';
import { DarkModeContext } from '../../DarkModeContext/DarkModeContext';

const SubscribeCard = () => {
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState(100);
  const { isDarkMode } = useContext(DarkModeContext);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribers(subscribers + 1);
      setEmail('');
    }
  };

  return (
    <div className={`subscribe-card ${isDarkMode ? 'dark-mode' : ''}`}>
      <p> Stay updated with our latest news!</p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="subscribe-button">
          <span className="arrow">↑</span> Subscribe
        </button>
      </form>
      <p className="subscriber-count">{subscribers} Subscribers</p>
    </div>
  );
};

export default SubscribeCard;