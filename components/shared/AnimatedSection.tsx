'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    direction?: 'up' | 'left' | 'right' | 'down' | 'diagonal-up-left' | 'diagonal-up-right' | 'diagonal-down-left' | 'diagonal-down-right';
    delay?: number;
    duration?: number;
    className?: string;
    as?: 'div' | 'section';
    hasScale?: boolean;
    hasRotation?: boolean;
    easing?: 'easeOut' | 'easeInOut' | 'cubic' | 'spring';
}

const directionOffsets = {
    up: { x: 0, y: 28 },
    down: { x: 0, y: -28 },
    left: { x: -36, y: 0 },
    right: { x: 36, y: 0 },
    'diagonal-up-left': { x: -36, y: 28 },
    'diagonal-up-right': { x: 36, y: 28 },
    'diagonal-down-left': { x: -36, y: -28 },
    'diagonal-down-right': { x: 36, y: -28 },
};

export function AnimatedSection({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = '',
    as = 'div',
    hasScale = false,
    hasRotation = false,
    easing = 'spring',
}: AnimatedSectionProps) {
    const prefersReducedMotion = useReducedMotion();
    const offset = directionOffsets[direction];
    const Component = motion[as];

    if (prefersReducedMotion) {
        const Tag = as as keyof JSX.IntrinsicElements;
        return <Tag className={className}>{children}</Tag>;
    }

    const isSpring = easing === 'spring';
    const transition = isSpring
        ? { type: 'spring' as const, stiffness: 300, damping: 30, mass: 0.7, delay }
        : {
            duration,
            delay,
            ease: easing === 'easeOut'
                ? ([0.23, 1, 0.32, 1] as [number, number, number, number])
                : easing === 'easeInOut'
                ? ([0.42, 0, 0.58, 1] as [number, number, number, number])
                : ([0.17, 0.67, 0.83, 0.67] as [number, number, number, number]),
        };

    return (
        <Component
            initial={{
                opacity: 0,
                x: offset.x,
                y: offset.y,
                ...(hasScale && { scale: 0.96 }),
                ...(hasRotation && { rotate: direction.includes('left') ? 2 : -2 }),
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                ...(hasScale && { scale: 1 }),
                ...(hasRotation && { rotate: 0 }),
            }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transition}
            className={className}
        >
            {children}
        </Component>
    );
}
