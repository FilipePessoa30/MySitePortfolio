import React from 'react';
import { AnimatedGear } from './AnimatedGear';

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  color: string;
}

interface Skill {
  cat: string;
  items: string[];
}

export const About: React.FC = () => {
  const skills: Skill[] = [
    { cat: 'Linguagens', items: ['Python', 'C++', 'R', 'JavaScript', 'SQL'] },
    { cat: 'Otimização & ML', items: ['Pyomo', 'Gurobi', 'scikit-learn', 'PyTorch', 'TensorFlow'] },
    { cat: 'Dados & Ferramentas', items: ['Pandas', 'NumPy', 'Git', 'Docker', 'LaTeX'] },
  ];

  const experience: ExperienceItem[] = [
    { role: 'Doutorando — Ciências Computacionais', org: 'UERJ · Bolsista CAPES', period: '2024 — presente', color: '#8b1e3f' },
    { role: 'Mestre em Engenharia de Produção', org: 'UFF · Otimização e IA', period: '2022 — 2024', color: '#00c853' },
    { role: 'Engenheiro de Produção', org: 'UFF · Bacharelado', period: '2017 — 2022', color: '#1e4e8c' },
  ];

  return (
    <section style={{position:'relative',padding:'120px 32px',background:'#fff'}} data-screen-label="About">
      <div style={{maxWidth:1100,margin:'0 auto',position:'relative'}}>
        <ScrollReveal>
          <SectionHeading kicker="01 · SOBRE MIM" title="Ciência computacional aplicada a problemas reais."/>
        </ScrollReveal>
        
        <div style={{display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:56,alignItems:'start'}}>
          <ScrollReveal distance={40}>
            <p style={{fontSize:18,lineHeight:1.65,color:'var(--fp-fg-2)',margin:'0 0 20px'}}>
              Engenheiro de Produção pela UFF, Mestre na mesma área e atualmente Doutorando em
              Ciências Computacionais na UERJ, com bolsa CAPES. Minha pesquisa investiga a interseção
              entre <strong style={{color:'var(--fp-fg-1)'}}>otimização matemática</strong> e{' '}
              <strong style={{color:'var(--fp-fg-1)'}}>aprendizado de máquina</strong> para sistemas
              industriais complexos.
            </p>
            <p style={{fontSize:16,lineHeight:1.65,color:'var(--fp-fg-2)',margin:0}}>
              Trabalho com Python, C++ e R, com foco em algoritmos de otimização combinatória,
              simulação estocástica e modelos preditivos. Interesse especial por problemas
              que combinam precisão quantitativa e impacto industrial tangível.
            </p>
          </ScrollReveal>
          
          <ScrollReveal distance={40} style={{display:'flex',flexDirection:'column',gap:14}}>
            {experience.map((e,i) => (
              <div key={i} style={{padding:'18px 20px',background:'var(--fp-bg-2)',border:'1px solid var(--fp-border)',borderRadius:14,borderLeft:`3px solid ${e.color}`}}>
                <div style={{fontFamily:'var(--fp-font-mono)',fontSize:11,color:'var(--fp-fg-3)',marginBottom:4}}>{e.period}</div>
                <div style={{fontSize:15,fontWeight:700,color:'var(--fp-fg-1)'}}>{e.role}</div>
                <div style={{fontSize:13,color:'var(--fp-fg-2)',marginTop:2}}>{e.org}</div>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Skills */}
        <ScrollReveal style={{marginTop:80}}>
          <div className="fp-label" style={{marginBottom:20}}>Stack técnica</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {skills.map(s => (
              <div key={s.cat} style={{padding:24,background:'var(--fp-bg-1)',border:'1px solid var(--fp-border)',borderRadius:16}}>
                <div style={{fontFamily:'var(--fp-font-mono)',fontSize:11,letterSpacing:'.08em',color:'#1e4e8c',marginBottom:14,textTransform:'uppercase'}}>{s.cat}</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                  {s.items.map(t => (
                    <span key={t} style={{fontFamily:'var(--fp-font-mono)',fontSize:12,padding:'5px 10px',borderRadius:6,background:'#fff',border:'1px solid var(--fp-border)',color:'var(--fp-fg-1)'}}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// Helper Components
const ScrollReveal = ({ children, distance = 32, style = {}, ...rest }: any) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    });
    
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  
  return (
    <div ref={ref}
         style={{
           opacity: visible ? 1 : 0,
           transform: visible ? 'none' : `translateY(${distance}px)`,
           transition: 'opacity .7s var(--fp-ease-swift), transform .7s var(--fp-ease-swift)',
           willChange: 'opacity, transform',
           ...style,
         }}
         {...rest}>
      {children}
    </div>
  );
};

const SectionHeading = ({ kicker, title, bullet = '#1e4e8c' }: any) => (
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
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Aprovado para Professor Substituto</h4>
                <p className="text-sm text-gray-700">IME/UERJ e Instituto de Computação da UFRJ</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bolsista CAPES</h4>
                <p className="text-sm text-gray-700">Doutorado e Mestrado em Ciências Computacionais</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Pesquisa em Múltiplas Áreas</h4>
                <p className="text-sm text-gray-700">Regressão Simbólica, Machine Learning, Fuzzy, Otimização</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Idiomas</h4>
                <p className="text-sm text-gray-700">Espanhol (Avançado), Inglês (Intermediário), Francês (Básico)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
