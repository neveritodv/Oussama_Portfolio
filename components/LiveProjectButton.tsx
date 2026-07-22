'use client';

import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  url?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Project',
  onClick,
  url,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`
        rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-300
        cursor-pointer whitespace-nowrap
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default LiveProjectButton;
