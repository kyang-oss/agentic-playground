# Design System

A React component library built from our Figma design system.

## Getting started

```bash
npm install
npm run storybook
```

## Development

| Command | Description |
|---|---|
| `npm run storybook` | Start Storybook dev server |
| `npm run build` | Build the component library |
| `npm run build-storybook` | Build static Storybook site |
| `npm run typecheck` | Run TypeScript checks |
| `npm test` | Run tests |

## Structure

```
src/
├── components/   # UI components
├── tokens/       # Design tokens (colors, spacing, typography)
└── index.ts      # Public API
```

## Contributing

1. Branch off `main`
2. Build your component in `src/components/`
3. Add a `.stories.tsx` file alongside it
4. Open a pull request — reference the Figma frame in the description
