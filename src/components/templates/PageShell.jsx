import React from "react";
import { ThemeToggle } from "../atoms";
import { CursorEffects } from "../organisms";

// Full-height page on the herringbone paving (dark or light tile per theme),
// shaded towards the edges, with the pointer effects behind the content.
const PageShell = ({ children }) => (
  <div className="bg-paving relative min-h-screen overflow-x-clip bg-canvas text-body">
    <CursorEffects />
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(15,23,42,0)_35%,rgba(6,10,22,0.6)_100%)] light:bg-[radial-gradient(ellipse_at_50%_40%,rgba(236,240,244,0)_45%,rgba(100,116,139,0.16)_100%)]"
    />
    <ThemeToggle />
    <div className="relative z-[1]">{children}</div>
  </div>
);

export default PageShell;
