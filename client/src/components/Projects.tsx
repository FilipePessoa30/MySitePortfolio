import React from 'react';
import { AnimatedGear } from './AnimatedGear';

interface ProjectItem {
  tag: string;
  title: string;
  desc: string;
  tech: string[];
  color: string;
  year: string;
}

const projects: ProjectItem[] = [
  { tag: 'DOUTORADO', title: 'Otimização de Sistemas Energéticos Híbridos', desc: 'Modelos MILP combinados com redes neurais para operação ótima de microgrids solares-eólicos.', tech: ['Python','Pyomo','Gurobi','PyTorch'], color: '#8b1e3f', year: '2025' },
  { tag: 'PESQUISA',  title: 'Scheduling Estocástico em Manufatura',       desc: 'Algoritmos híbridos metaheurística + ML para job-shop scheduling com incerteza de demanda.',  tech: ['C++','OR-Tools','scikit-learn'], color: '#1e4e8c', year: '2024' },
  { tag: 'MESTRADO',  title: 'Previsão de Demanda em Supply Chains',       desc: 'Ensemble de modelos ARIMA, LSTM e XGBoost para cadeias industriais brasileiras.',              tech: ['R','Python','TensorFlow'],    color: '#00c853', year: '2023' },
  { tag: 'ACADÊMICO', title: 'Simulação Monte Carlo · Confiabilidade',     desc: 'Análise de confiabilidade de sistemas em paralelo-série com dependência estocástica.',       tech: ['Python','NumPy','SciPy'],     color: '#1e4e8c', year: '2023' },
];

export const Projects: React.FC = () => {
  return (
    <section style={{position:'relative',padding:'120px 32px',background:'var(--fp-bg-2)'}} data-screen-label="Projects">
      <TechnicalGrid style={{opacity:.4}}/>
      <div style={{maxWidth:1200,margin:'0 auto',position:'relative'}}>
        <ScrollReveal>
          <SectionHeading kicker="02 · PROJETOS & PESQUISA" title="Onde matemática encontra código." bullet="#8b1e3f"/>
        </ScrollReveal>
        
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:22}}>
          {projects.map((p,i) => (
            <ScrollReveal key={i} delay={i*80} as="article" className="fp-card-hover" style={{position:'relative',padding:28,background:'#fff',border:'1px solid var(--fp-border)',borderRadius:18,overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:p.color}}/>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
                <span style={{fontFamily:'var(--fp-font-mono)',fontSize:10,letterSpacing:'.15em',padding:'4px 10px',borderRadius:4,background:`${p.color}18`,color:p.color}}>{p.tag}</span>
                <span style={{fontFamily:'var(--fp-font-mono)',fontSize:11,color:'var(--fp-fg-3)'}}>{p.year}</span>
              </div>
              <h3 style={{fontSize:22,margin:'0 0 10px',lineHeight:1.2}}>{p.title}</h3>
              <p style={{fontSize:14,color:'var(--fp-fg-2)',lineHeight:1.55,margin:'0 0 18px'}}>{p.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:18}}>
                {p.tech.map(t => <span key={t} style={{fontFamily:'var(--fp-font-mono)',fontSize:11,padding:'3px 8px',borderRadius:4,background:'var(--fp-bg-2)',color:'var(--fp-fg-1)'}}>{t}</span>)}
              </div>
              <a href="#" onClick={e => e.preventDefault()} style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:13,fontFamily:'var(--fp-font-mono)',color:p.color,textDecoration:'none',letterSpacing:'.03em'}}>
                VER DETALHES <Icon name="arrow-up-right" size={14}/>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper Components
const Icon = ({ name, size = 20, ...rest }: any) => {
  const paths: Record<string, any> = {
    'arrow-up-right':  <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
  };
  
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths[name] || null}
    </svg>
  );
};

const ScrollReveal = ({ children, distance = 32, delay = 0, as: Tag = 'div', style = {}, ...rest }: any) => {
  const ref = React.useRef<any>(null);
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

const TechnicalGrid = ({ style = {} }: any) => (
  <div className="fp-technical-grid" style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0,...style}}/>
);
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Projetos & Pesquisa
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            Portfólio de projetos em otimização, machine learning, computação científica e ciência de dados.
            Todos os projetos estão disponíveis no GitHub.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`inline-block px-3 py-1 rounded text-xs font-semibold ${languageColors[project.language] || 'bg-gray-100 text-gray-700'}`}>
                  {project.language}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Outros Projetos
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors flex-1">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${languageColors[project.language] || 'bg-gray-100 text-gray-700'}`}>
                    {project.language.split(' ')[0]}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <Github className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Mais Projetos no GitHub</h3>
          <p className="text-gray-400 mb-6">
            Visite meu perfil para ver todos os 36+ repositórios e contribuições
          </p>
          <a
            href="https://github.com/FilipePessoa30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            Visitar GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
