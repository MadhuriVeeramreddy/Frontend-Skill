"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close on route change, on Escape, and when the viewport reaches desktop —
  // otherwise the panel is stranded open with no button to close it.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onWide = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  const current = (href: string) =>
    pathname === href || pathname.startsWith(href + "/") ? "page" : undefined;

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--rule)] bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-shell items-center gap-6 px-6 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Clear space (cap-height of the A) is enforced here, not baked into the file */}
        <Link
          href="/"
          className="flex-none justify-self-start py-1 pr-2 transition-opacity duration-300 hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-badge.png"
            alt="A.M.A"
            width={321}
            height={172}
            className="h-10 w-auto rounded-lg"
          />
        </Link>

        <nav
          className="hidden items-center gap-2 text-[.9375rem] lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navlink"
              aria-current={current(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0 lg:justify-self-end">
          {/* Search and the CTA are desktop-only; phones get the menu button. */}
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 place-items-center rounded-full border border-[color:var(--rule)] lg:grid"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>

          <Link href="/contact" className="btn btn-ink hidden lg:inline-flex">
            Ask us anything{" "}
            <span className="arw" aria-hidden="true">
              →
            </span>
          </Link>

          <button
            ref={btnRef}
            type="button"
            className="menu-btn grid h-10 w-10 place-items-center rounded-full border border-[color:var(--rule)] transition-transform duration-300 active:scale-95 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="icon-open"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              className="icon-close"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Phone navigation. The links live only here below 1024px, so the
          button has to open something real rather than sit there as decoration. */}
      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu border-t border-[color:var(--rule)] bg-white lg:hidden"
        >
          <nav className="mx-auto max-w-shell px-6 py-4" aria-label="Mobile">
            <ul className="text-[1.0625rem]">
              {nav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current(item.href)}
                    className={`block py-3.5 ${
                      i < nav.length - 1
                        ? "border-b border-[color:var(--rule)]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn btn-ink mt-4 w-full justify-center"
            >
              Ask us anything{" "}
              <span className="arw" aria-hidden="true">
                →
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
