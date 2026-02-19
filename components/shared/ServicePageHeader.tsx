'use client';

import { motion } from 'framer-motion';
import { Award, Star, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

interface ServicePageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

export function ServicePageHeader({
  title,
  subtitle,
  description,
  backgroundImage,
}: ServicePageHeaderProps) {
  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center 35%',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      <div className="relative z-10 container-custom w-full pt-8 pb-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 sm:px-5 py-2 rounded-full mb-7 shadow-lg"
          >
            <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
              Meisterbetrieb seit {BUSINESS_INFO.founded}
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white whitespace-nowrap">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 flex-shrink-0" />
              <span className="font-semibold">{BUSINESS_INFO.reviews.rating}</span>
              <span className="text-white/70">({BUSINESS_INFO.reviews.count}+ Bewertungen)</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 break-words"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-teal-300 font-semibold mb-4 break-words"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-white/80 break-words leading-relaxed max-w-xl mx-auto mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href={`tel:${BUSINESS_INFO.phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/termin-buchen"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
            >
              Termin buchen
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9F7F4] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
