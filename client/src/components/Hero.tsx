import React from 'react';
import { AnimatedGear } from './AnimatedGear';

interface HeroProps {
  onCtaProjects?: () => void;
  onCtaContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaProjects, onCtaContact }) => {
  const [videoReady, setVideoReady] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);
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

  const fadeOut = Math.max(0, 1 - progress * 1.6);
  const parallaxUp = (v: number) => `translateY(${-v * progress}px)`;
  const parallaxDown = (v: number) => `translateY(${ v * progress}px)`;
  const videoOpacity = videoReady ? Math.max(0, 0.42 - progress * 0.42) : 0;
  const gridOpacity = Math.max(0, 1 - progress * 1.2);

  return (
    <section ref={sectionRef}
             style={{position:'relative',minHeight:'100vh',overflow:'hidden',background:'#fff'}}
             data-screen-label="Hero">
      {/* Video backdrop */}
      <div style={{position:'absolute',inset:0,zIndex:0,overflow:'hidden'}}>
        <video
          src="/hero-video.mp4"
          autoPlay muted loop playsInline
          onLoadedData={() => setVideoReady(true)}
          style={{
            width:'100%',height:'100%',objectFit:'cover',
            opacity: videoOpacity,
            transform: `scale(${1 + progress * 0.08})`,
            transition:'opacity 1.2s var(--fp-ease-swift)',
            filter:'saturate(0.8) contrast(1.05)'
          }}
        />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.88) 42%, rgba(255,255,255,0.35) 72%, transparent 100%)'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 18%, transparent 82%, rgba(255,255,255,0.95) 100%)'}}/>
      </div>

      <div style={{opacity: gridOpacity, transition:'opacity .2s linear'}}>
        <TechnicalGrid/>
      </div>

      {/* Decorative gears */}
      <div style={{position:'absolute',top:80,right:'8%',zIndex:1, transform: parallaxUp(60)}}>
        <AnimatedGear size={160} speed="slow" color="#1e4e8c" opacity={0.14}/>
      </div>
      <div style={{position:'absolute',bottom:80,left:'4%',zIndex:1, transform: parallaxDown(40)}}>
        <AnimatedGear size={130} speed="medium" color="#8b1e3f" opacity={0.12}/>
      </div>
      <div style={{position:'absolute',top:'40%',left:'38%',zIndex:1, transform: parallaxUp(30)}}>
        <AnimatedGear size={220} speed="fast" color="#1a1a1a" opacity={0.05}/>
      </div>

      {/* Content */}
      <div style={{
        position:'relative',zIndex:10,
        maxWidth:1200,margin:'0 auto',padding:'120px 32px 80px',
        display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:64,alignItems:'center',
      }}>
        {/* Left — copy */}
        <div style={{opacity: fadeOut, transform: parallaxUp(80)}}>
          <div className="fp-fade-up d-100" style={{marginBottom:28}}>
            <StatusPill text="Disponível para colaborações, trabalho e pesquisa" color="#00c853"/>
          </div>

          <h1 className="fp-fade-up d-200" style={{fontSize:'clamp(48px,6.6vw,96px)',lineHeight:0.98,margin:'0 0 28px',letterSpacing:'-.025em',fontWeight:400}}>
            Engenheiro de{' '}
            <span className="fp-gradient-cyan-text">Produção</span>,<br/>
            <span className="fp-gradient-indigo-text">Programador</span>{' '}e{' '}
            <span className="fp-gradient-orange-text">Pesquisador</span>.
          </h1>

          <p className="fp-fade-up d-400" style={{fontSize:19,color:'var(--fp-fg-2)',maxWidth:560,lineHeight:1.55,margin:'0 0 36px',fontFamily:'var(--fp-font-body)'}}>
            Especialista em <strong style={{color:'var(--fp-fg-1)',fontWeight:600}}>Computação Científica</strong>,{' '}
            <strong style={{color:'var(--fp-fg-1)',fontWeight:600}}>Otimização</strong> e{' '}
            <strong style={{color:'var(--fp-fg-1)',fontWeight:600}}>Inteligência Artificial</strong>. Doutorando em
            Ciências Computacionais na UERJ, bolsista CAPES. Baseado no Rio de Janeiro · Brasil.
          </p>

          <div className="fp-fade-up d-600" style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:40}}>
            <PillButton variant="accent" onClick={onCtaProjects} icon={<Icon name="arrow-right" size={16}/>}>Ver Projetos</PillButton>
            <PillButton variant="ghost" onClick={onCtaContact}>Entrar em contato</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Components
const Icon = ({ name, size = 20, ...rest }: any) => {
  const paths: Record<string, any> = {
    'arrow-right':     <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    'arrow-up-right':  <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
  };
  
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths[name] || null}
    </svg>
  );
};

const StatusPill = ({ text, color = '#1e4e8c' }: any) => (
  <span className="fp-status-pill">
    <span className="dot fp-pulse-dot" style={{ background: color, boxShadow: `0 0 0 3px ${color}30` }}/>
    {text}
  </span>
);

const PillButton = ({ variant = 'primary', children, icon, onClick, as = 'button', href }: any) => {
  const Comp = as === 'a' ? 'a' : 'button';
  const extra = as === 'a' ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };
  return (
    <Comp className={`fp-pill-btn ${variant} ${variant !== 'ghost' ? 'fp-shimmer-btn' : ''}`} {...extra}>
      {children}
      {icon && <span className="arrow" style={{display:'inline-flex',transition:'transform .2s'}}>{icon}</span>}
    </Comp>
  );
};

const TechnicalGrid = ({ style = {} }: any) => (
  <div className="fp-technical-grid" style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0,...style}}/>
);

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Engenheiro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Produção</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Programador</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Pesquisador</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
            Especialista em <strong>Computação Científica</strong>, <strong>Otimização</strong> e <strong>Inteligência Artificial</strong>. 
            Doutorando em Ciências Computacionais na UERJ com experiência em modelagem matemática, machine learning e análise de dados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:justify-start justify-center">
            <motion.div whileTap={{ scale: 0.96 }} whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 font-semibold"
                onClick={() => onNavigate?.('projects')}
              >
                Ver Projetos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.96 }} whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-50"
                onClick={() => onNavigate?.('contact')}
              >
                Entrar em Contato
              </Button>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 md:justify-start justify-center">
            <motion.a
              href="https://github.com/FilipePessoa30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110"
              whileHover={{ y: -4, rotate: -4 }}
              whileTap={{ scale: 0.88, rotate: 8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:Filipe.Pessoa18@gmail.com"
              className="p-3 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110"
              whileHover={{ y: -4, rotate: 4 }}
              whileTap={{ scale: 0.88, rotate: -8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linktr.ee/filipe.pessoa18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              whileHover={{ y: -4, rotate: -4 }}
              whileTap={{ scale: 0.88, rotate: 8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-gray-600">SCROLL</span>
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
