import {ArrowRight, Bot, BrainCircuit, CheckCircle2, ChevronRight, Code2, Cpu, Database, GitBranch, Layers3, MessageSquareText, Network, Rocket, ShieldCheck, Sparkles, Workflow} from "lucide-react";

const projects=[
 {title:"AI StudyMate",tag:"Multi-Agent AI",desc:"AI-powered learning platform with Tutor, Quiz, Evaluator, Planner and Career agents plus RAG.",stack:"Next.js · FastAPI · Supabase · RAG",href:"https://github.com/suhailahmedaamro786/ai-studymate"},
 {title:"Suhail AI",tag:"AI Assistant",desc:"Personal AI assistance experience built around modern React, TypeScript and Supabase architecture.",stack:"React · TypeScript · Supabase · AI",href:"https://github.com/suhailahmedaamro786/PERSONAL-AI-ASSISTANCE-"},
 {title:"AgentForge AI",tag:"Agentic Automation",desc:"A multi-agent workflow concept connecting research, development, review and delivery into one system.",stack:"Python · LangGraph · Agents · MCP",href:"https://github.com/suhailahmedaamro786/AGENTFORCE-TECH"},
 {title:"Smart Attendance",tag:"Business Automation",desc:"QR-driven attendance workflow designed to replace repetitive manual tracking with a digital system.",stack:"Web App · QR · Automation",href:"https://github.com/suhailahmedaamro786"}
];

const services=[
 ["AI Agents & Multi-Agent Systems", "Specialized agents that reason, collaborate and execute structured workflows.", Bot],
 ["AI Automation", "Turn repetitive business operations into reliable, measurable automations.", Workflow],
 ["RAG & Knowledge Systems", "Ground AI responses in your documents, databases and internal knowledge.", Database],
 ["Custom SaaS & Web Apps", "Production-ready products with clean UX, APIs, authentication and scalable architecture.", Code2],
 ["AI Voice & WhatsApp Agents", "Intelligent customer-facing assistants for lead capture, support and business workflows.", MessageSquareText],
 ["AI Workflow Architecture", "Design agentic pipelines using modern orchestration, tools, APIs and human approval steps.", Network]
] as const;

const process=[
 ["01","Discover","Understand the business problem, users, constraints and success metrics."],
 ["02","Architect","Design the product, data model, integrations and AI workflow before coding."],
 ["03","Build","Ship the interface, backend, agents, automations and integrations in focused iterations."],
 ["04","Test","Validate reliability, edge cases, permissions, AI outputs and real workflows."],
 ["05","Deploy","Launch on production infrastructure with monitoring and secure configuration."],
 ["06","Scale","Improve performance, automation coverage and product capabilities as usage grows."]
];

