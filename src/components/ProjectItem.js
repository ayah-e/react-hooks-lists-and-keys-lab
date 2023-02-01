import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techList = technologies.map(tech => (
    <span key = {tech}>{tech}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
