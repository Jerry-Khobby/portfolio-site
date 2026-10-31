import React from "react";
import { RichText } from "../atoms";
import { ContentSection, FlowDiagram, StatGrid } from "../molecules";
import DecisionsList from "./DecisionsList";
import LayersList from "./LayersList";
import ProgressList from "./ProgressList";

// One titled block of a case study, described by data (see src/data/caseStudies).
const renderBody = (section) => {
  switch (section.type) {
    case "text":
      return section.paragraphs.map((text, i) => (
        <p key={i} className={`m-0 ${i > 0 ? "mt-4" : ""}`}>
          <RichText>{text}</RichText>
        </p>
      ));
    case "flow":
      return <FlowDiagram {...section.flow} />;
    case "stats":
      return <StatGrid items={section.items} />;
    case "rows":
      return <LayersList layers={section.items} />;
    case "points":
      return <DecisionsList decisions={section.items} />;
    case "labeled":
      return <ProgressList items={section.items} />;
    default:
      return null;
  }
};

const CaseStudySection = ({ section }) => (
  <ContentSection title={section.title} spacing="pt-16" headingGap="mb-5">
    {section.intro && (
      <p className="m-0 mb-5">
        <RichText>{section.intro}</RichText>
      </p>
    )}
    {renderBody(section)}
  </ContentSection>
);

export default CaseStudySection;
