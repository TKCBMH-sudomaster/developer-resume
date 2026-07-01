'use client';

import { useState } from 'react';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const technicalSkills = [
    { name: "Next.js / React Framework", category: "frontend", level: "Advanced", detail: "Developing high-performance user portals, interactive kiosk modes, and scalable web interfaces." },
    { name: "Tailwind CSS Layouts", category: "frontend", level: "Advanced", detail: "Creating highly responsive, adaptive layouts across custom presentation themes." },
    { name: "Supabase Architecture", category: "backend", level: "Advanced", detail: "Integrating production cloud relational systems, live data stream monitoring, and secure user profiles." },
    { name: "Automated Notification Pipelines", category: "automation", level: "Intermediate", detail: "Building automated event-driven messaging routines and transactional communication scripts." },
    { name: "User Provisioning & Security", category: "automation", level: "Intermediate", detail: "Configuring systematic manual user controls and administrative credential permissions." },
    { name: "REST APIs & JSON Handling", category: "backend", level: "Advanced", detail: "Connecting multiple front-facing portals to isolated relational database objects cleanly." },
    { name: "GitHub Repository Engineering", category: "cloud", level: "Advanced", detail: "Structuring clean version history pipelines, collaborative codebase merges, and branch checking." },
    { name: "Vercel Cloud Optimization", category: "cloud", level: "Intermediate", detail: "Provisioning zero-downtime production deployments tied directly to source control main lines." }
  ];

  const displayedSkills = activeTab === 'all'
    ? technicalSkills
    : technicalSkills.filter(s => s.category === activeTab);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
          Technical Competency Index
        </h2>
        <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>
          Select a technical discipline category below to filter down specialized environment architectures.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '8px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', width: 'max-content', maxWidth: '100%', boxSizing: 'border-box' }}>
        {['all', 'frontend', 'backend', 'automation', 'cloud'].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'capitalize',
                border: isActive ? '1px solid #f97316' : '1px solid transparent',
                backgroundColor: isActive ? '#f97316' : 'transparent',
                color: isActive ? '#000000' : '#a1a1aa',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab === 'all' ? 'All Competencies' : tab}
            </button>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {displayedSkills.map((skill, idx) => (
          <div 
            key={idx} 
            style={{ padding: '24px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '15px', letterSpacing: '-0.01em' }}>
                {skill.name}
              </span>
              <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 8px', backgroundColor: '#000000', color: '#f97316', border: '1px solid rgba(249, 115, 22, 0.3)', borderRadius: '4px', textTransform: 'uppercase' }}>
                {skill.level}
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>
              {skill.detail}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}