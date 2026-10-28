import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { MetaList } from "../molecules";
import { profile } from "../../data/profile";

const CaseStudyHeader = ({ title, summary, meta }) => (
  <header>
    <Link
      to="/"
      className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-accent hover:text-heading"
    >
      <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
      {profile.name}
    </Link>
    <h1 className="m-0 mt-6 text-[clamp(40px,6vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] text-heading">
      {title}
    </h1>
    <p className="m-0 mt-4 max-w-[620px] text-[19px] text-soft">{summary}</p>
    <MetaList items={meta} />
  </header>
);

export default CaseStudyHeader;
