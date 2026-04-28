'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Star,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { PaymentBadges } from '@/components/shared/PaymentBadges';
import { CookieResetButton } from './CookieResetButton';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReviewCount } from '@/hooks/use-review-count';

function toWhatsAppNumber(raw: string) {
  return raw.replace(/\D/g, '');
}

export function Footer() {
  const { reviewCount } = useReviewCount();
  const currentYear = new Date().getFullYear();
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    setCurrentDay(new Date().getDay());
  }, []);

  const waNumber = toWhatsAppNumber(
    BUSINESS_INFO.whatsapp ||
      BUSINESS_INFO.phoneFormatted ||
      BUSINESS_INFO.phoneInternational
  );

  return (
    <footer
      className="bg-gray-900 text-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content={BUSINESS_INFO.name} />
      <meta itemProp="telephone" content={BUSINESS_INFO.phoneInternational} />
      <meta itemProp="email" content={BUSINESS_INFO.email} />

      <div className="container-custom section-padding">
        {/* Compact Trust + CTA Bar */}
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] px-4 sm:px-6 py-6 backdrop-blur-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Star className="h-5 w-5 fill-current" aria-hidden="true" />
                <span className="font-semibold">
                  {BUSINESS_INFO.reviews.rating} Sterne
                </span>
                <a 
                  href={BUSINESS_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  aria-label="Google Rezensionen ansehen oder schreiben (öffnet in neuem Tab)"
                >
                  ({reviewCount}+ Google Bewertungen)
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <a
                href={BUSINESS_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-300 hover:text-teal-300 transition-colors"
                aria-label="Adresse auf Google Maps ansehen (öffnet in neuem Tab)"
              >
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm leading-relaxed">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.postalCode}{' '}
                  {BUSINESS_INFO.address.city}-{BUSINESS_INFO.address.district}
                </span>
              </a>
            </div>

            <div className="flex gap-1.5 w-full sm:w-auto sm:justify-end">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="flex-1 sm:flex-none inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-amber-600 px-3 sm:px-5 py-2 text-[13px] sm:text-sm font-semibold text-white shadow-lg shadow-amber-600/20 transition-all hover:scale-[1.02] hover:bg-amber-500 hover:shadow-amber-600/35"
                aria-label="Jetzt anrufen"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Anrufen</span>
              </a>

              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-emerald-600 px-3 sm:px-5 py-2 text-[13px] sm:text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] hover:bg-emerald-500 hover:shadow-emerald-600/35"
                aria-label="WhatsApp öffnen"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.treatwell}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-violet-600 px-3 sm:px-5 py-2 text-[13px] sm:text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:scale-[1.02] hover:bg-violet-500 hover:shadow-violet-600/35"
                aria-label="Direkt bei Treatwell buchen"
              >
                <Star className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Buchen</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://res.cloudinary.com/dqkld61zu/image/upload/v1770245111/Ihr-Frisuren-Studio_transparent_obd4aa.png"
                alt="Ihr Frisuren-Studio Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <span className="font-playfair text-xl font-bold">
                  Ihr Frisuren-Studio
                </span>
                <span className="block text-xs text-gray-400">
                  Meisterbetrieb seit {BUSINESS_INFO.founded}
                </span>
              </div>
            </div>

            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Premium Friseur in Hamburg Hamm. Damen, Herren, Balayage &amp; Kosmetik.
              Mehrsprachiges Team. Meisterqualität seit 2004.
            </p>

            <div
              className="flex items-center gap-2 text-amber-400"
              aria-label={`Bewertung: ${BUSINESS_INFO.reviews.rating} von 5 Sternen`}
            >
              <Star className="w-5 h-5 fill-current" aria-hidden="true" />
              <span className="font-semibold" aria-hidden="true">
                {BUSINESS_INFO.reviews.rating} Sterne
              </span>
              <span className="text-gray-400">({reviewCount}+)</span>
            </div>
          </div>

          {/* Contact */}
          <section aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading" className="font-playfair text-lg font-bold mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  aria-label={`Anrufen: ${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" aria-hidden="true" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${waNumber}`}
                  aria-label="WhatsApp öffnen"
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" aria-hidden="true" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  aria-label={`E-Mail schreiben: ${BUSINESS_INFO.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm break-words min-w-0">{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <a
                  href={BUSINESS_INFO.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Adresse auf Google Maps ansehen (öffnet in neuem Tab)"
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">
                    <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>
                    <br />
                    <span itemProp="postalCode">{BUSINESS_INFO.address.postalCode}</span>{' '}
                    <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>
                    {'-'}
                    <span itemProp="addressRegion">{BUSINESS_INFO.address.district}</span>
                    <meta itemProp="addressCountry" content="DE" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Uns auf Google Maps ansehen (öffnet in neuem Tab)"
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 flex-shrink-0 text-teal-500" aria-hidden="true" />
                  <span className="text-sm font-medium">Google Maps</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram-Profil ${BUSINESS_INFO.instagram} öffnen (öffnet in neuem Tab)`}
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_INFO.instagram}</span>
                </a>
              </li>
            </ul>
          </section>

          {/* Hours */}
          <section aria-labelledby="footer-hours-heading">
            <h3 id="footer-hours-heading" className="font-playfair text-lg font-bold mb-6">
              Öffnungszeiten
            </h3>
            <ul className="space-y-3 text-sm">
              <li className={cn(
                "flex justify-between gap-4 transition-colors duration-300",
                currentDay !== null && currentDay === 1 ? "text-teal-400 font-bold" : "text-gray-400"
              )}>
                <span className="flex-shrink-0">Montag</span>
                <span className="text-right">Geschlossen</span>
              </li>
              <li className={cn(
                "flex justify-between gap-4 transition-colors duration-300",
                currentDay !== null && currentDay >= 2 && currentDay <= 5 ? "text-teal-400 font-bold" : "text-gray-300"
              )}>
                <span className="flex-shrink-0 min-w-0">Dienstag - Freitag</span>
                <span className="whitespace-nowrap text-right">
                  {OPENING_HOURS.tuesday.times}
                </span>
              </li>
              <li className={cn(
                "flex justify-between gap-4 transition-colors duration-300",
                currentDay !== null && currentDay === 6 ? "text-teal-400 font-bold" : "text-gray-300"
              )}>
                <span className="flex-shrink-0">Samstag</span>
                <span className="whitespace-nowrap text-right">
                  {OPENING_HOURS.saturday.times}
                </span>
              </li>
              <li className={cn(
                "flex justify-between gap-4 transition-colors duration-300",
                currentDay !== null && currentDay === 0 ? "text-teal-400 font-bold" : "text-gray-400"
              )}>
                <span className="flex-shrink-0">Sonntag</span>
                <span className="text-right">Geschlossen</span>
              </li>

              <li className="pt-3 mt-3 border-t border-gray-700">
                <div className="flex items-center gap-2 text-amber-400">
                  <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium text-sm">Afterwork Specials</span>
                </div>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  {OPENING_HOURS.afterwork.weekdays} &amp; {OPENING_HOURS.afterwork.saturday}
                  <br />
                  Regulärer Preis {OPENING_HOURS.afterwork.surcharge}
                </p>
              </li>
            </ul>
          </section>

          {/* Services + Catchment */}
          <nav aria-labelledby="footer-services-heading">
            <h3 id="footer-services-heading" className="font-playfair text-lg font-bold mb-6">
              Leistungen
            </h3>

            {/* Leistungen (no areas) */}
            <ul className="space-y-2">
              <li>
                <Link
                  href="/leistungen"
                  className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Alle Leistungen &amp; Preise
                </Link>
              </li>

              <li className="pt-3">
                <Link
                  href="/damenfriseur-hamburg-hamm"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Damenfriseur
                </Link>
              </li>
              <li>
                <Link
                  href="/herrenfriseur-hamburg-hamm"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Herrenfriseur
                </Link>
              </li>
              <li>
                <Link
                  href="/balayage-hamburg-hamm"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Balayage
                </Link>
              </li>
              <li>
                <Link
                  href="/haare-faerben-hamburg-hamm"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Haare färben
                </Link>
              </li>
              <li>
                <Link
                  href="/kosmetik-hamburg-hamm"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Kosmetik
                </Link>
              </li>

              <li className="pt-4">
                <Link
                  href="/einzugsgebiet"
                  className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Einzugsgebiet
                </Link>
              </li>

              <li>
                <Link
                  href="/friseur-hamburg-hamm"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Friseur Hamburg Hamm
                </Link>
              </li>
              <li>
                <Link
                  href="/einzugsgebiet/borgfelde"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Friseur Borgfelde
                </Link>
              </li>
              <li>
                <Link
                  href="/einzugsgebiet/hamburg-mitte"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Friseur Hamburg Mitte
                </Link>
              </li>
              <li>
                <Link
                  href="/einzugsgebiet/horn"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Friseur Horn
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="mb-6 pb-6 border-b border-gray-800">
            <PaymentBadges variant="dark" showLabel={true} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {BUSINESS_INFO.name}. Alle Rechte vorbehalten.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-end">
              <Link href="/impressum" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                Datenschutz
              </Link>
              <CookieResetButton />
              <Link href="/barrierefreiheit" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                Barrierefreiheit
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 flex justify-center">
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <span className="text-gray-400">Erstellt mit</span>
              <a
                href="https://formellavision.de"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#FF6B35] bg-clip-text text-transparent transition-transform hover:scale-[1.03]"
              >
                Formella Vision
              </a>
              <span className="text-[#00D4FF]">✨</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}