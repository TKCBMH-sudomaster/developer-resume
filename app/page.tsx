import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Professional Summary Section */}
      <section className="space-y-4">
        <div className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-950 text-emerald-400 rounded-full border border-emerald-800/30 tracking-wide uppercase">
          Open to Cloud & Full-Stack Opportunities
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Systems Optimization & Full-Stack Engineer
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
          A results-driven technology professional specializing in developing secure web applications, 
          managing database architectures, and creating automated business workflows. Adept at bridging 
          the gap between complex cloud infrastructure and intuitive user experiences.
        </p>
      </section>

      <hr className="border-slate-900" />

      {/* Core Expertise Sections — Easy for HR to Scan */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Core Capability</span>
          <h3 className="text-lg font-bold text-slate-100">Application Development</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Designing and deploying secure, user-friendly administration portals integrated with cloud systems and production-ready APIs.
          </p>
        </div>
        
        <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Business Value</span>
          <h3 className="text-lg font-bold text-slate-100">Workflow Automation</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Replacing slow manual processes with automated scripting engines to reconcile data records and accelerate operational auditing cycles.
          </p>
        </div>
      </section>

      {/* Clear, Human-Readable Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
        <Link 
          href="/projects" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all font-semibold shadow-lg shadow-emerald-500/5"
        >
          View My Projects
        </Link>
        <Link 
          href="/skills" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all"
        >
          See Technical Skills
        </Link>
      </div>
    </div>
  );
}