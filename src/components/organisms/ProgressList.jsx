import React from "react";

const labelColor = {
  next: "text-progress",
};

// List with a short monospace label per line ("done", "next", "96"…).
const ProgressList = ({ items }) => (
  <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
    {items.map(({ state, text }) => (
      <li key={text} className="flex gap-3.5">
        <span
          className={`shrink-0 basis-11 font-mono text-[13px] ${labelColor[state] || "text-accent"}`}
        >
          {state}
        </span>
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

export default ProgressList;
