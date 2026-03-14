'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function KarriereClosing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={tween(0)}
          className="text-center"
          style={{ willChange: 'transform, opacity' }}
        >
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4">Noch Fragen?</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-5">
            Persönlich, direkt, unkompliziert
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto leading-relaxed mb-10">
            Wir legen Wert auf kurze Wege. Nach deiner Bewerbung melden wir uns zeitnah bei dir – für ein erstes, unverbindliches Kennenlerngespräch. Versprochen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            <div className="bg-white/8 rounded-xl p-5 border border-white/10 text-center">
              <div className="w-10 h-10 bg-teal-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-teal-400" />
              </div>
              <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">Anrufen</p>
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="text-white font-semibold hover:text-amber-400 transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="bg-white/8 rounded-xl p-5 border border-white/10 text-center">
              <div className="w-10 h-10 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">WhatsApp</p>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneInternational.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-green-400 transition-colors"
              >
                Nachricht senden
              </a>
            </div>

            <div className="bg-white/8 rounded-xl p-5 border border-white/10 text-center">
              <div className="w-10 h-10 bg-amber-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">E-Mail</p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-white font-semibold hover:text-amber-400 transition-colors text-sm break-all"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-500 text-sm">
              <span className="text-gray-300 font-medium">{BUSINESS_INFO.name}</span>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}-{BUSINESS_INFO.address.district}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
