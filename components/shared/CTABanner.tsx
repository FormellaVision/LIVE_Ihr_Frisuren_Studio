'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = 'Jetzt Termin buchen',
  description = 'Wir freuen uns auf Ihren Besuch in Hamburg Hamm!',
}: CTABannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-gradient-to-br from-teal-600 to-teal-700"
    >
      <div className="container-custom text-center">
        <h2 className="heading-md text-white mb-4">{title}</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={`tel:${BUSINESS_INFO.phoneInternational}`}
            className="bg-white hover:bg-gray-100 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS_INFO.phone}
          </a>
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Termin via WhatsApp buchen (öffnet in neuem Tab)"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            aria-label={`E-Mail schreiben an ${BUSINESS_INFO.email}`}
            className="bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3 backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            E-Mail
          </a>
        </div>
      </div>
    </motion.section>
  );
}
