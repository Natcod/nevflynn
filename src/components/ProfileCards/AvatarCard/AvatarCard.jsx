import React, { useState, useContext } from "react";
import "./AvatarCard.css";
import { motion } from "framer-motion";
import { DarkModeContext } from '../../DarkModeContext/DarkModeContext';

// Import local avatar images
import Avatar1 from "/src/assets/avatars/avatar1.jpg";
import Avatar2 from "/src/assets/avatars/avatar2.jpg";
import Avatar3 from "/src/assets/avatars/avatar3.jpg";

const AvatarCard = () => {
  // State to track the current avatar
  const [avatarIndex, setAvatarIndex] = useState(0);

  // Array of local avatar images
  const avatars = [Avatar1, Avatar2, Avatar3];

  // Function to toggle between avatars
  const toggleAvatar = () => {
    setAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  };

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`avatar-card ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Toggle Button at Top-Right Corner */}
      <button className="toggle-button" onClick={toggleAvatar}>
        Toggle Avatar
      </button>

      {/* Avatar Image with Animation */}
      <motion.div
        className="avatar-image"
        key={avatarIndex} // Key prop to trigger animation on change
        initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
        animate={{ opacity: 1, scale: 1 }} // Animate to this state
        exit={{ opacity: 0, scale: 0.8 }} // Exit animation (optional)
        transition={{ duration: 0.3 }} // Animation duration
      >
        <motion.img
          src={avatars[avatarIndex]}
          alt="Avatar"
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animate to this state
          transition={{ duration: 0.3 }} // Animation duration
        />
      </motion.div>

      {/* Description Text (Below Avatar, Left-Aligned) */}
      <p className="description">
  I’m <span className="highlight">nev</span>, a developer and product designer from Ireland.
  I’m interested in React, Node, Product Design, Jamstack, Startups, Cryptocurrencies, and Music.
</p>
    </div>
  );
};

export default AvatarCard;
