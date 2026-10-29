import React from "react";
import { FiDownload } from "react-icons/fi";
import { ButtonLink } from "../atoms";
import { cvs } from "../../data/profile";

const CvDownloads = () => (
  <div className="mt-7 flex flex-wrap gap-2.5 lg:short:mt-5">
    {cvs.map(({ label, href, primary }) => (
      <ButtonLink
        key={label}
        href={href}
        download
        icon={FiDownload}
        variant={primary ? "primary" : "secondary"}
      >
        {label}
      </ButtonLink>
    ))}
  </div>
);

export default CvDownloads;
