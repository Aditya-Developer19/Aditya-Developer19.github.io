import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import profilePic from './assets/profile-pic.jpeg';

// ─── CAPABILITIES DATA ────────────────────────────────────────────────────────
const CAPS = [
  {
    id: 'frontend', title: 'Frontend', icon: '⚡', color: '#2dd4bf',
    skills: ['React 18', 'Redux Toolkit', 'HTML5 / CSS3', 'Vite', 'Framer Motion'],
    desc: 'Blazing-fast, responsive UIs with modern frameworks and pixel-perfect design.',
  },
  {
    id: 'backend', title: 'Backend', icon: '🛠', color: '#f87171',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth'],
    desc: 'Scalable server-side systems with clean APIs, auth flows and middleware.',
  },
  {
    id: 'databases', title: 'Databases', icon: '🗄', color: '#a78bfa',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase'],
    desc: 'Efficient data schemas across SQL & NoSQL with real-time, cloud-native solutions.',
  },
  {
    id: 'ai', title: 'Agentic AI', icon: '🤖', color: '#fbbf24',
    skills: ['LangGraph', 'CrewAI', 'AutoGen', 'Anthropic SDK', 'MCP', 'OpenAI API'],
    desc: 'Multi-agent pipelines that reason, plan and act — autonomous AI workflows.',
  },
  {
    id: 'systems', title: 'Systems & DevOps', icon: '🔩', color: '#34d399',
    skills: ['Linux', 'Bash / Shell', 'Docker', 'Computer Networking'],
    desc: 'Deep systems thinking: containers, networking fundamentals, shell automation.',
  },
];

// ─── PROJECTS DATA ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: 'TaskFlow Pro', period: 'Jan 2025 – Apr 2025',
    desc: 'Full-featured project management SaaS (Notion × Linear). Kanban drag-and-drop, Google OAuth, real-time Firestore, analytics dashboard with burndown charts, dark/light mode.',
    tech: ['React', 'Redux', 'Firebase', 'Recharts', 'Framer Motion'],
    github: '#', live: '#', color: '#2dd4bf',
  },
  {
    title: 'AI Personal Assistant', period: 'Nov 2024 – Dec 2024',
    desc: 'Conversational AI agent answering questions about my professional background using OpenAI / Gemini API with LinkedIn + resume context. FastAPI backend + Gradio frontend.',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'Gemini API', 'Gradio'],
    github: '#', live: null, color: '#f87171',
  },
  {
    title: 'Agentic Workflow Engine', period: 'Ongoing',
    desc: 'Multi-agent pipelines using LangGraph and CrewAI to orchestrate task delegation between specialised AI agents. Integrates Anthropic SDK and MCP for tool-enabled agents.',
    tech: ['Python', 'LangGraph', 'CrewAI', 'Anthropic SDK', 'MCP'],
    github: '#', live: null, color: '#fbbf24',
  },
];

