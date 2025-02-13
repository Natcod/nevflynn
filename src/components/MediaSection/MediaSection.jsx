import React from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import SpotifyCard from './SpotifyCard/SpotifyCard';
import SubscribeCard from './SubscribeCard/SubscribeCard';
import ReadMoreCard from './ReadMoreCard/ReadMoreCard';
import './MediaSection.css';

const MediaSection = ({ cards }) => {
  const cardComponents = {
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