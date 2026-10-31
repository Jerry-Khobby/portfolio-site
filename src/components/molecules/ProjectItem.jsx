import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { CodeThumb, ProjectShot, StatusBadge } from "../atoms";
import ListRow from "./ListRow";
import TagList from "./TagList";

const Arrow = () => (
  <FiArrowUpRight
    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
    aria-hidden="true"
  />
);

// The title opens the case study if there is one, else the live site, else
// the repo. Internal routes use the router; external links open a new tab.
const ProjectTitle = ({ title, caseStudy, external }) => {
  if (caseStudy) {
    return (
      <Link to={caseStudy} className={ListRow.linkClass}>
        {title}
        <Arrow />
      </Link>
    );
  }
  if (external) {
    return (
      <a href={external} target="_blank" rel="noreferrer" className={ListRow.linkClass}>
        {title}
        <Arrow />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return <ListRow.TitleText>{title}</ListRow.TitleText>;
};

// Links not used by the title, e.g. "Live site" and "Source code" under a
// case study. They sit above the row's stretched title link so each one
// stays clickable on its own.
const SecondaryLinks = ({ links }) => (
  <ul className="relative z-10 m-0 mt-3 flex list-none flex-wrap gap-x-5 gap-y-1 p-0">
    {links.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-body hover:text-accent"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          {label}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </li>
    ))}
  </ul>
);

const ProjectItem = ({
  title,
  context,
  caseStudy,
  live,
  repo,
  image,
  thumb,
  blurb,
  status,
  tags,
  inProgress = false,
}) => {
  const external = caseStudy ? "" : live || repo;
  const secondary = [
    live && live !== external && { label: "Live site", href: live, icon: FiExternalLink },
    repo && repo !== external && { label: "Source code", href: repo, icon: FiGithub },
  ].filter(Boolean);

  return (
    <ListRow
      aside={
        image ? (
          <ProjectShot src={image} alt={`${title} home page`} />
        ) : (
          <CodeThumb>{thumb}</CodeThumb>
        )
      }
      gap="gap-x-6 gap-y-4"
      interactive={Boolean(caseStudy || external)}
    >
      <ListRow.Title>
        <ProjectTitle title={title} caseStudy={caseStudy} external={external} />
        {inProgress && <StatusBadge />}
      </ListRow.Title>
      {context && <div className="text-sm text-body">{context}</div>}
      <p className="m-0 mt-2 text-[15px]">{blurb}</p>
      {status && <p className="m-0 mt-2 text-sm text-soft">{status}</p>}
      {secondary.length > 0 && <SecondaryLinks links={secondary} />}
      <TagList tags={tags} />
    </ListRow>
  );
};

export default ProjectItem;
