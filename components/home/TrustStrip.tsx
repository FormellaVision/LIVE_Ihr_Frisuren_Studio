'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Award, Star, Users, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const trustItems = [
    {
        icon: Award,
        label: `Meisterbetrieb seit ${BUSINESS_INFO.founded}`,
    },
    {
        icon: Star,
        label: `${BUSINESS_INFO.reviews.rating} ★ bei Google`,
    },
    {
        icon: Users,
        label: `${BUSINESS_INFO.reviews.count}+ Bewertungen`,
    },
    {
        icon: Globe,
        label: 'Mehrsprachiges Team',
    },
];

export function TrustStrip() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4"
        >
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{
                                type: 'spring',
                                stiffness: 320,
                                damping: 26,
                                delay: index * 0.06,
                            }}
                            className="flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                            <span className="font-medium whitespace-nowrap">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
