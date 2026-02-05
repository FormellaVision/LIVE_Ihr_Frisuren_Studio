'use client';

import { motion } from 'framer-motion';
import { MapPin, Train, Car, Clock } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function LocationSection() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">So finden Sie uns in Hamburg Hamm</h2>
          <p className="text-xl text-gray-600">
            {BUSINESS_INFO.address.street} - {BUSINESS_INFO.address.postalCode} Hamburg-{BUSINESS_INFO.address.district}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[450px]"
          >
            <iframe
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ihr Frisuren-Studio Hamburg Hamm - Standort"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center flex-shrink-0">
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

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl shadow-lg text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Dienstag - Freitag</span>
                      <span className="font-semibold">{OPENING_HOURS.tuesday.times}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag</span>
                      <span className="font-semibold">{OPENING_HOURS.saturday.times}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                      <span>Sonntag & Montag</span>
                      <span className="font-semibold">Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
