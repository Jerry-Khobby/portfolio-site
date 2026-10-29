import React from "react";
import { NavLink } from "../atoms";

const SectionNav = ({ items, active, onSelect }) => (
  <nav aria-label="Sections" className="mt-16 hidden lg:block lg:short:mt-8 lg:tiny:mt-5">
    <ul className="m-0 flex list-none flex-col gap-1 p-0">
      {items.map(({ id, label }) => (
        <li key={id}>
          <NavLink href={`#${id}`} active={id === active} onClick={() => onSelect?.(id)}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default SectionNav;
