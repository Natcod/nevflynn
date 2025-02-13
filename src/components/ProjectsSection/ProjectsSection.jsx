import React from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ProjectCard from './ProjectCard/ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = ({ cards }) => {
  return (
    <div className="projects-section">
      <SortableContext items={cards.map((card) => card.id)}>
        {cards.map((card) => (
          <SortableItem key={card.id} id={card.id}>
            <ProjectCard {...card} />
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