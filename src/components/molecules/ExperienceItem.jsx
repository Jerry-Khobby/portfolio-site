import React from "react";
import ListRow from "./ListRow";
import TagList from "./TagList";

const ExperienceItem = ({ when, role, org, where, body, tags }) => (
  <ListRow aside={<ListRow.Date>{when}</ListRow.Date>}>
    <ListRow.Title>
      <ListRow.TitleText>
        {role} · {org}
      </ListRow.TitleText>
    </ListRow.Title>
    <div className="text-sm text-body">{where}</div>
    <p className="m-0 mt-2 text-[15px]">{body}</p>
    <TagList tags={tags} />
  </ListRow>
);

export default ExperienceItem;
