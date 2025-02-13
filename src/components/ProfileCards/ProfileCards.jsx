import React from 'react';
import { SortableContext } from '@dnd-kit/sortable';
import SortableItem from '../Utils/SortableItem';
import AvatarCard from './AvatarCard/AvatarCard';
import MapCard from './MapCard/MapCard';
import TwitterCard from './TwitterCard/TwitterCard';

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

export default ProfileCards;