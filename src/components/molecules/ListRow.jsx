import React from "react";

// Two-column list entry: a narrow aside (date, thumbnail, folder) and the content.
// Rows highlight on hover; descendants can react with `group-hover:`.
const ListRow = ({ aside, children, gap = "gap-x-6 gap-y-2" }) => (
  <li
    className={`group -mx-5 flex flex-wrap rounded-lg p-5 transition-colors duration-200 hover:bg-line/55 ${gap}`}
  >
    <div className="shrink-0 basis-[140px]">{aside}</div>
    <div className="min-w-0 flex-[1_1_300px]">{children}</div>
  </li>
);

const RowDate = ({ children }) => (
  <div className="pt-0.5 text-xs font-semibold uppercase tracking-[0.06em] text-body">
    {children}
  </div>
);

const RowTitle = ({ children }) => (
  <h3 className="m-0 flex flex-wrap items-center gap-2.5 text-base font-semibold leading-snug">
    {children}
  </h3>
);

const RowTitleText = ({ href, external = false, children }) => {
  const className = "text-heading transition-colors group-hover:text-accent";
  if (!href) return <span className={className}>{children}</span>;
  return (
    <a
      href={href}
      className={className}
      {...(external && { target: "_blank", rel: "noreferrer" })}
    >
      {children}
    </a>
  );
};

ListRow.Date = RowDate;
ListRow.Title = RowTitle;
ListRow.TitleText = RowTitleText;

export default ListRow;
