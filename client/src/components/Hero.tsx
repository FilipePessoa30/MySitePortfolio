import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedGear } from './AnimatedGear';
import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react';

type HeroTab = 'about' | 'projects' | 'contact';

interface HeroProps {
  onNavigate?: (tab: HeroTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with hero image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030807526/G4fCBy6x4Ymrj4xDrMgH7X/hero-background-CFr2chodQBBTUTWnwornNo.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Animated gears background */}
      <div className="absolute top-10 right-10 z-1 opacity-20">
        <AnimatedGear size={150} speed="slow" color="#00d9ff" opacity={0.2} />
      </div>
      <div className="absolute bottom-20 left-5 z-1 opacity-15">
        <AnimatedGear size={120} speed="medium" color="#ff6b35" opacity={0.15} />
      </div>
      <div className="absolute top-1/3 left-1/4 z-1 opacity-10">
        <AnimatedGear size={200} speed="fast" color="#1a1a1a" opacity={0.1} />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-20">
        <div className="text-center md:text-left md:max-w-2xl">
          {/* Greeting */}
          <div className="mb-6 flex items-center gap-2 md:justify-start justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">FP</span>
            </div>
            <span className="text-sm font-mono text-gray-600">Filipe Pessoa</span>
          </div>

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
