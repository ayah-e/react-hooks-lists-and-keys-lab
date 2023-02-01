import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectItems = projects.map((project) => {
    return <li key={project.id}> {project.name} </li> ;
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectItems}
        {/* render ProjectItem components here DONE!*/}
      </div>
    </div>
  );
}

export default ProjectList;
