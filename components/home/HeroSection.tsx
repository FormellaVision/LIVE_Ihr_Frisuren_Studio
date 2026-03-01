'use client';

import { motion } from 'framer-motion';
import { Phone, Award, Star, MessageCircle, MapPin } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';

export function HeroSection() {
  const reviewCount = BUSINESS_INFO?.reviews?.count ?? 250;
  const reviewRating = BUSINESS_INFO?.reviews?.rating ?? '4,9';
  const foundedYear = BUSINESS_INFO?.founded ?? 2004;

  return (
    <section
      aria-label="Friseur Hamburg Hamm – Ihr Frisuren-Studio"
      className="relative h-screen min-h-screen max-h-screen -mt-16 overflow-hidden pt-16"
    >
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Premium Friseursalon Ihr Frisuren-Studio in Hamburg Hamm"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(245,239,230,0.18),rgba(0,0,0,0.18),rgba(0,0,0,0.32))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.12)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.28)_100%)]" />

      <div className="relative z-10 h-full w-full">
        <div className="container mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6">
          <div className="flex h-full flex-col items-center justify-center text-center py-8 sm:py-10 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              className="mb-8 sm:mb-10 lg:mb-12 mt-4 sm:mt-6"
            >
              <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-white/35 bg-[rgba(32,26,22,0.42)] px-5 py-3 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.18)] sm:px-6">
                <div className="inline-flex items-center gap-2">
                  <Award className="h-4 w-4 shrink-0 text-amber-400" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white sm:text-xs">
                    Meisterbetrieb seit {foundedYear}
                  </span>
                </div>

                <span className="hidden h-4 w-px bg-white/25 sm:block" />

                <div className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
                  <span className="text-[11px] text-white sm:text-sm">
                    {reviewRating} Sterne · {reviewCount}+ Bewertungen
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 20, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <div className="relative mx-auto aspect-square w-[210px] sm:w-[260px] md:w-[320px] lg:w-[390px] xl:w-[450px]">
                <Image
                  src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772399060/2face_Logo_zczbdd.svg"
                  alt="Ihr Frisuren-Studio Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 210px, (max-width: 768px) 260px, (max-width: 1024px) 320px, (max-width: 1280px) 390px, 450px"
                  className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto w-full max-w-5xl"
            >
              <h1
                className="mx-auto max-w-4xl font-semibold leading-[1.02] tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem]"
                style={{ textShadow: '0 3px 18px rgba(0,0,0,0.28)' }}
              >
                Friseur Hamburg Hamm
                <br />
                Meisterbetrieb seit 2004
              </h1>

              <p
                className="mx-auto mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-white/95 sm:mt-6 sm:text-base md:text-lg lg:text-xl"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}
              >
                Ihr Frisuren-Studio für Premium-Haarschnitte, Balayage und Kosmetik in Hamburg Hamm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28 }}
              className="mt-8 sm:mt-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.03] hover:bg-amber-400 hover:shadow-amber-500/35 sm:px-8 sm:text-base"
                  aria-label="Jetzt anrufen"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="whitespace-nowrap">Jetzt anrufen</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-[rgba(38,32,28,0.38)] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/45 hover:bg-[rgba(38,32,28,0.5)] sm:px-8 sm:text-base"
                  aria-label="WhatsApp schreiben"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span className="whitespace-nowrap">WhatsApp</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.38 }}
              className="mt-6 sm:mt-8 mb-4 sm:mb-6"
            >
              <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-[rgba(32,26,22,0.32)] px-4 py-2.5 text-xs text-white/95 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                <span className="text-center">
                  Hammer Landstraße 4 · 20537 Hamburg
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}