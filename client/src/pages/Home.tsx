import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

/**
 * Home Page - Portfólio de Filipe Pessoa Sousa
 *
 * Design: Industrial Precision — Triple Craft
 * - Blueprint Blue (#1e4e8c) · Terminal Green (#00c853) · Academic Burgundy (#8b1e3f)
 * - Tipografia: Space Mono (display/mono) + IBM Plex Sans (corpo)
 * - Animações com engrenagens e scroll-linked parallax
 */
function Nav({ activeSection, onJump }: { activeSection: string; onJump: (id: string) => void }) {
  const items = [
    { id: 'hero', label: 'INÍCIO' },
    { id: 'about', label: 'SOBRE' },
    { id: 'projects', label: 'PROJETOS' },
    { id: 'contact', label: 'CONTATO' },
  ];

  return (
    <nav className="fp-nav">
      <a href="#hero" className="fp-nav__brand" onClick={(e) => { e.preventDefault(); onJump('hero'); }}>
        <span className="fp-nav__avatar"><img src="/assets/filipe-portrait.jpg" alt="Filipe Pessoa" /></span>
        <span className="fp-nav__brand-text">FILIPE · PESSOA</span>
      </a>
      <div className="fp-nav__links">
        {items.map((it) => (
          <button key={it.id} className={`fp-nav__link ${activeSection === it.id ? 'active' : ''}`} onClick={() => onJump(it.id)}>
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function Home() {
  const [active, setActive] = React.useState('hero');
  const refs = {
    hero: React.useRef<HTMLDivElement>(null),
    about: React.useRef<HTMLDivElement>(null),
    projects: React.useRef<HTMLDivElement>(null),
    contact: React.useRef<HTMLDivElement>(null),
  };

  const jump = (id: string) => {
    const el = refs[id as keyof typeof refs]?.current;
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.section || 'hero');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    Object.entries(refs).forEach(([k, r]) => {
      if (r.current) {
        r.current.dataset.section = k;
        obs.observe(r.current);
      }
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <Nav activeSection={active} onJump={jump} />
      <div ref={refs.hero}><Hero onCtaProjects={() => jump('projects')} onCtaContact={() => jump('contact')} /></div>
      <div ref={refs.about}><About /></div>
      <div ref={refs.projects}><Projects /></div>
      <div ref={refs.contact}><Contact /></div>
      <footer className="fp-footer">
        <span>© 2026 · FILIPE PESSOA SOUSA</span>
        <span>
          BUILT WITH <span style={{ color: '#00c853' }}>PRECISION</span> ·{' '}
          <a href="https://github.com/FilipePessoa30" target="_blank" rel="noopener noreferrer">GITHUB</a>
        </span>
      </footer>
    </div>
  );
}
