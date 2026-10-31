import React from "react";

// Headline numbers, e.g. "79 · API endpoints".
const StatGrid = ({ items }) => (
  <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
    {items.map(({ value, label }) => (
      <div key={label} className="rounded-[10px] border border-line bg-panel/70 px-5 py-4">
        <dt className="sr-only">{label}</dt>
        <dd className="m-0 text-[28px] font-bold leading-tight tracking-[-0.02em] text-heading">
          {value}
        </dd>
        <dd className="m-0 mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-body">
          {label}
        </dd>
      </div>
    ))}
  </dl>
);

export default StatGrid;
