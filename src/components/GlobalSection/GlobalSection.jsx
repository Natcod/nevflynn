import React from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import NightModeToggleCard from '../NightModeToggleCard/NightModeToggleCard';
import './GlobalSection.css';

// Mapping of card types to their respective components
const cardTypeToComponent = {
  NightModeToggleCard: NightModeToggleCard, // Add other global components here if needed
};

const GlobalSection = ({ cards }) => {
  return (
    <div className="global-section">
      <SortableContext items={cards.map((card) => card.id)}>
        {cards.map((card) => (
          <SortableItem key={card.id} id={card.id}>
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

export default GlobalSection;