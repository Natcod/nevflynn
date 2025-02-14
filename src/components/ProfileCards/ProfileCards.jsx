import React from 'react';
import { SortableContext } from '@dnd-kit/sortable';
import SortableItem from '../Utils/SortableItem';
import AvatarCard from './AvatarCard/AvatarCard';
import MapCard from './MapCard/MapCard';
import TwitterCard from './TwitterCard/TwitterCard';
import ProjectCard from '../ProjectsSection/ProjectCard/ProjectCard';
import SpotifyCard from '../MediaSection/SpotifyCard/SpotifyCard';
import SubscribeCard from '../MediaSection/SubscribeCard/SubscribeCard';
import ReadMoreCard from '../MediaSection/ReadMoreCard/ReadMoreCard';
import NightModeToggleCard from '../NightModeToggleCard/NightModeToggleCard';
import './ProfileCards.css';
import { useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext/DarkModeContext';

const ProfileCards = ({ cards }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  // Define the cardComponents object to map type values to their respective components
  const cardComponents = {
    AvatarCard: AvatarCard,
    MapCard: MapCard,
    TwitterCard: TwitterCard,
    ProjectCard: ProjectCard,
    SpotifyCard: SpotifyCard,
    SubscribeCard: SubscribeCard,
    ReadMoreCard: ReadMoreCard,
    NightModeToggleCard: NightModeToggleCard,
  };

  return (
    <div className={`profile-cards ${isDarkMode ? 'dark-mode' : ''}`}>
      <SortableContext items={cards.map((card) => card.id)}>
        {cards.map((card) => (
          <SortableItem key={card.id} id={card.id}>
            {React.createElement(cardComponents[card.type], { ...card })}
          </SortableItem>
        ))}
      </SortableContext>
    </div>
  );
};

export default ProfileCards;