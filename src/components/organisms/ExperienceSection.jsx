import React from "react";
import { ContentSection, ExperienceItem } from "../molecules";
import { experience } from "../../data/experiences";

const ExperienceSection = () => (
  <ContentSection id="experience" title="Experience">
    <ol className="m-0 flex list-none flex-col gap-3 p-0">
      {experience.map((job) => (
        <ExperienceItem key={`${job.org}-${job.when}`} {...job} />
      ))}
    </ol>
  </ContentSection>
);

export default ExperienceSection;
