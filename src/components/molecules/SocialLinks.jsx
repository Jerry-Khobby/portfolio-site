import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { IconLink } from "../atoms";
import { profile, socials } from "../../data/profile";

const links = [
  { label: "GitHub", href: socials.github, icon: FiGithub, external: true },
  { label: "LinkedIn", href: socials.linkedin, icon: FiLinkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
  { label: "Phone", href: `tel:${profile.phone}`, icon: FiPhone },
];

const SocialLinks = () => (
  <ul aria-label="Links" className="m-0 -ml-2.5 mt-8 flex list-none items-center gap-2 p-0 lg:mt-12 lg:short:mt-6 lg:tiny:mt-3">
    {links
      .filter((link) => link.href)
      .map((link) => (
        <li key={link.label}>
          <IconLink {...link} />
        </li>
      ))}
  </ul>
);

export default SocialLinks;
