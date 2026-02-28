'use client';

import { motion } from 'framer-motion';
import { Phone, Award, Star, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';
import { PaymentBadges } from '@/components/shared/PaymentBadges';

export function HeroSection() {
  return (
    <section aria-label="Willkommen bei Ihr Frisuren-Studio Hamburg Hamm" className="relative h-screen -mt-16 flex items-center justify-center overflow-hidden pt-20">
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Premium Friseursalon Ihr Frisuren-Studio Hamburg Hamm"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-12 h-full flex flex-col">
        <div className="max-w-3xl mx-auto flex-1 flex flex-col justify-center w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-md" style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.8)' }}>
              <Award className="w-4 h-4 text-amber-400 drop-shadow-lg" />
              <span className="text-xs font-light text-white tracking-wider uppercase">
                Meisterbetrieb seit {BUSINESS_INFO.founded}
              </span>
              <span className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-lg" />
                <span className="text-xs font-light text-white">
                  {BUSINESS_INFO.reviews.rating} ({BUSINESS_INFO.reviews.count}+ Bewertungen)
                </span>
              </div>
            </div>
          </motion.div>

          <h1 className="sr-only">Friseur Hamburg Hamm – Ihr Frisuren-Studio seit 2004</h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-6 px-4 max-w-full"
          >
            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.15] tracking-tight mb-4 break-words" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 4px 30px rgba(0, 0, 0, 0.6)' }}>
              Haare sind Vertrauenssache.
              <br />
              <span className="text-amber-400 font-normal" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 4px 30px rgba(0, 0, 0, 0.6)' }}>
                Überlass sie nicht dem Zufall.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide" style={{ textShadow: '0 3px 25px rgba(0, 0, 0, 0.9), 0 0 40px rgba(251, 146, 60, 0.3)' }}>
              Dein Friseur in Hamburg Hamm
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mb-12"
          >
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-medium transition-all duration-300 px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
                aria-label="Jetzt anrufen"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base whitespace-nowrap">Jetzt anrufen</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium transition-all duration-300 px-6 sm:px-10 py-3 sm:py-4 rounded-full border border-white/20 hover:border-white/30 hover:scale-105"
                aria-label="WhatsApp schreiben"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base whitespace-nowrap">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-8 w-full mt-auto"
        >
          <div className="grid grid-cols-3 gap-8 max-w-3xl w-full pt-12 border-t border-white/10">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-all duration-300 group-hover:scale-110">
                20+
              </div>
              <div className="text-xs uppercase text-white/50 font-light tracking-widest">
                Jahre Erfahrung
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-all duration-300 group-hover:scale-110">
                {BUSINESS_INFO.reviews.count}+
              </div>
              <div className="text-xs uppercase text-white/50 font-light tracking-widest">
                Zufriedene Kunden
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-all duration-300 group-hover:scale-110">
                4
              </div>
              <div className="text-xs uppercase text-white/50 font-light tracking-widest">
                Sprachen
              </div>
            </div>
          </div>
          <PaymentBadges variant="dark" showLabel={true} />
        </motion.div>
      </div>
    </section>
  );
}
