import React, { useEffect } from "react";
import { CaseStudyLayout } from "../templates";
import { CaseStudyHeader, DecisionsList, LayersList, ProgressList } from "../organisms";
import { ContentSection, FlowDiagram } from "../molecules";
import { Highlight } from "../atoms";
import { sikatrack } from "../../data/caseStudies/sikatrack";
import { profile } from "../../data/profile";

const SikaTrackPage = () => {
  useEffect(() => {
    document.title = `${sikatrack.title} · ${profile.name}`;
  }, []);

  return (
    <CaseStudyLayout header={<CaseStudyHeader {...sikatrack} />}>
      <ContentSection title="The problem" spacing="pt-16">
        <p className="m-0">
          Most everyday money in Ghana moves through mobile money. Budgeting apps like Mint
          and YNAB connect to banks, so they can't see it, and typing every payment in by
          hand is a habit nobody keeps.
        </p>
        <p className="m-0 mt-4">
          Every MoMo payment already sends an SMS. SikaTrack reads those messages, turns
          each into a transaction, sorts spending into categories, finds payments that
          charge every month and tracks budgets,{" "}
          <Highlight>with nothing entered by hand</Highlight>.
        </p>
      </ContentSection>

      <ContentSection title="How it fits together" spacing="pt-16">
        <FlowDiagram {...sikatrack.flow} />
      </ContentSection>

      <ContentSection title="The three layers" spacing="pt-16">
        <LayersList layers={sikatrack.layers} />
      </ContentSection>

      <ContentSection title="Decisions" spacing="pt-16">
        <DecisionsList decisions={sikatrack.decisions} />
      </ContentSection>

      <ContentSection title="Where it stands" spacing="pt-16">
        <ProgressList items={sikatrack.progress} repo={sikatrack.repo} />
      </ContentSection>
    </CaseStudyLayout>
  );
};

export default SikaTrackPage;
