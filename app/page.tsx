import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      
      {/* Hero Header Card with Vivid Tactical Orange Accent Styling */}
      <section style={{ padding: '40px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', fontSize: '11px', fontWeight: 700, backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#f97316', border: '1px solid rgba(249, 115, 22, 0.3)', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#f97316', borderRadius: '50%', display: 'inline-block' }} />
            STATUS: ACTIVE_AVAILABILITY
          </div>
        </div>
        
        <h1 style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff', margin: 0, lineHeight: 1.15 }}>
          Systems Optimization & <br />Full-Stack Engineer
        </h1>
        <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.6, maxWidth: '800px', margin: 0 }}>
          Results-driven technical leader specializing in full-scale web utilities, 
          scalable database architectures, and infrastructure automation. Focused 
          on maximizing operational efficiency and eliminating frictional bottlenecks 
          in complex digital workflows.
        </p>
      </section>

      {/* Primary Engineering Modules Side-by-Side Grid */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>Operational Core Modules</h2>
          <p style={{ color: '#71717a', fontSize: '14px', margin: '4px 0 0 0' }}>Strategic domains of optimization and full-cycle development.</p>
        </div>
        
        {/* Valid Flexible Responsive Card Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          
          {/* Module Card 1 */}
          <div style={{ padding: '28px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316' }}>Core Capability</span>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>Application & Enterprise Architecture</h3>
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>
              Designing and deploying robust, component-driven administrative portals and secure support interfaces integrated seamlessly with modern cloud solutions and verified API structures.
            </p>
          </div>
          
          {/* Module Card 2 */}
          <div style={{ padding: '28px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316' }}>Strategic Focus</span>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>Business Workflow Automation</h3>
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>
              Engineering efficient programmatic routines to process, reconcile, and synchronize complex database records, replacing manual tracking steps with optimized automated data streams.
            </p>
          </div>

        </div>
      </section>

      {/* Action Navigation Controls Panel */}
      <div style={{ padding: '32px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0 }}>Portfolio Execution Controls</h3>
          <p style={{ fontSize: '13px', color: '#71717a', margin: '4px 0 0 0' }}>Launch specific interactive portfolio interface modules for deep technical review.</p>
        </div>
        
        {/* Properly Styled Production Interface Navigation Buttons */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link href="/projects" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', backgroundColor: '#f97316', color: '#000000', fontWeight: 700, fontSize: '14px', padding: '14px 28px', borderRadius: '8px' }}>
            Launch Project Readouts →
          </Link>
          <Link href="/skills" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', backgroundColor: '#000000', color: '#d4d4d8', fontWeight: 700, fontSize: '14px', padding: '14px 28px', borderRadius: '8px', border: '1px solid #27272a' }}>
            Access Competencies Grid →
          </Link>
        </div>
      </div>

    </div>
  );
}