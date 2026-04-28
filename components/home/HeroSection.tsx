'use client';

import { motion } from 'framer-motion';
import { Phone, Star, MessageCircle, MapPin, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import { OpeningStatusBadge } from '@/components/shared/OpeningStatusBadge';
import { useReviewCount } from '@/hooks/use-review-count';

export function HeroSection() {
  const { reviewCount } = useReviewCount();
  const reviewRating = BUSINESS_INFO.reviews.rating;
  const foundedYear = BUSINESS_INFO?.founded ?? 2004;

  return (
    <section
      data-hero-section
      aria-label="Friseur Hamburg Hamm – Ihr Frisuren-Studio"
      className="relative min-h-[100svh] flex flex-col bg-gradient-to-br from-[#E5E0DA] via-[#F5F0EA] to-[#E5E0DA] overflow-x-hidden"
    >
      <img
        src="https://res.cloudinary.com/dqkld61zu/image/upload/q_auto,f_auto/v1770218177/Ihr_Frisuren-Studio_Au%C3%9Fenansicht_oyydcb.webp"
        alt="Premium Friseursalon Ihr Frisuren-Studio in Hamburg Hamm"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.16]"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.20)_0%,rgba(229,224,218,0.10)_45%,rgba(0,0,0,0.06)_100%)]" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="container mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-full flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-0 text-center">
            <motion.div
              initial={{ scale: 0.96, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 mb-4 sm:mb-5 md:mb-6"
            >
              <div data-breadcrumb-logo className="relative mx-auto aspect-square w-[300px] xs:w-[320px] sm:w-[305px] md:w-[345px] lg:w-[390px] xl:w-[435px]">
                <Image
                  src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772399060/2face_Logo_zczbdd.svg"
                  alt="Ihr Frisuren-Studio Logo"
                  fill
                  priority
                  sizes="(max-width: 475px) 300px, (max-width: 640px) 320px, (max-width: 768px) 305px, (max-width: 1024px) 345px, (max-width: 1280px) 390px, 435px"
                  className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <OpeningStatusBadge />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="w-full max-w-5xl"
            >
              <h1
                className="mx-auto max-w-[18ch] font-semibold leading-[0.98] tracking-tight text-gray-900 text-[1.65rem] xs:text-[1.9rem] sm:text-[2.3rem] md:text-[2.85rem] lg:text-[3.4rem] xl:text-[3.9rem]"
                style={{ textShadow: '0 2px 10px rgba(255,255,255,0.28)' }}
              >
                Friseur Hamburg Hamm
                <br />
                Meisterbetrieb seit 2004
              </h1>

              <p
                className="mx-auto mt-3 sm:mt-4 max-w-[32rem] text-balance text-[0.96rem] leading-relaxed text-gray-700 sm:text-base md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl"
              >
                Meisterbetrieb mit {reviewRating} Sternen – für <Link href="/leistungen" className="underline decoration-gray-300 hover:decoration-gray-900 transition-colors">Haarschnitte</Link>, <Link href="/balayage-hamburg-hamm" className="underline decoration-gray-300 hover:decoration-gray-900 transition-colors">Balayage</Link> und <Link href="/kosmetik-hamburg-hamm" className="underline decoration-gray-300 hover:decoration-gray-900 transition-colors">Kosmetik</Link> in Hamburg Hamm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 sm:mt-6 w-full"
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="inline-flex min-h-[48px] w-full max-w-[260px] items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 transition-all duration-300 hover:scale-[1.02] hover:bg-amber-500 hover:shadow-amber-600/35 sm:w-auto sm:min-w-[185px] sm:max-w-none sm:px-8 sm:text-base"
                  aria-label="Jetzt anrufen"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="whitespace-nowrap">Jetzt anrufen</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                  className="inline-flex min-h-[48px] w-full max-w-[260px] items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-500 hover:shadow-emerald-600/35 sm:w-auto sm:min-w-[185px] sm:max-w-none sm:px-8 sm:text-base"
                  aria-label="WhatsApp schreiben"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span className="whitespace-nowrap">WhatsApp</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-4 sm:mt-5"
            >
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/65 px-3 py-1.5 text-[11px] text-gray-800 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.04)] sm:px-4 sm:py-2 sm:text-sm">
                  <Award className="h-4 w-4 shrink-0 text-amber-500" />
                  <span>Seit {foundedYear}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/65 px-3 py-1.5 text-[11px] text-gray-800 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.04)] sm:px-4 sm:py-2 sm:text-sm">
                  <Star className="h-4 w-4 shrink-0 fill-amber-500 text-amber-500" />
                  <span>
                    {reviewRating} Sterne · {reviewCount}+
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-3 sm:mt-4 lg:mt-6 lg:mb-10 xl:mb-14"
            >
              <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/60 px-4 py-2 text-[11px] text-gray-800 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.03)] sm:text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-amber-500" />
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