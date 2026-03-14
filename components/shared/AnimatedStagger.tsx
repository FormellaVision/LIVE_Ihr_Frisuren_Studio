'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedStaggerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    direction?: 'up' | 'left' | 'right';
}

const containerVariants = (staggerDelay: number) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: staggerDelay,
        },
    },
});

const directionOffsets = {
    up: { x: 0, y: 18 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
};

export const staggerItemVariants = (direction: 'up' | 'left' | 'right' = 'up') => {
    const offset = directionOffsets[direction];
    return {
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            },
        },
    };
};

export function AnimatedStagger({
    children,
    className = '',
    staggerDelay = 0.07,
    direction = 'up',
}: AnimatedStaggerProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            variants={containerVariants(staggerDelay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            className={className}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    direction?: 'up' | 'left' | 'right';
}

export function StaggerItem({
    children,
    className = '',
    direction = 'up',
}: StaggerItemProps) {
    return (
        <motion.div
            variants={staggerItemVariants(direction)}
            className={className}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
}
