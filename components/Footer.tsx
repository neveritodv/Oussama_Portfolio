'use client';

import React from 'react';
import ContactButton from './ContactButton';
import OussamaLogo from './OussamaLogo';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#2B2D38] pt-16 pb-12 px-6 md:px-10 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-12">
        {/* Top Callout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] block mb-2">
              HAVE A PROJECT OR OPEN ROLE?
            </span>
            <h3 className="hero-heading font-black uppercase tracking-tight leading-none text-3xl sm:text-5xl md:text-6xl">
              Let&apos;s Build Together
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-2 max-w-lg">
              Specialized in Full Stack Web, Cross-Platform Mobile Apps, and Scalable Backend Engineering.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <ContactButton onClick={onOpenContact} label="Get In Touch" />
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-[#181920] border border-[#2B2D38] text-white hover:border-[#00E5FF] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Quick Contacts Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#2B2D38]">
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="p-4 rounded-2xl bg-[#14151B] border border-[#2B2D38] hover:border-[#00E5FF]/40 transition-colors flex items-center space-x-3 group"
          >
            <div className="p-2.5 rounded-xl bg-[#1F212A] text-[#00E5FF] group-hover:scale-110 transition-transform">
              <Mail size={18} />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-[#D7E2EA]/50 uppercase block">Email Address</span>
              <span className="text-xs font-mono text-white truncate block">{PORTFOLIO_DATA.profile.email}</span>
            </div>
          </a>

          <a
            href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-[#14151B] border border-[#2B2D38] hover:border-emerald-500/40 transition-colors flex items-center space-x-3 group"
          >
            <div className="p-2.5 rounded-xl bg-[#1F212A] text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone size={18} />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-[#D7E2EA]/50 uppercase block">Phone / WhatsApp</span>
              <span className="text-xs font-mono text-white truncate block">{PORTFOLIO_DATA.profile.phone}</span>
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-[#14151B] border border-[#2B2D38] flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-[#1F212A] text-[#B600A8]">
              <MapPin size={18} />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-[#D7E2EA]/50 uppercase block">Location</span>
              <span className="text-xs font-mono text-white truncate block">{PORTFOLIO_DATA.profile.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#2B2D38] text-xs text-[#D7E2EA]/60 font-mono">
          <div className="flex items-center gap-3">
            <OussamaLogo size="sm" showSubtitle={false} />
            <p>© {new Date().getFullYear()} Oussama Moujane. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 items-center">
            <a href="https://github.com/moujane1023" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Github size={14} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
