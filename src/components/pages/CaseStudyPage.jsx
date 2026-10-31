import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { CaseStudyLayout } from "../templates";
import { CaseStudyHeader, CaseStudySection } from "../organisms";
import { caseStudies } from "../../data/caseStudies";
import { profile } from "../../data/profile";

// Closing links, repeated after the write-up so readers don't scroll back up.
const ClosingLinks = ({ live, repo }) => (
  <div className="mt-8 flex flex-wrap gap-x-8">
    {[
      live && { label: "Open the live app", href: live },
      repo && { label: "View the repository", href: repo },
    ]
      .filter(Boolean)
      .map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[44px] items-center gap-1 font-semibold"
        >
          {label}
          <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
  </div>
);

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = caseStudies[slug];

  useEffect(() => {
    if (study) document.title = `${study.title} · ${profile.name}`;
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  return (
    <CaseStudyLayout header={<CaseStudyHeader {...study} />}>
      {study.sections.map((section) => (
        <CaseStudySection key={section.title} section={section} />
      ))}
      <ClosingLinks live={study.live} repo={study.repo} />
    </CaseStudyLayout>
  );
};

export default CaseStudyPage;
