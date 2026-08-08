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
  tagline: "Ask us anything. We'll build it.",
  description:
    "A small studio for web design, AI automation, MVPs and apps. Send the problem; we send a plan.",
  email: "ama.responds@gmail.com",
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
  { href: "https://www.instagram.com/ama.responds", label: "Instagram" },
  { href: "mailto:ama.responds@gmail.com", label: "Email" },
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
      "The smallest version that proves the idea, live in weeks, not the full thing in a year.",
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
      "Naming, wordmark, palette, and a written voice, delivered as a short book your team can actually follow, not a 90-page PDF nobody opens twice.",
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
    slug: "dental-clinic-app",
    name: "Dental Clinic Management App",
    discipline: "Healthcare Tech · App",
    year: "2026",
    summary: "Multi-doctor scheduling, interactive tooth charting & automated patient intake.",
    challenge:
      "A growing dental practice struggled with manual paper charts, fragmented doctor schedules, and high missed-appointment rates.",
    approach:
      "We engineered a clean HIPAA-compliant clinic management portal with interactive visual tooth charts, single-click scheduling, and SMS reminders.",
    outcome: "Patient intake time reduced by 65%, and missed appointments dropped by 40%.",
    image: "/assets/dental-app.png",
  },
  {
    slug: "fitness-whatsapp-bot",
    name: "WhatsApp Fitness Trainer Bot",
    discipline: "AI · Automation",
    year: "2026",
    summary: "Automated workout delivery, nutrition tracking & client check-ins via WhatsApp API.",
    challenge:
      "Fitness trainers spent 15+ hours every week manually messaging clients workout plans and tracking meal logs across spreadsheets.",
    approach:
      "We built an intelligent WhatsApp AI bot that automatically delivers daily routines, parses meal photos into macro estimates, and generates progress charts.",
    outcome: "Saved trainers 12+ hours per week while boosting client retention by 35%.",
    image: "/assets/fitness-bot.png",
  },
  {
    slug: "nfc-card-platform",
    name: "NFC Smart Card & Profile Suite",
    discipline: "Hardware & Web · Platform",
    year: "2026",
    summary: "Tap-to-connect physical NFC business & social cards with dynamic web profile management.",
    challenge:
      "Corporate clients like Victory Hotels needed sleek, re-programmable NFC cards for executive networking without app downloads.",
    approach:
      "We designed laser-engraved NFC matte cards paired with a real-time web profile editor that exports instant vCards on any smartphone tap.",
    outcome: "Deployed across executive hotel teams with 100% tap compatibility and zero app requirement.",
    image: "/assets/nfc-cards.png",
  },
  {
    slug: "webar-showcase",
    name: "WebAR Spatial Product Experience",
    discipline: "AR & Spatial · 3D Web",
    year: "2025",
    summary: "Browser-native 3D & Augmented Reality product preview platform.",
    challenge:
      "E-commerce customers needed to visualize custom physical products in their actual room space before placing high-ticket orders.",
    approach:
      "We built a WebXR-powered 3D viewer using Three.js allowing users to project interactive 1:1 scale models onto any surface directly in Safari and Chrome.",
    outcome: "Increased product page conversion rates by 48% and reduced return rates.",
    image: "/assets/ar-showcase.png",
  },
  {
    slug: "clinic-website",
    name: "Healthcare Clinic Website",
    discipline: "Web Design · Portal",
    year: "2025",
    summary: "High-converting medical clinic site with online patient triage & doctor booking.",
    challenge:
      "A multi-specialty clinic had an outdated website that failed on mobile devices and forced patients to call for every booking.",
    approach:
      "We crafted a mobile-first, blazing-fast web portal with instant online doctor scheduling, service catalogs, and emergency triage notes.",
    outcome: "Online appointment bookings grew 3x within 30 days of launch.",
    image: "/assets/clinic-website.png",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Surya Teja",
    role: "Founder · Prodontics",
    quote:
      "I sent them a messy problem on a Tuesday and had a plan on Friday, exactly like they said. The clinic management system and multi-doctor schedule were live in weeks.",
  },
  {
    name: "Vittal Jadhav",
    role: "Corporate General Manager · Victory Hotels",
    quote:
      "The custom tap-to-connect NFC cards and web profile suite were built fast with zero friction. Our executive team uses them daily for networking.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What does a project cost?",
    a: "Every project is unique. We evaluate your requirements and offer the best, most competitive rates upfront. You get a transparent, fixed quote before we start — no rate cards and zero surprises.",
  },
  {
    q: "Where is A.M.A based?",
    a: "We are a proud Make in India 🇮🇳 software studio based in India. We engineer world-class web applications, AI bots, and custom digital products for businesses in India and globally.",
  },
  {
    q: "How long until something is live?",
    a: "A plan within a week of your first message. A working site in three to six weeks. MVPs usually take six to ten, depending on how much of it is genuinely new.",
  },
  {
    q: "Who will I actually be talking to?",
    a: "The engineers building it. A.M.A is small on purpose; there's no account manager between you and the work.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Often. We'll take the part nobody has time for, work in your stack and your repo, and hand it back documented.",
  },
  {
    q: "What happens after launch?",
    a: "Thirty days of fixes are included. After that, keep us on a small monthly retainer or take the keys and run it yourself. Both are fine.",
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
  { value: "4", suffix: "+", label: "Projects shipped" },
  { value: "1", suffix: "+", label: "Years building together" },
  { value: "4", suffix: "+", label: "Years avg industry experience" },
  { value: "100", suffix: "%", label: "Direct engineer access" },
  { value: "0", suffix: "%", label: "Agency drama" },
] as const;

export const clients = [
  "Prodontics",
  "Dental Planet",
  "Victory Hotels",
] as const;

export const pricing = [
  {
    name: "Site",
    price: "custom scoped",
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
    price: "custom scoped",
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
