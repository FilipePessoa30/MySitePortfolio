import React, { useState } from 'react';
import { AnimatedGear } from './AnimatedGear';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:Filipe.Pessoa18@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    toast.success('Redirecionando para seu cliente de email...');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative gears */}
      <div className="absolute top-20 left-10 z-0 opacity-5">
        <AnimatedGear size={280} speed="slow" color="#1a1a1a" opacity={0.05} />
      </div>
      <div className="absolute bottom-10 right-5 z-0 opacity-5">
        <AnimatedGear size={320} speed="medium" color="#00d9ff" opacity={0.05} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            Estou aberto a colaborações, oportunidades acadêmicas e discussões sobre pesquisa.
            Sinta-se livre para entrar em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Informações de Contato</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:Filipe.Pessoa18@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-cyan-50 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg group-hover:from-cyan-200 group-hover:to-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-700 group-hover:text-cyan-600 transition-colors">
                      Filipe.Pessoa18@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+5521985337539"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg group-hover:from-orange-200 group-hover:to-red-200 transition-colors">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-700 group-hover:text-orange-600 transition-colors">
                      (21) 98533-7539
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-700">
                      Rio de Janeiro, RJ • Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Redes Sociais</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/FilipePessoa30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://linktr.ee/filipe.pessoa18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  Linktree
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem aqui..."
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>© 2026 Filipe Pessoa Sousa. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Desenvolvido com <span className="text-cyan-500">React</span> + <span className="text-orange-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
