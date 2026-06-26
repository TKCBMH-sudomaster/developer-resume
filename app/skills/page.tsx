'use client';

import { useState } from 'react';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const technicalSkills = [
    { name: "Next.js / React Framework", category: "frontend", level: "Advanced", detail: "Developing high-performance user portals and modern web interfaces." },
    { name: "Tailwind CSS Layouts", category: "frontend", level: "Advanced", detail: "Creating highly responsive, mobile-optimized digital layouts." },
    { name: "SQL Server / SSMS", category: "backend", level: "Intermediate", detail: "Managing database tables, structuring queries, and organizing relational data." },
    { name: "Supabase Platform", category: "backend", level: "Intermediate", detail: "Integrating cloud databases, backend operations, and secure authentication setups." },
    { name: "REST APIs & JSON", category: "backend", level: "Advanced", detail: "Connecting frontend user interfaces to modern cloud data systems smoothly." },
    { name: "Workflow Automation", category: "automation", level: "Advanced", detail: "Writing efficient software routines to automate data tracking and remove human error." },
    { name: "GitHub Workflows", category: "cloud", level: "Advanced", detail: "Managing source code repositories, code version history, and pipeline integrity." },
    { name: "Vercel Cloud Deployments", category: "cloud", level: "Intermediate", detail: "Hosting web applications using automated continuous delivery streams." }
  ];

  const displayedSkills = activeTab === 'all'
    ? technicalSkills
    : technicalSkills.filter(s => s.category === activeTab);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
        <p className="text-slate-400 mt-1 text-sm">Filter competencies by selecting an operational category below.</p>
      </div>

      {/* Human-Friendly Tab Controls */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/40 border border-slate-800 rounded-xl max-w-max">
        {['all', 'frontend', 'backend', 'automation', 'cloud'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-xs font-medium capitalize transition-all ${
              activeTab === tab
                ? 'bg-emerald-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab === 'all' ? 'Show All Skills' : `${tab} Technologies`}
          </button>
        ))}
      </div>

      {/* Structured Grid Container */}
      <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedSkills.map((skill, idx) => (
            <div key={idx} className="p-4 bg-slate-900/30 border border-slate-800/60 rounded-xl space-y-2">
              <div className="flex justify-between items-center gap-2">
                <span className="font-bold text-slate-200 text-sm">{skill.name}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700 uppercase tracking-wider">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{skill.detail}</p>
              <div className="text-[10px] text-slate-500 font-mono uppercase pt-1 tracking-wider">
                Category: {skill.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}