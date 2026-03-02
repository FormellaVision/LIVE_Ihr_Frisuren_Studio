'use client';

import { motion } from 'framer-motion';
import { Phone, Star, MessageCircle, MapPin, Award } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';

const NAVBAR_HEIGHT = 64;

export function HeroSection() {
  const reviewCount = BUSINESS_INFO?.reviews?.count ?? 250;
  const reviewRating = BUSINESS_INFO?.reviews?.rating ?? '4,9';
  const foundedYear = BUSINESS_INFO?.founded ?? 2004;

  return (
    <section
      aria-label="Friseur Hamburg Hamm – Ihr Frisuren-Studio"
      className="relative overflow-hidden"
      style={{
        height: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
        minHeight: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
        marginTop: `${NAVBAR_HEIGHT}px`,
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Premium Friseursalon Ihr Frisuren-Studio in Hamburg Hamm"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(246,240,232,0.18),rgba(0,0,0,0.10),rgba(0,0,0,0.26))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,247,238,0.18)_0%,rgba(0,0,0,0.04)_45%,rgba(0,0,0,0.18)_100%)]" />

      <div className="relative z-10 h-full w-full">
        <div className="container mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full flex-col items-center justify-center text-center pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <div className="relative mx-auto aspect-square w-[220px] xs:w-[245px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px]">
                <Image
                  src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772399060/2face_Logo_zczbdd.svg"
                  alt="Ihr Frisuren-Studio Logo"
                  fill
                  priority
                  sizes="(max-width: 475px) 220px, (max-width: 640px) 245px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
                  className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="w-full max-w-5xl"
            >
              <h1
                className="mx-auto max-w-[20ch] font-semibold leading-[0.98] tracking-tight text-white text-[2.1rem] xs:text-[2.35rem] sm:text-[2.9rem] md:text-[3.6rem] lg:text-[4.25rem] xl:text-[4.85rem]"
                style={{ textShadow: '0 3px 18px rgba(0,0,0,0.18)' }}
              >
                Friseur Hamburg Hamm
                <br />
                Meisterbetrieb seit 2004
              </h1>

              <p
                className="mx-auto mt-4 max-w-[32rem] text-balance text-[0.98rem] leading-relaxed text-white/95 sm:mt-5 sm:text-base md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.14)' }}
              >
                Ihr Frisuren-Studio für Premium-Haarschnitte, Balayage und Kosmetik in Hamburg Hamm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
              className="mt-6 sm:mt-8 md:mt-10 w-full"
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:gap-5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="inline-flex min-h-[48px] w-full max-w-[260px] items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 hover:shadow-amber-500/35 sm:w-auto sm:min-w-[185px] sm:max-w-none sm:px-8 sm:text-base"
                  aria-label="Jetzt anrufen"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="whitespace-nowrap">Jetzt anrufen</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                  className="inline-flex min-h-[48px] w-full max-w-[260px] items-center justify-center gap-2 rounded-full border border-white/30 bg-[rgba(38,32,28,0.28)] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/45 hover:bg-[rgba(38,32,28,0.40)] sm:w-auto sm:min-w-[185px] sm:max-w-none sm:px-8 sm:text-base"
                  aria-label="WhatsApp schreiben"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span className="whitespace-nowrap">WhatsApp</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-6 sm:mt-8 md:mt-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[rgba(32,26,22,0.22)] px-3.5 py-2 text-[11px] text-white/95 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-4 sm:text-sm">
                  <Award className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>Seit {foundedYear}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[rgba(32,26,22,0.22)] px-3.5 py-2 text-[11px] text-white/95 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-4 sm:text-sm">
                  <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
                  <span>
                    {reviewRating} Sterne · {reviewCount}+
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.38 }}
              className="mt-4 sm:mt-5 md:mt-6"
            >
              <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-[rgba(32,26,22,0.20)] px-4 py-2.5 text-[11px] text-white/95 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:text-sm">
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