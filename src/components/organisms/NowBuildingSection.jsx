import React from "react";
import { ContentSection, ProjectItem } from "../molecules";
import { currentProjects } from "../../data/projects";

const NowBuildingSection = () => (
  <ContentSection id="now" title="Now building">
    <ol className="m-0 flex list-none flex-col gap-3 p-0">
      {currentProjects.map((project) => (
        <ProjectItem key={project.title} {...project} inProgress />
      ))}
    </ol>
  </ContentSection>
);

export default NowBuildingSection;
