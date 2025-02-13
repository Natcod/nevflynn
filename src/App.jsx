import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';
import Navigation from './components/Navigation/Navigation';
import ProfileCards from './components/ProfileCards/ProfileCards';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import MediaSection from './components/MediaSection/MediaSection';
import NightModeSection from './components/NightModeToggleCard/NightModeToggleCard';
import './App.css';

function App() {
  const [cards, setCards] = useState({
    ProfileCards: [
      { id: 'avatar-1', type: 'AvatarCard' },
      { id: 'map-1', type: 'MapCard' },
      { id: 'twitter-1', type: 'TwitterCard' },
    ],
    ProjectsSection: [
      {
        id: 'project-1',
        type: 'ProjectCard',
        image: '/public/project1.png',
        link: 'https://example.com/project1',
        isHorizontal: true,
      },
      {
        id: 'project-2',
        type: 'ProjectCard',
        image: '/public/project2.png',
        link: 'https://example.com/project2',
        isHorizontal: false,
      },
    ],
    MediaSection: [
      { id: 'spotify-1', type: 'SpotifyCard' },
      { id: 'subscribe-1', type: 'SubscribeCard' },
      { id: 'readmore-1', type: 'ReadMoreCard' },
    ],
  });

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId !== overId) {
      setCards((prevCards) => {
        // Remove card from old section
        const oldSection = Object.keys(prevCards).find(
          (section) => prevCards[section].some((card) => card.id === activeId)
        );
        if (!oldSection) return prevCards;

        const oldIndex = prevCards[oldSection].findIndex(
          (card) => card.id === activeId
        );
        const [removedCard] = prevCards[oldSection].splice(oldIndex, 1);

        // Add card to new section
        const newSection = Object.keys(prevCards).find(
          (section) => prevCards[section].some((card) => card.id === overId)
        );
        if (!newSection) return prevCards;

        const newIndex = prevCards[newSection].findIndex(
          (card) => card.id === overId
        );
        prevCards[newSection].splice(newIndex, 0, removedCard);

        return { ...prevCards };
      });
    }
  };

  return (
    <DarkModeProvider>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Navigation />
        <ProfileCards cards={cards.ProfileCards} />
        <ProjectsSection cards={cards.ProjectsSection} />
        <MediaSection cards={cards.MediaSection} />
        <NightModeSection />
      </DndContext>
    </DarkModeProvider>
  );
}

export default App;