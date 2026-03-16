'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Clock, Check, Car, Brain as Train, ChevronDown } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTABanner } from '@/components/shared/CTABanner';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ServiceCards } from '@/components/shared/ServiceCards';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';

const tween = (delay: number) => ({ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] });

export interface AreaData {
  name: string;
  slug: string;
  isMainLocation?: boolean;
  intro: string;
  distance: string;
  travelInfo: string;
  travelIcon: 'train' | 'car';
  highlights: string[];
  nearbyDistricts: string[];
  image: string;
}

const SERVICES = [
  { title: 'Damenfriseur Hamburg Hamm', description: 'Waschen, Schneiden & Föhnen', href: '/damenfriseur-hamburg-hamm' },
  { title: 'Herrenfriseur Hamburg Hamm', description: 'Moderne Herrenschnitte & Bartpflege', href: '/herrenfriseur-hamburg-hamm' },
  { title: 'Balayage Hamburg Hamm', description: 'Natürliche Highlights mit modernen Techniken', href: '/balayage-hamburg-hamm' },
  { title: 'Haare färben Hamburg Hamm', description: 'Professionelle Colorationen & Strähnen', href: '/haare-faerben-hamburg-hamm' },
];

interface Props {
  area: AreaData;
}

export function AreaPageContent({ area }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section className="relative h-screen -mt-16 flex items-center overflow-hidden pt-20">
        <Image
          src={area.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 35%' }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        <div className="relative z-10 container-custom w-full py-12">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={tween(0)}
              style={{ willChange: 'transform, opacity' }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full mb-7 shadow-lg"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                {area.isMainLocation ? `Friseur ${area.name}` : `Friseur nahe ${area.name}`}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={tween(0.1)}
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)', willChange: 'transform, opacity' }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 break-words"
            >
              {area.isMainLocation ? `Friseur ${area.name}` : `Friseur nahe ${area.name}`}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={tween(0.2)}
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)', willChange: 'transform, opacity' }}
              className="text-base sm:text-lg md:text-xl text-teal-300 font-semibold mb-4"
            >
              Ihr Frisuren-Studio – Meisterbetrieb seit 2004
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={tween(0.3)}
              style={{ willChange: 'transform, opacity' }}
              className="text-sm sm:text-base text-white break-words leading-relaxed max-w-xl mx-auto mb-10 text-shadow-soft font-medium"
            >
              {area.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={tween(0.45)}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/termin-buchen"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
              >
                Termin buchen
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tween(0.9)}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          aria-hidden="true"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      <Breadcrumb />

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <ScrollAnimationCard direction="left" delay={0.1} hasScale>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  {area.travelIcon === 'train' ? (
                    <Train className="w-6 h-6 text-teal-600" />
                  ) : (
                    <Car className="w-6 h-6 text-teal-600" />
                  )}
                  <h3 className="font-playfair text-xl font-bold">Anfahrt aus {area.name}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">{area.travelInfo}</p>
                <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-teal-700">{area.distance}</span>
                </div>
              </div>
            </ScrollAnimationCard>

            <ScrollAnimationCard direction="right" delay={0.2} hasScale>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-teal-600" />
                  <h3 className="font-playfair text-xl font-bold">Öffnungszeiten</h3>
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
            </ScrollAnimationCard>
          </div>

          <AnimatedSection direction="up" hasScale>
            <div className="mb-16">
              <ServiceCards
                title="Unsere Leistungen"
                subtitle={`für Kunden aus ${area.name}`}
                items={SERVICES}
                columns={4}
              />
            </div>
          </AnimatedSection>

          <ScrollAnimationCard direction="up" hasScale>
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
          </ScrollAnimationCard>

          {area.nearbyDistricts.length > 0 && (
            <AnimatedSection direction="up">
              <div className="max-w-3xl mx-auto mt-12">
                <h3 className="font-playfair text-xl font-bold mb-4 text-center">
                  Auch für Kunden aus der Umgebung
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {area.nearbyDistricts.map((district, index) => (
                    <motion.span
                      key={district}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={tween(index * 0.05)}
                      viewport={{ once: true, margin: '-20px' }}
                      style={{ willChange: 'transform, opacity' }}
                      className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 shadow-sm"
                    >
                      {district}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection direction="up" hasScale>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-playfair text-2xl font-bold mb-4">Termin vereinbaren</h2>
              <p className="text-gray-600 mb-6">
                Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp. Wir freuen uns auf Ihren Besuch aus {area.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
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
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-600 hover:border-teal-600 hover:text-teal-600 font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Alle Leistungen & Preise
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title={area.isMainLocation ? `Ihr Friseur in ${area.name}` : `Ihr Friseur nahe ${area.name}`}
        description={area.isMainLocation
          ? `Als Meisterbetrieb seit 2004 sind wir der Friseur Ihres Vertrauens direkt in Hamburg-Hamm – für Damen, Herren, Balayage und Haare färben.`
          : `Kundinnen und Kunden aus ${area.name} besuchen uns in unserem Salon in Hamburg-Hamm – als Meisterbetrieb seit 2004 in nur wenigen Minuten erreichbar.`}
      />
    </>
  );
}
