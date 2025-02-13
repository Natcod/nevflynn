import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext/DarkModeContext';
import './AvatarCard.css';
import Avatar1 from '/src/assets/avatars/avatar1.jpg';
import Avatar2 from '/src/assets/avatars/avatar2.jpg';
import Avatar3 from '/src/assets/avatars/avatar3.jpg';

const AvatarCard = () => {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const avatars = [Avatar1, Avatar2, Avatar3];
  const toggleAvatar = () =>
    setAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`avatar-card ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleAvatar}>Toggle Avatar</button>
      <img src={avatars[avatarIndex]} alt="Avatar" />
      <p>I’m nev, a developer and product designer from Ireland.</p>
    </div>
  );
};

export default AvatarCard;