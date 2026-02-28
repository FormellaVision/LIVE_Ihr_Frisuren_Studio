'use client';

import { motion } from 'framer-motion';
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
    up: { x: 0, y: 30 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
};

export const staggerItemVariants = (direction: 'up' | 'left' | 'right' = 'up') => {
    const offset = directionOffsets[direction];
    return {
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' as const },
        },
    };
};

export function AnimatedStagger({
    children,
    className = '',
    staggerDelay = 0.1,
    direction = 'up',
}: AnimatedStaggerProps) {
    return (
        <motion.div
            variants={containerVariants(staggerDelay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={className}
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
        <motion.div variants={staggerItemVariants(direction)} className={className}>
            {children}
        </motion.div>
    );
}
