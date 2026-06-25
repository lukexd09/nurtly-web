# Nurtly Web

Nurtly Web is a simple static Astro site with draft privacy and support pages in English and Polish.

## Setup

```bash
npm install
npm run dev
npm run build
```

## Available routes

- `/`
- `/privacy`
- `/privacy/en`
- `/privacy/pl`
- `/support/en`
- `/support/pl`

## Add another language

Create matching localized content, add the new language route pair, and update the language switcher and `hreflang` links in the layout.
