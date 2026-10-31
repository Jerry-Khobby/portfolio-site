import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { ButtonLink } from "../atoms";
import { MetaList } from "../molecules";
import { profile } from "../../data/profile";

const CaseStudyHeader = ({ title, summary, live, repo, image, meta }) => (
  <header>
    <Link
      to="/"
      className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-accent hover:text-accent"
    >
      <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
      {profile.name}
    </Link>
    <h1 className="m-0 mt-6 text-[clamp(40px,6vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] text-heading">
      {title}
    </h1>
    <p className="m-0 mt-4 max-w-[620px] text-[19px] text-soft">{summary}</p>
    {(live || repo) && (
      <div className="mt-7 flex flex-wrap gap-2.5">
        {live && (
          <ButtonLink href={live} target="_blank" rel="noreferrer" icon={FiExternalLink} variant="primary">
            Open the live app
          </ButtonLink>
        )}
        {repo && (
          <ButtonLink href={repo} target="_blank" rel="noreferrer" icon={FiGithub}>
            Source code
          </ButtonLink>
        )}
      </div>
    )}
    {image && (
      <img
        src={image}
        alt={`${title} home page`}
        width="1200"
        height="750"
        className="mt-10 block h-auto w-full rounded-[10px] border border-line-strong shadow-[0_24px_60px_-20px_rgba(2,6,23,0.6)]"
      />
    )}
    <MetaList items={meta} />
  </header>
);

export default CaseStudyHeader;
