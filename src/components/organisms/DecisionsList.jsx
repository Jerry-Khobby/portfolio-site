import React from "react";

const DecisionsList = ({ decisions }) => (
  <div className="flex flex-col gap-6">
    {decisions.map(({ title, body }) => (
      <div key={title}>
        <h3 className="m-0 text-base font-semibold text-heading">{title}</h3>
        <p className="m-0 mt-1.5 text-[15px]">{body}</p>
      </div>
    ))}
  </div>
);

export default DecisionsList;
