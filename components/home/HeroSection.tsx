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
      className="relative h-[100svh] min-h-[100svh] overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Premium Friseursalon Ihr Frisuren-Studio in Hamburg Hamm"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/12" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(246,240,232,0.16),rgba(0,0,0,0.08),rgba(0,0,0,0.24))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,247,238,0.16)_0%,rgba(0,0,0,0.03)_45%,rgba(0,0,0,0.18)_100%)]" />

      <div className="relative z-10 h-full w-full">
        <div className="container mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="grid h-full"
            style={{
              gridTemplateRows: `${NAVBAR_HEIGHT}px minmax(0, 1fr)`,
            }}
          >
            <div aria-hidden="true" />

            <div className="flex min-h-0 flex-col items-center justify-center text-center pb-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                className="mb-4 sm:mb-5 md:mb-6"
              >
                <div className="relative mx-auto aspect-square w-[200px] xs:w-[220px] sm:w-[250px] md:w-[290px] lg:w-[330px] xl:w-[370px]">
                  <Image
                    src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772399060/2face_Logo_zczbdd.svg"
                    alt="Ihr Frisuren-Studio Logo"
                    fill
                    priority
                    sizes="(max-width: 475px) 200px, (max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 290px, (max-width: 1280px) 330px, 370px"
                    className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
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
                  className="mx-auto max-w-[18ch] font-semibold leading-[0.98] tracking-tight text-white text-[2rem] xs:text-[2.25rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem] xl:text-[4.6rem]"
                  style={{ textShadow: '0 3px 18px rgba(0,0,0,0.16)' }}
                >
                  Friseur Hamburg Hamm
                  <br />
                  Meisterbetrieb seit 2004
                </h1>

                <p
                  className="mx-auto mt-3 sm:mt-4 max-w-[32rem] text-balance text-[0.96rem] leading-relaxed text-white/95 sm:text-base md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.12)' }}
                >
                  Ihr Frisuren-Studio für Premium-Haarschnitte, Balayage und Kosmetik in Hamburg Hamm.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.22 }}
                className="mt-5 sm:mt-6 w-full"
              >
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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
                className="mt-4 sm:mt-5"
              >
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[rgba(32,26,22,0.20)] px-3 py-1.5 text-[11px] text-white/95 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:px-4 sm:py-2 sm:text-sm">
                    <Award className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>Seit {foundedYear}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[rgba(32,26,22,0.20)] px-3 py-1.5 text-[11px] text-white/95 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:px-4 sm:py-2 sm:text-sm">
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
                className="mt-3 sm:mt-4"
              >
                <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-[rgba(32,26,22,0.18)] px-4 py-2 text-[11px] text-white/95 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.05)] sm:text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                  <span className="text-center">
                    Hammer Landstraße 4 · 20537 Hamburg
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}