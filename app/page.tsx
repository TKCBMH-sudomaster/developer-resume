import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      
      {/* Hero Header Section */}
      <section className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold bg-orange-500/10 text-emerald-400 rounded-full border border-emerald-400/20 tracking-wider uppercase">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: ACTIVE_AVAILABILITY
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
              Systems Optimization & <br />Full-Stack Engineer
            </h1>
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              Results-driven technical leader specializing in full-scale web utilities, 
              scalable database architectures, and infrastructure automation. Focused 
              on maximizing operational efficiency and eliminating frictional bottlenecks 
              in complex digital workflows.
            </p>
          </div>
          <div className="w-24 h-24 hidden md:flex items-center justify-center rounded-3xl border-2 border-slate-800 bg-slate-950 font-black text-2xl text-slate-700 tracking-tightest">
            SYS
          </div>
        </div>
      </section>

      {/* Primary Engineering Domains */}
      <section className="space-y-6 border-none !p-0 !bg-transparent !box-none">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white uppercase">Operational Core Core</h2>
          <p className="text-slate-400 mt-1 text-sm">Strategic domains of optimization and full-cycle development.</p>
        </div>
        
        <div className="grid-container">
          {/* Domain 1 */}
          <div className="tech-card">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">Core Capability</span>
            <h3>Application & Enterprise Architecture</h3>
            <p>
              Designing and deploying robust, component-driven administrative portals and secure support interfaces integrated seamlessly with modern cloud solutions and verified API structures.
            </p>
          </div>
          
          {/* Domain 2 */}
          <div className="tech-card">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">Strategic Focus</span>
            <h3>Business Workflow Automation</h3>
            <p>
              Engineering efficient programmatic routines to process, reconcile, and synchronize complex database records, replacing manual tracking steps with optimized automated data streams.
            </p>
          </div>
        </div>
      </section>

      {/* Action Controls Panel */}
      <div className="tech-card">
        <h3>Portfolio Execution Controls</h3>
        <p style={{ margin: '0 0 1.5rem 0' }}>Launch specific interactive portfolio interface modules for deep technical review.</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/projects" className="btn-primary">
            Launch Project Readouts →
          </Link>
          <Link href="/skills" className="btn-secondary">
            Access Competencies Grid →
          </Link>
        </div>
      </div>

    </div>
  );
}