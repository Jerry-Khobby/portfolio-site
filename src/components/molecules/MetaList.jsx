import React from "react";

const MetaList = ({ items }) => (
  <dl className="m-0 mt-10 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-5 border-y border-line py-6">
    {items.map(({ label, value, inProgress }) => (
      <div key={label}>
        <dt className="text-xs font-bold uppercase tracking-eyebrow text-heading">{label}</dt>
        <dd className={`m-0 mt-1.5 ${inProgress ? "text-progress" : ""}`}>{value}</dd>
      </div>
    ))}
  </dl>
);

export default MetaList;
