'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Check, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="section-padding bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 id="cta-heading" className="heading-lg mb-6">Bereit für Ihren neuen Look?</h2>
          <p className="text-xl mb-10 text-white/90">
            Buchen Sie jetzt Ihren Termin bei Hamburgs Top-Friseur in Hamm.
            Wir freuen uns auf Sie!
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a
              href={`tel:${BUSINESS_INFO.phoneInternational}`}
              aria-label={`Jetzt anrufen: ${BUSINESS_INFO.phone}`}
              className="bg-white hover:bg-gray-100 text-teal-700 px-10 py-5 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Termin via WhatsApp buchen (öffnet in neuem Tab)"
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              aria-label={`E-Mail schreiben an ${BUSINESS_INFO.email}`}
              className="bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3 backdrop-blur-sm"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
              E-Mail
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white hover:bg-white hover:text-teal-700 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all inline-flex items-center gap-3"
            >
              <Calendar className="w-6 h-6" aria-hidden="true" />
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
