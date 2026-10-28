import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const stateColor = {
  done: "text-accent",
  next: "text-progress",
};

const ProgressList = ({ items, repo }) => (
  <>
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {items.map(({ state, text }) => (
        <li key={text} className="flex gap-3.5">
          <span className={`shrink-0 basis-11 font-mono text-[13px] ${stateColor[state]}`}>
            {state}
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
    {repo && (
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex min-h-[44px] items-center gap-1 font-semibold"
      >
        View the repository
        <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
  </>
);

export default ProgressList;
