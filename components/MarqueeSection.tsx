'use client';

import React, { useRef, useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

// Generate project preview images & screenshots
const projectPreviews = PORTFOLIO_DATA.projects.map((p) => ({
  title: p.title,
  category: p.category,
  image: p.imageCol1,
  tech: p.techStack.slice(0, 3).join(' • '),
}));

const projectPreviewsRow2 = PORTFOLIO_DATA.projects.map((p) => ({
  title: p.title,
  category: p.category,
  image: p.imageCol3,
  tech: p.techStack.slice(0, 3).join(' • '),
}));

// Tripled lists for infinite continuous scroll
const row1Tripled = [...projectPreviews, ...projectPreviews, ...projectPreviews];
const row2Tripled = [...projectPreviewsRow2, ...projectPreviewsRow2, ...projectPreviewsRow2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setOffset(currentOffset);
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden w-full select-none"
    >
      {/* Section Sub-header */}
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center border-b border-white/10 pb-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#00E5FF]">
            FEATURED PRODUCTIONS &amp; CASE STUDIES
          </span>
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-tight mt-1">
            Real-World Software Portfolio
          </h2>
        </div>
        <span className="text-xs font-mono text-[#D7E2EA]/60 mt-2 sm:mt-0">
          SWIPE OR SCROLL TO EXPLORE
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="group relative w-[280px] h-[180px] sm:w-[340px] sm:h-[220px] md:w-[400px] md:h-[250px] shrink-0 rounded-2xl overflow-hidden bg-[#181920] border border-[#2B2D38] shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] px-2 py-0.5 rounded bg-black/50 border border-[#00E5FF]/30 w-max">
                  {item.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight mt-1 truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] font-mono text-[#D7E2EA]/70 truncate">{item.tech}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="group relative w-[280px] h-[180px] sm:w-[340px] sm:h-[220px] md:w-[400px] md:h-[250px] shrink-0 rounded-2xl overflow-hidden bg-[#181920] border border-[#2B2D38] shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B600A8] px-2 py-0.5 rounded bg-black/50 border border-[#B600A8]/30 w-max">
                  {item.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight mt-1 truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] font-mono text-[#D7E2EA]/70 truncate">{item.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
