import React from "react";
import PageShell from "./PageShell";

// Single readable column for long-form project write-ups.
const CaseStudyLayout = ({ header, children }) => (
  <PageShell>
    <div className="mx-auto max-w-[860px] px-6 pb-24 pt-[72px]">
      {header}
      <main>{children}</main>
    </div>
  </PageShell>
);

export default CaseStudyLayout;
