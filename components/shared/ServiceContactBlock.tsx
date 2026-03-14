'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone, MessageCircle, Clock, MapPin, Moon } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function ServiceContactBlock() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={tween(0)}
            className="section-padding bg-warm-white"
            style={{ willChange: 'transform, opacity' }}
        >
            <div className="container-custom">
                <h2 className="heading-lg text-center mb-12">Jetzt Termin vereinbaren</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {/* Telefon */}
                    <a
                        href={`tel:${BUSINESS_INFO.phoneInternational}`}
                        className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    >
                        <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                            <Phone className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Anrufen</h3>
                        <p className="text-teal-600 font-semibold">{BUSINESS_INFO.phone}</p>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    >
                        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                            <MessageCircle className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                        <p className="text-emerald-600 font-semibold">Nachricht senden</p>
                    </a>

                    {/* Öffnungszeiten */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Öffnungszeiten</h3>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p>Di - Fr: {OPENING_HOURS.tuesday.times}</p>
                            <p>Sa: {OPENING_HOURS.saturday.times}</p>
                            <p className="text-gray-400">So & Mo: Geschlossen</p>
                        </div>
                    </div>

                    {/* Adresse */}
                    <a
                        href={BUSINESS_INFO.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    >
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                            <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Adresse</h3>
                        <p className="text-sm text-gray-600">
                            {BUSINESS_INFO.address.street}
                            <br />
                            {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                        </p>
                    </a>
                </div>

                {/* Afterwork Hinweis */}
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={tween(0.2)}
                    className="mt-8 max-w-2xl mx-auto"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <Moon className="w-5 h-5 text-amber-700" />
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-amber-800">Afterwork-Termine verfügbar</p>
                            <p className="text-amber-700">
                                {OPENING_HOURS.afterwork.weekdays} & {OPENING_HOURS.afterwork.saturday} · {OPENING_HOURS.afterwork.surcharge} Aufschlag
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
