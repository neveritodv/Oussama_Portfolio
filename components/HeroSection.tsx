'use client';

import React from 'react';
import ContactButton from './ContactButton';
import Magnet from './Magnet';
import FadeIn from './FadeIn';
import DeveloperAvatar from './DeveloperAvatar';
import OussamaLogo from './OussamaLogo';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenCV?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenCV }) => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', onClick: onOpenContact },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <header className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {/* Brand Logo */}
          <a href="#">
            <OussamaLogo size="md" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.1rem] hover:text-[#00E5FF] transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.1rem] hover:text-[#00E5FF] transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Mobile menu / Quick Hire button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenContact}
              className="lg:hidden text-xs uppercase font-medium tracking-wider px-4 py-2 rounded-full border border-[#D7E2EA]/30 text-white hover:bg-white/10"
            >
              Hire Me
            </button>
            <ContactButton onClick={onOpenContact} label="Contact" className="hidden sm:inline-block scale-90" />
          </div>
        </header>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden text-center flex-1 flex flex-col items-center justify-center relative my-4 sm:my-8 px-4">
        {/* Subtle background badge */}
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#181920] border border-[#2B2D38] mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#D7E2EA]">
              Available for Full-Time & Freelance Projects • Marrakech 🇲🇦
            </span>
          </div>
        </FadeIn>

        {/* Main Massive Title */}
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14.5vw] select-none">
            Oussama Moujane
          </h1>
        </FadeIn>

        {/* Developer Subtitle Tagline */}
        <FadeIn delay={0.25} y={20} className="mt-2 sm:mt-3">
          <p className="text-xs sm:text-base md:text-xl font-mono uppercase tracking-[0.25em] text-[#00E5FF]">
            Full Stack &amp; Mobile Developer
          </p>
        </FadeIn>

        {/* Hero Portrait with Magnet Effect */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
          <FadeIn delay={0.4} y={30} className="w-full flex justify-center">
            <Magnet
              padding={120}
              strength={3.5}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="w-full"
            >
              <DeveloperAvatar />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 gap-4">
        {/* Left Bio Summary */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-center sm:text-left max-w-[280px] sm:max-w-[280px] md:max-w-[320px]"
            style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.1rem)' }}
          >
            Crafting high-performance web applications, cross-platform mobile solutions, and scalable backends.
          </p>
        </FadeIn>

        {/* Core Tech Stack Badges */}
        <FadeIn delay={0.45} y={20} className="hidden md:flex items-center space-x-2 text-xs font-mono text-[#D7E2EA]/70">
          <span className="px-3 py-1 rounded-full bg-[#16171E] border border-white/10">React 19</span>
          <span className="px-3 py-1 rounded-full bg-[#16171E] border border-white/10">Laravel 12</span>
          <span className="px-3 py-1 rounded-full bg-[#16171E] border border-white/10">Flutter</span>
          <span className="px-3 py-1 rounded-full bg-[#16171E] border border-white/10">Node.js</span>
        </FadeIn>

        {/* Right CTA Button */}
        <FadeIn delay={0.5} y={20} className="flex items-center space-x-3">
          <ContactButton onClick={onOpenContact} label="Let's Connect" />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
