import React from "react";

// Screenshot thumbnail for a shipped project, the same size as CodeThumb.
const ProjectShot = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    width="140"
    height="84"
    className="h-[84px] w-[140px] shrink-0 rounded-md border border-line-strong object-cover object-top transition-colors duration-200 group-hover:border-accent/60"
  />
);

export default ProjectShot;
