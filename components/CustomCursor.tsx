'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the inner dot
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  // Fluid physics springs for outer aura ring
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 26 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 26 });

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover]'
        )
      );

      setIsHovered(isInteractive);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Glowing Aura Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 2.4 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovered ? '#00E5FF' : 'rgba(0, 229, 255, 0.4)',
          backgroundColor: isHovered
            ? 'rgba(0, 229, 255, 0.08)'
            : 'rgba(0, 229, 255, 0.02)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 350, damping: 25 },
          opacity: { duration: 0.2 },
        }}
        className="pointer-events-none fixed top-0 left-0 w-9 h-9 rounded-full border border-[#00E5FF]/40 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,229,255,0.25)]"
      />

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.5 : isHovered ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 500, damping: 30 },
          opacity: { duration: 0.15 },
        }}
        className="pointer-events-none fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#4364F7] shadow-[0_0_12px_#00E5FF]"
      />
    </div>
  );
};

export default CustomCursor;
