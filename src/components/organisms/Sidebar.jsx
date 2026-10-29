import React from "react";
import { CvDownloads, SectionNav, SocialLinks } from "../molecules";
import { profile } from "../../data/profile";

const Sidebar = ({ nav, active, onSelect }) => (
  // On desktop the sidebar is pinned at viewport height and tightens its
  // spacing on short screens. On very short ones it can still be wheel-
  // scrolled, but no scrollbar is drawn.
  <header className="min-w-0 flex-[1_1_440px] py-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-24 lg:short:py-10 lg:tiny:py-7lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
    <div>
      <h1 className="m-0 text-[clamp(38px,4.4vw,52px)] lg:tiny:text-[40px] font-bold leading-[1.08] tracking-[-0.025em] text-heading">
        {profile.name}
      </h1>
      <p className="m-0 mt-3.5 text-xl font-medium tracking-[-0.01em] text-heading">
        {profile.title}
      </p>
      <p className="m-0 mt-4 max-w-[320px] text-[17px] leading-[1.55]">{profile.tagline}</p>
      <CvDownloads />
      <SectionNav items={nav} active={active} onSelect={onSelect} />
    </div>
    <SocialLinks />
  </header>
);

export default Sidebar;
