'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DEFAULT_FAQS } from '@/lib/schema';
import { cn } from '@/lib/utils';

const tween = (delay: number) => ({
  duration: 0.35,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={tween(0)}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-16"
        >
          <h2 id="faq-heading" className="heading-lg mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600">
            Alles Wichtige zu Ihrem Friseurbesuch in Hamburg Hamm
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto" role="region" aria-label="Häufig gestellte Fragen">
          {DEFAULT_FAQS.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-16px' }}
                transition={tween(index * 0.04)}
                style={{ willChange: 'transform, opacity' }}
                className="mb-4"
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={cn(
                    'w-full flex items-center justify-between gap-4 p-6 text-left bg-white rounded-xl shadow-md transition-all duration-200',
                    isOpen ? 'shadow-lg' : 'hover:shadow-lg'
                  )}
                >
                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <ChevronDown
                      className="w-5 h-5 text-teal-600 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }, opacity: { duration: 0.2 } }
                      }
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-50 rounded-b-xl border-x border-b border-gray-100">
                        <div className="px-6 py-4 text-left">
                          <p className="text-gray-700 leading-relaxed max-w-none">
                            {faq.answer}
                          </p>
                          {faq.bullets && faq.bullets.length > 0 && (
                            <ul className="mt-3 space-y-1.5">
                              {faq.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0" aria-hidden="true" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
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
