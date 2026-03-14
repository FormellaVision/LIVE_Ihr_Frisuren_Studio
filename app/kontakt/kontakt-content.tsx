'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

interface KontaktContentProps {
  googleMap: ReactNode;
}

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function KontaktContent({ googleMap }: KontaktContentProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <motion.h2
              className="heading-md mb-6"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={tween(0)}
              viewport={{ once: true, margin: '-20px' }}
              style={{ willChange: 'transform, opacity' }}
            >
              Friseur Hamburg Hamm kontaktieren
            </motion.h2>

            {[
              {
                href: `tel:${BUSINESS_INFO.phoneInternational}`,
                icon: Phone,
                bg: 'bg-teal-600',
                title: 'Telefon',
                content: BUSINESS_INFO.phone,
                note: 'Mo geschlossen | Di-Fr 9-19 | Sa 8-14',
              },
              {
                href: `https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`,
                icon: MessageCircle,
                bg: 'bg-green-500',
                title: 'WhatsApp',
                content: BUSINESS_INFO.whatsapp,
                note: 'Schreiben Sie uns jederzeit',
              },
              {
                href: `mailto:${BUSINESS_INFO.email}`,
                icon: Mail,
                bg: 'bg-amber-500',
                title: 'E-Mail',
                content: BUSINESS_INFO.email,
                note: 'Antwort innerhalb von 24 Stunden',
              },
              {
                href: BUSINESS_INFO.instagramUrl,
                icon: Instagram,
                bg: 'bg-gradient-to-br from-pink-500 to-orange-400',
                title: 'Instagram',
                content: BUSINESS_INFO.instagram,
                note: 'Folgen Sie uns für Inspiration',
                external: true,
              },
            ].map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={tween(i * 0.1)}
                viewport={{ once: true, margin: '-20px' }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-2xl text-teal-600 font-semibold line-clamp-1">{item.content}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="space-y-6">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={tween(0.2)}
              viewport={{ once: true, margin: '-20px' }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    <strong>{BUSINESS_INFO.name}</strong>
                    <br />
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}-{BUSINESS_INFO.address.district}
                  </p>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <ExternalLink className="w-4 h-4" />
                Route auf Google Maps
              </a>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl shadow-lg text-white"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={tween(0.3)}
              viewport={{ once: true, margin: '-20px' }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-4">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Montag</span>
                      <span>Geschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dienstag - Freitag</span>
                      <span className="font-semibold">{OPENING_HOURS.tuesday.times}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag</span>
                      <span className="font-semibold">{OPENING_HOURS.saturday.times}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sonntag</span>
                      <span>Geschlossen</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-white/20">
                      <p className="text-amber-300 font-semibold">Afterwork Specials</p>
                      <p className="text-sm text-white/80">
                        {OPENING_HOURS.afterwork.weekdays} & {OPENING_HOURS.afterwork.saturday}
                        <br />
                        Regulärer Preis {OPENING_HOURS.afterwork.surcharge}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={tween(0.4)}
              viewport={{ once: true, margin: '-20px' }}
              style={{ willChange: 'transform, opacity' }}
            >
              {googleMap}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
