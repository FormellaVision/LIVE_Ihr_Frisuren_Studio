'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DEFAULT_FAQS, type FAQItem } from '@/lib/schema';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={cn(
                    'w-full flex items-center justify-between gap-4 p-6 text-left bg-white rounded-xl shadow-md transition-all duration-300',
                    isOpen ? 'shadow-lg' : 'hover:shadow-lg'
                  )}
                >
                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300',
                      isOpen ? 'rotate-180' : ''
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
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