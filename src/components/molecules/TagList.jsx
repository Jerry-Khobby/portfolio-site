import React from "react";
import { Tag } from "../atoms";

const TagList = ({ tags, label = "Technologies" }) => (
  <ul aria-label={label} className="m-0 mt-3.5 flex list-none flex-wrap gap-2 p-0">
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </ul>
);

export default TagList;
