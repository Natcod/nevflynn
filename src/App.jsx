import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';
import Navigation from './components/Navigation/Navigation';
import AvatarCard from './components/ProfileCards/AvatarCard/AvatarCard';
import MapCard from './components/ProfileCards/MapCard/MapCard';
import TwitterCard from './components/ProfileCards/TwitterCard/TwitterCard';
import ProjectCard from './components/ProjectsSection/ProjectCard/ProjectCard';
import SpotifyCard from './components/MediaSection/SpotifyCard/SpotifyCard';
import SubscribeCard from './components/MediaSection/SubscribeCard/SubscribeCard';
import ReadMoreCard from './components/MediaSection/ReadMoreCard/ReadMoreCard';
import NightModeToggleCard from './components/NightModeToggleCard/NightModeToggleCard';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { id: 'avatar-1', type: 'AvatarCard' },
    { id: 'map-1', type: 'MapCard' },
    { id: 'twitter-1', type: 'TwitterCard' },
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
    {
      id: 'project-3',
      type: 'ProjectCard',
      image: '/public/project3.png',
      link: 'https://example.com/project3',
      isHorizontal: false,
    },
    { id: 'spotify-1', type: 'SpotifyCard' },
    { id: 'subscribe-1', type: 'SubscribeCard' },
    { id: 'readmore-1', type: 'ReadMoreCard' },
    { id: 'nightmode-1', type: 'NightModeToggleCard' },
  ]);

  const cardTypeToComponent = {
    AvatarCard: AvatarCard,
    MapCard: MapCard,
    TwitterCard: TwitterCard,
    ProjectCard: ProjectCard,
    SpotifyCard: SpotifyCard,
    SubscribeCard: SubscribeCard,
    ReadMoreCard: ReadMoreCard,
    NightModeToggleCard: NightModeToggleCard,
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId !== overId) {
      setCards((prevCards) => {
        const oldIndex = prevCards.findIndex((card) => card.id === activeId);
        const newIndex = prevCards.findIndex((card) => card.id === overId);

        if (oldIndex === -1 || newIndex === -1) return prevCards;

        const updatedCards = Array.from(prevCards);
        const [removedCard] = updatedCards.splice(oldIndex, 1);
        updatedCards.splice(newIndex, 0, removedCard);

        return updatedCards;
      });
    }
  };

  return (
    <DarkModeProvider>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Navigation />
        <div className="dynamic-grid-container">
          <SortableContext items={cards.map((card) => card.id)}>
            {cards.map((card) => (
              <SortableItem key={card.id} id={card.id}>
                {React.createElement(cardTypeToComponent[card.type], card)}
              </SortableItem>
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </DarkModeProvider>
  );
}

const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: transform ? CSS.Transform.toString(transform) : 'none',
    transition,
    zIndex: transform ? 10 : undefined,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="grid-item">
      {children}
    </div>
  );
};

export default App;