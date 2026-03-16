# design-taste

A Claude skill that acts as your personal design director — giving opinionated, taste-aligned feedback, generating design specs, writing production-ready UI code, and exploring design directions.

It encodes a specific aesthetic: effortless, aspirational, timeless. Think Linear, Vercel, Stripe, Aesop.

---

## What it does

Drop it into any Claude conversation and it automatically detects what you need:

| You say... | What happens |
|---|---|
| "Here's my dashboard header, what's wrong with it?" | **Critique** — specific fixes, no hedging |
| "Build me a pricing table" or share a Figma URL | **Code** — production-ready React + Tailwind |
| "Give me a type scale and color palette for my SaaS" | **Spec** — exact tokens, CSS custom properties |
| "Show me a few directions for this nav" | **Variants** — 3 distinct directions with tradeoffs |

---

## Install in 3 steps

### Step 1 — Download the skill file

Download **`design-taste.skill`** from this repo. Click the file name above, then click the download button (the arrow icon in the top right of the file viewer).

### Step 2 — Open Claude Code settings

Open Claude Code on your desktop. Press `Cmd + ,` (Mac) or go to **Settings** from the menu.

Navigate to the **Skills** tab.

### Step 3 — Install

Click **Install from file**, select the `design-taste.skill` file you just downloaded, and confirm.

That's it. The skill is now active in all your Claude conversations.

---

## How to use it

Just talk to Claude naturally. The skill triggers automatically when your message involves design.

**Get a critique:**
> "My SaaS header has a logo on the left, nav in the center, user avatar on the right. White background, `box-shadow: 0 2px 8px rgba(0,0,0,0.15)`, nav links in `#0066FF`. What's wrong with it?"

**Build a component:**
> "Build me a pricing table with three tiers — Free, Pro at $12/mo, and Enterprise. Clean, modern, the Pro tier should stand out."

**Get a design spec:**
> "I'm building a project management tool for consultants. Give me a full design token set — type scale, color palette, spacing, everything."

**Explore directions:**
> "I need a sidebar navigation component. Show me three different design directions."

---

## The aesthetic

This skill is opinionated. It will always push you toward:

- **Restraint over decoration** — if something doesn't earn its place, it gets cut
- **Type doing real work** — hierarchy through weight and size, not color and noise
- **Considered spacing** — generous, rhythmic, never cramped
- **Timeless over trendy** — no neon gradients, heavy glassmorphism, or busy animations
- **Reference-grade output** — code that could sit next to a Stripe or Linear screenshot without embarrassment

If you ask for something that breaks the aesthetic (rainbow gradients, etc.), the skill will do it — but it'll note the tradeoff.

---

## Customize it

The skill's full instructions live in `design-taste/SKILL.md`. Open that file to:

- Add your own brand colors or font choices
- Adjust the reference brands to match your taste
- Tweak the four modes to fit your workflow

After editing, repackage and reinstall:

```bash
# From the skill-creator directory
python3 -m scripts.package_skill /path/to/design-taste

# Then reinstall the .skill file in Claude Code settings
```

---

## What's in this repo

```
design-taste/
└── SKILL.md          — The full skill instructions

design-taste.skill    — The installable file (zip archive of the above)
README.md             — This file
```
