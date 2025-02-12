import React from 'react';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';
import Navigation from './components/Navigation/Navigation';
import ProfileCards from './components/ProfileCards/ProfileCards';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import MediaSection from './components/MediaSection/MediaSection';
import NightModeSection from './components/NightModeToggleCard/NightModeToggleCard';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = React.useState('all');

  return (
    <DarkModeProvider>
      <div className="app">
        <Navigation setActiveSection={setActiveSection} />
        <div className="content">
          {/* Render all sections when "All" is clicked */}
          {activeSection === 'all' && (
            <>
              <ProfileCards />
              <ProjectsSection />
              <MediaSection />
            </>
          )}
          {/* Render individual sections based on activeSection */}
          {activeSection === 'about' && <ProfileCards />}
          {activeSection === 'projects' && <ProjectsSection />}
          {activeSection === 'media' && <MediaSection />}
        </div>
        <NightModeSection />
      </div>
    </DarkModeProvider>
  );
};

export default App;