'use client';

import { motion } from 'framer-motion';
import { Award, Star, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

interface ServicePageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  backgroundFit?: 'cover' | 'contain';
  backgroundPosition?: string;
  imageAlt?: string;
}

export function ServicePageHeader({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundFit = 'cover',
  backgroundPosition = 'center 40%',
  imageAlt = '',
}: ServicePageHeaderProps) {
  const isContain = backgroundFit === 'contain';

  return (
    <section
      className={`relative h-screen -mt-16 flex items-center overflow-hidden pt-20 ${
        isContain ? 'bg-gradient-to-br from-[#E5E0DA] via-[#F5F0EA] to-[#E5E0DA]' : ''
      }`}
    >
      <Image
        src={backgroundImage}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: backgroundPosition }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      <div className="relative z-10 container-custom w-full h-full flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center px-4 flex-1 flex flex-col justify-center">
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
            className="text-sm sm:text-base text-white break-words leading-relaxed max-w-xl mx-auto mb-10 text-shadow-soft font-medium"
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
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
            >
              Termin buchen
            </Link>
          </motion.div>
        </div>
      </div>

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