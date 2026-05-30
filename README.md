# Portfolio — Sérgio Bernardelli Netto

Personal portfolio website built with React and Vite, showcasing professional experience, projects, and technical skills. Designed for performance, accessibility, and a polished dark-themed UI.

## Technologies

| Tool | Version | Purpose |
|------|---------|---------|
| **React** | 19 | Component-based UI framework for building reactive, declarative interfaces |
| **Vite** | 8 | Fast build tool with HMR (Hot Module Replacement) for rapid development |
| **Tailwind CSS** | 4 | Utility-first CSS framework for rapid, consistent styling via composable classes |
| **Framer Motion** | 12 | Animation library for scroll-reveal effects, transitions, and gesture-driven interactions |
| **React Icons** | 5 | Icon library providing popular icon sets (Lucide, Font Awesome) as React components |

## Why these tools?

- **React** was chosen for its mature ecosystem, component reusability, and wide industry adoption — particularly relevant for a Fullstack Developer portfolio.
- **Vite** replaces Webpack/CRA due to its near-instant dev server startup and optimized production builds.
- **Tailwind CSS v4** leverages the new CSS-first configuration engine, reducing bundle size and eliminating complex config files. The utility-first approach keeps component files self-contained and maintains visual consistency across the entire portfolio.
- **Framer Motion** enables smooth, performant animations (scroll reveals, accordion expansions, hover effects) using a declarative API that integrates naturally with React's component model.
- **React Icons** allows importing only the specific icons used, keeping the bundle lean while providing a consistent visual language.

## Project Structure

```
portfolio/
├── index.html                 # Entry HTML with root mount point
├── vite.config.js             # Vite config with React + Tailwind plugins
├── package.json               # Dependencies and scripts
├── public/
│   └── favicon.svg            # "SN" monogram favicon
└── src/
    ├── main.jsx               # React root render
    ├── index.css              # Tailwind v4 entry (@import "tailwindcss") + custom theme tokens
    ├── App.jsx                # Root component: state (lang), layout, section composition
    └── components/
        ├── i18n.js            # Centralized bilingual dictionary (EN/PT-BR) for all content
        ├── Navbar.jsx         # Fixed nav with scroll spy, mobile menu, language toggle
        ├── Hero.jsx           # Full-screen hero with animated gradient background
        ├── Experience.jsx     # Alternating timeline layout for work history
        ├── Projects.jsx       # Card grid for key projects with tags and GitHub links
        ├── Skills.jsx         # Categorized skill tags in responsive grid
        ├── Education.jsx      # Side-by-side education and language proficiency cards
        └── Contact.jsx        # Contact links (email, phone, LinkedIn, GitHub) + footer
```

## Key Design Decisions

- **Bilingual (EN/PT-BR)**: All content is stored in a single dictionary object (`i18n.js`) and switched via React state. This avoids routing complexity and keeps translations co-located with the content they describe.
- **Dark theme with purple accent**: The color palette uses deep navy backgrounds (`#0f0f1a`, `#1a1a2e`) with a purple primary (`#7c3aed`) to create a modern, developer-oriented aesthetic reminiscent of popular code editors and dev tools.
- **Scroll spy navigation**: The Navbar uses the Intersection Observer API to highlight the current section, providing clear navigation context without additional dependencies.
- **Timeline layout**: The Experience section uses an alternating left/right card layout with a central vertical line, visually separating each role while maintaining a clear chronological narrative.
- **Responsive by default**: Every section uses Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to adapt from mobile to desktop without separate breakpoint files.

## Running the project

```bash
npm install
npm run dev        # Start dev server (default: http://localhost:5173)
npm run build      # Production build to dist/
npm run preview   # Preview production build locally
```
