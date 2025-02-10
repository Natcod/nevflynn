import React from "react";
import AvatarCard from "./AvatarCard/AvatarCard";
import "./ProfileCards.css";

const ProfileCards = () => {
  return (
    <div className="profile-cards">
      <h2>Profile Cards</h2>
      <AvatarCard />
    </div>
  );
};

export default ProfileCards;