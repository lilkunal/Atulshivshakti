import { THEME_META, useTheme, type SiteTheme } from "../context/ThemeContext";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  const options: SiteTheme[] = ["cosmic", "temple"];

  if (compact) {
    return (
      <div
        className="flex rounded-full border border-sacred-gold/25 bg-cosmic-mist/50 p-0.5"
        role="group"
        aria-label="Choose website theme"
      >
        {options.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTheme(id)}
            aria-pressed={theme === id}
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition sm:px-3 sm:text-xs ${
              theme === id
                ? "bg-sacred-gold text-cosmic shadow-sm"
                : "text-ivory-muted hover:text-ivory"
            }`}
          >
            {id === "cosmic" ? "🌙" : "☀️"}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className="glass-card flex flex-col gap-2 rounded-2xl p-3 sm:flex-row sm:items-center sm:gap-3"
      role="group"
      aria-label="Choose website theme"
    >
      <p className="text-xs font-medium text-sacred-gold uppercase tracking-wider">
        Preview Themes
      </p>
      <div className="flex flex-1 gap-2">
        {options.map((id) => {
          const meta = THEME_META[id];
          const active = theme === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTheme(id)}
              aria-pressed={active}
              className={`theme-option flex min-h-[44px] flex-1 flex-col items-start rounded-xl px-3 py-2 text-left transition ${
                active
                  ? "bg-sacred-gold text-cosmic ring-2 ring-sacred-gold-light"
                  : "border border-sacred-gold/20 text-ivory-muted hover:border-sacred-gold/40 hover:text-ivory"
              }`}
            >
              <span className="text-sm font-semibold">{meta.label}</span>
              <span className={`text-[10px] ${active ? "text-cosmic/70" : "text-ivory-muted"}`}>
                {meta.hindi}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ThemeDemoBar() {
  const { theme } = useTheme();
  const meta = THEME_META[theme];

  return (
    <div className="theme-demo-bar fixed top-0 right-0 left-0 z-[60] hidden border-b border-sacred-gold/15 bg-cosmic-light/95 backdrop-blur-md md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
        <p className="text-xs text-ivory-muted">
          <span className="font-semibold text-sacred-gold">Demo:</span> 2 themes —{" "}
          <span className="text-ivory">{meta.label}</span> active
        </p>
        <ThemeToggle compact />
      </div>
    </div>
  );
}
