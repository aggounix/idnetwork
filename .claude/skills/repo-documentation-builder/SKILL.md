---
name: repo-documentation-builder
description: Use this skill when creating feature documentation with screenshots for any repository. Activates for tasks labeled with 'documentation', 'docs', 'feature-doc', or when the task description mentions creating documentation, user guides, or README files. Handles Next.js, VitePress, Docusaurus, and plain markdown documentation systems.
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Repository Documentation Builder

Creates comprehensive feature documentation with screenshots in the repository's existing documentation system.

## When to Use This Skill

This skill activates automatically when:
- Task labels include: `documentation`, `docs`, `feature-doc`, `user-guide`
- Task description mentions: creating documentation, writing docs, user guide, feature guide
- Screenshots are attached to the task

## 🔴 CRITICAL: Screenshot Handling - FIRST PRIORITY

**BEFORE doing anything else, you MUST copy screenshots to the repository.**

Screenshots are ALREADY downloaded at `/workspace/attachments/`. Your FIRST action must be:

### MANDATORY Step-by-Step Process:

**Step 1: List what you have**
```bash
ls -la /workspace/attachments/
```

**Step 2: Examine EACH image with Read tool**
- Use Read tool on each .png/.jpg file
- Understand what each screenshot shows

**Step 3: Create destination directory**
```bash
# For Next.js (if app/ or src/app/ exists):
mkdir -p public/images/docs/[feature-name]/

# For other repos (if only docs/ exists):
mkdir -p docs/images/[feature-name]/
```

**Step 4: Copy EVERY screenshot using Bash tool**
```bash
# Use actual filenames from Step 1, rename to descriptive names
# Example for Next.js:
cp /workspace/attachments/Screenshot_2025-11-22_172158.png public/images/docs/physical-tickets/overview.png
cp /workspace/attachments/Screenshot_2025-11-22_172105.png public/images/docs/physical-tickets/creation-dialog.png
cp /workspace/attachments/Capture_d___cran_2025-11-18_195259.png public/images/docs/physical-tickets/validation-screen.png

# CRITICAL: Replace [feature-name] with actual feature name
# CRITICAL: Replace screenshot filenames with actual files from Step 1
# CRITICAL: Use descriptive names, NOT generic names
```

**Step 5: Verify files were copied**
```bash
ls -la public/images/docs/[feature-name]/
```

**ONLY AFTER** completing Steps 1-5, proceed to create documentation.

## Documentation Creation Steps

### 1. Analyze Repository Structure

Check what documentation system exists:
- Next.js: Look for `app/docs/` or `src/app/docs/`
- Simple docs: Look for `docs/` folder
- Read 1-2 existing docs to match the style

### 2. Create Documentation File

**For Next.js** (if you see `app/` directory):
- Create: `src/app/docs/features/[feature-name]/page.tsx`
- Use React/TSX format
- Import Image: `import Image from "next/image"`
- Reference screenshots: `<Image src="/images/docs/feature-name/screenshot.png" alt="..." width={800} height={600} />`

**For Simple Markdown** (if you see `docs/` folder only):
- Create: `docs/features/[feature-name].md`
- Use Markdown format
- Reference screenshots: `![Description](../images/feature-name/screenshot.png)`

### 3. Documentation Structure Template

```markdown
# Feature Name

Brief description of what this feature does.

## Overview

What is this feature and why use it?

## Screenshots

![Main Interface](../images/feature-name/main-interface.png)
*Caption describing what the screenshot shows*

## Getting Started

Quick steps to use this feature:

1. Step one
2. Step two
3. Step three

## Key Features

### Feature 1
Description

### Feature 2
Description

## Examples

### Example 1: [Use Case]
Practical example

## Troubleshooting

Common issues and solutions
```

### 4. Update Navigation

**For Next.js**:
- Find navigation component (usually in `src/components/docs/`)
- Read the file to understand the structure
- Add your new page using Edit tool

**For Simple Markdown**:
- Check for sidebar config file
- Or update `docs/README.md` to add a link

### 5. Commit and Create PR

```bash
git add .
git commit -m "docs: Add [feature name] documentation with screenshots"
gh pr create --title "docs: Add [feature name] documentation" --body "Added comprehensive documentation for [feature name] including screenshots"
```

## Critical Reminders

**DO NOT:**
- ❌ Create README.md files in the images folder
- ❌ Skip copying screenshots
- ❌ Use generic filenames like `image1.png`
- ❌ Create a separate DOCUMENTATION_SUMMARY.md file
- ❌ Forget to update navigation

**DO:**
- ✅ Copy screenshots to `public/images/docs/[feature]/descriptive-name.png`
- ✅ Reference all screenshots in the documentation
- ✅ Use descriptive names that match the content
- ✅ Update navigation config
- ✅ Create PR with all changes
- ✅ Return structured JSON output as specified in the main prompt

## Output Format

This skill guides your WORK (creating documentation), but does NOT change your OUTPUT FORMAT. You MUST still return the structured JSON summary as specified in the main prompt template.
