'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  // Calculate total characters to map range
  const totalChars = text.length;

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {words.map((word, wIdx) => {
        const wordChars = word.split('');
        const wordElement = (
          <span key={`w-${wIdx}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char, cIdx) => {
              const charIdx = globalCharIndex;
              globalCharIndex++;
              const start = charIdx / totalChars;
              const end = Math.min((charIdx + 1) / totalChars, 1);

              return (
                <Character
                  key={`c-${wIdx}-${cIdx}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for space after word
        globalCharIndex++;

        return (
          <React.Fragment key={`frag-${wIdx}`}>
            {wordElement}
            {wIdx < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
