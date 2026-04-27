# Ultaire — Astro Site

## Setup

```bash
cd astro-site
npm install
npm run dev        # http://localhost:4321
npm run build      # output to dist/
npm run preview    # preview the build
```

## Structure

```
astro-site/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── styles/
    │   └── global.css          ← all CSS vars + base styles
    ├── data/
    │   └── projects.ts         ← project list (edit this to add/remove)
    ├── components/
    │   ├── Nav.astro           ← sticky nav (About + Projects)
    │   ├── CloudCanvas.astro   ← atmospheric fog animation
    │   ├── ProjectCard.astro   ← individual project card
    │   └── Footer.astro        ← minimal footer
    ├── layouts/
    │   └── Layout.astro        ← shared HTML shell
    └── pages/
        ├── index.astro         ← homepage ("Ultaire" hero)
        ├── about.astro         ← about page
        └── projects.astro      ← projects grid
```

## Customization

**Add a project:** Edit `src/data/projects.ts` — add a new object to the array.

**Colors / fonts:** All in `src/styles/global.css` under `:root`.

**Cloud intensity:** Adjust `COUNT` and `targetOpacity` range in `CloudCanvas.astro`.
