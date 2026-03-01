'use client';

import { motion } from 'framer-motion';
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
  staggerDelay = 0.1,
  alternateDirections = true,
}: StaggeredCardGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
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
  const direction = alternateDirections && index % 2 === 1 ? 'right' : 'left';
  const offset = direction === 'left' ? 60 : -60;

  const itemVariants = {
    hidden: { opacity: 0, x: offset, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div variants={itemVariants} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}
