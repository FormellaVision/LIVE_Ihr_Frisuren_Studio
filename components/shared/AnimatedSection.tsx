'use client';

import { motion } from 'framer-motion';
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
    easing?: 'easeOut' | 'easeInOut' | 'cubic';
}

const directionOffsets = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    'diagonal-up-left': { x: -60, y: 40 },
    'diagonal-up-right': { x: 60, y: 40 },
    'diagonal-down-left': { x: -60, y: -40 },
    'diagonal-down-right': { x: 60, y: -40 },
};

const easingOptions = {
    easeOut: [0.23, 1, 0.320, 1] as const,
    easeInOut: [0.42, 0, 0.58, 1] as const,
    cubic: [0.17, 0.67, 0.83, 0.67] as const,
};

export function AnimatedSection({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    as = 'div',
    hasScale = false,
    hasRotation = false,
    easing = 'easeOut',
}: AnimatedSectionProps) {
    const offset = directionOffsets[direction];
    const Component = motion[as];
    const ease = easingOptions[easing] || easingOptions.easeOut;

    return (
        <Component
            initial={{
                opacity: 0,
                x: offset.x,
                y: offset.y,
                ...(hasScale && { scale: 0.95 }),
                ...(hasRotation && { rotate: direction.includes('left') ? 2 : -2 }),
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                ...(hasScale && { scale: 1 }),
                ...(hasRotation && { rotate: 0 }),
            }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration, delay, ease }}
            className={className}
        >
            {children}
        </Component>
    );
}
