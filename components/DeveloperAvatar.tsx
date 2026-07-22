'use client';

import React, { useState } from 'react';

interface DeveloperAvatarProps {
  className?: string;
}

export const DeveloperAvatar: React.FC<DeveloperAvatarProps> = ({ className = '' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00E5FF]/20 via-[#B600A8]/30 to-[#7621B0]/20 blur-3xl opacity-70 animate-pulse pointer-events-none" />

      {/* Frame Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {!imageError ? (
          <div className="relative group rounded-3xl p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-[#00E5FF]/20 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            <img
              src="/assets/oussama_portrait.jpg"
              alt="Oussama Moujane - Full Stack & Mobile Developer"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[480px] object-cover rounded-[22px] pointer-events-none select-none transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Subtle bottom gradient overlay for smooth integration */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0C0C]/80 to-transparent pointer-events-none rounded-b-[22px]" />
          </div>
        ) : (
          /* High quality fallback SVG graphic for Oussama Dev if network fails */
          <div className="w-[320px] h-[380px] sm:w-[400px] sm:h-[460px] rounded-[40px] bg-gradient-to-b from-[#181920] to-[#0D0E12] border-2 border-[#B600A8]/40 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#B600A8]/20 rounded-full blur-2xl" />
            
            <div className="flex justify-between items-center z-10">
              <span className="text-xs uppercase font-mono tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                Full Stack & Mobile
              </span>
              <span className="text-xs font-mono text-[#D7E2EA]/60">MARRAKECH 🇲🇦</span>
            </div>

            <div className="text-center my-auto z-10 space-y-3">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#18011F] via-[#B600A8] to-[#7621B0] p-0.5 flex items-center justify-center shadow-xl">
                <div className="w-full h-full bg-[#0C0C0C] rounded-[22px] flex items-center justify-center font-black text-2xl text-white">
                  OM
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">Oussama Moujane</h3>
              <p className="text-xs text-[#D7E2EA]/80 font-mono">React • Laravel • Flutter • Node.js</p>
            </div>

            <div className="flex justify-between items-center text-[10px] text-[#D7E2EA]/50 font-mono pt-4 border-t border-white/10 z-10">
              <span>STATUS: AVAILABLE FOR HIRE</span>
              <span>2026 ED</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeveloperAvatar;
