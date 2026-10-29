import React from "react";

// A technology logo with a tooltip that shows on hover, keyboard focus or tap.
const ToolTile = ({ name, icon: Icon, color }) => (
  <li
    tabIndex={0}
    aria-label={name}
    className="group relative flex h-14 w-14 cursor-default items-center justify-center rounded-xl border border-line bg-tile outline-none transition-colors duration-200 hover:border-accent/70 hover:bg-tile-hover focus-visible:border-accent focus-visible:bg-tile-hover"
  >
    <Icon className="h-9 w-9" style={{ color }} aria-hidden="true" />
    <span
      role="tooltip"
      className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 -translate-x-1/2 translate-y-1.5 whitespace-nowrap rounded-md bg-heading px-2.5 py-[5px] text-xs font-semibold leading-snug text-canvas opacity-0 shadow-tip transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100"
    >
      {name}
    </span>
  </li>
);

export default ToolTile;
