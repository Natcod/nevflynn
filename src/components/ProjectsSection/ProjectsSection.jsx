import React, { useContext } from 'react';
import ProjectCard from "./ProjectCard/ProjectCard";
import "./ProjectsSection.css";
import { DarkModeContext } from '../DarkModeContext/DarkModeContext';

const ProjectsSection = () => {
  const projects = [
    {
      image: "/public/project1.png", // Path to project 1 image
      link: "https://example.com/project1", // Link to project 1
      isHorizontal: true, // First card is horizontal
    },
    {
      image: "/public/project2.png", // Path to project 2 image
      link: "https://example.com/project2", // Link to project 2
      isHorizontal: false, // Vertical layout
    },
    {
      image: "/public/project3.png", // Path to project 3 image
      link: "https://example.com/project3", // Link to project 3
      isHorizontal: false, // Vertical layout
    },
  ];
  
  const { isDarkMode } = useContext(DarkModeContext);
  
  return (
    <div className={`projects-section ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            link={project.link}
            isHorizontal={project.isHorizontal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;