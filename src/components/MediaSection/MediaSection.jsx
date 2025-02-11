import React from 'react';
import SpotifyCard from './SpotifyCard/SpotifyCard';
import SubscribeCard from './SubscribeCard/SubscribeCard';
import ReadMoreCard from './ReadMoreCard/ReadMoreCard';
import './MediaSection.css';

const MediaSection = () => {
  return (
    <section className="media-section">
      <div className="card-container">
        <SpotifyCard />
        <SubscribeCard />
        <ReadMoreCard />
      </div>
    </section>
  );
};

export default MediaSection;