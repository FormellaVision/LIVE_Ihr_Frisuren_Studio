'use client';

import { motion } from 'framer-motion';
import { Phone, Award, Star, MessageCircle, MapPin } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';
import { PaymentBadges } from '@/components/shared/PaymentBadges';

export function HeroSection() {
  const reviewCount = BUSINESS_INFO?.reviews?.count ?? 250;
  const reviewRating = BUSINESS_INFO?.reviews?.rating ?? '4,9';
  const foundedYear = BUSINESS_INFO?.founded ?? 2004;

  return (
    <section
      aria-label="Friseur Hamburg Hamm – Ihr Frisuren-Studio"
      className="relative min-h-screen -mt-16 flex items-center justify-center overflow-hidden pt-24"
    >
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Premium Friseursalon Ihr Frisuren-Studio in Hamburg Hamm"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.52)_48%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div
                className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 sm:px-6 py-3 rounded-full border border-white/15 bg-black/35 backdrop-blur-md"
                style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.75)' }}
              >
                <div className="inline-flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-light text-white tracking-[0.18em] uppercase">
                    Meisterbetrieb seit {foundedYear}
                  </span>
                </div>

                <span className="hidden sm:block w-px h-4 bg-white/25" />

                <div className="inline-flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-light text-white tracking-[0.04em]">
                    {reviewRating} Sterne · {reviewCount}+ Bewertungen
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[420px] aspect-[3/2]">
                <Image
                  src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772399060/2face_Logo_zczbdd.svg"
                  alt="Ihr Frisuren-Studio Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, (max-width: 1024px) 300px, (max-width: 1280px) 360px, 420px"
                  className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-4xl mx-auto px-2 sm:px-4"
            >
              <h1
                className="text-white font-semibold tracking-tight leading-[1.08] text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
                style={{ textShadow: '0 3px 24px rgba(0, 0, 0, 0.75)' }}
              >
                Friseur Hamburg Hamm – Meisterbetrieb seit 2004
              </h1>

              <p
                className="mt-5 sm:mt-6 text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
                style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.7)' }}
              >
                Ihr Frisuren-Studio für Premium-Haarschnitte, Balayage und Kosmetik in Hamburg Hamm – zentral an der Hammer Landstraße 4.
              </p>

              <p
                className="mt-4 text-amber-300/95 text-sm sm:text-base md:text-lg font-medium"
                style={{ textShadow: '0 2px 14px rgba(0, 0, 0, 0.7)' }}
              >
                Haare sind Vertrauenssache. Überlass sie nicht dem Zufall.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="mt-6 sm:mt-8 px-2"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm sm:text-[15px] text-white">Meisterbetrieb seit 2004</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span className="text-sm sm:text-[15px] text-white">
                    {reviewRating} Sterne aus {reviewCount}+ Bewertungen
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm sm:text-[15px] text-white">
                    Zentral in Hamburg Hamm, Hammer Landstraße 4
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34 }}
              className="mt-8 sm:mt-10"
            >
              <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="group inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold transition-all duration-300 px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.03]"
                  aria-label="Jetzt anrufen"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base whitespace-nowrap">Jetzt anrufen</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                  className="group inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold transition-all duration-300 px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-white/35 hover:scale-[1.03]"
                  aria-label="WhatsApp schreiben"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base whitespace-nowrap">WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="w-full mt-8 sm:mt-10"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 border-t border-white/10">
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-transform duration-300 group-hover:scale-105">
                  20+
                </div>
                <div className="text-[10px] sm:text-xs uppercase text-white/55 font-light tracking-[0.22em]">
                  Jahre Erfahrung
                </div>
              </div>

              <div className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-transform duration-300 group-hover:scale-105">
                  {reviewCount}+
                </div>
                <div className="text-[10px] sm:text-xs uppercase text-white/55 font-light tracking-[0.22em]">
                  Bewertungen
                </div>
              </div>

              <div className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-transform duration-300 group-hover:scale-105">
                  4
                </div>
                <div className="text-[10px] sm:text-xs uppercase text-white/55 font-light tracking-[0.22em]">
                  Sprachen
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex justify-center">
              <PaymentBadges variant="dark" showLabel={true} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}