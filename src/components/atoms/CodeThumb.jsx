import React from "react";

// Small monospace "terminal card" used in place of project screenshots.
const CodeThumb = ({ children }) => (
  <div
    aria-hidden="true"
    className="h-[84px] w-[140px] shrink-0 whitespace-pre-line rounded-md border border-line-strong bg-panel px-3 py-2.5 font-mono text-[11px] leading-normal text-body"
  >
    {children}
  </div>
);

export default CodeThumb;
