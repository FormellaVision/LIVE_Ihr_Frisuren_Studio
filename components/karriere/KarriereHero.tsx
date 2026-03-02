'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

const TRUST_POINTS = [
  { icon: Award, label: 'Meisterbetrieb seit 2004' },
  { icon: Users, label: 'Familiäres Team' },
  { icon: Clock, label: 'Vollzeit / Teilzeit / Mini-Job' },
];

export function KarriereHero() {
  return (
    <section className="relative min-h-[90vh] -mt-16 flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      <div className="relative z-10 container-custom w-full py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-7"
          >
            <Award className="w-4 h-4" />
            Wir wachsen – jetzt bewerben
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
          >
            Bewirb dich bei<br />
            <span className="text-amber-400">Ihr Frisuren-Studio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-teal-300 font-semibold mb-3"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
          >
            Meisterbetrieb in Hamburg-Hamm
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-white/75 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8"
          >
            Werde Teil unseres familiären Teams und gestalte deinen Arbeitsalltag in einem Salon, der Wert auf Qualität, Menschlichkeit und Entwicklung legt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full"
              >
                <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="#bewerbung"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
            >
              Jetzt bewerben
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/22 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
