'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Code, Server, Smartphone, Database, Cpu, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...PORTFOLIO_DATA.hardSkills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.hardSkills
      : PORTFOLIO_DATA.hardSkills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code size={20} className="text-[#00E5FF]" />;
      case 'Web Development':
        return <Cpu size={20} className="text-[#B600A8]" />;
      case 'Mobile & Desktop':
        return <Smartphone size={20} className="text-emerald-400" />;
      case 'Backend & Frameworks':
        return <Server size={20} className="text-amber-400" />;
      case 'Databases & Cloud':
        return <Database size={20} className="text-indigo-400" />;
      default:
        return <Code size={20} className="text-[#00E5FF]" />;
    }
  };

  return (
    <section id="skills" className="bg-[#0C0C0C] py-20 sm:py-28 px-5 sm:px-8 md:px-10 text-[#D7E2EA] relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center">
          <span className="text-xs uppercase font-mono tracking-widest text-[#00E5FF] mb-2 block">
            TECHNICAL MASTERY &amp; TOOLKIT
          </span>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 120px)' }}
          >
            Hard Skills
          </h2>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1} y={20} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-bold shadow-lg shadow-[#B600A8]/20 scale-105'
                  : 'bg-[#181920] text-[#D7E2EA]/70 border border-[#2B2D38] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skillGroup, index) => (
            <FadeIn key={skillGroup.category} delay={index * 0.1} y={30}>
              <div className="h-full rounded-3xl bg-[#14151B] border border-[#2B2D38] p-6 flex flex-col justify-between hover:border-[#00E5FF]/40 transition-all duration-300 group">
                <div>
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                    <div className="p-3 rounded-2xl bg-[#1F212A] border border-white/5">
                      {getCategoryIcon(skillGroup.category)}
                    </div>
                    <h3 className="text-lg font-bold uppercase text-white tracking-tight group-hover:text-[#00E5FF] transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl bg-[#1C1E26] text-xs font-mono text-[#D7E2EA] border border-[#2A2D3A] hover:bg-[#252834] hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#D7E2EA]/50 uppercase">
                  <span>Proficiency: High</span>
                  <span>{skillGroup.items.length} Techs</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Soft Skills Section Banner */}
        <FadeIn delay={0.3} y={30} className="mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-[#18011F] via-[#1C142A] to-[#111A2E] border border-[#302142] p-8 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B600A8]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8]">
                  METHODOLOGY &amp; MINDSET
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
                  Soft Skills &amp; Execution Strength
                </h3>
                <p className="text-sm text-[#D7E2EA]/80 mt-2 leading-relaxed">
                  Engineered with an emphasis on adaptability, clear technical communication, and autonomous problem-solving across cross-functional engineering teams.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 max-w-lg">
                {PORTFOLIO_DATA.softSkills.map((softSkill) => (
                  <div
                    key={softSkill}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-[#0C0C0C]/80 border border-white/10 text-xs font-medium text-white shadow"
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{softSkill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SkillsSection;
