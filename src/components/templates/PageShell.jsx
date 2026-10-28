import React from "react";
import { CursorEffects } from "../organisms";

// Full-height dark page with the pointer effects behind the content.
const PageShell = ({ children }) => (
  <div className="relative min-h-screen bg-canvas text-body">
    <CursorEffects />
    <div className="relative z-[1]">{children}</div>
  </div>
);

export default PageShell;