export default function Home(){
 return <main className="min-h-screen overflow-hidden">
  <div className="fixed inset-0 -z-10 grid-bg opacity-50"/>
  <div className="fixed left-1/2 top-0 -z-10 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]"/>
  
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
   <a href="#" className="flex items-center gap-3 font-semibold tracking-tight">
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-black shadow-lg shadow-violet-500/20">AF</span>
    <span>AgentForce <span className="text-violet-300">Tech</span></span>
   </a>
   <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
    <a href="#services" className="hover:text-white">Services</a><a href="#work" className="hover:text-white">Selected Work</a><a href="#process" className="hover:text-white">Process</a><a href="#contact" className="hover:text-white">Contact</a>
   </div>
   <a href="https://suhailahmedaamro.vercel.app/contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium hover:bg-white/10">Let's Work Together</a>
  </nav>

  <section className="mx-auto max-w-7xl px-6 pb-28 pt-20 lg:px-8 lg:pt-28">
   <div className="max-w-4xl">
    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200"><Sparkles className="h-4 w-4"/> AI-Powered Software & Automation Agency</div>
    <h1 className="text-5xl font-black leading-[.98] tracking-[-.045em] sm:text-7xl lg:text-8xl">Build Smarter.<br/><span className="gradient">Automate Faster.</span><br/>Scale Further.</h1>
    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">We build intelligent software, AI agents and automated workflows that turn ambitious ideas into real products and measurable business systems.</p>
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a href="https://suhailahmedaamro.vercel.app/contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black hover:bg-zinc-200">Start a Project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></a>
      <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold hover:bg-white/10">Explore Our Work <ChevronRight className="h-4 w-4"/></a>
    </div>
   </div>
   <div className="mt-20 grid gap-4 sm:grid-cols-3">
    {[
      [Cpu,"AI-native","Products designed around intelligence, not bolted-on chatbots."],
      [GitBranch,"Production-first","Clean architecture, APIs, data and deployment from day one."],
      [Rocket,"Outcome-focused","Every build starts with a business problem and a measurable goal."]
    ].map(([Icon,title,desc])=><div key={title as string} className="card rounded-2xl p-6"><Icon className="mb-5 h-5 w-5 text-violet-300"/><h3 className="font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{desc as string}</p></div>)}
   </div>
  </section>

  <section id="services" className="border-y border-white/5 bg-white/[.015] py-28">
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[.22em] text-violet-300">Capabilities</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Software that works like a system.</h2><p className="mt-5 leading-7 text-zinc-400">From the first architecture diagram to production deployment, we combine software engineering with practical AI.</p></div>
    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map(([title,desc,Icon])=><div key={title} className="card group rounded-2xl p-7 transition hover:-translate-y-1 hover:border-violet-400/30"><div className="mb-7 grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><Icon className="h-5 w-5"/></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{desc}</p></div>)}
    </div>
   </div>
  </section>

  <section id="work" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
   <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-300">Selected Work</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Built in the real world.</h2></div><a href="https://github.com/suhailahmedaamro786" className="text-sm text-zinc-400 hover:text-white">View GitHub <ArrowRight className="ml-1 inline h-4 w-4"/></a></div>
   <div className="mt-14 grid gap-5 lg:grid-cols-2">
    {projects.map((p,i)=><a href={p.href} target="_blank" rel="noreferrer" key={p.title} className="card group rounded-3xl p-7 transition hover:-translate-y-1 hover:border-cyan-400/25">
      <div className="flex items-center justify-between"><span className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-200">{p.tag}</span><span className="text-xs text-zinc-600">0{i+1}</span></div>
      <div className="mt-16 max-w-xl"><h3 className="text-2xl font-bold">{p.title}</h3><p className="mt-3 leading-7 text-zinc-400">{p.desc}</p><p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-600">{p.stack}</p></div>
      <div className="mt-8 flex items-center gap-2 text-sm text-zinc-300">View project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></div>
    </a>)}
   </div>
  </section>

  <section id="process" className="border-y border-white/5 bg-white/[.015] py-28">
   <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[.22em] text-violet-300">Our Process</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">From idea to intelligent product.</h2></div>
   <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{process.map(([n,t,d])=><div key={n} className="bg-[#080b12] p-7"><span className="text-xs font-bold text-violet-300">{n}</span><h3 className="mt-5 font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{d}</p></div>)}</div></div>
  </section>

  <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
   <div className="card glow relative overflow-hidden rounded-[2rem] p-8 sm:p-14"><div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-600/15 blur-[90px]"/><div className="relative max-w-3xl"><ShieldCheck className="h-7 w-7 text-cyan-300"/><h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">Built for the next version of your business.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">Tell us what you want to build, and let's turn the idea into a real product.</p><a href="https://suhailahmedaamro.vercel.app/contact" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black hover:bg-zinc-200">Let's Work Together <ArrowRight className="h-4 w-4"/></a></div></div>
  </section>

  <footer id="contact" className="border-t border-white/5">
   <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
    <div><div className="font-semibold">AgentForce <span className="text-violet-300">Tech</span></div><p className="mt-2 text-sm text-zinc-600">AI-powered software & automation.</p></div>
    <div className="flex flex-wrap gap-5 text-sm text-zinc-500"><a href="https://github.com/suhailahmedaamro786/AGENTFORCE-TECH">GitHub</a><a href="https://suhailahmedaamro.vercel.app">Portfolio</a><a href="https://suhailahmedaamro.vercel.app/contact">Contact</a></div>
    <p className="text-xs text-zinc-700">© 2026 AgentForce Tech</p>
   </div>
  </footer>
 </main>
}