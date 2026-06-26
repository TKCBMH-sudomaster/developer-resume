export default function ProjectsPage() {
  const projects = [
    {
      title: "Enterprise Application Suite & Support Portal",
      role: "Full-Stack Developer",
      description: "Designed and launched a custom administrative software suite featuring a secure technician portal, user check-in kiosk interface, and a real-time support queue monitoring board.",
      impact: "Streamlines internal team communications and centralizes technician workflows into a single interface.",
      skills: ["Next.js", "Supabase DB", "Tailwind CSS", "REST APIs"],
      url: "https://github.com/"
    },
    {
      title: "Automated Access Review Reconciliation Engine",
      role: "Backend & Automation Engineer",
      description: "Engineered an automated script pipeline that aggregates, filters, and reconciles system privilege logs, dropping manual oversight loops down to instantaneous processing.",
      impact: "Significantly reduces administrative overhead and eliminates human error during security audit cycles.",
      skills: ["SQL Server", "Data Automation", "System Auditing", "Workflow Optimization"],
      url: "https://github.com/"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-slate-400 mt-1 text-sm">Production-ready applications and software solutions.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-slate-900/20 border border-slate-800 rounded-xl space-y-4">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{project.role}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-0.5">{project.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
            
            <div className="p-3.5 bg-slate-950/50 border border-slate-900 rounded-lg text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200 font-medium">Business Impact:</strong> {project.impact}
            </div>

            {/* Clean skill badges for recruiter keyword searches */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-0.5 text-xs font-medium bg-slate-900 text-slate-400 rounded-md border border-slate-800">
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-medium text-slate-400 hover:text-white underline decoration-emerald-500/40 underline-offset-4 transition-all"
              >
                View Code Repository →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}