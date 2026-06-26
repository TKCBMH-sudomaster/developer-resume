import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Executive Hero Block */}
      <section className="space-y-4">
        <div className="inline-block px-3 py-1 text-xs font-bold bg-orange-500/10 text-emerald-400 rounded-md border border-emerald-400/20 tracking-wider uppercase">
          Status: Available for Technical Opportunities
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Systems Optimization & Full-Stack Engineer
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
          A results-driven technology specialist experienced in creating secure web architectures, 
          managing database environments, and engineering automated scripting routines. Focused on 
          building high-performance software that solves operational bottlenecks and optimizes data flows.
        </p>
      </section>

      <hr className="border-slate-800" />

      {/* Strategic Focus Grid — Easy for Recruiters to Scan */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-2 hover:border-emerald-400/30 transition-colors">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Core Architecture</span>
          <h3 className="text-lg font-bold text-white">Application Development</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Constructing fast, component-driven administration portals integrated securely with scalable cloud backends and verified API workflows.
          </p>
        </div>
        
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-2 hover:border-emerald-400/30 transition-colors">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Business Automation</span>
          <h3 className="text-lg font-bold text-white">Workflow Optimization</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Developing backend scripts to process, cross-reference, and reconcile complex data tables, replacing slow manual tracking steps.
          </p>
        </div>
      </section>

      {/* Premium Call to Actions */}
      <div className="flex flex-wrap gap-4 pt-2">
        <Link 
          href="/projects" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-md shadow-orange-500/10"
        >
          Explore Technical Projects
        </Link>
        <Link 
          href="/skills" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all"
        >
          View Core Competencies
        </Link>
      </div>
    </div>
  );
}