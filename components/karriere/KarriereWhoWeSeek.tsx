'use client';

import { motion } from 'framer-motion';
import { Scissors, GraduationCap, Sparkles, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const PROFILES = [
  {
    icon: Scissors,
    title: 'Friseur:innen',
    text: 'Gesellin oder Geselle mit Begeisterung für Handwerk und persönliche Beratung.',
  },
  {
    icon: GraduationCap,
    title: 'Auszubildende',
    text: 'Du möchtest das Friseurhandwerk von Grund auf lernen – in einem Meisterbetrieb mit echter Ausbildungskultur.',
  },
  {
    icon: Sparkles,
    title: 'Colorations-Spezialist:innen',
    text: 'Leidenschaft für Balayage, Coloration und moderne Techniken? Dann bist du bei uns richtig.',
  },
  {
    icon: RefreshCw,
    title: 'Quereinsteiger & Rückkehrer',
    text: 'Berufspause, Branchenwechsel oder Neustart? Wir sehen Potenzial und geben dir die Chance.',
  },
];

export function KarriereWhoWeSeek() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Wen wir suchen</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Jede:r ist willkommen
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wir glauben, dass Talent, Herzlichkeit und Lernbereitschaft wichtiger sind als ein perfekter Lebenslauf. Egal ob du gerade deinen Gesellenbrief in der Hand hältst oder nach Jahren wieder einsteigen möchtest – wir freuen uns auf dich.
            </p>
            <Link
              href="#bewerbung"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              Zur Bewerbung
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {PROFILES.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed m-0">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
