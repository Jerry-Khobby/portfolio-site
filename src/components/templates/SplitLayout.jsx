import React from "react";
import PageShell from "./PageShell";

// Sticky sidebar on the left (desktop), scrolling content on the right.
// Below 1024px the sidebar stacks above the content.
const SplitLayout = ({ sidebar, children }) => (
  <PageShell>
    <div className="mx-auto flex max-w-[1280px] flex-wrap gap-x-16 px-6">
      {sidebar}
      <main className="min-w-0 flex-[999_1_560px] pb-24 lg:pt-12">{children}</main>
    </div>
  </PageShell>
);

export default SplitLayout;
