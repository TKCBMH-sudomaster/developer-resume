"use client";

import React, { useState } from 'react';

export default function SkillsPage() {
  // Available filter categories
  const categories = [
    "All",
    "Front-End / Back-End",
    "Enterprise Systems",
    "Infrastructure Management",
    "Cloud Operations",
    "IT Support"
  ];

  // Track currently selected category
  const [activeCategory, setActiveCategory] = useState("All");

  // All master skills tagged by their relevant sections
  const skillsData = [
    { name: "Next.js Framework & React", tags: ["Front-End / Back-End"] },
    { name: "PostgreSQL / Supabase Relational DB", tags: ["Front-End / Back-End"] },
    { name: "Scripting: Python, PowerShell, Basic C#", tags: ["Front-End / Back-End", "Cloud Operations"] },
    { name: "Git & GitHub Lifecycle Management", tags: ["Front-End / Back-End"] },
    
    { name: "Azure / Active Directory / Microsoft Entra ID", tags: ["Enterprise Systems", "Cloud Operations"] },
    { name: "Microsoft Intune (Mobile Device Management)", tags: ["Enterprise Systems", "Infrastructure Management"] },
    { name: "Ivanti and BMC Helix Ticketing & Asset Management Systems", tags: ["Enterprise Systems", "IT Support"] },
    { name: "Microsoft 365 Enterprise Application Suites", tags: ["Enterprise Systems", "IT Support"] },
    
    { name: "AWS & Windows Server Administration", tags: ["Infrastructure Management", "Cloud Operations"] },
    { name: "Modems, Routers, Switches, Cables", tags: ["Infrastructure Management"] },
    { name: "Cisco Routers, Switches, & Packet Tracer", tags: ["Infrastructure Management"] },
    { name: "Fiber Optic & Coaxial Cable Telecommunications", tags: ["Infrastructure Management"] },
    { name: "Baseband & Power Distribution Units (PDUs)", tags: ["Infrastructure Management"] },
    
    { name: "AWS Cloud Quest: Solutions Architect Certification", tags: ["Cloud Operations"] },
    { name: "AWS Cloud Quest: Security Certification", tags: ["Cloud Operations"] },
    { name: "AWS Cloud Quest: Networking Certification", tags: ["Cloud Operations"] },
    { name: "AWS Cloud Quest: Cloud Practitioner Certification", tags: ["Cloud Operations"] },
    { name: "Virtualization (AWS & Citrix)", tags: ["Cloud Operations", "Infrastructure Management"] },
    { name: "Zscaler / Ivanti / FortiClient VPN & Forti Token Authenticators", tags: ["Cloud Operations", "Infrastructure Management"] },
    
    { name: "Executive/ VIP End User Support", tags: ["IT Support"] },
    { name: "Software & Hardware Troubleshooting", tags: ["IT Support"] },
    { name: "Computer Systems Troubleshooting", tags: ["IT Support"] },
    { name: "HP, Brother, Ricoh, Xerox Printer/Scanner Troubleshooting", tags: ["IT Support"] },
    { name: "Remote Desktop Software (LogMeIn, Microsoft Remote Desktop, Putty)", tags: ["IT Support", "Infrastructure Management"] },
    { name: "IT Security Foundations / CSI Event Logs", tags: ["IT Support", "Cloud Operations"] },
    { name: "Assisting in Project Management", tags: ["IT Support"] }
  ];

  // Filter skills based on chosen tab
  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter(skill => skill.tags.includes(activeCategory));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Page Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
          Technical Skills
        </h2>
        <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>
          Select a category to filter technical capabilities across core engineering disciplines.
        </p>
      </div>

      {/* Interactive Category Selector Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: '8px', borderBottom: '1px solid #27272a' }}>
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: isActive ? '#f97316' : '#09090b',
                color: isActive ? '#000000' : '#a1a1aa',
                border: isActive ? '1px solid #f97316' : '1px solid #27272a',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                outline: 'none'
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Filtered Tag Grid Container */}
      <div style={{ padding: '32px', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px', minHeight: '200px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {filteredSkills.map((skill, index) => {
            const isAwsQuest = skill.name.includes("AWS Cloud Quest");
            return (
              <span 
                key={index} 
                style={{ 
                  display: 'inline-block', 
                  padding: '8px 16px', 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  backgroundColor: isAwsQuest ? '#271c14' : '#000000', 
                  color: isAwsQuest ? '#f97316' : '#e4e4e7', 
                  borderRadius: '8px', 
                  border: isAwsQuest ? '1px solid #f97316' : '1px solid #1e1e20'
                }}
              >
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>

    </div>
  );
}