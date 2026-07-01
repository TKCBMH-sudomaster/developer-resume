import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Full-Stack Meal Planner Application",
      role: "Independent Software Build (Personal Project)",
      description: "Engineered a responsive, end-to-end nutritional planning utility featuring interactive menu construction, dynamic macro-nutrient calculation trees, and persistent user data structures.",
      impact: "Combines fast cloud computing with modern UI state management to process custom calculations smoothly without client-side rendering lag.",
      skills: ["Next.js Framework", "PostgreSQL / Supabase", "State Management", "REST API Development"]
    },
    {
      title: "IT Helpdesk Digital Queue System (Solutions Bar)",
      role: "Independent Software Build (Personal Project)",
      description: "Architected a multi-interface technical support tool modeled after enterprise walk-up environments. Features a secure technician management portal, a high-traffic user check-in kiosk system, and a real-time monitor queue dashboard.",
      impact: "Simulates an enterprise-grade solution to eliminate operational support bottlenecks by unifying live metrics into a centralized schema.",
      skills: ["Supabase Relational DB", "Kiosk Mode UI Layouts", "Live Monitoring Dashboards", "Relational Database Design"]
    },
    {
      title: "The Angler Application",
      role: "Independent Software Build (Personal Project)",
      description: "Designed and engineered a tracking utility featuring a secure backend engine with manual user provisioning and automated event-driven email verification pipelines.",
      impact: "Successfully builds a clean, tactical user interface adapted to modern data tracking requirements.",
      skills: ["Notification Pipelines", "User Provisioning Flows", "Theme Configuration", "Event Auditing"]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
          Independent Engineering Builds
        </h2>
        <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>
          A review of software systems engineered in my personal development environment to solve practical infrastructure and data problems.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{ padding: '32px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316' }}>
                {project.role}
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                {project.title}
              </h3>
            </div>

            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              {project.description}
            </p>
            
            <div style={{ padding: '16px', backgroundColor: '#000000', border: '1px solid #1e1e20', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f97316' }}>
                Technical Execution Profile
              </span> 
              <p style={{ fontSize: '13px', color: '#d4d4d8', margin: 0, lineHeight: 1.5 }}>
                {project.impact}
              </p>
            </div>

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