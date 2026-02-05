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
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(249, 247, 244, 0.95), rgba(249, 247, 244, 0.90)), url('${backgroundImage}')`,
        }}
      />

      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-md"
          >
            <Award className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-gray-800">
              Meisterbetrieb seit {BUSINESS_INFO.founded}
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1 text-sm text-gray-800">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              {BUSINESS_INFO.reviews.rating}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-teal-600 font-semibold mb-4"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
