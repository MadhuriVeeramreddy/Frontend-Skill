import type { Metadata } from "next";
import { Caveat, Inter, Inter_Tight } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import "./globals.css";

// Self-hosted by next/font — no request to Google, no layout shift.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} . ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/assets/logo-badge.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning covers the `js` class the inline script below
    // adds before React hydrates. It applies to this element's own attributes
    // only — one level deep — so it can't mask a mismatch anywhere else.
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Sets the `js` gate before first paint so revealed content never
            flashes in and then hides itself. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
