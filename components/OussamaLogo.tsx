'use client';

import React, { useState } from 'react';

interface OussamaLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const OussamaLogo: React.FC<OussamaLogoProps> = ({
  className = '',
  showSubtitle = false,
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  const logoSizes = {
    sm: 'h-12 sm:h-14',
    md: 'h-20 sm:h-24 md:h-28',
    lg: 'h-28 sm:h-32 md:h-36',
    xl: 'h-36 sm:h-40 md:h-48',
  };

  return (
    <div className={`flex items-center group ${className}`}>
      {!imageError ? (
        <img
          src="/assets/oussama_logo.png"
          alt="OUSSAMA DEV Logo"
          onError={() => setImageError(true)}
          className={`${logoSizes[size]} w-auto object-contain rounded-xl drop-shadow-[0_4px_20px_rgba(0,229,255,0.2)] group-hover:scale-105 transition-transform duration-300`}
        />
      ) : (
        /* Vector SVG fallback matching Oussama Dev emblem if image fails */
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center p-2 rounded-xl bg-gradient-to-tr from-[#0052D4] via-[#4364F7] to-[#6FB1FC] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M10 11L5 16L10 21"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 11L27 16L22 21"
                stroke="#00E5FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 22L19 10M19 10H14M19 10V15"
                stroke="#00E5FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {showSubtitle && (
            <div className="flex flex-col">
              <div className="flex items-center text-sm sm:text-base font-black tracking-wider uppercase leading-none text-white">
                OUSSAMA<span className="text-[#00E5FF] ml-1">DEV</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OussamaLogo;
