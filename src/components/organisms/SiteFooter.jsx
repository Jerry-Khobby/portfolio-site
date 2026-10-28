import React from "react";
import { profile } from "../../data/profile";

const SiteFooter = () => (
  <footer className="max-w-[440px] pt-24 text-sm text-body">
    <p className="m-0">
      Reach me at{" "}
      <a href={`mailto:${profile.email}`} className="font-medium">
        {profile.email}
      </a>{" "}
      or{" "}
      <a href={`tel:${profile.phone}`} className="font-medium">
        {profile.phoneDisplay}
      </a>
      . {profile.availability}
    </p>
  </footer>
);

export default SiteFooter;
