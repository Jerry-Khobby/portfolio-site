import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { CodeThumb, ProjectShot, StatusBadge } from "../atoms";
import ListRow from "./ListRow";
import TagList from "./TagList";

const Arrow = () => (
  <FiArrowUpRight
    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
    aria-hidden="true"
  />
);

// Internal case studies use the router; external links (live site or repo)
// open in a new tab.
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

// Secondary link to the source when the title already points at a live site.
// It sits above the row's stretched title link so it stays clickable.
const SourceLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="relative z-10 mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-accent"
  >
    <FiGithub className="h-4 w-4" aria-hidden="true" />
    Source code
    <span className="sr-only">(opens in a new tab)</span>
  </a>
);

const ProjectItem = ({
  title,
  context,
  caseStudy,
  href,
  repo,
  image,
  thumb,
  blurb,
  status,
  tags,
  inProgress = false,
}) => (
  <ListRow
    aside={
      image ? <ProjectShot src={image} alt={`${title} home page`} /> : <CodeThumb>{thumb}</CodeThumb>
    }
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
    {repo && <SourceLink href={repo} />}
    <TagList tags={tags} />
  </ListRow>
);

export default ProjectItem;
