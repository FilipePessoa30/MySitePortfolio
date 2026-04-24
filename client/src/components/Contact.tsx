import React, { useState } from 'react';
import { AnimatedGear } from './AnimatedGear';

export const Contact: React.FC = () => {
  const { show, Toast } = useToast();
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [busy, setBusy] = useState(false);
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return show('Preencha todos os campos.','error');
    }
    
    setBusy(true);
    setTimeout(() => { 
      setBusy(false); 
      show('Mensagem enviada. Obrigado!'); 
      setForm({name:'',email:'',message:''}); 
    }, 900);
  };

  return (
    <section style={{position:'relative',padding:'120px 32px',background:'#1a1a1a',color:'#fff'}} data-screen-label="Contact">
      <div style={{position:'absolute',top:60,right:'10%'}}><AnimatedGear size={140} color="#00c853" opacity={0.12}/></div>
      
      <div style={{maxWidth:1100,margin:'0 auto',position:'relative',display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:64}}>
        <ScrollReveal distance={40}>
          <div className="fp-label" style={{color:'#00c853',marginBottom:14}}>03 · CONTATO</div>
          <h2 style={{margin:'0 0 20px',fontSize:'clamp(32px,4vw,50px)',color:'#fff'}}>Vamos construir<br/>algo preciso?</h2>
          <p style={{color:'#a0a0a0',fontSize:16,lineHeight:1.6,maxWidth:440}}>
            Aberto a colaborações de pesquisa, consultorias em otimização
            e projetos de computação científica.
          </p>
          
          <div style={{marginTop:36,display:'flex',flexDirection:'column',gap:16}}>
            {[
              {icon:'mail',  text:'Filipe.Pessoa18@gmail.com'},
              {icon:'map-pin', text:'Rio de Janeiro · Brasil'},
              {icon:'briefcase', text:'UERJ · Doutorado em Ciências Computacionais'},
            ].map(c => (
              <div key={c.icon} style={{display:'flex',alignItems:'center',gap:14,color:'#e0e0e0',fontSize:14}}>
                <span style={{width:36,height:36,borderRadius:10,background:'#2a2a2a',display:'flex',alignItems:'center',justifyContent:'center',color:'#00c853'}}><Icon name={c.icon} size={16}/></span>
                {c.text}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal as="form" distance={40} delay={100} onSubmit={onSubmit} style={{padding:32,background:'#0f0f0f',border:'1px solid #2a2a2a',borderRadius:18}}>
          {[
            { k:'name',  label:'NOME',    type:'text' },
            { k:'email', label:'E-MAIL',  type:'email' },
          ].map(f => (
            <div key={f.k} style={{marginBottom:18}}>
              <label style={{display:'block',fontFamily:'var(--fp-font-mono)',fontSize:10,letterSpacing:'.15em',color:'#a0a0a0',marginBottom:6}}>{f.label}</label>
              <input type={f.type} value={(form as any)[f.k]} onChange={e => setForm({...form,[f.k]:e.target.value})}
                     style={{width:'100%',padding:'12px 14px',background:'#1a1a1a',border:'1px solid #2a2a2a',borderRadius:10,color:'#fff',fontSize:14,fontFamily:'var(--fp-font-body)',outline:'none',transition:'border-color .15s'}}
                     onFocus={e => e.target.style.borderColor='#00c853'} onBlur={e => e.target.style.borderColor='#2a2a2a'}/>
            </div>
          ))}
          
          <div style={{marginBottom:22}}>
            <label style={{display:'block',fontFamily:'var(--fp-font-mono)',fontSize:10,letterSpacing:'.15em',color:'#a0a0a0',marginBottom:6}}>MENSAGEM</label>
            <textarea rows={5} value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                     style={{width:'100%',padding:'12px 14px',background:'#1a1a1a',border:'1px solid #2a2a2a',borderRadius:10,color:'#fff',fontSize:14,fontFamily:'var(--fp-font-body)',outline:'none',resize:'vertical',transition:'border-color .15s'}}
                     onFocus={e => e.target.style.borderColor='#00c853'} onBlur={e => e.target.style.borderColor='#2a2a2a'}/>
          </div>
          
          <button type="submit" disabled={busy} className="fp-shimmer-btn"
                  style={{width:'100%',padding:'14px 20px',background:busy?'#2a2a2a':'#00c853',color:'#fff',border:'none',borderRadius:10,fontSize:14,fontWeight:700,fontFamily:'var(--fp-font-body)',cursor:busy?'wait':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,transition:'all .2s'}}>
            {busy ? 'Enviando…' : <>Enviar mensagem <Icon name="arrow-right" size={16}/></>}
          </button>
        </ScrollReveal>
      </div>
      <Toast/>
    </section>
  );
};

// Helper Components
const Icon = ({ name, size = 20, ...rest }: any) => {
  const paths: Record<string, any> = {
    'arrow-right':     <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    'mail':            <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
    'map-pin':         <><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>,
    'briefcase':       <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  };
  
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths[name] || null}
    </svg>
  );
};

const ScrollReveal = ({ children, distance = 32, delay = 0, as: Tag = 'div', onSubmit, style = {}, ...rest }: any) => {
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
         onSubmit={onSubmit}
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

const useToast = () => {
  const [msg, setMsg] = useState<{text: string; tone: 'success' | 'error'; id: number} | null>(null);
  
  const show = (text: string, tone: 'success' | 'error' = 'success') => {
    setMsg({ text, tone, id: Date.now() });
    setTimeout(() => setMsg(null), 3000);
  };
  
  const Toast = () => msg && (
    <div style={{
      position:'fixed', bottom:24, right:24, zIndex:100,
      padding:'12px 18px', borderRadius:12,
      background: msg.tone === 'error' ? '#1a1a1a' : '#fff',
      color: msg.tone === 'error' ? '#fff' : '#1a1a1a',
      border:'1px solid var(--fp-border)',
      boxShadow:'0 10px 24px rgba(0,0,0,0.12)',
      fontSize:14, fontFamily:'var(--fp-font-body)',
      animation:'fp-fade-up .3s var(--fp-ease-swift)'
    }}>{msg.text}</div>
  );
  
  return { show, Toast };
};
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
