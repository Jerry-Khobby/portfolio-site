import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const readTheme = () => document.documentElement.dataset.theme || "dark";

// Dark (blue) is the default; "light" switches to the white theme.
// The choice is stored so it survives reloads (see the inline script in
// public/index.html, which applies it before the first paint).
const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.dataset.theme = "light";
    else delete root.dataset.theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((current) => (current === "light" ? "dark" : "light")),
    []
  );

  return [theme, toggle];
};

export default useTheme;
