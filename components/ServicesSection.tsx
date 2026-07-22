'use client';

import React from 'react';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10 shadow-2xl"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Sub-header & Heading */}
        <FadeIn delay={0} y={30} className="text-center">
          <span className="text-xs uppercase font-mono tracking-widest text-[#B600A8] mb-2 block font-bold">
            WHAT I BUILD &amp; DELIVER
          </span>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={20}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 group hover:bg-[#0C0C0C]/[0.02] px-2 sm:px-4 rounded-2xl transition-colors">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 group-hover:text-[#B600A8] transition-colors"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Name + Description Stack */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3
                    className="font-bold uppercase text-[#0C0C0C] tracking-tight leading-snug"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-70"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
