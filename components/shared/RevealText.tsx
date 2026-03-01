'use client';

import { motion } from 'framer-motion';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

export function RevealText({
  children,
  className = '',
  delay = 0,
  direction = 'left',
}: RevealTextProps) {
  const directionOffset = {
    left: { x: -30 },
    right: { x: 30 },
    top: { y: -30 },
    bottom: { y: 30 },
  };

  const offset = directionOffset[direction];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`inline-block ${className}`}
    >
      {children.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          transition={{ duration: 0.4 }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
