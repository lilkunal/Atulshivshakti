import { useEffect, useState } from "react";
import { BRAND, whatsappLink } from "../data/site";
import { asset } from "../lib/assets";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#kundli", label: "Kundli" },
  { href: "#panchang", label: "Panchang" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-cosmic/70 backdrop-blur-sm xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <header className="site-header fixed z-50 w-full border-b border-sacred-gold/10 bg-cosmic/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6">
        <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src={asset("assets/logo.png")} alt="" className="h-9 w-9 shrink-0 rounded-full sm:h-10 sm:w-10" />
          <div className="min-w-0">
            <p className="truncate font-display text-base font-semibold leading-tight text-ivory sm:text-lg">
              {BRAND.name}
            </p>
            <p className="truncate text-[10px] tracking-widest text-sacred-gold uppercase sm:text-xs">
              {BRAND.tagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-nav
              className="text-sm text-ivory-muted transition-colors hover:text-sacred-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <ThemeToggle compact />
          </div>
          <a
            href={whatsappLink("Namaste Atul Ji, I want to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center rounded-full bg-sacred-gold px-4 py-2 text-sm font-semibold text-cosmic transition hover:bg-sacred-gold-light sm:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-sacred-gold/20 bg-cosmic-mist/40 text-ivory transition hover:border-sacred-gold/40 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="fixed right-0 left-0 z-50 max-h-[calc(100dvh-var(--site-top-offset)-env(safe-area-inset-top,0px))] overflow-y-auto border-t border-sacred-gold/15 bg-cosmic-light/98 shadow-2xl backdrop-blur-xl xl:hidden"
          style={{ top: "calc(var(--site-top-offset) + env(safe-area-inset-top, 0px))" }}
          aria-label="Mobile"
        >
          <div className="mx-auto max-w-7xl px-4 py-5">
            <div className="mb-5 rounded-2xl border border-sacred-gold/15 bg-cosmic-mist/30 p-3">
              <p className="mb-2 text-[11px] font-semibold tracking-wider text-sacred-gold uppercase">
                Preview theme
              </p>
              <ThemeToggle />
            </div>
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-[48px] items-center rounded-xl px-3 text-base text-ivory-muted transition hover:bg-sacred-gold/10 hover:text-sacred-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={whatsappLink("Namaste Atul Ji, I want to book a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex min-h-[48px] items-center justify-center rounded-full bg-sacred-gold text-sm font-semibold text-cosmic transition hover:bg-sacred-gold-light"
            >
              Book Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
    </>
  );
}
