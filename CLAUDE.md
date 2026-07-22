# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Agustín Montes (AI Developer & Automations), built with Next.js 16 (App Router) and React 19. Single-page marketing site (`src/app/page.tsx`) plus a dynamic project detail route, bilingual (ES/EN) via i18next.

## Commands

```bash
npm run dev      # start dev server with Turbopack (http://localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # next lint (eslint.config.mjs -> next/core-web-vitals, next/typescript)
```

There is no test suite configured in this repo.

Node version is pinned via `.nvmrc` (20) and `package.json` `engines` (>=20.9.0).

## Architecture

- **App Router, mostly client-rendered.** `src/app/page.tsx` is a single `"use client"` page that composes the whole homepage from section components in `src/components/`: `Navbar`, `HeroSection`, `ProjectsSection`, `ExperienceSection`, `ContactSection`, with `Background` rendered behind everything (fixed dark theme `bg-[#060609]`, not user-togglable despite `ThemeSwitcher` existing).
- **Project data lives outside `src/`**, in `data/projectsData.ts` (imported via relative paths like `../../data/projectsData` from `src/app`, and `@/../data` is not used — check existing import style before adding new consumers). This file exports `projects: ProjectProps[]` and `ProjectCategory = 'web' | 'automation' | 'ai-agent'`. Project `description`/`text` fields are i18n keys (e.g. `"project6.description"`), not literal strings — they get resolved via `t(\`projects.${project.description}\`)`.
- **Dynamic project route**: `src/app/projects/[id]/page.tsx` looks up a project by numeric `id` from `data/projectsData.ts` client-side (no `generateStaticParams`/server fetch — it awaits the `params` promise inside `useEffect`). Category badge styling (icon/colors) is duplicated between this file and `ProjectsSection.tsx` (`categoryMeta` / `categoryConfig`) — keep both in sync when adding a category.
- **i18n**: `src/lib/i18n/index.ts` configures i18next with `i18next-browser-languagedetector` (detects from localStorage/navigator, falls back to `es`) and `src/lib/i18n/resources.ts` holds all `en`/`de`-style translation strings inline (no external JSON files, no per-namespace splitting). It's initialized once via `src/app/providers.tsx` (`import '@/lib/i18n'` as a side effect), which wraps the app in `layout.tsx`. When adding new UI copy, add keys to both `en` and `es` blocks in `resources.ts`.
- **Contact form**: `ContactSection.tsx` posts to `src/app/api/contact/route.ts`, a Next.js Route Handler that sends mail via the `resend` SDK using `RESEND_API_KEY` (from `.env.local`, gitignored) to a hardcoded recipient address. There's no server-side validation of the incoming payload beyond what the client does.
- **Styling**: Tailwind CSS v4 via `@import "tailwindcss"` in `src/app/globals.scss` (no `tailwind.config.js` content — it's present but empty; v4 uses CSS-based config/theme). Component-specific SCSS lives in `src/styles/*.scss` (e.g. `themeSwitcher.scss`, `languageSwitcher.scss`, `navbar.scss`, `input.scss`) and is imported directly into the component that uses it. Animations mix Tailwind utility classes with `framer-motion` (`whileInView`/`AnimatePresence` patterns used throughout section components) and `lottie-react` for the contact section's JSON animation (loaded at runtime from `public/assets/contactAnimation.json`).
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`). Note `data/` is at the repo root, outside `src/`, so it is *not* reachable via `@/`.
- **Deployment**: configured for both Vercel (`.vercel/`) and Netlify (`netlify.toml`, which pins `NODE_VERSION=18` — inconsistent with `.nvmrc`'s Node 20; be aware if debugging Netlify build failures).
