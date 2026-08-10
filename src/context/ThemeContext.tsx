import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SiteTheme = "cosmic" | "temple";

type ThemeContextValue = {
  theme: SiteTheme;
  setTheme: (theme: SiteTheme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "atul-shiv-shakti-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "temple" ? "temple" : "cosmic";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (next: SiteTheme) => setThemeState(next);

  const toggleTheme = () =>
    setThemeState((current) => (current === "cosmic" ? "temple" : "cosmic"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export const THEME_META: Record<
  SiteTheme,
  { label: string; hindi: string; description: string }
> = {
  cosmic: {
    label: "Cosmic Night",
    hindi: "रात्रि आकाश",
    description: "Premium dark theme — cosmic indigo & gold",
  },
  temple: {
    label: "Temple Dawn",
    hindi: "मंदिर प्रभात",
    description: "Warm light theme — ivory, saffron & maroon",
  },
};
