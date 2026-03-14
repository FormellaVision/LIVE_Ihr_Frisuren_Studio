'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DEFAULT_FAQS } from '@/lib/schema';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 28,
                  delay: index * 0.05,
                }}
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
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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
                          : { height: { type: 'spring', stiffness: 400, damping: 38 }, opacity: { duration: 0.2 } }
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
