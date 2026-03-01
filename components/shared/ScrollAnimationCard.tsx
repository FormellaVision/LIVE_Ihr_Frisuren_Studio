'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'diagonal-up-left' | 'diagonal-up-right' | 'diagonal-down-left' | 'diagonal-down-right';

interface ScrollAnimationCardProps {
  children: ReactNode;
  className?: string;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  hasScale?: boolean;
  hasRotation?: boolean;
  hasBlur?: boolean;
}

const directionOffsets: Record<AnimationDirection, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  'diagonal-up-left': { x: 60, y: 40 },
  'diagonal-up-right': { x: -60, y: 40 },
  'diagonal-down-left': { x: 60, y: -40 },
  'diagonal-down-right': { x: -60, y: -40 },
};

export function ScrollAnimationCard({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  hasScale = true,
  hasRotation = false,
  hasBlur = false,
}: ScrollAnimationCardProps) {
  const offset = directionOffsets[direction];

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      ...(hasScale && { scale: 0.9 }),
      ...(hasRotation && { rotate: direction.includes('left') ? 3 : -3 }),
      ...(hasBlur && { filter: 'blur(10px)' }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(hasScale && { scale: 1 }),
      ...(hasRotation && { rotate: 0 }),
      ...(hasBlur && { filter: 'blur(0px)' }),
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
