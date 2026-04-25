# ConsultPost — Design Brainstorm

## Three Design Directions

<response>
<text>
### Idea A: "Executive Clarity" — Swiss Modernist Precision
**Design Movement:** Swiss International Typographic Style meets modern SaaS
**Core Principles:**
1. Grid-based asymmetry — content blocks offset by a fixed 8px grid
2. Information density without clutter — every pixel earns its place
3. Confident restraint — no decorative noise, only purposeful elements
4. Typographic hierarchy as the primary visual driver

**Color Philosophy:** Near-white (#F7F8FA) background with deep navy (#1A2340) for primary text. A single electric blue (#378ADD) for all CTAs and active states. Muted slate (#8A94A6) for secondary labels. Green (#22C55E) for success/ready states. This palette communicates trustworthiness and professional authority — exactly what consultants want to project.

**Layout Paradigm:** Left-anchored sidebar navigation (64px collapsed / 220px expanded) with a main content area that uses a 12-column grid. Onboarding uses a split-screen: left panel = progress + context, right panel = form. Dashboard uses a card-based feed with a sticky top input bar.

**Signature Elements:**
1. Thin 1px rule lines as section dividers (not cards) — gives a newspaper-editorial feel
2. Step numbers rendered in large, ghosted numerals (opacity 0.06) behind form titles
3. Tab indicators as thick 3px bottom borders, not pills

**Interaction Philosophy:** Interactions are deliberate and immediate. No bouncy animations. Smooth 150ms ease-out transitions. Hover states use subtle background tint changes.

**Animation:** Fade-in + 8px upward slide for page transitions (200ms). Progress bar fills with a smooth ease-in-out. Tab switches use a sliding underline indicator.

**Typography System:**
- Headlines: DM Sans Bold (700), 22-28px
- Body: DM Sans Regular (400), 15px
- Labels: DM Sans Medium (500), 12px, letter-spacing 0.04em uppercase
- Tabs: DM Sans SemiBold (600), 14px
</text>
<probability>0.07</probability>
</response>

<response>
<text>
### Idea B: "Warm Professional" — Editorial Magazine Meets Productivity Tool
**Design Movement:** Editorial warmth (Monocle/Kinfolk aesthetic) applied to SaaS
**Core Principles:**
1. Warmth through off-white and warm tones — not clinical white
2. Generous whitespace as a luxury signal
3. Asymmetric card layouts that feel curated, not templated
4. Subtle texture (paper-grain noise) on backgrounds

**Color Philosophy:** Warm off-white (#FAFAF7) base. Deep charcoal (#2C2C2C) for text. Warm amber (#F59E0B) as accent for highlights. Muted sage (#6B8F71) for success states. Slate blue (#4A6FA5) for primary CTAs. This palette feels premium and human — not cold tech.

**Layout Paradigm:** Full-bleed top navigation with a centered max-width content column (720px for forms, 1100px for dashboard). Onboarding uses a single-column centered layout with large step numbers. Dashboard uses a timeline-style vertical feed.

**Signature Elements:**
1. Rounded pill badges with warm tones
2. Soft drop shadows (0 4px 24px rgba(0,0,0,0.06)) on cards
3. Subtle paper-grain texture overlay on the hero/welcome screen

**Interaction Philosophy:** Gentle, organic interactions. Hover states lift cards with increased shadow. Buttons have a subtle press-down effect.

**Animation:** Spring-based card entrances (framer-motion). Progress bar uses a gradient fill animation. Modals slide up from bottom on mobile.

**Typography System:**
- Headlines: Playfair Display Bold (700), 24-32px
- Body: Source Sans 3 Regular (400), 15px
- Labels: Source Sans 3 SemiBold (600), 12px uppercase
- Tabs: Source Sans 3 Medium (500), 14px
</text>
<probability>0.08</probability>
</response>

<response>
<text>
### Idea C: "Signal Blue" — Clean Tech with Confident Color
**Design Movement:** Modern B2B SaaS with bold color confidence (Stripe/Linear aesthetic)
**Core Principles:**
1. Blue as a structural element, not just accent
2. Clean geometric forms with purposeful depth
3. Data-forward layouts — metrics and status always visible
4. Micro-detail obsession: every state, every transition considered

**Color Philosophy:** Pure white (#FFFFFF) backgrounds. A rich, confident blue (#2563EB) as the primary brand color used for headers, active states, and CTAs. Light blue tints (#EFF6FF, #DBEAFE) for section backgrounds and hover states. Dark slate (#1E293B) for text. Emerald (#10B981) for ready/success. This creates a focused, professional tool feel.

**Layout Paradigm:** Top navigation bar (fixed) + left sidebar for secondary nav. Main content uses a two-column layout on desktop (input/action left, preview right). Mobile collapses to single column with bottom tab bar.

**Signature Elements:**
1. Blue gradient header bars on section cards
2. Floating action button (FAB) for primary "New Post" action
3. Glassmorphism effect on modals (backdrop-blur + white/80% opacity)

**Interaction Philosophy:** Snappy and responsive. Every click has immediate visual feedback. Loading states use skeleton screens, not spinners.

**Animation:** Staggered list item entrances. Tab content fades in with 100ms delay. Progress bar segments fill sequentially.

**Typography System:**
- Headlines: Plus Jakarta Sans Bold (700), 20-26px
- Body: Plus Jakarta Sans Regular (400), 14-15px
- Labels: Plus Jakarta Sans Medium (500), 11-12px uppercase tracking-wide
- Tabs: Plus Jakarta Sans SemiBold (600), 13-14px
</text>
<probability>0.09</probability>
</response>

---

## Selected Direction: **Idea A — "Executive Clarity"**

**Rationale:** The target users are early-stage consultants who want to project professional authority. The Swiss Modernist approach communicates precision and trustworthiness through typography and grid discipline. The DM Sans typeface is warm yet professional, and the electric blue CTA color (#378ADD) matches the spec exactly. The asymmetric left-sidebar layout is distinctive and avoids the generic centered-everything pattern.
