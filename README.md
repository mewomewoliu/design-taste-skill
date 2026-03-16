# AI Design Studio — Claude Code Skills

A collection of Claude Code skills that work together as a multidisciplinary AI design studio. Install one or all eight — each skill is independent and activates automatically based on what you're working on.

---

## The skills

### design-engineer ⭐ Best starting point
Design director and engineer in one. Contains the full aesthetic intelligence layer (design-taste) plus deep technical implementation. Four modes: Critique, Spec, Code, Variant. Use this if you want one skill that does everything.

### design-taste
The pure aesthetic layer, standalone. Use this if you already have a separate engineer workflow and just want the design sensibility amplifier.

### Design Studio — 7 specialist roles

| Skill | Role | Triggers on |
|---|---|---|
| `design-director` | Creative director + quality guardian | Overall design review, "does this all hang together" |
| `brand-director` | Brand strategy + identity | Brand personality, positioning, visual identity |
| `content-director` | Messaging + UX copy | Page copy, messaging frameworks, microcopy |
| `design-engineer` | Design-to-code (includes design-taste) | Component code, Figma, design critiques, tokens |
| `design-system-director` | Tokens + components + systems | Design systems, component libraries, consistency |
| `motion-designer` | Animation + interaction timing | Animations, transitions, "how should this move" |
| `product-designer` | UX + flows + information architecture | User flows, wireframes, "how should this work" |

---

## Install

Choose the method that fits how you work.

---

### Method 1 — One command (recommended)

**Requires:** Node.js ([download](https://nodejs.org) if you don't have it)

Run this in your terminal:

```bash
npx github:mewomewoliu/design-taste-skill
```

This downloads all 8 `.skill` files to your `~/Downloads/design-studio-skills/` folder and opens it in Finder.

Then do the final step: [→ Install into Claude Code](#final-step--install-into-claude-code)

---

### Method 2 — Shell script (one-liner)

**Requires:** curl (built into macOS)

```bash
curl -fsSL https://raw.githubusercontent.com/mewomewoliu/design-taste-skill/main/install.sh | bash
```

Same result: downloads all `.skill` files to `~/Downloads/design-studio-skills/` and opens the folder.

Then do the final step: [→ Install into Claude Code](#final-step--install-into-claude-code)

---

### Method 3 — Clone the repo

```bash
# Clone
git clone https://github.com/mewomewoliu/design-taste-skill.git
cd design-taste-skill

# Run the installer
npm run install-skills
```

Then do the final step: [→ Install into Claude Code](#final-step--install-into-claude-code)

---

### Final step — Install into Claude Code

After running any of the methods above, your `.skill` files are sitting in `~/Downloads/design-studio-skills/`. Now bring them into Claude Code:

1. Open **Claude Code**
2. Press `Cmd + ,` to open **Settings**
3. Click the **Skills** tab
4. Click **Install from file**
5. Select the `.skill` file you want to install
6. Repeat for each skill

**Recommended starting set:**

| Install this | Why |
|---|---|
| `design-engineer.skill` | Design + code in one skill — replaces design-taste |
| `design-director.skill` | Ties the whole studio together |
| `brand-director.skill` | Add if you're doing brand or identity work |

Or select all 8 and install the full studio.

---

### Method 4 — Manual download (no terminal)

If you prefer not to use the terminal:

1. Go to this repo on GitHub
2. Click any `.skill` file (e.g. `design-engineer.skill`)
3. Click the **download** button (arrow icon, top right of the file view)
4. Repeat for each skill you want
5. Follow the [final step above](#final-step--install-into-claude-code)

---

## How the team works together

The skills share a coherent design philosophy and collaborate across a project:

```
Brand Director       → defines brand identity, personality, visual principles
    ↓
Content Director     → shapes messaging and voice from the brand framework
    ↓
Design System Director → builds tokens and components from the brand principles
    ↓
Product Designer     → designs flows and interfaces using the system
    ↓
Design Engineer      → produces and implements the visual UI (includes design-taste)
    ↓
Motion Designer      → defines how everything moves and transitions
    ↓
Design Director      → reviews all outputs for coherence and quality
```

In practice, roles activate on demand — no need to follow this sequence. Ask about brand positioning and Brand Director activates. Ask to build a component and Design Engineer activates. Ask for a full creative review and Design Director takes over.

---

## Example prompts

**Brand work:**
> "I'm launching a sustainable skincare brand for women 30–45 who are skeptical of greenwashing. Define our brand positioning and personality."

**Content:**
> "Write the homepage hero copy for our project management tool. It's for freelancers who are tired of heavyweight tools like Asana."

**Design system:**
> "Build a complete design token set for a fintech product. Light and dark mode. Premium, trustworthy, calm."

**Product design:**
> "Map the cancellation flow for a SaaS subscription. We don't want dark patterns, but we want one honest save offer."

**Motion:**
> "Define the motion principles for a playful creative agency brand. What's the timing vocabulary and what does it feel like?"

**Component code:**
> "Build a pricing table — Free, Pro at $12/mo, Enterprise. The Pro tier should stand out without being loud."

**Full studio:**
> "We're building a B2B analytics platform for enterprise. The brand needs to feel credible and intelligent. Start with brand direction, then give me a design token set aligned to it."

---

## Customize any skill

Every skill's instructions live in a `SKILL.md` file inside its directory. Open it to add your own brand specifics, adjust role behavior, or tune output format.

After editing, repackage with the skill-creator tool built into Claude Code:

```bash
# From skill-creator directory (inside Claude's local plugins)
python3 -m scripts.package_skill /path/to/skill-folder
# Then reinstall the .skill file in Claude Code settings
```

---

## Repo structure

```
design-taste/                    — Aesthetic intelligence skill source
design-studio/
  ├── design-director/           — Creative director
  ├── brand-director/            — Brand strategy
  ├── content-director/          — Messaging and copy
  ├── design-engineer/           — Design-to-code (superset of design-taste)
  ├── design-system-director/    — Tokens and systems
  ├── motion-designer/           — Animation
  └── product-designer/          — UX and flows

scripts/
  └── install.js                 — Installer script (used by npx and npm run)

install.sh                       — One-line shell installer
package.json

design-taste.skill               — Installable skill files
design-engineer.skill
design-director.skill
brand-director.skill
content-director.skill
design-system-director.skill
motion-designer.skill
product-designer.skill
```
