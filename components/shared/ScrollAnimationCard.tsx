'use client';

import { motion, useReducedMotion } from 'framer-motion';
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
  up: { x: 0, y: 20 },
  down: { x: 0, y: -20 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  'diagonal-up-left': { x: 24, y: 20 },
  'diagonal-up-right': { x: -24, y: 20 },
  'diagonal-down-left': { x: 24, y: -20 },
  'diagonal-down-right': { x: -24, y: -20 },
};

export function ScrollAnimationCard({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.45,
  hasScale = true,
  hasRotation = false,
  hasBlur = false,
}: ScrollAnimationCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffsets[direction];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      ...(hasScale && { scale: 0.97 }),
      ...(hasRotation && { rotate: direction.includes('left') ? 2 : -2 }),
      ...(hasBlur && { filter: 'blur(6px)' }),
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

  const transition = {
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
