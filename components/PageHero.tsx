import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

/** Masthead shared by every inner route, so pages stay consistent as they multiply. */
export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-[color:var(--rule)] px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-shell">
        <div className="rise max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="u-display u-h1 mt-6">{title}</h1>
          {children ? (
            <p className="u-body mt-6 max-w-measure text-[1.0625rem]">
              {children}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
