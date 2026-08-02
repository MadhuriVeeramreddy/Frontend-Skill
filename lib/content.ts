/**
 * Single source of truth for site content.
 *
 * Every page reads from here, so adding a project or an FAQ is a one-line
 * change that shows up everywhere it belongs (home teaser, index page,
 * detail route, sitemap). Swap this file for a CMS or MDX collection later
 * without touching a single component.
 */

export const site = {
  name: "A.M.A",
  tagline: "Ask us anything — we'll build it.",
  description:
    "A small studio for web design, AI automation, MVPs and apps. Send the problem; we send a plan.",
  email: "hello@askme.ama",
  phone: "+1 415 555 0132",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/notes", label: "Notes" },
] as const;

export const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About us" },
  { href: "/work", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact us" },
] as const;

export const social = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Twitter/X" },
  { href: "#", label: "LinkedIn" },
] as const;

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
  icon: "screen" | "spark" | "bolt" | "globe";
};

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web design",
    blurb:
      "Sites that say the right thing in the first five seconds, then hold up on a slow phone.",
    detail:
      "We start with the one sentence your visitor needs, then build outward. Every page is designed against real copy, not lorem ipsum, and tested on a mid-range Android before it ships.",
    icon: "screen",
  },
  {
    slug: "ai-automation",
    title: "AI automation",
    blurb:
      "The repetitive part of your week, handed to a system that does it the same way every time.",
    detail:
      "Intake triage, document extraction, summarising a busy inbox. We look for the task you do the same way every time, and hand it to something that never gets bored.",
    icon: "spark",
  },
  {
    slug: "mvps-and-apps",
    title: "MVPs & apps",
    blurb:
      "The smallest version that proves the idea, live in weeks — not the full thing in a year.",
    detail:
      "We argue for the smallest build that answers your riskiest question. You get something real in front of users while the idea is still cheap to change.",
    icon: "bolt",
  },
  {
    slug: "brand-identity",
    title: "Brand & identity",
    blurb:
      "A name, a mark, and a voice that still fit once the company has grown into them.",
    detail:
      "Naming, wordmark, palette, and a written voice, delivered as a short book your team can actually follow — not a 90-page PDF nobody opens twice.",
    icon: "globe",
  },
];

