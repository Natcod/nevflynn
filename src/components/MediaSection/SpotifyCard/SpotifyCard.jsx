import React from 'react';
import './SpotifyCard.css';

const SpotifyCard = () => {
  return (
    <div className="spotify-card">
      <div className="logo-container">
        <img src="/spotify-logo.png" alt="Spotify Logo" className="spotify-logo" />
      </div>
      <div className="frequency-visualization">
        {/* Simulate frequency visualization */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <h3 className="card-title">Now Playing</h3>
      <p className="card-text">Enjoy your favorite tunes with Spotify.</p>
    </div>
  );
};

export default SpotifyCard;