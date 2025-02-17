import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';
import { DragOverlay } from '@dnd-kit/core';
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
    { id: 'avatar-1', type: 'AvatarCard', section: 'about' },
    { id: 'map-1', type: 'MapCard', section: 'about' },
    { id: 'twitter-1', type: 'TwitterCard', section: 'about' },
    {
      id: 'project-1',
      type: 'ProjectCard',
      image: '/public/project1.png',
      link: 'https://example.com/project1',
      isHorizontal: true,
      section: 'projects',
    },
    {
      id: 'project-2',
      type: 'ProjectCard',
      image: '/public/project2.png',
      link: 'https://example.com/project2',
      isHorizontal: false,
      section: 'projects',
    },
    {
      id: 'project-3',
      type: 'ProjectCard',
      image: '/public/project3.png',
      link: 'https://example.com/project3',
      isHorizontal: false,
      section: 'projects',
    },
    { id: 'spotify-1', type: 'SpotifyCard', section: 'media' },
    { id: 'subscribe-1', type: 'SubscribeCard', section: 'media' },
    { id: 'readmore-1', type: 'ReadMoreCard', section: 'media' },
    { id: 'nightmode-1', type: 'NightModeToggleCard', section: 'all' },
  ]);

  const [activeSection, setActiveSection] = useState('all'); // Default to "all"
  const [activeCard, setActiveCard] = useState(null);

  const MemoizedMapCard = React.memo(MapCard);

  const cardTypeToComponent = {
    AvatarCard: AvatarCard,
    MapCard: MemoizedMapCard,
    TwitterCard: TwitterCard,
    ProjectCard: ProjectCard,
    SpotifyCard: SpotifyCard,
    SubscribeCard: SubscribeCard,
    ReadMoreCard: ReadMoreCard,
    NightModeToggleCard: NightModeToggleCard,
  };

  const filteredAndOrderedCards = () => {
    if (activeSection === 'all') return cards;
    return [
      ...cards.filter((card) => card.section === activeSection),
      ...cards.filter((card) => card.section !== activeSection),
    ];
  };

  const handleDragStart = ({ active }) => {
    setActiveCard(cards.find((card) => card.id === active.id));
  };

  const handleDragEnd = ({ active, over }) => {
    setActiveCard(null);
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
      <DndContext 
        collisionDetection={closestCenter} 
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Navigation setActiveSection={setActiveSection} />
        <div className="dynamic-grid-container">
          <SortableContext items={filteredAndOrderedCards().map((card) => card.id)}>
            {filteredAndOrderedCards().map((card) => (
              <SortableItem
                key={card.id}
                id={card.id}
                isActive={card.section === activeSection || activeSection === 'all'}
              >
                {React.createElement(cardTypeToComponent[card.type], card)}
              </SortableItem>
            ))}
          </SortableContext>
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeCard ? React.createElement(cardTypeToComponent[activeCard.type], activeCard) : null}
        </DragOverlay>
      </DndContext>
    </DarkModeProvider>
  );
}


const SortableItem = ({ id, children, isActive }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : 'none',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    zIndex: isDragging ? 10 : undefined,
    filter: isActive ? 'none' : 'blur(5px)',
    opacity: isDragging ? 0.5 : isActive ? 1 : 0.7, 
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`grid-item ${isDragging ? 'dragging' : ''}`}
    >
      {children}
      {isDragging && (
        <div
          className="placeholder"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light shadow effect
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', // Shadow for placeholder
            borderRadius: '8px', // Match card shape
          }}
        />
      )}
    </div>
  );
};


export default App;