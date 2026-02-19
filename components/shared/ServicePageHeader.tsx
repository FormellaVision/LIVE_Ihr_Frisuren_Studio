'use client';

import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
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
    <section className="relative pt-10 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(249, 247, 244, 0.65), rgba(249, 247, 244, 0.55)), url('${backgroundImage}')`,
        }}
      />

      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/90 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full mb-6 shadow-md"
          >
            <Award className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
              Meisterbetrieb seit {BUSINESS_INFO.founded}
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1 text-xs sm:text-sm text-gray-800 whitespace-nowrap">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0" />
              {BUSINESS_INFO.reviews.rating}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mb-4 break-words"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-teal-600 font-semibold mb-4 break-words"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 break-words leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
