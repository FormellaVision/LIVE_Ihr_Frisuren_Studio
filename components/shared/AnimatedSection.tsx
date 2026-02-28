'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    direction?: 'up' | 'left' | 'right' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
    as?: 'div' | 'section';
}

const directionOffsets = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
};

export function AnimatedSection({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    as = 'div',
}: AnimatedSectionProps) {
    const offset = directionOffsets[direction];
    const Component = motion[as];

    return (
        <Component
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </Component>
    );
}
