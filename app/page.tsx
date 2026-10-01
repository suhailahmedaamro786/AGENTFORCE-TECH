import { ArrowRight, Bot, BrainCircuit, Check, ChevronRight, Code2, Database, Globe2, Headphones, Layers3, MessageSquareText, Network, PlugZap, Rocket, ShieldCheck, Sparkles, Workflow, Zap } from "lucide-react";

const services = [
  ["AI Agents & Multi-Agent Systems", "Autonomous agents that reason, collaborate, use tools and execute structured business workflows.", Bot],
  ["AI Automation & BPA", "Automate repetitive operations, approvals, notifications, reporting and internal processes.", Workflow],
  ["RAG & Knowledge Systems", "Connect AI to your documents, databases and private knowledge with grounded answers.", Database],
  ["AI Chatbots & Assistants", "Customer and internal assistants for support, sales, onboarding and knowledge access.", MessageSquareText],
  ["AI Voice Agents", "Natural voice experiences for inbound support, qualification, booking and follow-up workflows.", Headphones],
  ["WhatsApp Business Agents", "24/7 WhatsApp assistants for lead capture, FAQs, support and automated customer journeys.", MessageSquareText],
  ["Custom SaaS Products", "From MVP to production SaaS with authentication, billing, dashboards, APIs and scalable architecture.", Layers3],
  ["Web Apps & Business Portals", "Fast, responsive web platforms designed around real users, business rules and measurable outcomes.", Globe2],
  ["API & System Integrations", "Connect CRMs, databases, payments, communication tools and third-party services into one system.", PlugZap],
  ["AI Workflow Architecture", "Design reliable agentic pipelines with orchestration, tools, memory, approvals and observability.", Network],
  ["AI-Powered Dashboards", "Turn operational data into clear dashboards, analytics and decision-support interfaces.", BrainCircuit],
  ["AI Product Consulting", "Technical discovery, architecture planning and practical AI strategy before development begins.", Zap]
] as const;

const projects = [
  { title:"NPSD School ERP", tag:"School SaaS", desc:"Production-focused school platform with Student, Teacher and Admin portals, admissions, attendance, results and QR workflows.", stack:"Next.js · Supabase · PostgreSQL · RLS · QR", href:"https://student-portal-chi-navy.vercel.app/" },
  { title:"University AI Assistant", tag:"AI Web App", desc:"AI-powered university assistant for conversational responses, university information and academic guidance.", stack:"Next.js · TypeScript · AI · Tailwind", href:"https://aamro-university-agent.vercel.app/" },
  { title:"AI StudyMate", tag:"Multi-Agent AI", desc:"Learning platform with Tutor, Quiz, Evaluator, Planner and Career agents backed by RAG.", stack:"Next.js · FastAPI · Supabase · RAG", href:"https://ai-studymate-dkel.vercel.app" },
  { title:"Suhail AI", tag:"AI Assistant", desc:"Personal AI assistance experience built with modern React, TypeScript and Supabase architecture.", stack:"React · TypeScript · Supabase · AI", href:"https://personal-ai-assistance-pearl.vercel.app" },
  { title:"Physical AI & Humanoid Robotics", tag:"AI Documentation", desc:"Interactive technical learning platform for physical AI and humanoid robotics with structured documentation.", stack:"Next.js · TypeScript · 3D · Tailwind", href:"https://book-skp-claude.vercel.app/" },
  { title:"Islamic Worship Assistant", tag:"Web Application", desc:"Responsive worship assistant with prayer times, Quran features and Ramadan-focused tools.", stack:"Next.js · TypeScript · Islamic APIs", href:"https://v0-ramzan-app-features.vercel.app/" },
  { title:"E-Commerce Book Store", tag:"E-Commerce", desc:"Bookstore experience with product catalog, cart, authentication, checkout and order workflows.", stack:"Next.js · TypeScript · Sanity · Tailwind", href:"https://final-hackthoon-2-ska-git-main-suhailahmedaamros-projects.vercel.app/" },
  { title:"NJV School Management", tag:"Management System", desc:"School management workflow covering registration, attendance, grades and communication.", stack:"Next.js · TypeScript · Database · Tailwind", href:"https://njv-school.vercel.app/" },
  { title:"GDP Dashboard", tag:"Python Application", desc:"Interactive economic-data dashboard with country comparisons, historical trends and visual analytics.", stack:"Python · Streamlit · Pandas · Plotly", href:"https://gdp-dashboard-uskmsgizln.streamlit.app/" },
  { title:"Multi-Project Python App", tag:"Python Application", desc:"Collection of interactive Python utilities and productivity tools in one Streamlit experience.", stack:"Python · Streamlit · Plotly · Pandas", href:"https://suhailahmedaamro-python-projects-projects-60ybw3.streamlit.app/" },
  { title:"Personal Library Manager", tag:"Python Application", desc:"Library manager for cataloging books, tracking reading status and visualizing collection statistics.", stack:"Python · Streamlit · Pandas · Plotly", href:"https://suhailahmedaamro-library-manager-py-library-manager-txxaiw.streamlit.app/" },
  { title:"Personal Portfolio", tag:"Professional Website", desc:"Responsive portfolio with project showcase, contact workflow, dark mode, CV access and AI assistant.", stack:"Next.js · TypeScript · Tailwind · Gemini", href:"https://suhailahmedaamro.vercel.app/" },
  { title:"AgentForge AI", tag:"Agentic Automation", desc:"Multi-agent workflow concept connecting research, development, review and delivery.", stack:"Python · LangGraph · Agents · MCP", href:"https://github.com/suhailahmedaamro786/AGENTFORCE-TECH" },
  { title:"Smart Attendance", tag:"Business Automation", desc:"QR-driven attendance workflow designed to replace repetitive manual tracking with a digital system.", stack:"Web App · QR · Automation", href:"https://github.com/suhailahmedaamro786" }
];

