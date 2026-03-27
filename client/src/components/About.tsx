import React from 'react';
import { AnimatedGear } from './AnimatedGear';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative gears */}
      <div className="absolute top-20 left-5 z-0 opacity-5">
        <AnimatedGear size={300} speed="slow" color="#1a1a1a" opacity={0.05} />
      </div>
      <div className="absolute bottom-10 right-10 z-0 opacity-5">
        <AnimatedGear size={250} speed="medium" color="#00d9ff" opacity={0.05} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Education */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Formação</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="font-semibold">🎓 Doutorado em Ciências Computacionais</li>
              <li className="text-xs text-gray-600">UERJ • 2023-2027 (Bolsista CAPES)</li>
              <li className="font-semibold mt-4">📚 Licenciatura em Matemática</li>
              <li className="text-xs text-gray-600">UFF • 2023-2027</li>
              <li className="font-semibold mt-4">🏆 Mestrado em Ciências Computacionais</li>
              <li className="text-xs text-gray-600">UERJ • 2022-2023 (Bolsista CAPES)</li>
              <li className="font-semibold mt-4">⚙️ Engenharia de Produção</li>
              <li className="text-xs text-gray-600">UERJ • 2015-2021</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Experiência</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="font-semibold">👨‍🏫 Professor de Matemática e Informática</li>
              <li className="text-xs text-gray-600">Projeto Uerê • 2025-atual</li>
              <li className="font-semibold mt-4">🔬 Pesquisador Bolsista</li>
              <li className="text-xs text-gray-600">UFRJ • 2014-2016</li>
              <li className="font-semibold mt-4">📊 Revisor de Periódico</li>
              <li className="text-xs text-gray-600">Simpósio Brasileiro de Pesquisa Operacional • 2025</li>
              <li className="font-semibold mt-4">💼 Auxiliar Administrativo</li>
              <li className="text-xs text-gray-600">Instituto de Educação Nossa Senhora de Lourdes • 2017-2019</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Competências</h3>
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-2">Programação</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C++', 'R', 'JavaScript'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-mono">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">Especialidades</p>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Otimização', 'Modelagem Matemática', 'Ciência de Dados'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">Ferramentas</p>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Power BI', 'Excel', 'Jupyter'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 border border-cyan-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Destaques</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500 text-white">
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
