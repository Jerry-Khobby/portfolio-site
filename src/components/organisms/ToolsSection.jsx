import React from "react";
import { ContentSection, ToolGroup } from "../molecules";
import { toolGroups } from "../../data/tools";

const ToolsSection = () => (
  <ContentSection
    id="tools"
    title="Tools & technologies"
    intro="What I build with day to day. Hover over a logo to see its name."
  >
    <div className="flex flex-col gap-8">
      {toolGroups.map((group) => (
        <ToolGroup key={group.name} {...group} />
      ))}
    </div>
  </ContentSection>
);

export default ToolsSection;
