'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Euro, GraduationCap, Heart, LayoutGrid } from 'lucide-react';

const BENEFITS = [
  {
    icon: Euro,
    title: 'Faire Bezahlung',
    text: 'Wir zahlen marktgerechte Gehälter und honorieren Erfahrung, Einsatz und Leidenschaft.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: GraduationCap,
    title: 'Weiterbildung',
    text: 'Regelmäßige Schulungen, Colorations-Trainings und die Chance zur Meisterausbildung – wir investieren in dein Wachstum.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Heart,
    title: 'Familiäre Atmosphäre',
    text: 'Kleines Team, kurze Wege, offene Kommunikation. Hier bist du kein Nummer, sondern ein Mensch.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: LayoutGrid,
    title: 'Flexible Modelle',
    text: 'Ob Vollzeit, Teilzeit oder Mini-Job – wir finden gemeinsam das Arbeitsmodell, das zu deinem Leben passt.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
];

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: tween(0) },
};

export function KarriereBenefits() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom max-w-5xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={tween(0)}
          className="text-center mb-12"
          style={{ willChange: 'transform, opacity' }}
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Warum zu uns?</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
            Was wir dir bieten
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          style={{ willChange: 'transform, opacity' }}
        >
          {BENEFITS.map(({ icon: Icon, title, text, color, bg, border }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className={`rounded-2xl border ${border} bg-white p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300`}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className={`flex-shrink-0 w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed m-0">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
