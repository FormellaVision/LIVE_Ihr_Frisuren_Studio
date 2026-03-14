'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredCardGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  alternateDirections?: boolean;
}

export function StaggeredCardGrid({
  children,
  className = '',
  staggerDelay = 0.08,
  alternateDirections = true,
}: StaggeredCardGridProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredCardItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  alternateDirections?: boolean;
}

export function StaggeredCardItem({
  children,
  className = '',
  index = 0,
  alternateDirections = true,
}: StaggeredCardItemProps) {
  const xOffset = alternateDirections
    ? index % 2 === 1 ? -40 : 40
    : 0;

  const itemVariants = {
    hidden: { opacity: 0, x: xOffset, y: xOffset === 0 ? 24 : 0, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 28,
        mass: 0.7,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
