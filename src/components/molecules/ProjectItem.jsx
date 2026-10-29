import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { CodeThumb, StatusBadge } from "../atoms";
import ListRow from "./ListRow";
import TagList from "./TagList";

const Arrow = () => (
  <FiArrowUpRight
    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
    aria-hidden="true"
  />
);

// Internal case studies use the router; external repos open in a new tab.
const ProjectTitle = ({ title, caseStudy, href }) => {
  if (caseStudy) {
    return (
      <Link to={caseStudy} className={ListRow.linkClass}>
        {title}
        <Arrow />
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={ListRow.linkClass}>
        {title}
        <Arrow />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return <ListRow.TitleText>{title}</ListRow.TitleText>;
};

const ProjectItem = ({
  title,
  context,
  caseStudy,
  href,
  thumb,
  blurb,
  status,
  tags,
  inProgress = false,
}) => (
  <ListRow
    aside={<CodeThumb>{thumb}</CodeThumb>}
    gap="gap-x-6 gap-y-4"
    interactive={Boolean(caseStudy || href)}
  >
    <ListRow.Title>
      <ProjectTitle title={title} caseStudy={caseStudy} href={href} />
      {inProgress && <StatusBadge />}
    </ListRow.Title>
    {context && <div className="text-sm text-body">{context}</div>}
    <p className="m-0 mt-2 text-[15px]">{blurb}</p>
    {status && <p className="m-0 mt-2 text-sm text-soft">{status}</p>}
    <TagList tags={tags} />
  </ListRow>
);

export default ProjectItem;
