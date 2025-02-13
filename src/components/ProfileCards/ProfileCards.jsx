import React from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import AvatarCard from './AvatarCard/AvatarCard';
import MapCard from './MapCard/MapCard';
import TwitterCard from './TwitterCard/TwitterCard';
import './ProfileCards.css';

const ProfileCards = ({ cards }) => {
  const cardComponents = {
    AvatarCard: AvatarCard,
    MapCard: MapCard,
    TwitterCard: TwitterCard,
  };

  return (
    <div className="profile-cards">
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

export default ProfileCards;