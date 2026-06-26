import Link from 'next/link';

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
      role: "Systems Specialist & Developer",
      description: "Designed and launched a custom administrative software suite featuring a secure technician portal, user check-in kiosk interface, and a real-time support queue monitoring board.",
      impact: "Streamlines internal team communications and centralizes technician workflows into a single operational interface.",
      skills: ["Next.js", "Supabase Database", "Kiosk Architecture", "Real-Time Monitoring"]
    },
    {
      title: "Automated Access Review Reconciliation Engine",
      role: "Backend & Automation Engineer",
      description: "Engineered an automated script pipeline that aggregates, filters, and reconciles system privilege logs, dropping manual oversight loops down to instantaneous processing.",
      impact: "Significantly reduces administrative overhead and eliminates human tracking error during critical security audit cycles.",
      skills: ["SQL Server", "Data Automation", "System Auditing", "Workflow Optimization"]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Page Title Block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
          Production Deployments
        </h2>
        <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>
          A comprehensive review of software systems engineered to solve complex operational problems.
        </p>
      </div>

      {/* Main Stacked Project List Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{ padding: '32px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Header Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316' }}>
                {project.role}
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              {project.description}
            </p>
            
            {/* Business Impact Box */}
            <div style={{ padding: '16px', backgroundColor: '#000000', border: '1px solid #1e1e20', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f97316' }}>
                Business Impact Profile
              </span> 
              <p style={{ fontSize: '13px', color: '#d4d4d8', margin: 0, lineHeight: 1.5 }}>
                {project.impact}
              </p>
            </div>

            {/* Technology Tags Cluster */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '8px' }}>
              {project.skills.map((skill, i) => (
                <span 
                  key={i} 
                  style={{ display: 'inline-block', padding: '4px 12px', fontSize: '12px', fontWeight: 600, backgroundColor: '#141416', color: '#e4e4e7', borderRadius: '6px', border: '1px solid #27272a' }}
                >
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