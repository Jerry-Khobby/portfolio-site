import React from "react";
import { SectionHeading } from "../atoms";

// A titled page section; `spacing` is the gap above it.
const ContentSection = ({ id, title, intro, spacing = "pt-28", children }) => (
  <section id={id} aria-label={title} className={`scroll-mt-6 ${spacing}`}>
    <SectionHeading className={intro ? "mb-2" : "mb-6"}>{title}</SectionHeading>
    {intro && <p className="m-0 mb-8 text-[15px]">{intro}</p>}
    {children}
  </section>
);

export default ContentSection;
