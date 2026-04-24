import React from 'react';
import { AnimatedGear, Icon, PillButton, StatusPill, TechnicalGrid } from './portfolio-kit';

interface HeroProps {
  onCtaProjects?: () => void;
  onCtaContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaProjects, onCtaContact }) => {
  const [videoReady, setVideoReady] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = Math.max(0, Math.min(1, -rect.top / vh));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Fade e parallax só começam depois de 30% de scroll, dando tempo de ler
  const delayed = Math.max(0, (progress - 0.30) / 0.70);
  const fadeOut = Math.max(0, 1 - delayed * 1.5);
  const parallaxUp = (v: number) => `translateY(${-v * delayed}px)`;
  const parallaxDown = (v: number) => `translateY(${v * delayed}px)`;
  const videoOpacity = videoReady ? Math.max(0, 0.42 - progress * 0.42) : 0;
  const gridOpacity = Math.max(0, 1 - progress * 1.2);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#fff' }} data-screen-label="Hero">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <video
          src="/assets/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoReady(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoOpacity,
            transform: `scale(${1 + progress * 0.08})`,
            transition: 'opacity 1.2s var(--fp-ease-swift)',
            filter: 'saturate(0.8) contrast(1.05)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.88) 42%, rgba(255,255,255,0.35) 72%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 18%, transparent 82%, rgba(255,255,255,0.95) 100%)' }} />
      </div>

      <div style={{ opacity: gridOpacity, transition: 'opacity .2s linear' }}>
        <TechnicalGrid />
      </div>

      <div style={{ position: 'absolute', top: 80, right: '8%', zIndex: 1, transform: parallaxUp(60) }}>
        <AnimatedGear size={160} speed="slow" color="#1e4e8c" opacity={0.14} />
      </div>
      <div style={{ position: 'absolute', bottom: 80, left: '4%', zIndex: 1, transform: parallaxDown(40) }}>
        <AnimatedGear size={130} speed="medium" color="#8b1e3f" opacity={0.12} />
      </div>
      <div style={{ position: 'absolute', top: '40%', left: '38%', zIndex: 1, transform: parallaxUp(30) }}>
        <AnimatedGear size={220} speed="fast" color="#1a1a1a" opacity={0.05} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '120px 32px 80px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 64, alignItems: 'center' }}>
        <div style={{ opacity: fadeOut, transform: parallaxUp(80) }}>
          <div className="fp-fade-up d-100" style={{ marginBottom: 28 }}>
            <StatusPill text="Disponível para colaborações, trabalho e pesquisa" color="#00c853" />
          </div>

          <h1 className="fp-fade-up d-200" style={{ fontSize: 'clamp(48px,6.6vw,96px)', lineHeight: 0.98, margin: '0 0 28px', letterSpacing: '-.025em', fontWeight: 400 }}>
            Engenheiro de{' '}
            <span className="fp-gradient-cyan-text">Produção</span>,
            <br />
            <span className="fp-gradient-indigo-text">Programador</span>{' '}e{' '}
            <span className="fp-gradient-orange-text">Pesquisador</span>.
          </h1>

          <p className="fp-fade-up d-400" style={{ fontSize: 19, color: 'var(--fp-fg-2)', maxWidth: 560, lineHeight: 1.55, margin: '0 0 36px', fontFamily: 'var(--fp-font-body)' }}>
            Especialista em <strong style={{ color: 'var(--fp-fg-1)', fontWeight: 600 }}>Computação Científica</strong>,{' '}
            <strong style={{ color: 'var(--fp-fg-1)', fontWeight: 600 }}>Otimização</strong> e{' '}
            <strong style={{ color: 'var(--fp-fg-1)', fontWeight: 600 }}>Inteligência Artificial</strong>. Doutorando em
            Ciências Computacionais na UERJ, bolsista CAPES. Baseado no Rio de Janeiro · Brasil.
          </p>

          <div className="fp-fade-up d-600" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
            <PillButton variant="accent" onClick={onCtaProjects} icon={<Icon name="arrow-right" size={16} />}>Ver Projetos</PillButton>
            <PillButton variant="ghost" onClick={onCtaContact}>Entrar em contato</PillButton>
          </div>

          <div className="fp-fade-up d-800" style={{ display: 'flex', gap: 12 }}>
            {[
              { icon: 'github', href: 'https://github.com/FilipePessoa30' },
              { icon: 'mail', href: 'mailto:Filipe.Pessoa18@gmail.com' },
              { icon: 'linkedin', href: 'https://linktr.ee/filipe.pessoa18' },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="fp-social"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff',
                  border: '1px solid var(--fp-border)',
                  color: 'var(--fp-fg-1)',
                  textDecoration: 'none',
                  transition: 'transform .18s var(--fp-ease-swift), box-shadow .18s, color .18s, border-color .18s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.color = '#1e4e8c';
                  e.currentTarget.style.borderColor = '#1e4e8c';
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(30,78,140,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="fp-fade-up d-300 hero-portrait" style={{ position: 'relative', width: 'min(420px, 38vw)', aspectRatio: '3/4', opacity: fadeOut, transform: parallaxDown(60) }}>
          <div className="fp-breathe" style={{ position: 'absolute', inset: -40, background: 'radial-gradient(closest-side, rgba(30,78,140,0.35), transparent 70%)', filter: 'blur(28px)', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: -2, borderRadius: 28, background: 'linear-gradient(135deg, #1e4e8c 0%, #0d2648 30%, #00c853 60%, #8b1e3f 100%)', backgroundSize: '200% 200%', animation: 'fp-fade-in 1s .4s both, fpBorderShift 10s ease-in-out infinite', zIndex: 1, opacity: 0.85 }} />
          <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', borderRadius: 26, overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.3), 0 8px 16px -4px rgba(0,0,0,0.1)', background: '#000' }}>
            <img src="/assets/filipe-secondary.jpg" alt="Filipe Pessoa Sousa" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }} />
          </div>

          {[
            {
              key: 'py',
              top: '-3%',
              left: '-7%',
              delay: '1.0s',
              bg: '#1a1a1a',
              label: 'Python',
              svg: (
                <svg viewBox="0 0 128 128" width="24" height="24" aria-hidden="true">
                  <linearGradient id="fpPyA" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient>
                  <linearGradient id="fpPyB" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient>
                  <path fill="url(#fpPyA)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
                  <path fill="url(#fpPyB)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
                </svg>
              ),
            },
            {
              key: 'hf',
              top: '9%',
              right: '-7%',
              delay: '1.15s',
              bg: '#0f0f0f',
              label: 'HuggingFace',
              svg: (
                <svg viewBox="0 0 95 88" width="22" height="22" aria-hidden="true"><path fill="#FF9D00" d="M47.21 76.07c19.64 0 35.56-15.92 35.56-35.56S66.85 4.95 47.21 4.95 11.65 20.87 11.65 40.51s15.92 35.56 35.56 35.56Z" /><path fill="#FFD21E" d="M81.49 52.74c-.32-1.23-1.39-2.13-2.66-2.26a3.17 3.17 0 0 0-3.27 2.17c-3.57 10.7-11.62 19.1-21.33 23.06a27.72 27.72 0 0 1-17.11 1.2c-9.07-2.2-17.32-8.63-22.33-17.05a3.17 3.17 0 0 0-3.62-1.42 3.18 3.18 0 0 0-2.29 3.14c.05 1.42.42 2.38.89 3.19 5.97 10.04 15.77 17.69 26.55 20.32 6.85 1.67 14.25 1.19 21.03-1.58 11.62-4.74 21.2-14.79 25.41-27.42.32-.95.77-2.31.73-3.35Z" /><circle cx="32.13" cy="39.69" r="5" fill="#3A3B45" /><circle cx="62.15" cy="39.69" r="5" fill="#3A3B45" /><path fill="#3A3B45" d="M55.68 56.56c-.18 3.09-4.31 5.5-8.34 5.37-4.02-.13-7.94-2.76-7.76-5.85.18-3.09 4.2-2.87 8.23-2.74 4.02.13 8.05.14 7.87 3.22Z" /></svg>
              ),
            },
            {
              key: 'bi',
              bottom: '26%',
              right: '-9%',
              delay: '1.3s',
              bg: '#1a1a1a',
              label: 'Power BI',
              svg: (
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><defs><linearGradient id="fpBi" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#FFD34F" /><stop offset="1" stopColor="#E8A81C" /></linearGradient></defs><path fill="url(#fpBi)" d="M9 3h4a1 1 0 0 1 1 1v17H8V4a1 1 0 0 1 1-1zm7 5h3a1 1 0 0 1 1 1v12h-4V8zM4 13h3a1 1 0 0 1 1 1v7H3v-7a1 1 0 0 1 1-1z" /></svg>
              ),
            },
            {
              key: 'tf',
              bottom: '-4%',
              left: '-7%',
              delay: '1.45s',
              bg: '#0f0f0f',
              label: 'TensorFlow',
              svg: (
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#FF6F00" d="M1.292 5.856 11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.77-3.074-1.759V7.603l6.168 3.564z" /></svg>
              ),
            },
          ].map((b, i) => (
            <div
              key={b.key}
              title={b.label}
              className="fp-float-badge"
              style={{
                position: 'absolute',
                zIndex: 3,
                top: b.top,
                left: b.left,
                right: b.right,
                bottom: b.bottom,
                width: 48,
                height: 48,
                borderRadius: 14,
                background: b.bg,
                boxShadow: '0 10px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: `fp-fade-up .7s ${b.delay} both, fpFloat${i % 2 === 0 ? 'A' : 'B'} ${5 + i * 0.4}s ease-in-out infinite ${b.delay}`,
              }}
            >
              {b.svg}
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 10, opacity: Math.max(0, 1 - progress * 4), transition: 'opacity .2s linear', animation: 'fp-fade-in 1s 1.2s both' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'var(--fp-fg-3)' }}>
          <span style={{ fontFamily: 'var(--fp-font-mono)', fontSize: 10, letterSpacing: '.2em' }}>SCROLL</span>
          <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, transparent, var(--fp-fg-3))' }} />
        </div>
      </div>

      <style>{`
        @keyframes fpBorderShift { 0%,100% { background-position: 0 0; } 50% { background-position: 100% 100%; } }
        @keyframes fpFloatA { 0%,100% { translate: 0 0; } 50% { translate: 0 -6px; } }
        @keyframes fpFloatB { 0%,100% { translate: 0 0; } 50% { translate: 0  6px; } }
        .fp-float-badge { transition: transform .2s var(--fp-ease-swift), box-shadow .2s; }
        .fp-float-badge:hover { transform: scale(1.08) rotate(-3deg); box-shadow: 0 14px 28px rgba(0,0,0,0.3); }
        @media (max-width: 860px) {
          .hero-portrait { display:none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
