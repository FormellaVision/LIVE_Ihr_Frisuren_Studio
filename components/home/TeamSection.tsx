'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Users } from 'lucide-react';

export function TeamSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.02, margin: "-10px" }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Unser Team in Hamburg Hamm</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erfahrene Meister & Gesellen mit Leidenschaft fürs Handwerk –
            mehrsprachig, professionell und immer für Sie da
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.02, margin: "-10px" }}
          transition={{ type: 'spring', stiffness: 260, damping: 28, delay: 0.08 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-[4/3] sm:aspect-[2/1] overflow-hidden relative">
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="w-full h-full relative"
              >
                <Image
                  src="https://res.cloudinary.com/dqkld61zu/image/upload/v1773015024/Teamfoto2_w3uxfj.webp"
                  alt="Team Ihr Frisuren-Studio Hamburg Hamm"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover object-top"
                />
              </motion.div>
            </div>

            <div className="p-5 sm:p-8 md:p-12 text-center">
              <motion.h3
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
                className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
              >
                Lernen Sie uns kennen
              </motion.h3>
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.16 }}
                className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto"
              >
                Unser vielseitiges Team vereint jahrelange Erfahrung, Kreativität und
                internationale Expertise. Wir sprechen Deutsch, Englisch, Türkisch und Persisch.
              </motion.p>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.22 }}
              >
                <Link href="/ueber-uns">
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-teal-700 transition-colors"
                  >
                    <Users className="w-5 h-5" />
                    Team kennenlernen
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
