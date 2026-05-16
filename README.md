# Aditya Chauhan — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/Aditya-Developer19/Aditya-Developer19.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Aditya-Developer19/Aditya-Developer19.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-Aditya--Developer19.github.io-coral?style=flat&logo=github)](https://Aditya-Developer19.github.io/)

> Personal developer portfolio of **Aditya Chauhan** — Full-Stack & AI Developer, B.Tech IT @ MSIT GGSIPU.

**🌐 Live:** [https://Aditya-Developer19.github.io/](https://Aditya-Developer19.github.io/)

---

## ✨ Features

- **Hero Section** — Animated typing effect, round profile photo with rotating orbit rings, "Available for opportunities" badge, résumé download button
- **About Section** — Two-column layout with bio and a timeline of work experience (Geek Room, Energie Clothing)
- **Capabilities Section** — 5 tech-domain cards (Frontend, Backend, Databases, Agentic AI, Systems & DevOps) that reveal one-by-one as you scroll using `IntersectionObserver` — cards stay revealed on scroll-up; responsive 3→2→1 column grid
- **Projects Section** — 3 featured projects (TaskFlow Pro, AI Personal Assistant, Agentic Workflow Engine) with tech stack tags, top-accent colour bars, and hover lift effects
- **Contact Section** — Email, GitHub, LinkedIn links with slide-right hover animation
- **Sticky Nav** — Glassmorphic navbar that condenses on scroll, with smooth-scroll to each section and a Résumé CTA
- **Auto-Deploy** — GitHub Actions workflow that builds and deploys on every push to `main`

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Vanilla CSS (custom design system) |
| Fonts | Cormorant Garamond · DM Sans · JetBrains Mono (Google Fonts) |
| Animations | CSS transitions + `IntersectionObserver` API |
| Deployment | GitHub Pages via GitHub Actions |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#09090f` | Page background (deep navy) |
| `--surface` | `#0e0e1c` | Section / card surface |
| `--coral` | `#f87171` | Primary accent — name, buttons |
| `--teal` | `#2dd4bf` | Secondary accent — Frontend card, links |
| `--amber` | `#fbbf24` | AI card accent |
| `--purple` | `#a78bfa` | Databases card, résumé button |
| `--green` | `#34d399` | Available badge, Systems card |
| `--font-display` | Cormorant Garamond | Section headings (serif) |
| `--font-sans` | DM Sans | Body text |
| `--font-mono` | JetBrains Mono | Code, tags, badges |

---

## 📁 Project Structure

```
Aditya-Developer19.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions auto-deploy workflow
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── resume.pdf              # Aditya's résumé (served directly)
├── src/
│   ├── assets/
│   │   └── profile-pic.jpeg    # Hero profile photo
│   ├── App.jsx                 # All React components & logic
│   ├── App.css                 # Component-level styles
│   ├── index.css               # Global design tokens & resets
│   └── main.jsx                # React entry point
├── index.html                  # Vite HTML entry (served by GitHub Pages)
├── vite.config.js              # Vite config with base: './' for GH Pages
└── package.json
```

---

## 🚀 Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/Aditya-Developer19/Aditya-Developer19.github.io.git
cd Aditya-Developer19.github.io

# 2. Install dependencies
npm install

# 3. Start dev server (hot-reload)
npm run dev
# → Open http://localhost:5173/

# 4. Build for production
npm run build
# → Output in dist/
```

---

## ⚙️ GitHub Actions — Auto Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`:

```
push to main
    ↓
[Build job]
  checkout → setup Node 20 → npm ci → npm run build → upload dist/
    ↓
[Deploy job]
  actions/deploy-pages → live at https://Aditya-Developer19.github.io/
```

**One-time setup required in GitHub:**
1. Go to **Settings → Pages**
2. Set **Source** to **"GitHub Actions"**
3. Save — all future pushes auto-deploy ✅

---

## 🤖 Capabilities Showcased

| Domain | Skills |
|---|---|
| **Frontend** | React 18, Redux Toolkit, HTML5/CSS3, Vite, Framer Motion |
| **Backend** | Node.js, Express.js, FastAPI, REST APIs, JWT Auth |
| **Databases** | MongoDB, PostgreSQL, MySQL, Firebase, Supabase |
| **Agentic AI** | LangGraph, CrewAI, AutoGen, Anthropic SDK, MCP, OpenAI API |
| **Systems & DevOps** | Linux, Bash/Shell, Docker, Computer Networking |

---

## 📬 Contact

| Channel | Link |
|---|---|
| Email | [connect.adityachauhan@gmail.com](mailto:connect.adityachauhan@gmail.com) |
| GitHub | [@Aditya-Developer19](https://github.com/Aditya-Developer19) |
| LinkedIn | [aditya-chauhan-96a360248](https://linkedin.com/in/aditya-chauhan-96a360248) |

---

<p align="center">Built with React + Vite · Deployed on GitHub Pages · © 2026 Aditya Chauhan</p>
