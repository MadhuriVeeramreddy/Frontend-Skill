# A.M.A — Brand Guidelines v1.0 (2026)

Extracted from `Design.pdf`. Source of truth for all A.M.A frontend work.

**A.M.A** = *Ask Me Anything.*
- **A** — Ask: the door is open.
- **M** — Me: a person answers, not a portal.
- **A** — Anything: from a landing page to a live product.

Positioning: a small studio for web design, AI automation, MVPs and apps.
Tagline in use: *"Ask us anything — we'll build it."* / "Send the problem; we send a plan."

---

## 05 — Colour palette

Three-part palette. Ink for weight, Amber for warmth, Paper for calm. Two greys keep it usable in interface work.

| Role | Name | Hex | RGB | CMYK |
|---|---|---|---|---|
| Primary · 01 | **Ink** | `#1A1614` | 26 · 22 · 20 | 65 · 68 · 72 · 79 |
| Accent · 02 | **Amber** | `#E8A25B` | 232 · 162 · 91 | 6 · 40 · 70 · 0 |
| Base · 03 | **Paper** | `#F5EFE6` | 245 · 239 · 230 | 3 · 4 · 8 · 0 |
| Support · 04 | **Graphite** | `#3D3934` | — | — |
| Support · 05 | **Linen** | `#C7BFAE` | — | — |

**Ratio — 60 paper · 30 ink · 10 amber.** Amber is a moment, not a surface.

**Contrast (verified in the guide):**
- Ink on Paper — AAA
- Ink on Amber — AA large only
- Paper on Ink — AAA

---

## 06 — Typography

A pairing that asks and answers.

### Display — Instrument Serif
- Weights: 400, 400 italic
- Use: covers, headlines, pull quotes
- Tracking: **-1% to -3%** at large sizes
- *"The question — italic for warmth."*

### Text & UI — Geist
- Weights: 300 / 400 / 500 / 600
- Use: body copy, buttons, product UI
- Tracking: **0**, tighten only above 24pt
- *"The answer — plain, considered."*

### Scale (print reference · pt)

| Level | Size | Face | Weight |
|---|---|---|---|
| H1 | 72 | Serif | 400 italic |
| H2 | 40 | Serif | 400 |
| H3 | 20 | Sans | 600 |
| Body | 11 | Sans | 400 |
| Label | 10 | Mono | 500 |

A mono face carries all section labels, footers, and metadata (uppercase, wide tracking). Body copy: **never more than ~70 characters wide.**

---

## 03/04 — Logo & wordmark

The primary mark is a **wordmark**: `A.M.A` set in Instrument Serif with an **italic M**. The full stops are load-bearing — they do the work of a pause, an invitation to speak.

**Approved backgrounds:** on Ink, on Amber, on Paper.

**Clear space:** margin equal to the cap-height of the `A` on all sides. Nothing — image, headline, or edge — enters that space.

**Minimum size:** Print 24pt · Screen 18px. Below this the italic `M` loses its swing. When in doubt, go bigger.

**Don't:**
- Don't skew or slant.
- Don't respace the letters.
- Don't recolour off-palette.
- Don't redraw in a sans.

---

## 07 — Voice & tone

A.M.A talks the way a trusted friend answers a question at a table — quickly, warmly, without jargon, without the sales voice. Confidence comes from knowing the answer, not from turning up the volume.

- **Clear** — Short sentences. Real nouns. No "leverage", no "solutions".
- **Warm** — Talk to one person. Use "you". Sound like a human wrote it, because one did.
- **Confident** — State the answer. Skip the hedge. If we don't know, say so — then find out.
- **Playful** — One good line beats a paragraph. A little wink — never a joke about the reader.

**We say:**
- "Send us the problem. We'll send back a plan by Friday."
- "Ship the small version. Fix it in daylight."
- "Ask us anything. That's literally the name."

**We don't say:**
- "Leveraging AI-driven synergies to unlock verticals."
- "World-class, best-in-class, next-gen platform."
- "Please kindly find attached, per our last email."

---

## 08 — In the world

Everything follows the same three-part rhythm: **paper, ink, a moment of amber.**

- **Business card front** — Ink ground, Paper wordmark, mono `ASK ME ANYTHING` bottom-left, amber `askme.ama` bottom-right.
- **Business card back** — Paper ground, serif name, mono role + contact.
- **Web hero** — Paper ground; wordmark left, mono nav (`Work / Services / Notes`), Ink pill CTA "Ask us anything →". Headline: serif, with the emphasis clause set in **amber italic**. Mono eyebrow: `WEB · APPS · AI · MVPS`.

Contact: `hello@askme.ama` · domain `askme.ama`

---

## Web tokens

```css
:root {
  /* Colour */
  --ink:      #1A1614;
  --amber:    #E8A25B;
  --paper:    #F5EFE6;
  --graphite: #3D3934;
  --linen:    #C7BFAE;

  /* Type */
  --font-display: "Instrument Serif", Georgia, serif;
  --font-sans:    "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "Geist Mono", ui-monospace, monospace;

  /* Scale — screen px, from the pt reference */
  --t-h1:    clamp(3rem, 8vw, 6rem);   /* 72pt, serif 400 italic, tracking -0.03em */
  --t-h2:    clamp(2rem, 4vw, 3.25rem);/* 40pt, serif 400,        tracking -0.02em */
  --t-h3:    1.375rem;                 /* 20pt, sans 600 */
  --t-body:  1rem;                     /* 11pt, sans 400, line-height 1.7 */
  --t-label: 0.75rem;                  /* 10pt, mono 500, uppercase, tracking 0.12em */

  --measure: 70ch;
}
```

Fonts — both are on Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Applying it

- Default page is **Paper ground, Ink text**. Ink-ground sections are the accent move, not the norm.
- Amber is for one emphasis per view: an italic headline clause, a link underline, a small mark. Never a large fill behind body text (AA large only).
- Headlines are serif; **italic is the emotional register** — use it on the clause that carries the feeling, not the whole line.
- Labels, nav meta, footers, and figure captions are mono uppercase with wide tracking.
- Layering: Paper (base) → Linen (elevated) → Ink (floating/contrast). Shadows tinted with Ink, low opacity — never neutral grey.
