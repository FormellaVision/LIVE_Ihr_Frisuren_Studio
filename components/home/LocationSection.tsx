'use client';

import { motion } from 'framer-motion';
import { MapPin, Brain as Train, Car, Clock } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { GoogleMap } from '@/components/shared/GoogleMap';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function LocationSection() {
  return (
    <section id="standort" aria-labelledby="location-heading" className="section-padding bg-warm-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="location-heading" className="heading-lg mb-4">
            So finden Sie uns in Hamburg Hamm
          </h2>
          <p className="text-base sm:text-xl text-gray-600 break-words">
            {BUSINESS_INFO.address.street} · {BUSINESS_INFO.address.postalCode} Hamburg-{BUSINESS_INFO.address.district}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* LEFT: Map + Öffnungszeiten */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GoogleMap
                latitude={BUSINESS_INFO.coordinates.latitude}
                longitude={BUSINESS_INFO.coordinates.longitude}
                title="Ihr Frisuren-Studio Hamburg Hamm - Standort"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl shadow-lg text-white"
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

          {/* RIGHT: Adresse + ÖPNV + Parkplätze */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <MapPin className="w-6 h-6 text-white" />
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
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Öffentliche Verkehrsmittel</h3>
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
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Parkplätze</h3>
                  <p className="text-gray-700">
                    Parkplätze sind in der Umgebung der Hammer Landstraße verfügbar.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}