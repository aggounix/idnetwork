# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IdNetwork is a static marketing landing page for an event management platform targeting French student organizations (BDE - Bureau Des Élèves). This is a pure HTML/CSS/JavaScript site with no build system or dependencies.

## Development

**Running locally:** Open `index.html` directly in a browser. No build step required.

**No package manager, build tools, or test framework is configured.** This is intentional for a simple static site.

## Architecture

### File Structure
- `index.html` - Complete landing page markup (~45KB, contains all section content)
- `styles.css` - All styling (~1,461 lines, vanilla CSS with responsive breakpoints)
- `script.js` - Interactive functionality (~270 lines, vanilla JavaScript)
- `img/` - Marketing images and dashboard screenshots

### CSS Organization
- Mobile-first responsive design with breakpoints at 640px, 768px, 1024px
- Dark theme with navy background (#020617)
- Accent colors: purple (#9333ea), pink (#ec4899), plus orange/green/blue variants
- Component classes follow `.section-{name}` and `.{name}-{element}` patterns

### JavaScript Patterns
- Intersection Observer API for scroll-triggered animations (`.animate-on-scroll` class)
- Single-open accordion behavior in FAQ section
- Animated number counters with K/+ formatting
- Mobile navigation toggle
- Form submission with success feedback

### Key Sections (in order)
1. Navigation - Fixed header with responsive mobile menu
2. Hero - Main CTA with animated background
3. USP - Feature grid with expandable items
4. Benefits - Card grid layout
5. Analytics - Dashboard screenshot showcase
6. FAQ - Accordion Q&A
7. CTA - Email collection form
8. Statistics - Animated counters

## Technical Notes

- Google Tag Manager integrated (GTM-PNV6D8WW)
- SVG icons are inline in HTML for styling flexibility
- Uses CSS gradients extensively for text and backgrounds
- No external libraries or frameworks - everything is vanilla
