'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Brain as Train, Car, Clock } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { GoogleMap } from '@/components/shared/GoogleMap';

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function LocationSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="standort" aria-labelledby="location-heading" className="section-padding bg-warm-white">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={tween(0)}
          className="text-center mb-16"
        >
          <h2 id="location-heading" className="heading-lg mb-4">
            So finden Sie uns in Hamburg Hamm
          </h2>
          <p className="text-base sm:text-xl text-gray-600 break-words">
            {BUSINESS_INFO.address.street} · {BUSINESS_INFO.address.postalCode} Hamburg-{BUSINESS_INFO.address.district}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 md:items-stretch gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="h-full flex flex-col gap-6">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={tween(0)}
              className="flex-1 min-h-[320px] md:min-h-0"
            >
              <div className="h-full">
                <GoogleMap title="Ihr Frisuren-Studio Hamburg Hamm - Standort" />
              </div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={tween(0.06)}
              className="shrink-0 bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl shadow-lg text-white"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="flex-shrink-0">Dienstag - Freitag</span>
                      <span className="font-semibold whitespace-nowrap text-right">
                        {OPENING_HOURS.tuesday.times}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="flex-shrink-0">Samstag</span>
                      <span className="font-semibold whitespace-nowrap text-right">
                        {OPENING_HOURS.saturday.times}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 border-t border-white/20 pt-2 mt-2">
                      <span className="flex-shrink-0">Sonntag & Montag</span>
                      <span className="font-semibold text-right">Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="h-full flex flex-col gap-6">
            {[
              {
                icon: MapPin,
                iconBg: 'bg-teal-600',
                title: 'Adresse',
                content: (
                  <p className="text-gray-700">
                    <strong>{BUSINESS_INFO.name}</strong>
                    <br />
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}-{BUSINESS_INFO.address.district}
                  </p>
                ),
              },
              {
                icon: Train,
                iconBg: 'bg-amber-500',
                title: 'Öffentliche Verkehrsmittel',
                content: (
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>U-Bahn:</strong> U2, U4 - Haltestelle Burgstraße
                      <br />
                      <span className="text-sm text-gray-600">5 Minuten zu Fuß</span>
                    </p>
                    <p>
                      <strong>Bus:</strong> Linien 25, 130, 160, 261, 609, 610
                    </p>
                  </div>
                ),
              },
              {
                icon: Car,
                iconBg: 'bg-coral-500',
                title: 'Parkplätze',
                content: (
                  <p className="text-gray-700">
                    Parkplätze sind in der Umgebung der Hammer Landstraße verfügbar.
                  </p>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={tween(index * 0.07)}
                className="flex-1 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}
                    aria-hidden="true"
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
