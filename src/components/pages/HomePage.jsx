import React from "react";
import { SplitLayout } from "../templates";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  NowBuildingSection,
  ProjectsSection,
  Sidebar,
  SiteFooter,
  ToolsSection,
} from "../organisms";
import useScrollSpy from "../../hooks/useScrollSpy";

const nav = [
  { id: "about", label: "About" },
  { id: "now", label: "Now building" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "tools", label: "Tools" },
];
const navIds = nav.map((n) => n.id);

const HomePage = () => {
  const [active, setActive] = useScrollSpy(navIds);

  return (
    <SplitLayout sidebar={<Sidebar nav={nav} active={active} onSelect={setActive} />}>
      <AboutSection />
      <NowBuildingSection />
      <ExperienceSection />
      <ProjectsSection />
      <ToolsSection />
      <EducationSection />
      <SiteFooter />
    </SplitLayout>
  );
};

export default HomePage;
