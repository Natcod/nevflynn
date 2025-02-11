import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import ProfileCards from "./components/ProfileCards/ProfileCards";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"; // Import ProjectsSection
// import MediaSection from "./components/MediaSection/MediaSection"; // Import MediaSection
import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("all");

  return (
    <div className="app">
      <Navigation setActiveSection={setActiveSection} />
      <div className="content">
        {/* Render all sections when "All" is clicked */}
        {activeSection === "all" && (
          <>
            <ProfileCards />
            <ProjectsSection />
            {/* <MediaSection /> */}
          </>
        )}

        {/* Render individual sections based on activeSection */}
        {activeSection === "about" && <ProfileCards />}
        {activeSection === "projects" && <ProjectsSection />}
        {/* {activeSection === "media" && <MediaSection />} */}
      </div>
    </div>
  );
};

export default App;