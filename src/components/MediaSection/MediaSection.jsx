import React, { useContext } from 'react';
import SpotifyCard from './SpotifyCard/SpotifyCard';
import SubscribeCard from './SubscribeCard/SubscribeCard';
import ReadMoreCard from './ReadMoreCard/ReadMoreCard';
import './MediaSection.css';
import { DarkModeContext } from '../DarkModeContext/DarkModeContext';

const MediaSection = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section className={`media-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="card-container">
        <SpotifyCard />
        <SubscribeCard />
        <ReadMoreCard />
      </div>
    </section>
  );
};

export default MediaSection;