import React from "react";

// Left-to-right architecture strip; the last step is highlighted as the destination.
const FlowDiagram = ({ steps, firstArrow = "→", returnNote }) => (
  <figure className="m-0 rounded-[10px] border border-line bg-panel p-6">
    <ol
      aria-label="Data flow"
      className="m-0 flex list-none flex-wrap items-center gap-2.5 p-0 font-mono text-[13px]"
    >
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <React.Fragment key={step}>
            {i > 0 && (
              <li aria-hidden="true" className="text-accent">
                {i === 1 ? firstArrow : "→"}
              </li>
            )}
            <li
              className={`rounded-md border px-3.5 py-2.5 ${
                last ? "border-accent text-accent" : "border-line-strong text-heading"
              }`}
            >
              {step}
            </li>
          </React.Fragment>
        );
      })}
    </ol>
    {returnNote && (
      <figcaption className="m-0 mt-4 font-mono text-[13px]">
        <span className="text-accent" aria-hidden="true">
          ←{" "}
        </span>
        {returnNote}
      </figcaption>
    )}
  </figure>
);

export default FlowDiagram;
