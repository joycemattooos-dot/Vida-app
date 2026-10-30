'use client';
import { useState } from 'react';
import { Activity, Apple, BookOpen, CalendarDays, CheckCircle2, ChevronRight, Heart, LayoutDashboard, Menu, Sparkles, Target, Timer, Users, X } from 'lucide-react';
const modules = [
  {name:'Meu Dia',desc:'Seu dia em harmonia',Icon:LayoutDashboard},
  {name:'Treinos',desc:'Movimento e evolução',Icon:Activity},
  {name:'Alimentação',desc:'Cuidado em cada escolha',Icon:Apple},
  {name:'Saúde',desc:'Seu bem-estar',Icon:Heart},
  {name:'Hábitos',desc:'Pequenos passos, grandes mudanças',Icon:CheckCircle2},
  {name:'Espiritualidade',desc:'Tempo com propósito',Icon:Sparkles},
  {name:'Biblioteca',desc:'Leitura e aprendizado',Icon:BookOpen},
  {name:'Metas',desc:'Sonhos em movimento',Icon:Target},
  {name:'Agenda',desc:'Organize sua rotina',Icon:CalendarDays},
  {name:'Família',desc:'Seu espaço compartilhado',Icon:Users},
];
export default function Home(){
 const [active,setActive]=useState('Meu Dia'); const [menu,setMenu]=useState(false);
 return <main className="shell">
  <aside className={'sidebar '+(menu?'opened':'')}><div className="brand"><span className="brand-icon">✳</span> VIDA <button className="close" onClick={()=>setMenu(false)} aria-label="Fechar menu"><X size={20}/></button></div>
   <div className="side-label">SEU UNIVERSO</div><nav>{modules.map(({name,Icon})=><button key={name} className={active===name?'selected':''} onClick={()=>{setActive(name);setMenu(false)}}><Icon size={19}/>{name}</button>)}</nav><div className="side-bottom">Feito para acompanhar você ♡</div>
  </aside>
  <section className="content"><div className="topline"><button className="mobile-menu" onClick={()=>setMenu(true)} aria-label="Abrir menu"><Menu/></button><span>VIDA <span className="dot">●</span> SEU ESPAÇO PESSOAL</span><span className="avatar">V</span></div>
  {active==='Meu Dia'?<><header><div className="eyebrow">BEM-VINDA AO SEU ESPAÇO</div><h1>Um dia de cada vez <span>✦</span></h1><p>Uma vida mais leve começa nos pequenos momentos.</p></header>
  <div className="hero glass"><div className="eyebrow">SEU DIA, SEU RITMO</div><h2>Tudo o que importa,<br/>em harmonia.</h2><p>Seu cantinho para organizar, evoluir e cuidar de você.</p><div className="pill"><Sparkles size={15}/> Um novo começo todos os dias</div></div>
  <div className="section-head"><h3>Explore seu VIDA</h3><span>Seu mundo em um só lugar</span></div><div className="grid">{modules.slice(1,9).map(({name,desc,Icon})=><button key={name} className="tile glass" onClick={()=>setActive(name)}><span className="tile-icon"><Icon size={24} strokeWidth={1.7}/></span><strong>{name}</strong><small>{desc}</small><ChevronRight className="arrow" size={17}/></button>)}</div></>:
  <><header><div className="eyebrow">MEU VIDA</div><h1>{active} <span>✦</span></h1><p>Um espaço só seu para cada parte da sua jornada.</p></header><div className="placeholder glass"><div className="placeholder-icon"><Timer size={31}/></div><h2>Estamos preparando este espaço</h2><p>Esta é a primeira versão visual do VIDA. Os registros, cronômetros, relatórios e sincronização serão adicionados nas próximas etapas.</p><button onClick={()=>setActive('Meu Dia')}>Voltar ao Meu Dia</button></div></>}
  <footer>VIDA · Versão inicial demonstrativa · Sem armazenamento de dados pessoais</footer></section>
 </main>;
}
