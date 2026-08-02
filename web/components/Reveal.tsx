"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Drives the scroll reveal for every `.rise` / `.rise-far` element on the page.
 *
 * One observer for the whole document rather than a wrapper component per
 * element, so the sections themselves stay Server Components. Re-runs on
 * route change because the new page's elements are fresh nodes.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rise, .rise-far");
    if (!els.length) return;

    // Respect reduced motion: mark everything seen and skip the observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("seen"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
          el.classList.add("seen");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
