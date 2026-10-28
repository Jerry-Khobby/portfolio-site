import React from "react";
import { ContentSection, ProjectItem } from "../molecules";
import { projects } from "../../data/projects";

const ProjectsSection = () => (
  <ContentSection id="projects" title="Projects">
    <ol className="m-0 flex list-none flex-col gap-3 p-0">
      {projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </ol>
  </ContentSection>
);

export default ProjectsSection;
