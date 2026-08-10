import { useState } from "react";
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

  return (
    <header className="site-header fixed z-50 w-full border-b border-sacred-gold/10 bg-cosmic/90 backdrop-blur-xl">
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
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-ivory xl:hidden"
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
          className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-sacred-gold/10 bg-cosmic-light px-4 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <div className="mb-4 md:hidden">
            <ThemeToggle />
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block min-h-[44px] py-3 text-ivory-muted hover:text-sacred-gold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Namaste Atul Ji, I want to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex min-h-[48px] items-center justify-center rounded-full bg-sacred-gold text-sm font-semibold text-cosmic"
          >
            Book Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
