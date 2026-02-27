# Premium Developer Portfolio

A modern, dark-first developer portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Dark-First Design**: Premium dark theme with glass morphism effects
- **Fully Responsive**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Theme Toggle**: Dark/light mode support with persistent preferences
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO meta tags
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx           # Sticky navbar with theme toggle
│   ├── ThemeProvider.tsx    # Theme context provider
│   └── sections/
│       ├── Hero.tsx         # Hero section with CTA
│       ├── SelectedWork.tsx # Case studies section
│       ├── Services.tsx     # Services cards
│       ├── Process.tsx      # Process steps
│       ├── Authority.tsx    # Insights/blog section
│       ├── About.tsx        # About section
│       └── Contact.tsx      # Contact form
├── public/                  # Static assets
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `background`: Base dark background (#0f172a)
- `background.section`: Section contrast (#1e293b)
- `accent`: Primary accent color (#3b82f6)

### Content

- Update case studies in `components/sections/SelectedWork.tsx`
- Modify services in `components/sections/Services.tsx`
- Edit personal info in `components/sections/About.tsx` and `components/sections/Contact.tsx`
- Update SEO metadata in `app/layout.tsx`

### Social Links

Update social media links in:
- `components/sections/About.tsx`
- `components/sections/Contact.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform supporting Next.js.

## License

MIT
