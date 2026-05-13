# Design System — Claude Code Guide

## Project overview

React + TypeScript component library built from our Figma design system. Components are documented in Storybook.

## Stack

- **Components:** React 18 + TypeScript
- **Build:** Vite (library mode)
- **Docs:** Storybook 8
- **Tests:** Vitest
- **Package manager:** npm

## Key commands

```bash
npm run storybook       # Start Storybook at localhost:6006
npm run build           # Build the library
npm run typecheck       # Check types
npm test                # Run tests
```

## Adding a new component

1. Create a folder: `src/components/ComponentName/`
2. Add `ComponentName.tsx` — the component itself
3. Add `ComponentName.stories.tsx` — Storybook stories
4. Add `index.ts` — re-export the component and its types
5. Export from `src/index.ts`

## Design token workflow

- Tokens live in `src/tokens/index.ts`
- When the designer shares Figma variables, update token values there
- Always use token values inside components — never hardcode hex colors or px values

## Figma integration

- Reference the Figma file for component specs before implementing
- Match component props to Figma variants (e.g. variant, size, state)
- Storybook story names should mirror Figma frame names where possible

## Conventions

- One component per folder
- Props interface named `ComponentNameProps`, exported alongside the component
- Use `data-variant` / `data-size` attributes for styling hooks (CSS can target these)
- No inline styles except for dynamic/computed values
- Stories use `tags: ["autodocs"]` so docs pages are generated automatically

## File structure

```
src/
├── components/
│   └── ComponentName/
│       ├── ComponentName.tsx
│       ├── ComponentName.stories.tsx
│       └── index.ts
├── tokens/
│   └── index.ts
└── index.ts
```
