// Server Component — no 'use client'
// All SEO-critical content renders as static SSR HTML.

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Check, Car, Brain as Train } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceCards } from '@/components/shared/ServiceCards';
import { AreaHeroAnimations, AreaHeroChevron } from '@/components/areas/AreaHeroAnimations';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';

export interface AreaData {
  name: string;
  slug: string;
  h1Title?: string;
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
  const displayTitle = area.h1Title || (area.isMainLocation ? `Friseur ${area.name}` : `Friseur nahe ${area.name}`);

  return (
    <>
      {/* ── HERO ── */}
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
            <AreaHeroAnimations
              badgeLabel={displayTitle}
              intro={area.intro}
              phone={BUSINESS_INFO.phone}
              phoneInternational={BUSINESS_INFO.phoneInternational}
            >
              {/* H1 — passed as children from Server Component: SSR HTML + CSS animation */}
              <h1
                className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 break-words animate-hero-heading"
                style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
              >
                {displayTitle}
              </h1>
            </AreaHeroAnimations>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <AreaHeroChevron />
      </section>

      <Breadcrumb />

      {/* ── ANFAHRT & ÖFFNUNGSZEITEN ── Pure static HTML, no Client wrappers */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">

            {/* Anfahrt */}
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

            {/* Öffnungszeiten */}
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
          </div>

          {/* ── LEISTUNGEN ── ServiceCards is Client, but its labels are plain text */}
          <div className="mb-16">
            <ServiceCards
              title="Unsere Leistungen"
              subtitle={`für Kunden aus ${area.name}`}
              items={SERVICES}
              columns={4}
            />
          </div>

          {/* ── HIGHLIGHTS ── Pure static HTML */}
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

          {/* ── UMGEBUNG ── Pure static HTML, no motion.span */}
          {area.nearbyDistricts.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12">
              <h3 className="font-playfair text-xl font-bold mb-4 text-center">
                Auch für Kunden aus der Umgebung
              </h3>
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

      {/* ── TERMIN-CTA ── Pure static HTML */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
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
