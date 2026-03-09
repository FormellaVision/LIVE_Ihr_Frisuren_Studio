'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Video as LucideIcon, Check } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface AnimatedFeatureCardsProps {
  features: Feature[];
  processSteps: ProcessStep[];
  children: ReactNode;
}

export function AnimatedFeatureCards({
  features,
  processSteps,
  children,
}: AnimatedFeatureCardsProps) {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <h2 className="sr-only">Unsere Stärken</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2
            className="font-playfair text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            Ihr Termin bei uns — So läuft es ab
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true, margin: '-80px' }}
                className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {children}
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
            <motion.h2
              className="font-playfair text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              Für wen ist unser Service ideal?
            </motion.h2>
            <ul className="space-y-3">
              {[
                'Frauen die Wert auf individuelle Beratung und Typanalyse legen',
                'Kundinnen mit anspruchsvollen Haaren (lockig, dünn, dick)',
                'Alle die natürliche Highlights mit Balayage wünschen',
                'Bräute und feierliche Anlässe (Hochsteckfrisuren, Brautstyling)',
                'Berufstätige Frauen — auch Afterwork-Termine nach 19:00 Uhr',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                >
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <motion.h2
              className="font-playfair text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              Warum Ihr Frisuren-Studio?
            </motion.h2>
            <ul className="space-y-3">
              {[
                'Meisterqualität seit 2004 in Hamburg Hamm',
                'Spezialisiert auf Balayage und moderne Färbetechniken',
                'Hochwertige Produkte für langanhaltende Ergebnisse',
                'Mehrsprachige Beratung (Deutsch, Englisch, Türkisch, Persisch)',
                'Afterwork-Termine nach 19:00 Uhr möglich',
                `${BUSINESS_INFO.reviews.count}+ zufriedene Kunden (${BUSINESS_INFO.reviews.rating} Sterne)`,
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                >
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
