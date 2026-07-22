'use client';

import React from 'react';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-[#0C0C0C] py-20 sm:py-28 px-5 sm:px-8 md:px-10 text-[#D7E2EA] relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center">
          <span className="text-xs uppercase font-mono tracking-widest text-[#00E5FF] mb-2 block">
            CAREER &amp; FORMATION TIMELINE
          </span>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 130px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-[#2B2D38] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.15} y={30}>
              <div className="relative group">
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-0.5 w-10 h-10 rounded-2xl bg-[#181920] border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-lg group-hover:scale-110 group-hover:bg-[#00E5FF] group-hover:text-black transition-all">
                  {exp.type.includes('PFE') || exp.type.includes('Formation') ? (
                    <GraduationCap size={18} />
                  ) : (
                    <Briefcase size={18} />
                  )}
                </div>

                {/* Card */}
                <div className="bg-[#14151B] border border-[#2B2D38] rounded-3xl p-6 sm:p-8 hover:border-[#00E5FF]/40 transition-colors shadow-xl">
                  {/* Top Meta Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8]">
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-tight mt-0.5">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[#00E5FF]">{exp.company}</p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-[#D7E2EA]/60 space-y-1">
                      <span className="flex items-center space-x-1.5 text-white">
                        <Calendar size={14} className="text-emerald-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <MapPin size={14} className="text-[#B600A8]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2.5 my-4">
                    {exp.description.map((bullet, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#D7E2EA]/90">
                        <CheckCircle2 size={16} className="text-[#00E5FF] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Used Pills */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-[#1D1F2A] text-[11px] font-mono text-white border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
