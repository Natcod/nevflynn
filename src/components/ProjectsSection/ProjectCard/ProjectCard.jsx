import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, link, isHorizontal }) => {
  return (
    <div className={`project-card ${isHorizontal ? "horizontal" : "vertical"}`}>
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