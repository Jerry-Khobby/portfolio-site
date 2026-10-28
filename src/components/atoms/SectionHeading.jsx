import React from "react";

const SectionHeading = ({ children, className = "mb-6" }) => (
  <h2
    className={`m-0 text-[13px] font-bold uppercase tracking-eyebrow text-heading ${className}`}
  >
    {children}
  </h2>
);

export default SectionHeading;
