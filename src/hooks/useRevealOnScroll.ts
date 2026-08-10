import { useEffect, useRef } from "react";

export function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold },
    );

    const elements = node.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useScrollSpy(sectionIds: string[]) {
  const activeId = useRef(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          activeId.current = id;
          document.querySelectorAll("[data-nav]").forEach((link) => {
            link.classList.toggle("text-sacred-gold", link.getAttribute("href") === `#${id}`);
            link.classList.toggle("text-ivory-muted", link.getAttribute("href") !== `#${id}`);
          });
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);
}
