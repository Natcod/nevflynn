// components/Utils/SortableItem.jsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1, // Dim the card while dragging
    cursor: 'grab', // Change cursor to indicate draggable
    border: isDragging ? '2px dashed #ccc' : '1px solid transparent', // Add border on drag
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="sortable-item"
      onMouseEnter={() => console.log('Hovering over card')} // Optional: Log hover events
    >
      {children}
    </div>
  );
};

export default SortableItem;