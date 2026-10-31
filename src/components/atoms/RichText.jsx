import React from "react";
import Highlight from "./Highlight";

// Renders a plain string, turning **phrases** into highlighted text.
const RichText = ({ children }) =>
  children
    .split(/(\*\*[^*]+\*\*)/)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <Highlight key={i}>{part.slice(2, -2)}</Highlight>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );

export default RichText;
