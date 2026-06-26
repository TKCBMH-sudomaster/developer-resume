export default function ProjectsPage() {
  const projects = [
    {
      title: "Full-Stack Meal Planner Application",
      role: "Lead Full-Stack Developer",
      description: "Engineered an end-to-end nutritional planning utility featuring interactive menu construction, dynamic macro-nutrient calculation trees, and persistent user profile tracking tables.",
      impact: "Combines fast cloud computing with intuitive data state management to process custom calculations without UI freeze lag.",
      skills: ["Next.js Framework", "PostgreSQL / Supabase", "Tailwind Engine", "REST API Endpoints"]
    },
    {
      title: "Enterprise Application Suite & Support Portal",
      role: "Full-Stack Developer",
      description: "Designed and launched a custom administrative software suite featuring a secure technician portal, user check-in kiosk interface, and a real-time support queue monitoring board.",
      impact: "Streamlines internal team communications and centralizes technician workflows into a single interface.",
      skills: ["Next.js", "Supabase DB", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Automated Access Review Reconciliation Engine",
      role: "Backend & Automation Engineer",
      description: "Engineered an automated script pipeline that aggregates, filters, and reconciles system privilege logs, dropping manual oversight loops down to instantaneous processing.",
      impact: "Significantly reduces administrative overhead and eliminates human error during security audit cycles.",
      skills: ["SQL Server", "Data Automation", "System Auditing", "Workflow Optimization"]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase">Production Deployments</h2>
        <p className="text-slate-400 mt-1 text-sm">A comprehensive review of software systems engineered to solve business problems.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="tech-card space-y-4">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">{project.role}</span>
                <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
            
            <div className="p-4 bg-black/60 border border-slate-800 rounded-xl text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200 font-bold uppercase tracking-wider text-[10px] text-emerald-400 block mb-1">Business Impact Profile</strong> 
              {project.impact}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-bold bg-slate-950 text-slate-300 rounded-md border border-slate-800 tracking-wide">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}