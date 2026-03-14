'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQ {
    question: string;
    answer: string;
}

interface ServiceFAQSectionProps {
    faqs: FAQ[];
    title?: string;
    subtitle?: string;
}

const tween = (delay: number) => ({
    duration: 0.4,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function ServiceFAQSection({
    faqs,
    title = 'Häufig gestellte Fragen',
    subtitle,
}: ServiceFAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const prefersReducedMotion = useReducedMotion();

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="section-padding" aria-labelledby="service-faq-heading">
            <div className="container-custom">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={tween(0)}
                    className="text-center mb-12"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <h2 id="service-faq-heading" className="heading-lg mb-4">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xl text-gray-600">{subtitle}</p>
                    )}
                </motion.div>

                <div className="max-w-3xl mx-auto" role="region" aria-label={title}>
                    {faqs.map((faq, index) => {
                        const panelId = `service-faq-panel-${index}`;
                        const buttonId = `service-faq-button-${index}`;
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={tween(index * 0.08)}
                                className="mb-4"
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <button
                                    id={buttonId}
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    className={cn(
                                        'w-full flex items-center justify-between p-6 text-left bg-white rounded-xl shadow-md transition-all duration-300',
                                        isOpen ? 'shadow-lg' : 'hover:shadow-lg'
                                    )}
                                >
                                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={cn(
                                            'w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300',
                                            isOpen ? 'rotate-180' : ''
                                        )}
                                        aria-hidden="true"
                                    />
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-6 py-4 bg-gray-50 rounded-b-xl border-x border-b border-gray-100">
                                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
