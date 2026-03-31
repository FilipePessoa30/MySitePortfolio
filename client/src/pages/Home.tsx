import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type HomeTab = 'about' | 'projects' | 'contact';

/**
 * Home Page - Portfólio de Filipe Pessoa Sousa
 * 
 * Design: Industrial Precision
 * - Estética tech com engrenagens animadas
 * - Paleta: Cinza escuro + Branco + Azul elétrico + Laranja industrial
 * - Tipografia: Space Mono (títulos) + IBM Plex Sans (corpo)
 * - Animações suaves com transições elásticas
 */
export default function Home() {
  const [activeTab, setActiveTab] = useState<HomeTab>('about');

  return (
    <div className="min-h-screen bg-white">
      <Hero onNavigate={setActiveTab} />

      <section className="py-10 px-4">
        <div className="container max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as HomeTab)}>
            <TabsList className="h-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-2 bg-gray-100 p-2 rounded-xl">
              <TabsTrigger
                value="about"
                className="py-3 text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-cyan-700 data-[state=active]:shadow"
              >
                Sobre mim
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="py-3 text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-cyan-700 data-[state=active]:shadow"
              >
                Projetos & Pesquisa
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="py-3 text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-cyan-700 data-[state=active]:shadow"
              >
                Contato
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <section className="pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {activeTab === 'about' && <About />}
            {activeTab === 'projects' && <Projects />}
            {activeTab === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