// ─── CAPABILITIES SECTION ─────────────────────────────────────────────────────
// One unified component for both desktop & mobile.
// IntersectionObserver triggers each card individually — one by one as user scrolls.
// Cards stay revealed on scroll-up (disconnect after first trigger).
function CapabilitiesSection() {
  const [revealed, setRevealed] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(prev => new Set([...prev, i]));
            obs.disconnect(); // once shown — always shown
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section id="skills" className="cap-section">
      <h2 className="section-title">Capabilities</h2>
      <div className="cap-grid">
        {CAPS.map((cap, i) => (
          <div
            key={cap.id}
            ref={el => (cardRefs.current[i] = el)}
            className={`cap-card ${revealed.has(i) ? 'cap-visible' : ''}`}
            style={{ '--c': cap.color, '--delay': `${i * 0.07}s` }}
          >
            {/* Window chrome bar */}
            <div className="cap-chrome" style={{ background: `${cap.color}14`, borderBottom: `1px solid ${cap.color}30` }}>
              <span className="cap-dot-r" /><span className="cap-dot-y" /><span className="cap-dot-g" />
              <span className="cap-chrome-label" style={{ color: cap.color }}>
                {cap.icon}&nbsp; {cap.title}
              </span>
            </div>
            {/* Card body */}
            <div className="cap-body">
              <p className="cap-desc">{cap.desc}</p>
              <div className="cap-skills">
                {cap.skills.map(s => (
                  <span key={s} className="cap-skill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [typed, setTyped]         = useState('');
  const [navScrolled, setNavScrolled] = useState(false);
  const full = 'Full-Stack & AI Developer';

  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        if (i < full.length) setTyped(full.slice(0, ++i));
        else clearInterval(iv);
      }, 60);
      return () => clearInterval(iv);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goto = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">

      {/* ── NAV ── */}
      <nav className={navScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <div className="logo">AC<span>.</span></div>
          <div className="nav-links">
            <a href="#me"       onClick={e => { e.preventDefault(); goto('me');       }}>Me</a>
            <a href="#about"    onClick={e => { e.preventDefault(); goto('about');    }}>About</a>
            <a href="#skills"   onClick={e => { e.preventDefault(); goto('skills');   }}>Skills</a>
            <a href="#projects" onClick={e => { e.preventDefault(); goto('projects'); }}>Projects</a>
            <a href="#contact"  onClick={e => { e.preventDefault(); goto('contact');  }}>Contact</a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
            Résumé ↗
          </a>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section id="me" className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" /> Available for opportunities
            </div>
            <h1 className="hero-name">
              Aditya<br /><em>Chauhan</em>
            </h1>
            <div className="hero-tagline">
              <span className="prompt">$ whoami →&nbsp;</span>
              {typed}<span className="cursor">|</span>
            </div>
            <p className="hero-bio">
              B.Tech IT @ MSIT, GGSIPU · Building scalable web apps and agentic
              AI pipelines that bridge systems-level thinking with intelligent workflows.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => goto('projects')}>View Projects</button>
              <button className="btn-ghost"   onClick={() => goto('contact')}>Contact Me</button>
              <a className="btn-outline" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Résumé ↗
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-ring ring-1" />
            <div className="hero-ring ring-2" />
            <img src={profilePic} alt="Aditya Chauhan" className="hero-photo" />
            <div className="hero-available">
              <span className="avail-dot" /> Open to Work
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about">
          <h2 className="section-title">About</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a <span className="hl-coral">Full-Stack & AI Developer</span> pursuing B.Tech in
                Information Technology at Maharaja Surajmal Institute of Technology. I thrive at the
                intersection of <span className="hl-teal">scalable web engineering</span> and&nbsp;
                <span className="hl-amber">agentic AI systems</span>.</p>
              <p>From architecting Kanban SaaS platforms with real-time Firebase sync to building
                multi-agent pipelines with LangGraph and CrewAI — I bring systems-level
                thinking to every problem I touch.</p>
              <p>Previously a <span className="hl-coral">Web Developer at Geek Room</span> and
                Co-Founder of <span className="hl-teal">Energie Clothing</span> — a custom apparel
                venture across Delhi colleges.</p>
            </div>
            <div className="about-timeline">
              <div className="exp-card">
                <div className="exp-period">Sep 2024 – Aug 2025</div>
                <div className="exp-role">Web Developer</div>
                <div className="exp-org">Geek Room</div>
                <p>Developed and maintained responsive, high-performance web applications in a collaborative team environment using modern frameworks.</p>
              </div>
              <div className="exp-card">
                <div className="exp-period">Dec 2023 – Jul 2024</div>
                <div className="exp-role">Co-Founder & Team Lead</div>
                <div className="exp-org">Energie Clothing</div>
                <p>Co-founded a custom apparel venture delivering bulk and personalised orders across Delhi college societies. Managed operations, clients, and growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <CapabilitiesSection />

        {/* ── PROJECTS ── */}
        <section id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map(p => (
              <div key={p.title} className="proj-card" style={{ '--pc': p.color }}>
                <div className="proj-top-bar" />
                <span className="proj-period">{p.period}</span>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tech">
                  {p.tech.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <div className="proj-links">
                  {p.github && <a href={p.github} onClick={e => e.preventDefault()}>⌥ GitHub</a>}
                  {p.live   && <a href={p.live}   onClick={e => e.preventDefault()}>↗ Live Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-wrap">
            <p className="contact-intro">
              Let's build something remarkable together — a scalable web app, an AI pipeline,
              or a bold new idea. I'm all in.
            </p>
            <div className="contact-list">
              <a href="mailto:connect.adityachauhan@gmail.com" className="contact-row" id="c-email">
                <span className="c-label">Email</span>
                <span className="c-value">connect.adityachauhan@gmail.com</span>
                <span className="c-arrow">→</span>
              </a>
              <a href="https://github.com/Aditya-Developer19" target="_blank" rel="noopener noreferrer" className="contact-row" id="c-github">
                <span className="c-label">GitHub</span>
                <span className="c-value">Aditya-Developer19</span>
                <span className="c-arrow">→</span>
              </a>
              <a href="https://linkedin.com/in/aditya-chauhan-96a360248" target="_blank" rel="noopener noreferrer" className="contact-row" id="c-linkedin">
                <span className="c-label">LinkedIn</span>
                <span className="c-value">aditya-chauhan-96a360248</span>
                <span className="c-arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span className="foot-logo">AC<span>.</span></span>
        <p>© {new Date().getFullYear()} Aditya Chauhan · Built with React + Vite</p>
        <button className="foot-top" onClick={() => goto('me')}>↑ Top</button>
      </footer>
    </div>
  );
}
