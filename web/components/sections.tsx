import Link from "next/link";
import {
  clients,
  faqs,
  projects,
  services,
  site,
  testimonials,
  type Project,
  type Service,
} from "@/lib/content";
import { Button, Arrow, Chevron, SectionHead, Shot } from "./ui";

/* Reusable page sections. Composed by routes rather than duplicated in them. */

const icons: Record<Service["icon"], React.ReactNode> = {
  screen: (
    <>
      <rect x="3" y="4" width="18" height="15" rx="2" />
      <path d="M3 9h18" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18" />
      <path d="M3.5 9h17M3.5 15h17" />
    </>
  ),
};

function ServiceIcon({ name }: { name: Service["icon"] }) {
  return (
    <span
      className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-accent text-white"
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[name]}
      </svg>
    </span>
  );
}

/** Services: sticky card deck. See `.stack` in globals.css. */
export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div className="rise lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            align="left"
            eyebrow="What we do"
            title={
              <>
                Ask us for
                <br />
                any of these<span className="stop">.</span>
              </>
            }
          >
            Four things, done properly. If your problem sits between two of
            them, that&apos;s usually the interesting one — ask anyway.
          </SectionHead>
          <Button href="/services" className="mt-8">
            Get started <Arrow />
          </Button>
        </div>

        <ul className="stack space-y-10">
          {services.map((s) => (
            <li key={s.slug} className="card rise min-h-[228px] p-8">
              <ServiceIcon name={s.icon} />
              <h3 className="u-display text-[1.375rem]">{s.title}</h3>
              <p className="u-body mt-2 max-w-measure">{s.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rise-far group">
      <Link href={`/work/${project.slug}`} className="block">
        <Shot
          src={project.image}
          alt={`${project.name} — ${project.discipline}`}
          className="aspect-[4/3]"
        />
        <h3 className="u-display mt-4 text-[1.375rem]">{project.name}</h3>
      </Link>
    </article>
  );
}

export function WorkSection({ limit }: { limit?: number }) {
  const shown = limit ? projects.slice(0, limit) : projects;
  return (
    <section id="work" className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-shell">
        <SectionHead
          eyebrow="Recent work"
          title={
            <>
              Work we&apos;d show you first<span className="stop">.</span>
            </>
          }
        >
          Four we&apos;re glad to be judged on. Each one started as a question
          and ended as something shipped.
        </SectionHead>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {limit ? (
          <div className="mt-12 text-center">
            <Button href="/work">
              All projects <Arrow />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="notes" className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-shell">
        <SectionHead
          eyebrow="What clients say"
          title={
            <>
              The reply, from their side<span className="stop">.</span>
            </>
          }
        >
          We asked four clients what it was actually like. These are their
          words, lightly trimmed.
        </SectionHead>

        <div className="mx-auto mt-14 max-w-4xl space-y-3">
          {testimonials.map((t, i) => (
            <details key={t.name} className="card rise px-6" open={i === 0}>
              <summary className="flex items-center gap-4 py-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://placehold.co/88x88/C7BFAE/C7BFAE"
                  alt=""
                  className="h-11 w-11 flex-none rounded-full object-cover"
                />
                <span className="min-w-0">
                  <span className="block font-medium">{t.name}</span>
                  <span className="u-label block text-graphite/60">
                    {t.role}
                  </span>
                </span>
                <Chevron size={9} />
              </summary>
              <p className="acc-body u-body max-w-measure pb-6 pl-[3.75rem]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="faqs" className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-shell">
        {heading ? (
          <SectionHead
            eyebrow="FAQ"
            title={
              <>
                Most asked questions<span className="stop">.</span>
              </>
            }
          >
            It&apos;s the name, so we may as well answer them here. Anything
            missing — just ask.
          </SectionHead>
        ) : null}

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="card rise px-6" open={i === 0}>
              <summary className="flex items-center gap-5 py-5">
                <span className="u-label flex-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{f.q}</span>
                <Chevron />
              </summary>
              <p className="acc-body u-body max-w-measure pb-6 pl-12">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustedStrip() {
  return (
    <section className="border-y border-[color:var(--rule)] py-10">
      <div className="mx-auto max-w-shell px-6">
        <p className="u-label text-center text-graphite/60">
          Trusted by 40+ teams around the globe
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:justify-between">
          {clients.map((c) => (
            <li key={c} className="u-display text-2xl text-graphite/45">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Closing CTA — the template's blush panel. */
export function CtaSection() {
  return (
    <section id="contact" className="px-6 pb-20 lg:pb-28">
      <div className="mx-auto max-w-shell">
        <div className="grain rise-far relative overflow-hidden rounded-[32px] bg-blush px-6 py-24 text-center lg:py-32">
          {/* Faint bloom, matching the pattern the template lays over its pink panel */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(620px 340px at 50% 6%, rgb(252 54 45 / .10), transparent 70%), radial-gradient(520px 300px at 10% 100%, rgb(255 255 255 / .55), transparent 72%)",
            }}
          />
          <div className="relative">
            <p className="u-label text-ink/55">Contact us</p>
            <h2 className="u-display mt-6 text-[clamp(2.25rem,5.2vw,4rem)] font-extrabold leading-[1.05] tracking-[-.035em] text-ink">
              So — what can we
              <br />
              build for you?
            </h2>
            <p className="u-body mx-auto mt-7 max-w-[42ch]">
              Send the problem, however messy. We&apos;ll send back a plan.
            </p>
            <Button href={`mailto:${site.email}`} className="mt-10">
              {site.email} <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
