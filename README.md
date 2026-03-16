<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Three.js-0.168-000000?style=flat-square&logo=threedotjs" />
  <img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel" />
</p>

<h1 align="center">Samarth Bhamare — Portfolio</h1>

<p align="center">
  <strong>Agentic AI Engineer & Backend Software Engineer</strong><br/>
  Interactive 3D portfolio built with React, Three.js, and GSAP scroll animations
</p>

<p align="center">
  <a href="https://samarthbhamare.vercel.app">Live Demo</a> &bull;
  <a href="https://www.linkedin.com/in/samarth-bhamare">LinkedIn</a> &bull;
  <a href="mailto:bhamaresamarth@gmail.com">Contact</a>
</p>

---

## Preview

<p align="center">
  <img src="https://samarthbhamare.vercel.app/images/medxprts.png" width="80%" alt="Portfolio Preview" />
</p>

> **Live at:** [samarthbhamare.vercel.app](https://samarthbhamare.vercel.app)

---

## Features

- **Interactive 3D Character** — WebGL character model that responds to mouse movement and animates on scroll
- **GSAP Scroll Animations** — Smooth scroll-driven transitions using ScrollSmoother, ScrollTrigger, and SplitText
- **Physics-based Tech Stack** — 3D bouncing spheres with tech logos using Rapier physics engine
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Violet/Purple Theme** — Custom color scheme with glow effects and animated gradients
- **Project Carousel** — Showcases projects with descriptions, tools, and live links
- **Loading Screen** — Animated loading experience with progress tracking
- **Custom Cursor** — Interactive cursor with hover states

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **3D & Graphics** | Three.js, React Three Fiber, React Three Drei, Rapier Physics |
| **Animation** | GSAP, ScrollSmoother, ScrollTrigger, SplitText |
| **Styling** | CSS3, CSS Variables, Custom Properties |
| **Deployment** | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Clone & Run

```bash
# Clone the repository
git clone https://github.com/Samarth0211/samarth-portfolio.git
cd samarth-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output is in the `dist/` folder, ready for deployment.

---

## Customize for Yourself

Want to use this template for your own portfolio? Here's how:

1. **Fork this repo** (don't push changes to this repo directly)
2. **Update content** in these files:
   - `src/components/Landing.tsx` — Name and title
   - `src/components/About.tsx` — Bio
   - `src/components/Career.tsx` — Work experience
   - `src/components/WhatIDo.tsx` — Skills and expertise
   - `src/components/Work.tsx` — Projects
   - `src/components/Contact.tsx` — Contact info and socials
   - `src/components/Navbar.tsx` — Initials and email
   - `src/components/SocialIcons.tsx` — Social links
   - `src/components/Loading.tsx` — Loading screen text
   - `index.html` — Page title and meta tags
3. **Change colors** in `src/index.css`:
   ```css
   --accentColor: #a78bfa;      /* Change to your accent color */
   --backgroundColor: #0d0a17;  /* Change to your background */
   ```
4. **Replace images** in `public/images/`:
   - Tech stack logos (`.webp`, 512x512)
   - Project screenshots (`.png`, 1920x1080)
5. **Add your CV** at `public/Samarth_Bhamare_CV.pdf`
6. **Deploy** to Vercel:
   ```bash
   npm run build
   cd dist && vercel deploy --prod --yes
   ```

---

## Project Structure

```
src/
├── components/
│   ├── Character/        # 3D character model (Three.js)
│   ├── styles/           # CSS for each component
│   ├── utils/            # GSAP animations & scroll effects
│   ├── Landing.tsx       # Hero section
│   ├── About.tsx         # About me
│   ├── Career.tsx        # Timeline
│   ├── WhatIDo.tsx       # Skills cards
│   ├── Work.tsx          # Project carousel
│   ├── TechStack.tsx     # 3D physics tech spheres
│   ├── Contact.tsx       # Footer / contact
│   └── ...
├── context/              # Loading state provider
├── index.css             # Global styles & theme variables
└── App.tsx               # Root component
```

---

## Deployment

This portfolio is deployed on **Vercel** (free tier). To deploy your own:

```bash
npm install -g vercel
npm run build
cd dist
vercel deploy --prod --yes
```

---

## Credits

This portfolio is built on top of the amazing open-source template by **Rajesh Chityal**.

> **Original Template:** [github.com/raxx21/rajesh-portfolio](https://github.com/raxx21/rajesh-portfolio)
>
> Huge thanks to [Rajesh Chityal](https://github.com/raxx21) for creating and open-sourcing this incredible 3D portfolio template. The character model, GSAP scroll animations, and overall design architecture are his original work.

**Changes made in this fork:**
- Updated all content (name, bio, projects, career, skills, contact)
- Changed color scheme from teal/cyan to violet/purple
- Migrated from `gsap-trial` to the free `gsap` package
- Added project descriptions and live links
- Replaced tech stack logos
- Fixed character positioning for wide screens
- Deployed on Vercel

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Designed & Developed by <strong>Samarth Bhamare</strong><br/>
  Original template by <a href="https://github.com/raxx21">Rajesh Chityal</a>
</p>
