import React from "react";

const Tag = ({ children }) => (
  <li className="rounded-full bg-accent-tint px-3 py-1 text-xs font-medium leading-normal text-accent">
    {children}
  </li>
);

export default Tag;
