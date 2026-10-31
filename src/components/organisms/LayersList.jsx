import React from "react";
import { ListRow, TagList } from "../molecules";

const LayersList = ({ layers }) => (
  <ol className="m-0 flex list-none flex-col gap-3 p-0">
    {layers.map(({ dir, name, body, tags }) => (
      <ListRow
        key={dir}
        aside={<div className="pt-[3px] font-mono text-xs text-body">{dir}</div>}
      >
        <h3 className="m-0 text-base font-semibold text-heading">{name}</h3>
        <p className="m-0 mt-2 text-[15px]">{body}</p>
        {tags && <TagList tags={tags} />}
      </ListRow>
    ))}
  </ol>
);

export default LayersList;
