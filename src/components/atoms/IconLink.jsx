import React from "react";

const IconLink = ({ href, label, icon: Icon, external = false }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    className="flex h-11 w-11 items-center justify-center text-body"
    {...(external && { target: "_blank", rel: "noreferrer" })}
  >
    <Icon className="h-6 w-6" aria-hidden="true" />
  </a>
);

export default IconLink;
