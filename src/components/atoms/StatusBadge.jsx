import React from "react";

const StatusBadge = ({ children = "In progress" }) => (
  <span className="rounded-full border border-progress/35 px-2 py-px text-[11px] font-semibold uppercase tracking-[0.06em] text-progress">
    {children}
  </span>
);

export default StatusBadge;
