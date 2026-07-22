'use client';

import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
      }}
      className={`
        relative rounded-full text-white font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        outline outline-2 outline-white -outline-offset-[3px]
        hover:scale-105 active:scale-95 transition-all duration-300
        cursor-pointer whitespace-nowrap z-20
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default ContactButton;
