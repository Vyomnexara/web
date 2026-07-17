# Vyomnexara Consulting LLP — Website

Landing page for Vyomnexara Consulting LLP, built with React, Vite, and Tailwind CSS.

## Tech stack

- **React** (Vite)
- **Tailwind CSS v4**
- Custom scroll-reveal animations

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

## Project structure

```
src/
├── pages/            # route-level pages (Home, About, Services, Contact)
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Hero, Ticker, About, Services, WhyUs, Credentials,
│   │                 #   Industries, CTABand, Contact
│   └── ui/           # Reveal, SectionHeader, Button, Card
├── hooks/            # useScrollReveal
├── constants/        # site content (company info, services, timeline, etc.)
└── index.css         # design system + animations
```
