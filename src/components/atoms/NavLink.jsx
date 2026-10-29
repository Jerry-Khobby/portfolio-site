import React from "react";

// Sidebar section link: a line that grows on hover and when active.
const NavLink = ({ href, active, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    aria-current={active ? "true" : undefined}
    className="group inline-flex min-h-[44px] items-center gap-4 lg:short:min-h-[32px] lg:tiny:min-h-[28px]"
  >
    <span
      className={`h-px transition-all duration-200 group-hover:w-16 group-hover:bg-heading ${
        active ? "w-16 bg-heading" : "w-8 bg-muted"
      }`}
    />
    <span
      className={`text-xs font-bold uppercase tracking-eyebrow transition-colors group-hover:text-heading ${
        active ? "text-heading" : "text-body"
      }`}
    >
      {children}
    </span>
  </a>
);

export default NavLink;
