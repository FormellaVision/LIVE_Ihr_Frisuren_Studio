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
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  'diagonal-up-left': { x: 36, y: 28 },
  'diagonal-up-right': { x: -36, y: 28 },
  'diagonal-down-left': { x: 36, y: -28 },
  'diagonal-down-right': { x: -36, y: -28 },
};

export function ScrollAnimationCard({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.5,
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
      ...(hasScale && { scale: 0.94 }),
      ...(hasRotation && { rotate: direction.includes('left') ? 3 : -3 }),
      ...(hasBlur && { filter: 'blur(8px)' }),
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

  const springTransition = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 28,
    mass: 0.7,
    delay,
  };

  const tweenTransition = {
    duration,
    delay,
    ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={hasBlur ? tweenTransition : springTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
