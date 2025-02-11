import React from "react";
import AvatarCard from "./AvatarCard/AvatarCard";
import MapCard from "./MapCard/MapCard"; // Import the MapCard component
import "./ProfileCards.css";

const ProfileCards = () => {
  return (
    <div className="about-container">
      {/* Avatar Card */}
      <div className="avatar-card-container">
        <AvatarCard />
      </div>

      {/* Map Card */}
      <div className="map-card-container">
        <MapCard />
      </div>
    </div>
  );
};

export default ProfileCards;