import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { getDemoSite } from "@/lib/demo-sites";

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getDemoSite(slug);
  if (!site) notFound();

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <div className="fixed inset-0 -z-10 grid-bg opacity-40" />
      <div className="orb orb-one" /><div className="orb orb-two" />

      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3 font-semibold"><span className="brand-mark">AF</span>AgentForce <span className="text-violet-300">Tech</span></a>
          <a href="/" className="text-sm text-zinc-400 hover:text-white">← All Demos</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-medium text-violet-200"><Sparkles className="h-4 w-4" /> AgentForce Tech Website Demo</div>
          <p className="eyebrow mt-8 text-cyan-300">{site.tag}</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-.04em] sm:text-7xl">{site.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{site.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://suhailahmedaamro.vercel.app/contact" className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold">{site.cta} <ArrowRight className="h-4 w-4" /></a>
            {site.liveHref && <a href={site.liveHref} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold">Open Live Website <ArrowRight className="h-4 w-4" /></a>}
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1.4fr_.6fr]">
          <div className="project-card rounded-3xl p-7 sm:p-10">
            <div className="project-visual grid h-72 place-items-center overflow-hidden rounded-2xl">
              <div className="visual-lines" />
              <div className="relative w-[85%] max-w-xl rounded-2xl border border-white/10 bg-[#090c13]/90 p-6 shadow-2xl">
                <div className="flex gap-2"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /></div>
                <div className="mt-7 h-3 w-2/3 rounded-full bg-white/10" />
                <div className="mt-3 h-2 w-1/2 rounded-full bg-white/5" />
                <div className="mt-8 grid grid-cols-3 gap-3"><div className="h-20 rounded-xl bg-violet-500/10" /><div className="h-20 rounded-xl bg-cyan-500/10" /><div className="h-20 rounded-xl bg-white/5" /></div>
              </div>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[.18em] text-zinc-600">{site.stack}</p>
          </div>

          <div className="glass-card rounded-3xl p-7 sm:p-8">
            <p className="eyebrow text-violet-300">Built for</p>
            <h2 className="mt-3 text-xl font-bold">{site.audience}</h2>
            <div className="mt-7 space-y-4">
              {site.features.map((feature) => <div key={feature} className="flex gap-3 text-sm text-zinc-300"><Check className="h-5 w-5 shrink-0 text-cyan-300" />{feature}</div>)}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-zinc-600 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
          <span>AgentForce Tech · Website Demo</span>
          <a href="https://suhailahmedaamro.vercel.app/contact" className="text-zinc-400 hover:text-white">Request this website →</a>
        </div>
      </footer>
    </main>
  );
}
