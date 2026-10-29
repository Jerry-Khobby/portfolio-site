import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

// Fixed round button in the top-right corner that switches between the
// default blue theme and the white one.
const ThemeToggle = () => {
  const [theme, toggle] = useTheme();
  const isLight = theme === "light";
  const label = isLight ? "Switch to dark mode" : "Switch to light mode";
  const Icon = isLight ? FiMoon : FiSun;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-canvas/80 text-body shadow-sm backdrop-blur transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent lg:right-6 lg:top-6"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
