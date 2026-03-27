import React from 'react';
import { AnimatedGear } from './AnimatedGear';
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  language: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'MulticriteriaMicrogrid',
    description: 'Otimização multiobjetivo de microgrids com recursos renováveis. Aplicação de algoritmos evolucionários para planejamento energético.',
    tags: ['Otimização', 'Python', 'Energia'],
    link: 'https://github.com/FilipePessoa30/MulticriteriaMicrogrid',
    language: 'Python',
    featured: true,
  },
  {
    title: 'Fuzzy_PLN',
    description: 'Implementação de lógica fuzzy aplicada a processamento de linguagem natural. Análise de sentimentos e classificação de texto.',
    tags: ['Fuzzy', 'NLP', 'Machine Learning'],
    link: 'https://github.com/FilipePessoa30/Fuzzy_PLN',
    language: 'Jupyter Notebook',
    featured: true,
  },
  {
    title: 'Segmentacao_imagem_fuzzy',
    description: 'Segmentação de imagens utilizando técnicas de lógica fuzzy. Aplicação em processamento de imagens médicas.',
    tags: ['Fuzzy', 'Visão Computacional', 'Python'],
    link: 'https://github.com/FilipePessoa30/Segmentacao_imagem_fuzzy',
    language: 'Jupyter Notebook',
    featured: true,
  },
  {
    title: 'Computacao-Cientifica',
    description: 'Estudos e implementações em computação científica. Métodos numéricos, resolução de equações diferenciais e simulações.',
    tags: ['Computação Científica', 'Python', 'Métodos Numéricos'],
    link: 'https://github.com/FilipePessoa30/Computa--o-Cientifica',
    language: 'Python',
  },
  {
    title: 'Montreal-Tour-Planning',
    description: 'Problema de roteamento e planejamento de rotas em Montreal. Aplicação de algoritmos de otimização combinatória.',
    tags: ['Otimização', 'Roteamento', 'Python'],
    link: 'https://github.com/FilipePessoa30/Montreal-Tour-Planning',
    language: 'Python',
  },
  {
    title: 'Machine-Learning-MyStudy',
    description: 'Estudos práticos em machine learning. Implementação de algoritmos clássicos e análise de datasets.',
    tags: ['Machine Learning', 'Python', 'Análise de Dados'],
    link: 'https://github.com/FilipePessoa30/Machine-Learning-MyStudy',
    language: 'Jupyter Notebook',
  },
  {
    title: 'otimizacao',
    description: 'Estudos aprofundados em otimização linear, não-linear e combinatória. Formulações e resolução de problemas.',
    tags: ['Otimização', 'Pesquisa Operacional', 'Python'],
    link: 'https://github.com/FilipePessoa30/otimizacao',
    language: 'Jupyter Notebook',
  },
  {
    title: 'DataScience_Python',
    description: 'Projetos em ciência de dados com Python. Análise exploratória, visualização e modelagem preditiva.',
    tags: ['Ciência de Dados', 'Python', 'Análise'],
    link: 'https://github.com/FilipePessoa30/DataScience_Python',
    language: 'Jupyter Notebook',
  },
];

const languageColors: Record<string, string> = {
  'Python': 'bg-blue-100 text-blue-700',
  'C++': 'bg-red-100 text-red-700',
  'Java': 'bg-orange-100 text-orange-700',
  'JavaScript': 'bg-yellow-100 text-yellow-700',
  'Jupyter Notebook': 'bg-purple-100 text-purple-700',
  'HTML': 'bg-red-100 text-red-700',
  'Rust': 'bg-orange-100 text-orange-700',
};

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gears */}
      <div className="absolute top-10 right-5 z-0 opacity-5">
        <AnimatedGear size={250} speed="medium" color="#00d9ff" opacity={0.05} />
      </div>
      <div className="absolute bottom-20 left-10 z-0 opacity-5">
        <AnimatedGear size={300} speed="slow" color="#ff6b35" opacity={0.05} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
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
