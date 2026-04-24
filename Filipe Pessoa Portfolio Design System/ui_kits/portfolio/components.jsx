// ui_kits/portfolio/components.jsx
// Core reusable building blocks for the Filipe Pessoa portfolio UI kit.

const { useState, useEffect, useRef } = React;

// ----- small inline lucide SVG icons (stroke 2, 24×24) -----
const Icon = ({ name, size = 20, ...rest }) => {
  const paths = {
    'arrow-right':     <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    'arrow-up-right':  <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    'external-link':   <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    'github':          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>,
    'linkedin':        <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    'mail':            <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
    'phone':           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    'map-pin':         <><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>,
    'graduation-cap':  <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 3 3 6 3s6-1.34 6-3v-5"/></>,
    'briefcase':       <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    'award':           <><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></>,
    'code-2':          <><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></>,
    'chevron-down':    <polyline points="6 9 12 15 18 9"/>,
    'x':               <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    'menu':            <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    'check':           <polyline points="20 6 9 17 4 12"/>,
    'dot':             <circle cx="12" cy="12" r="3"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths[name] || null}
    </svg>
  );
};

// ----- Animated gear (matches AnimatedGear.tsx from the repo) -----
const AnimatedGear = ({ size = 120, speed = 'medium', color = '#1e4e8c', opacity = 0.15 }) => {
  const cls = { slow: 'fp-gear-slow', medium: 'fp-gear-medium', fast: 'fp-gear-fast' }[speed];
  const teeth = Array.from({ length: 12 });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={cls} style={{ opacity }} aria-hidden="true">
      <g fill={color}>
        <circle cx="50" cy="50" r="20" opacity={opacity * 1.8 + 0.15}/>
        {teeth.map((_, i) => (
          <rect key={i} x="47" y="2" width="6" height="15"
                transform={`rotate(${i * 30} 50 50)`} opacity={opacity * 2 + 0.2}/>
        ))}
        <circle cx="50" cy="50" r="14" fill="#ffffff" opacity="0.25"/>
      </g>
    </svg>
  );
};

// ----- Pill CTA button -----
const PillButton = ({ variant = 'primary', children, icon, onClick, as = 'button', href }) => {
  const Comp = as === 'a' ? 'a' : 'button';
  const extra = as === 'a' ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };
  return (
    <Comp className={`fp-pill-btn ${variant} ${variant !== 'ghost' ? 'fp-shimmer-btn' : ''}`} {...extra}>
      {children}
      {icon && <span className="arrow" style={{display:'inline-flex',transition:'transform .2s'}}>{icon}</span>}
    </Comp>
  );
};

// ----- Status pill with pulsing dot -----
const StatusPill = ({ text, color = '#1e4e8c' }) => (
  <span className="fp-status-pill">
    <span className="dot fp-pulse-dot" style={{ background: color, boxShadow: `0 0 0 3px ${color}30` }}/>
    {text}
  </span>
);

// ----- Section heading with colored bullet -----
const SectionHeading = ({ kicker, title, bullet = '#1e4e8c' }) => (
  <div style={{marginBottom:'3rem'}}>
    {kicker && (
      <div className="fp-label" style={{display:'flex',alignItems:'center',gap:8,marginBottom:14}}>
        <span style={{width:8,height:8,borderRadius:999,background:bullet,boxShadow:`0 0 0 3px ${bullet}25`}}/>
        {kicker}
      </div>
    )}
    <h2 style={{margin:0,fontSize:'clamp(32px,4.5vw,54px)'}}>{title}</h2>
  </div>
);

// ----- Technical grid backdrop -----
const TechnicalGrid = ({ style = {} }) => (
  <div className="fp-technical-grid" style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0,...style}}/>
);

// ----- Toast (lightweight) -----
const useToast = () => {
  const [msg, setMsg] = useState(null);
  const show = (text, tone = 'success') => {
    setMsg({ text, tone, id: Date.now() });
    setTimeout(() => setMsg(null), 3000);
  };
  const Toast = () => msg && (
    <div style={{
      position:'fixed', bottom:24, right:24, zIndex:100,
      padding:'12px 18px', borderRadius:12,
      background: msg.tone === 'error' ? '#1a1a1a' : '#fff',
      color: msg.tone === 'error' ? '#fff' : '#1a1a1a',
      border:'1px solid var(--fp-border)',
      boxShadow:'0 10px 24px rgba(0,0,0,0.12)',
      fontSize:14, fontFamily:'var(--fp-font-body)',
      animation:'fp-fade-up .3s var(--fp-ease-swift)'
    }}>{msg.text}</div>
  );
  return { show, Toast };
};

// ScrollReveal — reversible scroll-linked wrapper. Children fade in + translate up
// when their container enters the viewport, and reverse when scrolling back up.
const ScrollReveal = ({ children, distance = 32, threshold = 0.1, delay = 0, as: Tag = 'div', style = {}, ...rest }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold,
      rootMargin: '0px 0px -10% 0px',
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return (
    <Tag ref={ref}
         style={{
           opacity: visible ? 1 : 0,
           transform: visible ? 'none' : `translateY(${distance}px)`,
           transition: 'opacity .7s var(--fp-ease-swift), transform .7s var(--fp-ease-swift)',
           transitionDelay: `${delay}ms`,
           willChange: 'opacity, transform',
           ...style,
         }}
         {...rest}>
      {children}
    </Tag>
  );
};

Object.assign(window, { Icon, AnimatedGear, PillButton, StatusPill, SectionHeading, TechnicalGrid, useToast, ScrollReveal });