export type Project = {
  slug: string;
  name: string;
  discipline: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "greenleaf",
    name: "Greenleaf",
    discipline: "Brand · Web",
    year: "2025",
    summary: "A garden supplier that had outgrown its own name.",
    challenge:
      "Greenleaf sold to landscapers and homeowners from the same catalogue, and neither group felt spoken to.",
    approach:
      "We split the site by who was buying, not by what was in the warehouse, and rebuilt the mark to work at 16px.",
    outcome: "Trade enquiries up, and a catalogue their own team can update.",
    image: "https://placehold.co/1200x900",
  },
  {
    slug: "sunrise-resort",
    name: "Sunrise Resort",
    discipline: "Web · Booking",
    year: "2025",
    summary: "A booking flow that stopped losing people at step three.",
    challenge:
      "Guests were dropping out at the date picker, and the team had no way to see where.",
    approach:
      "We rewrote the flow as three plain questions and instrumented every step.",
    outcome: "The drop-off moved from step three to nowhere in particular.",
    image: "https://placehold.co/1200x900",
  },
  {
    slug: "johnson-partners",
    name: "Johnson & Partners",
    discipline: "AI · Automation",
    year: "2024",
    summary: "Six hours a week of intake, handled quietly.",
    challenge:
      "Every new client enquiry was retyped by hand into three separate systems.",
    approach:
      "One intake form, one extraction step, three systems updated. Nobody had to be trained on it.",
    outcome: "About six hours a week back, with a clean audit trail.",
    image: "https://placehold.co/1200x900",
  },
  {
    slug: "sweet-delights",
    name: "Sweet Delights",
    discipline: "MVP · App",
    year: "2024",
    summary: "Half the feature list, live in five weeks.",
    challenge:
      "A bakery wanted a full ordering platform before knowing whether anyone would order online.",
    approach:
      "We cut the list to one thing — pre-order for collection — and shipped it.",
    outcome: "Launched in five weeks. Nothing that got cut has been missed.",
    image: "https://placehold.co/1200x900",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alec Ramírez",
    role: "Founder · Greenleaf",
    quote:
      "I sent them a messy problem on a Tuesday and had a plan on Friday, exactly like they said. The first version was smaller than I expected — and that turned out to be the point.",
  },
  {
    name: "Sofia Lee",
    role: "Operations · Halcyon",
    quote:
      "The automation they built quietly removed about six hours a week from my team. Nobody had to be trained on it, which I think is the highest compliment I can give.",
  },
  {
    name: "Lucca Rossi",
    role: "Founder · Sweet Delights",
    quote:
      "They talked me out of half my feature list in the first call. We launched in five weeks and I have never once missed the things we cut.",
  },
  {
    name: "John Kennings",
    role: "Partner · Johnson & Partners",
    quote:
      "What I remember is being able to ask a stupid question at any point and getting a straight answer back. No jargon, no upsell. Rare.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What does a project cost?",
    a: "Most sites land between £6k and £20k; MVPs and automation work are scoped per project. You get a fixed number before we start, not a rate card and a surprise.",
  },
  {
    q: "How long until something is live?",
    a: "A plan within a week of your first message. A working site in three to six weeks. MVPs usually take six to ten, depending on how much of it is genuinely new.",
  },
  {
    q: "Who will I actually be talking to?",
    a: "The people building it. A.M.A is small on purpose — there's no account manager between you and the work.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Often. We'll take the part nobody has time for, work in your stack and your repo, and hand it back documented.",
  },
  {
    q: "What happens after launch?",
    a: "Thirty days of fixes are included. After that, keep us on a small monthly retainer or take the keys and run it yourself — both are fine.",
  },
];

export type Note = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const notes: Note[] = [
  {
    slug: "ship-the-small-version",
    title: "Ship the small version. Fix it in daylight.",
    date: "2026-06-18",
    excerpt:
      "Every feature you cut before launch is one you never have to maintain. Here's how we decide what survives the first release.",
  },
  {
    slug: "answer-with-a-plan",
    title: "Answer with a plan, not a deck",
    date: "2026-05-02",
    excerpt:
      "Why our first deliverable is always something you can argue with, and never a sixty-slide credentials document.",
  },
  {
    slug: "automation-nobody-notices",
    title: "The best automation is the one nobody notices",
    date: "2026-03-27",
    excerpt:
      "If your team needs training to use it, it isn't finished. Notes from six months of quiet automation work.",
  },
];

export const stats = [
  { value: "40", suffix: "+", label: "Projects shipped" },
  { value: "6", suffix: "+", label: "Years building" },
  { value: "94", suffix: "%", label: "Clients who return" },
] as const;

export const clients = [
  "Northwind",
  "LOOPWORK",
  "Ipsum & Co",
  "Meridian",
  "HALCYON",
  "Fieldnote",
  "Otter",
] as const;

export const pricing = [
  {
    name: "Site",
    price: "from £6k",
    line: "A marketing site that earns its keep.",
    includes: [
      "Up to 8 pages, designed against real copy",
      "Responsive down to a mid-range phone",
      "A CMS your team can actually use",
      "30 days of fixes after launch",
    ],
  },
  {
    name: "MVP",
    price: "from £18k",
    line: "The smallest build that answers your riskiest question.",
    includes: [
      "Scoping week to cut the list down",
      "Working product in front of users",
      "Analytics wired in from day one",
      "Handover docs and repo access",
    ],
    featured: true,
  },
  {
    name: "Automation",
    price: "scoped per project",
    line: "The repetitive part of your week, handed off.",
    includes: [
      "Audit of where the hours actually go",
      "Built into your existing stack",
      "Audit trail on every run",
      "Retainer or full handover",
    ],
  },
] as const;
