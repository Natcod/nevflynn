import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndContext } from '@dnd-kit/core';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndContext>
    <App />
  </DndContext>
);