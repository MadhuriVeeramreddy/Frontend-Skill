import Link from "next/link";
import { footerNav, site, social } from "@/lib/content";
import { RuleDot } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--rule)] px-6 pt-16">
      <div className="mx-auto max-w-shell">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-badge.png"
              alt="A.M.A"
              width={321}
              height={172}
              className="h-10 w-auto rounded-lg"
            />
            <p className="u-body mt-5 max-w-[38ch]">
              A small studio for web design, AI automation, MVPs and apps. An
              invitation, always open.
            </p>
            <p className="u-label mt-6 text-graphite/60">
              {site.email}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--rule)] bg-white/80 px-3 py-1 text-xs font-semibold text-graphite/80">
              <span>🇮🇳</span> Proudly Made in India
            </div>
          </div>

          <nav aria-label="Studio">
            <h2 className="u-label text-graphite/60">Studio</h2>
            <ul className="mt-5 space-y-3.5 text-[.9375rem]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footlink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h2 className="u-label text-graphite/60">Elsewhere</h2>
            <ul className="mt-5 max-w-[15rem] space-y-3.5 text-[.9375rem]">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="sociallink flex items-center justify-between gap-3"
                  >
                    {s.label}
                    <span className="badge" aria-hidden="true">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <RuleDot />

        <div className="flex flex-wrap items-center justify-between gap-4 py-7">
          <p className="u-label text-graphite/60">
            © {new Date().getFullYear()} A.M.A · Ask Me Anything
          </p>
          <p className="u-label text-graphite/60">
            /n. an invitation, always open<span className="stop">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
