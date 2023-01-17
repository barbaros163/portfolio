import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/1.jpg";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Social Media Webseite" image={Proj1} />
        <ProjectItem />
      </div>
    </div>
  );
}

export default Projects;
