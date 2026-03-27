import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

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
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
