import React from 'react';
import { Icon, ScrollReveal, SectionHeading, TechnicalGrid } from './portfolio-kit';

export const Projects: React.FC = () => {
  const items = [
    { tag: 'DOUTORADO', title: 'Otimização de Sistemas Energéticos Híbridos', desc: 'Modelos MILP combinados com redes neurais para operação ótima de microgrids solares-eólicos.', tech: ['Python', 'Pyomo', 'Gurobi', 'PyTorch'], color: '#8b1e3f', year: '2025' },
    { tag: 'PESQUISA', title: 'Scheduling Estocástico em Manufatura', desc: 'Algoritmos híbridos metaheurística + ML para job-shop scheduling com incerteza de demanda.', tech: ['C++', 'OR-Tools', 'scikit-learn'], color: '#1e4e8c', year: '2024' },
    { tag: 'MESTRADO', title: 'Previsão de Demanda em Supply Chains', desc: 'Ensemble de modelos ARIMA, LSTM e XGBoost para cadeias industriais brasileiras.', tech: ['R', 'Python', 'TensorFlow'], color: '#00c853', year: '2023' },
    { tag: 'ACADÊMICO', title: 'Simulação Monte Carlo · Confiabilidade', desc: 'Análise de confiabilidade de sistemas em paralelo-série com dependência estocástica.', tech: ['Python', 'NumPy', 'SciPy'], color: '#1e4e8c', year: '2023' },
  ];

  return (
    <section style={{ position: 'relative', padding: '120px 32px', background: 'var(--fp-bg-2)' }} data-screen-label="Projects">
      <TechnicalGrid style={{ opacity: 0.4 }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <ScrollReveal>
          <SectionHeading kicker="02 · PROJETOS & PESQUISA" title="Onde matemática encontra código." bullet="#8b1e3f" />
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22 }}>
          {items.map((p, i) => (
            <ScrollReveal key={i} delay={i * 80} as="article" className="fp-card-hover" style={{ position: 'relative', padding: 28, background: '#fff', border: '1px solid var(--fp-border)', borderRadius: 18, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.color }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--fp-font-mono)', fontSize: 10, letterSpacing: '.15em', padding: '4px 10px', borderRadius: 4, background: `${p.color}18`, color: p.color }}>{p.tag}</span>
                <span style={{ fontFamily: 'var(--fp-font-mono)', fontSize: 11, color: 'var(--fp-fg-3)' }}>{p.year}</span>
              </div>
              <h3 style={{ fontSize: 22, margin: '0 0 10px', lineHeight: 1.2 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--fp-fg-2)', lineHeight: 1.55, margin: '0 0 18px' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                {p.tech.map((t) => <span key={t} style={{ fontFamily: 'var(--fp-font-mono)', fontSize: 11, padding: '3px 8px', borderRadius: 4, background: 'var(--fp-bg-2)', color: 'var(--fp-fg-1)' }}>{t}</span>)}
              </div>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: 'var(--fp-font-mono)', color: p.color, textDecoration: 'none', letterSpacing: '.03em' }}>
                VER DETALHES <Icon name="arrow-up-right" size={14} />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
