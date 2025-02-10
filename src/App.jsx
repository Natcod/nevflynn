import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import ProfileCards from "./components/ProfileCards/ProfileCards";

import "./App.css"; // Global styles (optional)

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="app">
      <Navigation setActiveSection={setActiveSection} />
      <div className="content">
        {/* We'll add the sections (About, Projects, Media, All) here later */}
        <p>Active Section: {activeSection === "about" && <ProfileCards/>}</p>
      </div>
    </div>
  );
};

export default App;