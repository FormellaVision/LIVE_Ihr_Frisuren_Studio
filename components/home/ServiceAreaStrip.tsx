'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Brain as Train } from 'lucide-react';

const areas = [
  { name: 'Hamburg Hamm', plz: '20537', href: '/friseur-hamburg-hamm', primary: true },
  { name: 'Friseur Borgfelde', plz: '20535', href: '/areas/borgfelde', primary: true },
  { name: 'Hamburg Mitte', plz: '20099', href: '/areas/hamburg-mitte', primary: false },
  { name: 'Horn', plz: '22111', href: '/areas/horn', primary: false },
];

export function ServiceAreaStrip() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 320, damping: 26 },
    },
  };

  return (
    <section
      aria-labelledby="service-area-heading"
      className="section-padding bg-gray-900 text-white"
    >
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-500/30 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-teal-300 font-medium">Einzugsgebiet</span>
          </div>
          <h2 id="service-area-heading" className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Ihr Friseur für Hamburg Hamm, Borgfelde & Umgebung
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Wir bedienen Kunden aus Hamburg-Hamm (PLZ 20537), Borgfelde (20535) und den
            umliegenden Stadtteilen — bestens erreichbar mit U2/U4 Burgstraße.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8"
        >
          {areas.map((area) => (
            <motion.div key={area.name} variants={itemVariants}>
              <Link
                href={area.href}
                className={`group flex flex-col items-center gap-1 rounded-xl p-4 text-center transition-all duration-300 border ${
                  area.primary
                    ? 'bg-teal-600/20 border-teal-500/50 hover:bg-teal-600/30'
                    : 'bg-white/5 border-white/10 hover:bg-teal-600/10 hover:border-teal-500/30'
                }`}
              >
                <MapPin
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    area.primary ? 'text-teal-400' : 'text-gray-400 group-hover:text-teal-400'
                  }`}
                />
                <span className="font-semibold text-white text-sm leading-tight">{area.name}</span>
                <span className="text-xs text-gray-400">PLZ {area.plz}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>Hammer Landstraße 4 · 20537 Hamburg-Hamm</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <Train className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>U2/U4 Burgstraße · 5 Min. zu Fuß</span>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
            Kunden aus Borgfelde (20535) erreichen uns in 5-10 Minuten. Ihr{' '}
            <Link href="/areas/borgfelde" className="text-teal-400 hover:text-teal-300 font-bold underline underline-offset-4 decoration-teal-400/30 hover:decoration-teal-400">
              Friseur Borgfelde
            </Link>{' '}
            wartet auf Sie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
