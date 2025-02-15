import React from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './ProjectsSection.css';

// Import ProjectCard and other card components
import ProjectCard from '../ProjectsSection/ProjectCard/ProjectCard';
import AvatarCard from '../ProfileCards/AvatarCard/AvatarCard';
import MapCard from '../ProfileCards/MapCard/MapCard';
import TwitterCard from '../ProfileCards/TwitterCard/TwitterCard';
import SpotifyCard from '../MediaSection/SpotifyCard/SpotifyCard';
import SubscribeCard from '../MediaSection/SubscribeCard/SubscribeCard';
import ReadMoreCard from '../MediaSection/ReadMoreCard/ReadMoreCard';
import NightModeToggleCard from '../NightModeToggleCard/NightModeToggleCard';

// Mapping of card types to their respective components
const cardTypeToComponent = {
  ProjectCard: ProjectCard,
  AvatarCard: AvatarCard,
  MapCard: MapCard,
  TwitterCard: TwitterCard,
  SpotifyCard: SpotifyCard,
  SubscribeCard: SubscribeCard,
  ReadMoreCard: ReadMoreCard,
  NightModeToggleCard: NightModeToggleCard,
  
  // Add more card types as needed
};

const ProjectsSection = ({ cards }) => {
  return (
    <div className="projects-section">
      <SortableContext items={cards.map((card) => card.id)}>
        {cards.map((card) => (
          <SortableItem key={card.id} id={card.id}>
            {/* Dynamically render the correct component based on card type */}
            {cardTypeToComponent[card.type] ? (
              React.createElement(cardTypeToComponent[card.type], card)
            ) : (
              <div>Unknown Card Type</div>
            )}
          </SortableItem>
        ))}
      </SortableContext>
    </div>
  );
};

const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default ProjectsSection;