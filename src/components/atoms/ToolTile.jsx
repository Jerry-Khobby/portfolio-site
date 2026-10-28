import React from "react";

// A technology logo with a tooltip that shows on hover and keyboard focus.
const ToolTile = ({ name, icon: Icon, color }) => (
  <li
    tabIndex={0}
    aria-label={name}
    className="group relative flex h-14 w-14 cursor-default items-center justify-center rounded-xl border border-line bg-tile outline-none transition duration-200 hover:-translate-y-[3px] hover:border-accent hover:bg-tile-hover focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-tile-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
  >
    <Icon className="h-9 w-9" style={{ color }} aria-hidden="true" />
    <span
      role="tooltip"
      className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 -translate-x-1/2 translate-y-1.5 whitespace-nowrap rounded-md bg-heading px-2.5 py-[5px] text-xs font-semibold leading-snug text-canvas opacity-0 shadow-tip transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
    >
      {name}
    </span>
  </li>
);

export default ToolTile;
