import React from "react";
import { ToolTile } from "../atoms";

const ToolGroup = ({ name, tools }) => (
  <div>
    <h3 className="m-0 mb-3.5 text-sm font-semibold text-soft">{name}</h3>
    <ul aria-label={name} className="m-0 flex list-none flex-wrap gap-3 p-0">
      {tools.map((tool) => (
        <ToolTile key={tool.name} {...tool} />
      ))}
    </ul>
  </div>
);

export default ToolGroup;
