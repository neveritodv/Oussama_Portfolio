'use client';

import React from 'react';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { MapPin, Mail, Phone, Globe, Code2, Cpu, Sparkles, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const bioText = PORTFOLIO_DATA.profile.bio + " " + PORTFOLIO_DATA.profile.longBio;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Floating Developer Tech Badges in Corners */}
      <div className="absolute top-[6%] left-[2%] sm:left-[3%] md:left-[5%] z-10 pointer-events-none select-none hidden sm:block">
        <FadeIn delay={0.1} x={-50} y={0} duration={0.9}>
          <div className="p-4 rounded-2xl bg-[#14151B]/90 backdrop-blur-md border border-[#00E5FF]/30 shadow-[0_10px_30px_rgba(0,229,255,0.15)] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF]">
              <Code2 size={22} />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono text-[#00E5FF] tracking-wider block">Full Stack</span>
              <span className="text-xs font-bold text-white block">React &amp; Next.js 15</span>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-[10%] left-[2%] sm:left-[3%] md:left-[5%] z-10 pointer-events-none select-none hidden sm:block">
        <FadeIn delay={0.25} x={-50} y={0} duration={0.9}>
          <div className="p-4 rounded-2xl bg-[#14151B]/90 backdrop-blur-md border border-[#B600A8]/30 shadow-[0_10px_30px_rgba(182,0,168,0.15)] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#B600A8]/10 border border-[#B600A8]/20 text-[#B600A8]">
              <Cpu size={22} />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono text-[#B600A8] tracking-wider block">Mobile Engine</span>
              <span className="text-xs font-bold text-white block">Flutter &amp; WebSockets</span>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute top-[6%] right-[2%] sm:right-[3%] md:right-[5%] z-10 pointer-events-none select-none hidden sm:block">
        <FadeIn delay={0.15} x={50} y={0} duration={0.9}>
          <div className="p-4 rounded-2xl bg-[#14151B]/90 backdrop-blur-md border border-emerald-500/30 shadow-[0_10px_30px_rgba(16,185,129,0.15)] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Sparkles size={22} />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono text-emerald-400 tracking-wider block">Backend APIs</span>
              <span className="text-xs font-bold text-white block">Laravel 12 &amp; Node.js</span>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-[10%] right-[2%] sm:right-[3%] md:right-[5%] z-10 pointer-events-none select-none hidden sm:block">
        <FadeIn delay={0.3} x={50} y={0} duration={0.9}>
          <div className="p-4 rounded-2xl bg-[#14151B]/90 backdrop-blur-md border border-amber-500/30 shadow-[0_10px_30px_rgba(245,158,11,0.15)] flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <CheckCircle size={22} />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono text-amber-400 tracking-wider block">Database &amp; Cloud</span>
              <span className="text-xs font-bold text-white block">MySQL, MongoDB, Firebase</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center z-20 text-center max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <span className="text-xs sm:text-sm uppercase font-mono tracking-widest text-[#00E5FF] mb-2 block">
            BACKGROUND &amp; PHILOSOPHY
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        <div className="h-8 sm:h-12 md:h-14" />

        {/* Character-by-character animated paragraph */}
        <AnimatedText text={bioText} />

        <div className="h-12 sm:h-16 md:h-20" />

        {/* Metrics Grid */}
        <FadeIn delay={0.2} y={30} className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mx-auto my-6">
            {PORTFOLIO_DATA.stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-[#14151B] border border-[#2B2D38] flex flex-col items-center justify-center text-center group hover:border-[#00E5FF]/50 transition-colors"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white group-hover:text-[#00E5FF] transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-mono text-[#D7E2EA]/70 mt-2 tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Location & Languages Card Bar */}
        <FadeIn delay={0.3} y={30} className="w-full max-w-4xl mx-auto mt-4">
          <div className="p-6 rounded-3xl bg-[#14151B] border border-[#2B2D38] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            {/* Location & Contact details */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm text-white font-medium">
                <MapPin size={18} className="text-[#00E5FF]" />
                <span>Marrakech, Morocco (École Racine)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#D7E2EA]/70">
                <Mail size={16} className="text-[#B600A8]" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
                <span className="text-[#2B2D38]">|</span>
                <Phone size={16} className="text-emerald-400" />
                <span>{PORTFOLIO_DATA.profile.phone}</span>
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-mono text-[#D7E2EA]/60 mr-2 flex items-center gap-1">
                <Globe size={14} /> Languages:
              </span>
              {PORTFOLIO_DATA.profile.languages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#1E202A] text-white border border-white/10"
                >
                  {lang.name} ({lang.level.split(' ')[0]})
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="h-12 sm:h-16" />

        {/* Action Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={onOpenContact} label="Let's Work Together" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
