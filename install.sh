#!/usr/bin/env bash
set -e

REPO="mewomewoliu/design-taste-skill"
BRANCH="main"
DEST="$HOME/Downloads/design-studio-skills"
BASE_URL="https://raw.githubusercontent.com/$REPO/$BRANCH"

SKILLS=(
  "design-taste.skill"
  "design-engineer.skill"
  "design-director.skill"
  "brand-director.skill"
  "content-director.skill"
  "design-system-director.skill"
  "motion-designer.skill"
  "product-designer.skill"
)

HR="────────────────────────────────────────────────────────────"

echo ""
echo "$HR"
echo ""
echo "  AI Design Studio — Skill Installer"
echo "  Claude Code skill package by @mewomewoliu"
echo ""
echo "$HR"

# Step 1: create destination
echo ""
echo "  1. Creating folder: $DEST"
mkdir -p "$DEST"
echo "     ✓ Folder ready"

# Step 2: download
echo ""
echo "  2. Downloading ${#SKILLS[@]} skill files from GitHub..."
echo ""

FAILED=0
for SKILL in "${SKILLS[@]}"; do
  printf "     Downloading %s..." "$SKILL"
  if curl -fsSL "$BASE_URL/$SKILL" -o "$DEST/$SKILL" 2>/dev/null; then
    echo " ✓"
  else
    echo " ✗"
    FAILED=$((FAILED + 1))
  fi
done

if [ "$FAILED" -gt 0 ]; then
  echo ""
  echo "  ⚠ $FAILED file(s) failed. Check your connection and try again."
fi

# Step 3: open folder
echo ""
echo "  3. Opening the folder..."
if command -v open &>/dev/null; then
  open "$DEST"
elif command -v xdg-open &>/dev/null; then
  xdg-open "$DEST"
fi
echo "     ✓ $DEST"

# Step 4: final instructions
echo ""
echo "$HR"
echo ""
echo "  Last step — install into Claude Code (takes 30 seconds):"
echo ""
echo "  1. Open Claude Code"
echo "  2. Press  Cmd + ,  to open Settings"
echo "  3. Click the  Skills  tab"
echo "  4. Click  Install from file"
echo "  5. Select each .skill file from the folder that just opened"
echo "  6. Repeat for each skill you want"
echo ""
echo "  Recommended starting set:"
echo "    → design-engineer.skill   (design + code, all-in-one)"
echo "    → design-director.skill   (ties the whole studio together)"
echo "    → design-taste.skill      (pure aesthetic layer, optional)"
echo ""
echo "  Or install all 8 for the full AI design studio."
echo ""
echo "$HR"
echo ""
