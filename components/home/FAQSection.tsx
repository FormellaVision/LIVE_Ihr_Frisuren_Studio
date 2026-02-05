'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DEFAULT_FAQS } from '@/lib/schema';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Häufig gestellte Fragen</h2>
          <p className="text-xl text-gray-600">
            Alles Wichtige zu Ihrem Friseurbesuch in Hamburg Hamm
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {DEFAULT_FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'w-full flex items-center justify-between p-6 text-left bg-white rounded-xl shadow-md transition-all duration-300',
                  openIndex === index ? 'shadow-lg' : 'hover:shadow-lg'
                )}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300',
                    openIndex === index ? 'rotate-180' : ''
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 rounded-b-xl border-x border-b border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
