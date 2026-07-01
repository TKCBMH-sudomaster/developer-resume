import Link from 'next/link';

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Gallagher",
      location: "Rolling Meadows, IL",
      role: "Enterprise Support Technical Analyst Senior",
      period: "Jun 2025 – Present",
      type: "Full-Time",
      bullets: [
        "Deliver executive-level IT support to VIP users, ensuring minimal disruptions through proactive issue resolution.",
        "Support seamless operation of IT systems for executive meetings and high-profile events.",
        "Manage hardware lifecycle for VIP and enterprise end users, including device reimaging, upgrades, and rapid asset turnarounds.",
        "Identify and escalate recurring system issues to management, enhancing Service Desk efficiency.",
        "Configure new user setups and conduct VIP training on collaboration tools and IT best practices.",
        "Collaborate with multi-functional IT teams to streamline workflows and contribute to continuous service improvements.",
        "Provide clear, user-friendly technical communication to both IT and non-technical executive users, enhancing support experiences."
      ],
      tags: ["VIP Support", "Executive IT", "Hardware Lifecycle", "Problem Management", "M365", "Zscaler"]
    },
    {
      company: "Medcor",
      location: "McHenry, IL",
      role: "IT Support Specialist",
      period: "Oct 2021 – May 2025",
      type: "Full-Time",
      bullets: [
        "Served as the first point of contact for the IT Department, triaging callers to the appropriate support teams and resolving issues within designated timeframes.",
        "Managed the support queue, successfully meeting strict SLAs by promptly completing technical tickets and documenting resolutions.",
        "Resolved a wide range of technical issues, including password resets, multi-factor authentication (MFA) troubleshooting, hardware repairs/replacements, and software malfunctions.",
        "Supported a large-scale transition from local Active Directory to Azure/Entra ID by backing up user data in OneDrive, performing workgroup changes, and installing domain join packages to ensure minimal disruption.",
        "Utilized diagnostic and security tools (e.g., Rapid7, CrowdStrike, FortiToken Mobile, FortiClient VPN, SCCM Configuration Manager, RingCentral, Delinea Secret Server) to identify and mitigate performance or access anomalies.",
        "Deployed and prepared new and used hardware systems—primarily Lenovo, with select HP, Panasonic, and iOS deployments—for enterprise end-users."
      ],
      tags: ["Azure / Entra ID", "Active Directory", "SCCM", "CrowdStrike", "MFA", "VPN Troubleshooting"]
    },
    {
      company: "Smart Sky Network, LLC / Tech USA, Inc.",
      location: "Great Lakes and Midwest Regions",
      role: "Network Field Technician / Field Engineer I",
      period: "Jun 2019 – Sep 2021",
      type: "Full-Time & Contract",
      bullets: [
        "Oversaw the installation, configuration, and infrastructure maintenance of 60+ wireless telecommunications sites across a 700-mile regional radius, enabling advanced ground-to-ground aviation systems.",
        "Conducted on-site and remote diagnostics using secure terminal terminal utilities (e.g., MobaXterm for SSH/Telnet), resolving complex hardware or network infrastructure layout errors.",
        "Administered and maintained diverse edge network components (Baseband Units, Cisco Routers, Network Control Units, fiber/power enclosures, rectifiers, GPS splitters), ensuring rock-solid link connectivity.",
        "Leveraged Field Force applications for real-time ticket tracking and asset inventory metrics, maintaining precise documentation of over $1M in field infrastructure hardware.",
        "Provided 24/7 on-call tier support windows, coordinating closely with project stakeholders and engineering partners to mitigate core system downtime."
      ],
      tags: ["Cisco Routing", "SSH / Telnet", "Fiber Optics", "Aviation Systems", "Asset Management"]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Page Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
          Professional Experience
        </h2>
        <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>
          A history of enterprise infrastructure support, network engineering, and cross-functional technology leadership. Successfully completed over 3,000+ support tickets and 900+ service tasks.
        </p>
      </div>

      {/* Experience Timeline Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '32px', 
              backgroundColor: '#09090b', 
              border: '1px solid #27272a', 
              borderRadius: '16px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px' 
            }}
          >
            {/* Metadata Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                  {exp.role}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '14px' }}>
                  <span style={{ fontWeight: 600, color: '#f97316' }}>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', textAlign: 'right' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>{exp.period}</span>
                <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: '#141416', color: '#71717a', padding: '2px 8px', borderRadius: '4px', border: '1px solid #1e1e20', textTransform: 'uppercase' }}>
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Bullet Accomplishments */}
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#d4d4d8', fontSize: '14px', lineHeight: '1.6' }}>
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {/* Skill Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '12px', borderTop: '1px solid #1e1e20' }}>
              {exp.tags.map((tag, i) => (
                <span 
                  key={i} 
                  style={{ 
                    display: 'inline-block', 
                    padding: '4px 10px', 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    backgroundColor: '#000000', 
                    color: '#a1a1aa', 
                    borderRadius: '6px', 
                    border: '1px solid #1e1e20' 
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}