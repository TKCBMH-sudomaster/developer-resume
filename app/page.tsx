import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* ========================================================
        HOME // PORTFOLIO EXECUTION DASHBOARD
        ========================================================
      */}

      {/* Hero Section Redesign */}
      <section className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl space-y-6 relative overflow-hidden group">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold bg-orange-500/10 text-emerald-400 rounded-full border border-emerald-400/20 tracking-wider uppercase">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: Active_Availability
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Systems Optimization & <br />Full-Stack Engineer
            </h1>
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              Results-driven technical leader specializing in full-scale web utilities, 
              scalable database architectures, and infrastructure automation. Focused 
              on maximizing operational efficiency and eliminating frictional bottlenecks 
              in complex digital workflows.
            </p>
          </div>
          {/* Static Engineering Badge */}
          <div className="w-24 h-24 flex items-center justify-center rounded-3xl border-2 border-slate-800 bg-slate-950 font-black text-2xl text-slate-700 tracking-tightest mt-1">
            SYS
          </div>
        </div>
      </section>

      <hr className="border-slate-800/60" />

      {/* Primary Engineering Domains */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">Operational Core Modules</h2>
          <p className="text-slate-400 mt-1 text-sm">Strategic domains of optimization and full-cycle development.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Domain 1: Application Architecture */}
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3 hover:border-emerald-400/30 transition-colors group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Core Capability // MODULE.AA</span>
              <span className="text-2xl font-black text-slate-700 opacity-50">01</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Application & Enterprise Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Designing and deploying robust, component-driven administrative portals and secure support interfaces integrated seamlessly with modern cloud solutions and verified API structures.
            </p>
          </div>
          
          {/* Domain 2: Business Automation */}
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3 hover:border-emerald-400/30 transition-colors group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Strategic Intent // MODULE.WA</span>
              <span className="text-2xl font-black text-slate-700 opacity-50">02</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Business Workflow Automation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engineering efficient programmatic routines to process, reconcile, and synchronize complex database records, replacing human auditing loops with optimized automated data streams.
            </p>
          </div>
        </div>
      </section>

      {/* Action Controls Redesign */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-5">
        <div>
          <h3 className="text-lg font-bold text-slate-100 tracking-tight">Portfolio Execution Controls</h3>
          <p className="text-xs text-slate-500 mt-0.5 tracking-wide">Launch specific interactive portfolio interface modules for deep technical review.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-orange-500/10 active:scale-[0.98]"
          >
            Launch Project Readouts →
          </Link>
          <Link 
            href="/skills" 
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-slate-300 bg-slate-950 border border-slate-800 hover:text-slate-100 hover:bg-slate-800/60 hover:border-slate-700 rounded-xl transition-all active:scale-[0.98]"
          >
            Access Competencies Grid →
          </Link>
        </div>
      </div>
    </div>
  );
}