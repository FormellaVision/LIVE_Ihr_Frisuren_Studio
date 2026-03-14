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
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
    'diagonal-up-left': { x: -24, y: 20 },
    'diagonal-up-right': { x: 24, y: 20 },
    'diagonal-down-left': { x: -24, y: -20 },
    'diagonal-down-right': { x: 24, y: -20 },
};

export function AnimatedSection({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.45,
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

    const transition = {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    };

    return (
        <Component
            initial={{
                opacity: 0,
                x: offset.x,
                y: offset.y,
                ...(hasScale && { scale: 0.97 }),
                ...(hasRotation && { rotate: direction.includes('left') ? 1.5 : -1.5 }),
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                ...(hasScale && { scale: 1 }),
                ...(hasRotation && { rotate: 0 }),
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={transition}
            className={className}
        >
            {children}
        </Component>
    );
}
