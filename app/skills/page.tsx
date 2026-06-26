'use client';

import { useState } from 'react';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const technicalSkills = [
    { name: "Next.js / React Framework", category: "frontend", level: "Advanced", detail: "Developing high-performance user portals and scalable web interfaces for consumer engines." },
    { name: "Tailwind CSS Layouts", category: "frontend", level: "Advanced", detail: "Creating highly responsive, mobile-optimized pixel-perfect digital layouts." },
    { name: "SQL Server / Relational Databases", category: "backend", level: "Intermediate", detail: "Managing database tables, structuring complex queries, and organizing application schemas." },
    { name: "Supabase Architecture", category: "backend", level: "Intermediate", detail: "Integrating cloud backend databases, fast data streams, and secure user authorization protocols." },
    { name: "REST APIs & JSON Handling", category: "backend", level: "Advanced", detail: "Connecting frontend interfaces securely to internal microservices and external web platforms." },
    { name: "System Workflow Automation", category: "automation", level: "Advanced", detail: "Writing precise server routines to systematically parse raw data, replacing manual handling errors." },
    { name: "GitHub Repository Engineering", category: "cloud", level: "Advanced", detail: "Structuring clean version history pipelines, collaborative codebase merges, and deployment sanity tracking." },
    { name: "Vercel Cloud Optimization", category: "cloud", level: "Intermediate", detail: "Provisioning zero-downtime production deployment branches and managing secure cloud environment tokens." }
  ];

  const displayedSkills = activeTab === 'all'
    ? technicalSkills
    : technicalSkills.filter(s => s.category === activeTab);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase">Technical Competency Index</h2>
        <p className="text-slate-400 mt-1 text-sm">Select a technical tier below to isolate specific environment skill disciplines.</p>
      </div>

      {/* Navigation Filter Controls */}
      <div className="flex flex-wrap gap-2 p-2 bg-slate-900 border border-slate-800 rounded-2xl max-w-max">
        {['all', 'frontend', 'backend', 'automation', 'cloud'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold capitalize tracking-wider transition-all cursor-pointer ${
              activeTab === tab
                ? 'bg-emerald-400 text-black shadow-md shadow-orange-500/10'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab === 'all' ? 'View All Competencies' : `${tab}`}
          </button>
        ))}
      </div>

      {/* Structured Competencies Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedSkills.map((skill, idx) => (
          <div key={idx} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
            <div className="flex justify-between items-center gap-4">
              <span className="font-extrabold text-white text-sm tracking-wide">{skill.name}</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-black text-emerald-400 border border-slate-800 uppercase tracking-widest">
                {skill.level}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{skill.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}