'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'h1' | 'h2' | 'p' | 'nav' | 'span';
}

const motionComponents = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  nav: motion.nav,
  span: motion.span,
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
}) => {
  const Component = motionComponents[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
