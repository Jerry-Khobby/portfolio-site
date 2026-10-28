import React from "react";
import { ContentSection, ListRow } from "../molecules";
import { certifications, education } from "../../data/education";

const EducationSection = () => (
  <ContentSection id="education" title="Education & certifications">
    <ol className="m-0 flex list-none flex-col gap-3 p-0">
      {education.map(({ when, title, body }) => (
        <ListRow key={title} aside={<ListRow.Date>{when}</ListRow.Date>}>
          <ListRow.Title>
            <ListRow.TitleText>{title}</ListRow.TitleText>
          </ListRow.Title>
          <p className="m-0 mt-2 text-[15px]">{body}</p>
        </ListRow>
      ))}
      <ListRow aside={<ListRow.Date>Certified</ListRow.Date>}>
        <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
          {certifications.map((cert) => (
            <li key={cert} className="font-medium text-heading">
              {cert}
            </li>
          ))}
        </ul>
      </ListRow>
    </ol>
  </ContentSection>
);

export default EducationSection;
