import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableComponent = ({
  id,
  type,
  index,
  moveCard,
  moveCardBetweenSections,
}) => {
  const [, drag] = useDrag(() => ({
    type: "CARD",
    item: { id, type, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "CARD",
    hover(item, monitor) {
      if (!item) return;
      if (item.index === index && item.type === type) return;

      if (item.type === type) {
        moveCard(item.index, index);
      } else {
        moveCardBetweenSections(item.id, item.type, type, index);
      }
    },
  }));

  return (
    <div ref={(node) => drag(drop(node))} className="card">
      {/* Render card content here */}
      <p>{id}</p>
    </div>
  );
};

export default DraggableComponent;