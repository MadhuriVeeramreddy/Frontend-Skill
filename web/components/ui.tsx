import Link from "next/link";
import type { ReactNode } from "react";

/* Small shared primitives. Server Components — no interactivity beyond CSS. */

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow u-label">{children}</p>;
}

export function Arrow() {
  return (
    <span className="arw" aria-hidden="true">
      →
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "accent",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "accent" | "ink" | "ghost";
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn-${variant} ${className}`}>
      {children}
    </Link>
  );
}

/** Centred section header: eyebrow, heading, optional standfirst. */
export function SectionHead({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  const centred = align === "center";
  return (
    <div
      className={`rise ${centred ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="u-display u-h2 mt-6">{title}</h2>
      {children ? <p className="u-body mt-5">{children}</p> : null}
    </div>
  );
}

/** Image with the brand's gradient overlay and colour treatment. */
export function Shot({
  src,
  alt,
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <div className={`shot ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {caption ? (
        <p className="u-label absolute bottom-5 left-6 z-3 text-white/85">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

/** The `+` marker used by both accordions; rotates to `×` when open. */
export function Chevron({ size = 8 }: { size?: 8 | 9 }) {
  return (
    <span
      className={`chev ml-auto grid ${
        size === 9 ? "h-9 w-9" : "h-8 w-8"
      } flex-none place-items-center rounded-full border border-[color:var(--rule)] text-accent`}
      aria-hidden="true"
    >
      <svg
        width={size === 9 ? 14 : 13}
        height={size === 9 ? 14 : 13}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}

export function RuleDot() {
  return (
    <div className="rule-dot">
      <i />
    </div>
  );
}
