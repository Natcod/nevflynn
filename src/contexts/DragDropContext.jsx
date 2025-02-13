import React, { createContext, useContext, useReducer } from 'react';

// Define the initial data model
const initialData = {
  profileCards: [
    { id: 'avatar-card', type: 'AvatarCard', content: 'Avatar Card' },
    { id: 'map-card', type: 'MapCard', content: 'Map Card' },
    { id: 'twitter-card', type: 'TwitterCard', content: 'Twitter Card' },
  ],
  projects: [
    { id: 'project-1', type: 'ProjectCard', image: '/public/project1.png', link: 'https://example.com/project1', isHorizontal: true },
    { id: 'project-2', type: 'ProjectCard', image: '/public/project2.png', link: 'https://example.com/project2', isHorizontal: false },
    { id: 'project-3', type: 'ProjectCard', image: '/public/project3.png', link: 'https://example.com/project3', isHorizontal: false },
  ],
  mediaCards: [
    { id: 'spotify-card', type: 'SpotifyCard', content: 'Spotify Card' },
    { id: 'subscribe-card', type: 'SubscribeCard', content: 'Subscribe Card' },
    { id: 'read-more-card', type: 'ReadMoreCard', content: 'Read More Card' },
  ],
};

// Define the reducer to handle updates
const dragDropReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CARDS': {
      const { destination, source, draggableId } = action.payload;
      if (!destination) return state;

      // Extract the card being moved
      const start = state[source.droppableId];
      const finish = state[destination.droppableId];

      if (start === finish) {
        // Same list reordering
        const newOrder = Array.from(start);
        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, start[source.index]);
        return {
          ...state,
          [source.droppableId]: newOrder,
        };
      } else {
        // Moving between lists
        const cardToRemove = start[source.index];
        const newStart = Array.from(start);
        newStart.splice(source.index, 1);

        const newFinish = Array.from(finish);
        newFinish.splice(destination.index, 0, cardToRemove);

        return {
          ...state,
          [source.droppableId]: newStart,
          [destination.droppableId]: newFinish,
        };
      }
    }
    default:
      return state;
  }
};

// Create the context
const DragDropContext = createContext();

// Provider component
export const DragDropProvider = ({ children }) => {
  const [cards, dispatch] = useReducer(dragDropReducer, initialData);

  return (
    <DragDropContext.Provider value={{ cards, dispatch }}>
      {children}
    </DragDropContext.Provider>
  );
};

// Custom hook to access the context
export const useDragDropContext = () => useContext(DragDropContext);