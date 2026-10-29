import React from "react";

// Two-column list entry: a narrow aside (date, thumbnail, folder) and the content.
// Only `interactive` rows (ones whose title is a link) react to hover; the title
// link is stretched over the whole row so the entire card is clickable.
const ListRow = ({ aside, children, interactive = false, gap = "gap-x-6 gap-y-2" }) => (
  <li
    className={`-mx-5 flex flex-wrap rounded-lg p-5 ${gap} ${
      interactive
        ? "group relative transition-colors duration-200 hover:bg-line/55 has-[a:focus-visible]:bg-line/55 has-[a:focus-visible]:ring-1 has-[a:focus-visible]:ring-accent/60"
        : ""
    }`}
  >
    <div className="min-w-0 shrink-0 basis-[148px]">{aside}</div>
    <div className="min-w-0 flex-[1_1_300px]">{children}</div>
  </li>
);

const RowDate = ({ children }) => (
  <div className="whitespace-nowrap pt-0.5 text-xs font-semibold uppercase tracking-[0.04em] text-body">
    {children}
  </div>
);

const RowTitle = ({ children }) => (
  <h3 className="m-0 flex flex-wrap items-center gap-2.5 text-base font-semibold leading-snug">
    {children}
  </h3>
);

const RowTitleText = ({ children }) => <span className="text-heading">{children}</span>;

// Classes for a title link inside an interactive row: the ::after overlay
// covers the row, so clicking anywhere on it follows the link.
const rowLinkClass =
  "inline-flex items-center gap-1 text-heading outline-none transition-colors after:absolute after:inset-0 after:rounded-lg after:content-[''] group-hover:text-accent";

ListRow.Date = RowDate;
ListRow.Title = RowTitle;
ListRow.TitleText = RowTitleText;
ListRow.linkClass = rowLinkClass;

export default ListRow;
