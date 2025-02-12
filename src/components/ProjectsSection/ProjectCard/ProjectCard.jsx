import React, { useContext } from 'react';
import "./ProjectCard.css";
import { DarkModeContext } from '../../DarkModeContext/DarkModeContext';

const ProjectCard = ({ image, link, isHorizontal }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
<div className={`project-card ${isHorizontal ? "horizontal" : "vertical"} ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Project Image */}
      <div className="project-image" style={{ backgroundImage: `url(${image})` }}></div>

      {/* Share Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="share-link"
      >
        <span role="img" aria-label="share">🔗</span> {/* Share icon */}
      </a>
    </div>
  );
};

export default ProjectCard;