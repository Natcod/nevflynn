import React from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import AvatarCard from '/src/components/ProfileCards/AvatarCard/AvatarCard';
import MapCard from '/src/components/ProfileCards/MapCard/MapCard';
import TwitterCard from '/src/components/ProfileCards/TwitterCard/TwitterCard';
import ProjectCard from '/src/components/ProjectsSection/ProjectCard/ProjectCard';
import SpotifyCard from '/src/components/MediaSection/SpotifyCard/SpotifyCard';
import SubscribeCard from '/src/components/MediaSection/SubscribeCard/SubscribeCard';
import ReadMoreCard from '/src/components/MediaSection/ReadMoreCard/ReadMoreCard';
import './MediaSection.css';

const MediaSection = ({ cards }) => {
  const cardComponents = {
  AvatarCard: AvatarCard,
  MapCard: MapCard,
  TwitterCard: TwitterCard,
  ProjectCard: ProjectCard,
  SpotifyCard: SpotifyCard,
  SubscribeCard: SubscribeCard,
  ReadMoreCard: ReadMoreCard,
  };

  return (
    <div className="media-section">
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

export default MediaSection;