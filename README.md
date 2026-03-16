# Design Skill Package

A collection of Claude skills that work together as a multidisciplinary AI design studio. Install one or all of them — each skill is independent and activates automatically based on what you're working on.

The skills share a coherent design philosophy and know how to collaborate with each other.

---

## The skills

### design-taste ⭐ Start here
The aesthetic intelligence layer. Encodes a specific design sensibility — effortless, aspirational, timeless — and applies it across four workflows: Critique, Spec, Code, and Variant. Includes a Style Directions Library with four named aesthetic directions (Industrial Sustainable Minimalism, Editorial Design Studio, Playful Digital Agency, Strategic Institutional Minimalism).

**Triggers on:** UI/component work, design feedback, design tokens, "make it look good," Figma URLs, type scales, color palettes.

---

### Design Studio — 7 specialist roles

Install all seven to assemble the full studio. Each role activates on different types of work.

| Skill | Role | Triggers on |
|---|---|---|
| `design-director` | Creative director + quality guardian | Overall design review, cross-discipline critique, "does this all hang together" |
| `brand-director` | Brand strategy + identity | Brand personality, positioning, visual identity principles, tone of voice |
| `content-director` | Messaging + UX copy | Page copy, messaging frameworks, "what should we say", microcopy |
| `design-engineer` | Design-to-code bridge | Component implementation, technical specs, feasibility, front-end architecture |
| `design-system-director` | Tokens + components + systems | Design tokens, component libraries, scaling design, consistency audits |
| `motion-designer` | Animation + interaction timing | Animations, transitions, motion principles, "how should this move" |
| `product-designer` | UX + flows + information architecture | User flows, wireframes, "how should this work", navigation structure |

---

## Install in 3 steps

### Step 1 — Download the skill files

Download the `.skill` files you want from this repo. Click a file name, then click the download button (arrow icon, top right).

Recommended starting set:
- `design-taste.skill` — always useful
- `design-engineer.skill` — extends design-taste with technical depth
- `design-director.skill` — ties everything together

Or download all 8 for the full studio.

### Step 2 — Open Claude Code settings

Open Claude Code. Press `Cmd + ,` (Mac) or go to **Settings** from the menu.

Navigate to the **Skills** tab.

### Step 3 — Install

Click **Install from file** and select each `.skill` file. Repeat for each one.

Done. Skills activate automatically based on your conversation context.

---

## How the team works together

The skills are designed to collaborate. A typical project flow:

```
Brand Director     → defines brand identity, personality, visual principles
    ↓
Content Director   → shapes messaging and voice from the brand framework
    ↓
Design System Director → builds tokens and components from the brand principles
    ↓
Product Designer   → designs flows and interfaces using the system
    ↓
design-taste / Design Engineer  → produces and implements the visual UI
    ↓
Motion Designer    → defines how everything moves and transitions
    ↓
Design Director    → reviews all outputs for coherence and quality
```

In practice, roles activate on demand — you don't need to follow this sequence. Ask about brand positioning and the Brand Director activates. Ask to build a component and the Design Engineer + design-taste activate together.

---

## Example prompts

**Brand work:**
> "I'm launching a sustainable skincare brand targeting women 30–45 who are skeptical of greenwashing. Define our brand positioning and personality."

**Content:**
> "Write the homepage hero copy for our project management tool. It's for freelancers who are tired of heavyweight tools like Asana."

**Design system:**
> "Build a complete design token set for a fintech product. Light and dark mode. Premium, trustworthy, calm."

**Product design:**
> "Map the cancellation flow for a SaaS subscription. The goal is honest — we don't want dark patterns, but we do want one save offer."

**Motion:**
> "Define the motion principles for a playful creative agency brand. What's the timing vocabulary and what does it feel like to use?"

**Component code:**
> "Build a pricing table — Free, Pro at $12/mo, Enterprise. The Pro tier should stand out without being loud."

**Full studio:**
> "We're building a B2B analytics platform for enterprise clients. The brand needs to feel credible and intelligent. Start by defining the brand direction, then give me a design token set aligned to it."

---

## Customize any skill

Every skill's instructions live in a `SKILL.md` file inside its directory. Open it to:

- Adjust role behavior, focus areas, or output formats
- Add your own brand specifics (colors, fonts, brand guidelines)
- Tune the collaboration model between roles

After editing, repackage and reinstall:

```bash
# From the skill-creator directory
python3 -m scripts.package_skill /path/to/skill-directory

# Then reinstall the .skill file in Claude Code settings
```

---

## What's in this repo

```
design-taste/                    — The aesthetic intelligence skill
design-studio/
  ├── design-director/           — Creative director
  ├── brand-director/            — Brand strategy
  ├── content-director/          — Messaging and copy
  ├── design-engineer/           — Design-to-code
  ├── design-system-director/    — Tokens and systems
  ├── motion-designer/           — Animation
  └── product-designer/          — UX and flows

design-taste.skill               — Installable files
design-director.skill
brand-director.skill
content-director.skill
design-engineer.skill
design-system-director.skill
motion-designer.skill
product-designer.skill

README.md
```
