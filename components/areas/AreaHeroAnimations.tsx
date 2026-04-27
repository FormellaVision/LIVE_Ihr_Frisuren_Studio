'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

interface AreaHeroAnimationsProps {
  /** The H1 element — passed as children from the Server Component so it stays SSR */
  children: ReactNode;
  badgeLabel: string;
  intro: string;
  phone: string;
  phoneInternational: string;
}

/**
 * Client Component — handles all Framer Motion animations in the Area Hero section.
 * The H1 is passed as `children` from the Server Component (AreaPageContent) so
 * it is included in the static SSR HTML, not the client bundle.
 */
export function AreaHeroAnimations({
  children,
  badgeLabel,
  intro,
  phone,
  phoneInternational,
}: AreaHeroAnimationsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Animated location badge pill */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={tween(0)}
        style={{ willChange: 'transform, opacity' }}
        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full mb-7 shadow-lg"
      >
        <MapPin className="w-4 h-4 text-amber-400" />
        <span className="text-sm font-semibold text-white">{badgeLabel}</span>
      </motion.div>

      {/* H1 — rendered by Server Component, SSR HTML, CSS animation only */}
      {children}

      {/* Animated subtitle */}
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={tween(0.2)}
        style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)', willChange: 'transform, opacity' }}
        className="text-base sm:text-lg md:text-xl text-teal-300 font-semibold mb-4"
      >
        Ihr Frisuren-Studio – Meisterbetrieb seit 2004
      </motion.p>

      {/* Animated intro text */}
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={tween(0.3)}
        style={{ willChange: 'transform, opacity' }}
        className="text-sm sm:text-base text-white break-words leading-relaxed max-w-xl mx-auto mb-10 text-shadow-soft font-medium"
      >
        {intro}
      </motion.p>

      {/* Animated CTA buttons */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={tween(0.45)}
        style={{ willChange: 'transform, opacity' }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <a
          href={`tel:${phoneInternational}`}
          className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
        >
          <Phone className="w-4 h-4" />
          {phone}
        </a>
        <Link
          href="/termin-buchen"
          className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
        >
          Termin buchen
        </Link>
      </motion.div>
    </>
  );
}

/** Scroll-to-content chevron — separate so it can be positioned absolutely */
export function AreaHeroChevron() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ willChange: 'opacity' }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      aria-hidden="true"
    >
      <ChevronDown className="w-6 h-6 animate-bounce" />
    </motion.div>
  );
}
