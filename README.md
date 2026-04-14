# Professional Journey | Jornada Profissional

A high-performance, responsive, and bilingual portfolio timeline built with **React 18**, **Vite**, and **Tailwind CSS v4**. This project showcases a technical career path with a "Deep Dive" interactive feature to demonstrate expertise in architecture, engineering principles, and system-level troubleshooting.

## 🚀 Technical Highlights | Destaques Técnicos

- **Tailwind CSS v4:** Utilizes the latest CSS-first configuration engine for ultra-fast styling and a modern "Dark Mode" aesthetic.
- **Dynamic Localization (EN/PT-BR):** A custom state-driven internationalization system allowing real-time switching between English and Portuguese.
- **Interactive UI & Animations:** Powered by **Framer Motion** for smooth scroll-reveal effects and accordion-style technical deep dives.
- **Component-Driven Architecture:** Clean separation of concerns between data structures, UI components, and logic.
- **Brand Integration:** Implementation of **React Icons** for a professional, unified iconography system.

## 🛠️ The Stack | Tecnologias

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** React Icons (Lu / Fa sets)
- **Animations:** Framer Motion

## 📁 Project Structure

```text
src/
├── components/
│   ├── data.js           # Centralized localized content & dictionary
│   ├── Timeline.jsx      # Main container & vertical line logic
│   ├── TimelineItem.jsx  # Individual milestone cards, icons & animations
│   └── Footer.jsx        # Social links & contact info
├── App.jsx               # Global state, language selector & layout wrapper
└── index.css             # Tailwind v4 entry point (@import "tailwindcss")