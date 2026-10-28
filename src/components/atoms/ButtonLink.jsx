import React from "react";

const variants = {
  primary: "border-accent text-accent hover:bg-accent/10",
  secondary: "border-line-strong text-heading hover:border-accent",
};

const ButtonLink = ({ href, icon: Icon, variant = "secondary", children, ...rest }) => (
  <a
    href={href}
    className={`inline-flex min-h-[44px] items-center gap-2 rounded-md border px-[18px] text-sm font-semibold ${variants[variant]}`}
    {...rest}
  >
    {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
    {children}
  </a>
);

export default ButtonLink;
