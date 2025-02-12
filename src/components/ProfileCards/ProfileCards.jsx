import React, { useContext } from 'react';
import AvatarCard from "./AvatarCard/AvatarCard";
import MapCard from "./MapCard/MapCard";
import TwitterCard from "./TwitterCard/TwitterCard"; // Import the TwitterCard component
import "./ProfileCards.css";
import { DarkModeContext } from '../DarkModeContext/DarkModeContext';

const ProfileCards = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`profile-cards ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="about-container">
      {/* Avatar Card */}
      <div className="avatar-card-container">
        <AvatarCard />
      </div>

      {/* Map Card */}
      <div className="map-card-container">
        <MapCard />
      </div>

      {/* Twitter Card */}
      <div className="twitter-card-container">
        <TwitterCard />
      </div>
    </div>
      </div>
  );
};

export default ProfileCards;