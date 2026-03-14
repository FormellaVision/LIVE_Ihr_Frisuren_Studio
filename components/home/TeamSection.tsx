'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Users } from 'lucide-react';

export function TeamSection() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Unser Team in Hamburg Hamm</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erfahrene Meister & Gesellen mit Leidenschaft fürs Handwerk –
            mehrsprachig, professionell und immer für Sie da
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-[4/3] sm:aspect-[2/1] overflow-hidden relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
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
              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Lernen Sie uns kennen
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Unser vielseitiges Team vereint jahrelange Erfahrung, Kreativität und
                internationale Expertise. Wir sprechen Deutsch, Englisch, Türkisch und Persisch.
              </p>

              <Link href="/ueber-uns">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-teal-700 transition-colors"
                >
                  <Users className="w-5 h-5" />
                  Team kennenlernen
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
