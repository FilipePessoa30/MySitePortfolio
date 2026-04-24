// Contact.jsx — contact form with validation
const Contact = () => {
  const { show, Toast } = useToast();
  const [form, setForm] = React.useState({ name:'', email:'', message:'' });
  const [busy, setBusy] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return show('Preencha todos os campos.','error');
    setBusy(true);
    setTimeout(() => { setBusy(false); show('Mensagem enviada. Obrigado!'); setForm({name:'',email:'',message:''}); }, 900);
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
              <input type={f.type} value={form[f.k]} onChange={e => setForm({...form,[f.k]:e.target.value})}
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
window.Contact = Contact;
