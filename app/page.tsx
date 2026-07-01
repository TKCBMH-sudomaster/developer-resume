import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingTop: '12px', paddingBottom: '12px' }}>
      
      {/* Hero / Introduction Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#f97316' }}>
          Enterprise Systems & Software Engineering
        </span>
        <h1 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', margin: 0, lineHeight: 1.1 }}>
          Trevor Hunter
        </h1>
        <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.6, margin: 0, maxWidth: '640px' }}>
          Senior IT Technical Analyst specializing in cloud platform infrastructure, enterprise systems management, and secure network engineering. Blending real-world operations with modern full-stack application development.
        </p>
      </div>

      <div style={{ height: '1px', backgroundColor: '#27272a' }} />

      {/* Quick Metrics Dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={{ padding: '20px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>3,000+</div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#71717a', textTransform: 'uppercase', marginTop: '4px' }}>Enterprise Tickets Resolved</div>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>4x</div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#71717a', textTransform: 'uppercase', marginTop: '4px' }}>AWS Cloud Quest Certs</div>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>60+</div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#71717a', textTransform: 'uppercase', marginTop: '4px' }}>Telecom Sites Managed</div>
        </div>
      </div>

      {/* Core Professional Overview Split */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        
        {/* Left Focus: Current Enterprise Footprint */}
        <div style={{ padding: '24px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
            Current Focus
          </h2>
          <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
            Serving as a <strong>Senior Enterprise Support Technical Analyst at Gallagher</strong>, delivering high-tier infrastructure solutions, hardware lifecycle auditing, and technical execution policies within critical executive environments.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {["Microsoft Entra ID", "Zscaler PAA", "Intune MDM", "Windows Server"].map((tech, i) => (
              <span key={i} style={{ fontSize: '11px', fontWeight: 600, backgroundColor: '#000000', color: '#71717a', padding: '2px 8px', borderRadius: '4px', border: '1px solid #1e1e20' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Focus: Systems Automation & Dev */}
        <div style={{ padding: '24px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
            Engineering & Tools
          </h2>
          <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
            Building performance-tuned, independent software solutions to simulate and optimize complex operational pipelines, utilizing reactive state trees and relational cloud architectures.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {["Next.js / React", "Supabase DB", "Python Scripts", "PowerShell"].map((tech, i) => (
              <span key={i} style={{ fontSize: '11px', fontWeight: 600, backgroundColor: '#000000', color: '#71717a', padding: '2px 8px', borderRadius: '4px', border: '1px solid #1e1e20' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Explicit Navigation Cards Footer */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '16px' }}>
        <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#71717a', margin: 0 }}>
          Explore Resume Point of Interest
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '16px', backgroundColor: '#000000', border: '1px solid #1e1e20', borderRadius: '8px', color: '#ffffff', fontWeight: 600, fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <span>View Projects</span>
              <span style={{ color: '#f97316', marginLeft: 'auto' }}>→</span>
            </div>
          </Link>
          <Link href="/skills" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '16px', backgroundColor: '#000000', border: '1px solid #1e1e20', borderRadius: '8px', color: '#ffffff', fontWeight: 600, fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <span>Technical Skills</span>
              <span style={{ color: '#f97316', marginLeft: 'auto' }}>→</span>
            </div>
          </Link>
          <Link href="/experience" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '16px', backgroundColor: '#000000', border: '1px solid #1e1e20', borderRadius: '8px', color: '#ffffff', fontWeight: 600, fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <span>Professional History</span>
              <span style={{ color: '#f97316', marginLeft: 'auto' }}>→</span>
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
}