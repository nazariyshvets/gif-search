# GIF Search — Vite + React + TypeScript + Tailwind

A lightweight React app scaffolded with Vite. Uses Tailwind CSS v4 (via @tailwindcss/vite) and modern tooling.

## Quick start
- Prerequisites: Node 20+, npm
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Tech stack
- React 19 + React DOM
- TypeScript 5.8
- Vite 7 (SWC React plugin)
- Tailwind CSS 4 + tw-animate-css
- ESLint 9 + Prettier (tailwindcss plugin)
- shadcn/ui config (lucide icons)

## Project layout
- Entry HTML: `index.html` (mounts `#root`)
- App entry: `src/main.tsx` → renders `<App />`
- Styles: `src/index.css` (Tailwind + themes)
- Vite config: `vite.config.ts`

Path alias: `@/*` → `src/*` (see `tsconfig.json` + Vite resolve).

## Styling & theming
- Tailwind v4 with CSS variables for light/dark themes
- Dark mode: add the `.dark` class to a parent element (e.g., `<html class="dark">`)

## Notes
- Don't forget to set `GIPHY_API_KEY` in `.env`