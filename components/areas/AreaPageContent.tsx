'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Check, Car, Train } from 'lucide-react';
import { CTABanner } from '@/components/shared/CTABanner';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';

export interface AreaData {
  name: string;
  slug: string;
  intro: string;
  distance: string;
  travelInfo: string;
  travelIcon: 'train' | 'car';
  highlights: string[];
  nearbyDistricts: string[];
  image: string;
}

const SERVICES = [
  { href: '/damenfriseur-hamburg-hamm', label: 'Damenfriseur', desc: 'Waschen, Schneiden & Föhnen ab 43€' },
  { href: '/herrenfriseur-hamburg-hamm', label: 'Herrenfriseur', desc: 'Maschinenschnitt ab 18€, Design-Schnitt 34€' },
  { href: '/balayage-hamburg-hamm', label: 'Balayage', desc: 'Natürliche Highlights ab 179€ inkl. Schnitt' },
  { href: '/leistungen', label: 'Kosmetik & Alle Leistungen', desc: 'Gesichtsbehandlung, Maniküre & mehr' },
];

interface Props {
  area: AreaData;
}

export function AreaPageContent({ area }: Props) {
  return (
    <>
      <section
        className="relative pt-10 pb-16 md:pb-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(249,247,244,0.7), rgba(249,247,244,0.6)), url('${area.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-md"
            >
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-gray-800">Friseur nahe {area.name}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-4"
            >
              Friseur {area.name} Hamburg
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-teal-600 font-semibold mb-4"
            >
              Ihr Frisuren-Studio – Meisterbetrieb seit 2004
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-gray-600 leading-relaxed"
            >
              {area.intro}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                {area.travelIcon === 'train' ? (
                  <Train className="w-6 h-6 text-teal-600" />
                ) : (
                  <Car className="w-6 h-6 text-teal-600" />
                )}
                <h2 className="font-playfair text-xl font-bold">Anfahrt aus {area.name}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{area.travelInfo}</p>
              <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">{area.distance}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
                <h2 className="font-playfair text-xl font-bold">Öffnungszeiten</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-gray-500">
                  <span>Montag</span>
                  <span>Geschlossen</span>
                </li>
                <li className="flex justify-between text-gray-800 font-medium">
                  <span>Dienstag – Freitag</span>
                  <span>{OPENING_HOURS.tuesday.times}</span>
                </li>
                <li className="flex justify-between text-gray-800 font-medium">
                  <span>Samstag</span>
                  <span>{OPENING_HOURS.saturday.times}</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Sonntag</span>
                  <span>Geschlossen</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-amber-600 font-medium">
                Afterwork-Termine {OPENING_HOURS.afterwork.weekdays} (+{OPENING_HOURS.afterwork.surcharge})
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-playfair text-2xl font-bold text-center mb-8">
              Unsere Leistungen für Kunden aus {area.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <h3 className="font-playfair text-lg font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-sm text-gray-500">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Warum Kunden aus {area.name} uns wählen
              </h2>
              <ul className="space-y-3">
                {area.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {area.nearbyDistricts.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12">
              <h2 className="font-playfair text-xl font-bold mb-4 text-center">
                Auch für Kunden aus der Umgebung
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {area.nearbyDistricts.map((district) => (
                  <span
                    key={district}
                    className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 shadow-sm"
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-2xl font-bold mb-4">Termin vereinbaren</h2>
            <p className="text-gray-600 mb-6">
              Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp. Wir freuen uns auf Ihren Besuch aus {area.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Kontakt & Anfahrt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ihr Friseur aus ${area.name}`}
        description={`Als Meisterbetrieb seit 2004 sind wir der Friseur Ihres Vertrauens in Hamburg – erreichbar aus ${area.name} in wenigen Minuten.`}
      />
    </>
  );
}
