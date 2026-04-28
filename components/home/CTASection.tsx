'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="cta-heading" className="section-padding bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 id="cta-heading" className="heading-lg mb-6">Bereit für Ihren neuen Look?</h2>
          <p className="text-xl mb-10 text-white/90">
            Buchen Sie jetzt Ihren Termin bei Hamburgs Top-Friseur in Hamm.
            Wir freuen uns auf Sie!
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-8">
            <a
              href={`tel:${BUSINESS_INFO.phoneInternational}`}
              aria-label={`Jetzt anrufen: ${BUSINESS_INFO.phone}`}
              className="bg-amber-600 hover:bg-amber-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Termin via WhatsApp buchen (öffnet in neuem Tab)"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2 sm:gap-3"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={BUSINESS_INFO.treatwell}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Online bei Treatwell buchen (öffnet in neuem Tab)"
              className="bg-violet-600 hover:bg-violet-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2 sm:gap-3"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
              Online buchen (Treatwell)
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white hover:bg-white hover:text-teal-700 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all inline-flex items-center gap-2 sm:gap-3"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
              Kontakt
            </Link>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm text-white/80 list-none">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" aria-hidden="true" />
              Antwort in 24h
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" aria-hidden="true" />
              Meisterbetrieb seit {BUSINESS_INFO.founded}
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" aria-hidden="true" />
              {BUSINESS_INFO.reviews.count}+ Top-Bewertungen ({BUSINESS_INFO.reviews.rating})
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
