import React, { useState } from 'react';
import './SubscribeCard.css';

const SubscribeCard = () => {
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState(100);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribers(subscribers + 1);
      setEmail('');
    }
  };

  return (
    <div className="subscribe-card">
      <p>Stay updated with our latest news!</p>
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