const process = [
  ["01","Discover","Understand the problem, users, constraints and success metrics."],
  ["02","Architect","Design the product, data, integrations and AI workflow before coding."],
  ["03","Build","Ship UI, backend, agents, automations and integrations in focused iterations."],
  ["04","Test","Validate reliability, permissions, edge cases and real-world AI behavior."],
  ["05","Deploy","Launch securely with production infrastructure, monitoring and configuration."],
  ["06","Scale","Improve performance, automation coverage and product capabilities over time."]
];

const reasons = [
  "AI-first architecture instead of adding AI as an afterthought",
  "Production-ready frontend, backend, database and deployment",
  "Human approval steps for workflows that need control",
  "Clean UX designed for real customers and teams",
  "Modular systems that can grow with your business",
  "Direct communication from idea through launch"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 grid-bg opacity-40" />
      <div className="orb orb-one" /><div className="orb orb-two" />

      <nav className="nav-shell sticky top-0 z-50 border-b border-white/5 bg-[#05070b]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3 font-semibold tracking-tight"><span className="brand-mark">AF</span><span>AgentForce <span className="text-violet-300">Tech</span></span></a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex"><a href="#services" className="nav-link">Services</a><a href="#work" className="nav-link">Work</a><a href="#process" className="nav-link">Process</a><a href="#why" className="nav-link">Why Us</a><a href="#contact" className="nav-link">Contact</a></div>
          <a href="https://suhailahmedaamro.vercel.app/contact" className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold transition hover:border-violet-400/40 hover:bg-violet-500/10 sm:px-5 sm:text-sm">Let's Work Together</a>
        </div>
      </nav>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="hero-content max-w-5xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-medium text-violet-200 sm:text-sm"><Sparkles className="h-4 w-4" /> AI-Powered Software & Automation Agency</div>
          <h1 className="reveal reveal-delay-1 mt-7 text-5xl font-black leading-[.96] tracking-[-.055em] sm:text-7xl lg:text-[6.8rem]">Build Smarter.<br /><span className="gradient">Automate Faster.</span><br />Scale Further.</h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-9 sm:text-xl sm:leading-8">We build intelligent software, AI agents and automated workflows that turn ambitious ideas into real products and measurable business systems.</p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row"><a href="https://suhailahmedaamro.vercel.app/contact" className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold">Start a Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a><a href="#services" className="btn-secondary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold">Explore Services <ChevronRight className="h-4 w-4" /></a></div>
        </div>
        <div className="reveal reveal-delay-4 mt-16 grid gap-3 sm:grid-cols-3 lg:mt-20">
          {[[Zap,"AI-native","Products designed around intelligence, not bolted-on chatbots."],[Code2,"Production-first","Clean architecture, APIs, data and deployment from day one."],[Rocket,"Outcome-focused","Every build starts with a business problem and a measurable goal."]].map(([Icon,title,desc]) => <div key={title as string} className="glass-card rounded-2xl p-5 sm:p-6"><Icon className="mb-5 h-5 w-5 text-violet-300" /><h3 className="font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{desc as string}</p></div>)}
        </div>
      </section>

      <section id="services" className="section-band py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="eyebrow text-violet-300">Capabilities</p><h2 className="section-title mt-4">Everything you need to build an AI-powered business.</h2><p className="section-copy mt-5">From strategy and architecture to production deployment, we combine software engineering with practical AI.</p></div>
          <div className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">{services.map(([title,desc,Icon],i) => <div key={title} className="service-card group rounded-2xl p-6 sm:p-7"><div className="icon-box mb-6"><Icon className="h-5 w-5" /></div><div className="flex items-start justify-between gap-3"><h3 className="text-base font-semibold leading-6 sm:text-lg">{title}</h3><span className="pt-1 text-[10px] text-zinc-700">0{i+1}</span></div><p className="mt-3 text-sm leading-6 text-zinc-500">{desc}</p><div className="mt-6 flex items-center gap-1 text-xs font-medium text-zinc-600 transition group-hover:text-violet-300">Explore capability <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></div></div>)}</div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-cyan-300">Websites & Products</p><h2 className="section-title mt-4">Built for real-world use.</h2></div><a href="https://github.com/suhailahmedaamro786" className="text-sm text-zinc-400 transition hover:text-white">View GitHub <ArrowRight className="ml-1 inline h-4 w-4" /></a></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">{projects.map((p,i) => <a href={p.href} target="_blank" rel="noreferrer" key={p.title} className="project-card group rounded-3xl p-6 sm:p-8"><div className="flex items-center justify-between"><span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{p.tag}</span><span className="text-xs text-zinc-700">0{i+1}</span></div><div className="project-visual mt-7 grid h-36 place-items-center overflow-hidden rounded-2xl sm:h-44"><div className="visual-lines" /><div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-violet-300/20 bg-violet-500/10 text-violet-200 shadow-2xl shadow-violet-500/20"><Layers3 className="h-6 w-6" /></div></div><div className="mt-7"><h3 className="text-2xl font-bold">{p.title}</h3><p className="mt-3 max-w-xl leading-7 text-zinc-400">{p.desc}</p><p className="mt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-zinc-600">{p.stack}</p></div><div className="mt-7 flex items-center gap-2 text-sm text-zinc-300">View project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div></a>)}</div>
      </section>

      <section id="process" className="section-band py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="eyebrow text-violet-300">Our Process</p><h2 className="section-title mt-4">From idea to intelligent product.</h2><p className="section-copy mt-5">A clear delivery system keeps complex AI projects understandable, testable and moving forward.</p></div><div className="mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">{process.map(([n,t,d]) => <div key={n} className="process-card p-6 sm:p-7"><span className="text-xs font-bold text-violet-300">{n}</span><h3 className="mt-5 font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{d}</p></div>)}</div></div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="eyebrow text-cyan-300">Why AgentForce Tech</p><h2 className="section-title mt-4">Not just an AI demo. A system you can actually run.</h2><p className="section-copy mt-5">We focus on useful software: reliable workflows, clean interfaces, secure data and AI that fits the way your business already operates.</p></div><div className="grid gap-3 sm:grid-cols-2">{reasons.map(reason => <div key={reason} className="glass-card rounded-2xl p-5"><Check className="mb-4 h-5 w-5 text-cyan-300" /><p className="text-sm leading-6 text-zinc-300">{reason}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 sm:pb-28 lg:px-8"><div className="cta-card relative overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:p-16"><div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[90px]" /><div className="relative max-w-3xl"><ShieldCheck className="h-7 w-7 text-cyan-300" /><p className="eyebrow mt-7 text-violet-300">Let's build</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Your idea deserves a real product.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">Tell us what you want to build, and let's turn the idea into a real product.</p><a href="https://suhailahmedaamro.vercel.app/contact" className="btn-primary mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold">Let's Work Together <ArrowRight className="h-4 w-4" /></a></div></div></section>

      <footer id="contact" className="border-t border-white/5"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><div className="font-semibold">AgentForce <span className="text-violet-300">Tech</span></div><p className="mt-2 text-sm text-zinc-600">AI-powered software & automation.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500"><a href="#services" className="nav-link">Services</a><a href="#work" className="nav-link">Work</a><a href="https://github.com/suhailahmedaamro786/AGENTFORCE-TECH" className="nav-link">GitHub</a><a href="https://suhailahmedaamro.vercel.app" className="nav-link">Portfolio</a><a href="https://suhailahmedaamro.vercel.app/contact" className="nav-link">Contact</a></div><p className="text-xs text-zinc-700">© 2026 AgentForce Tech</p></div></footer>
    </main>
  );
}
