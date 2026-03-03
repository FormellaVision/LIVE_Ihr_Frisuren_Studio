'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ExternalLink,
  Star,
} from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS, OPENING_HOURS } from '@/lib/constants';
import { PaymentBadges } from '@/components/shared/PaymentBadges';
import { CookieResetButton } from './CookieResetButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content={BUSINESS_INFO.name} />
      <meta itemProp="telephone" content={BUSINESS_INFO.phoneInternational} />
      <meta itemProp="email" content={BUSINESS_INFO.email} />
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Premium Friseur in Hamburg Hamm. Damen, Herren, Balayage & Kosmetik.
              Ihr mehrsprachiges Team mit Meisterqualität.
            </p>
            <div className="flex items-center gap-2 text-amber-400" aria-label={`Bewertung: ${BUSINESS_INFO.reviews.rating} von 5 Sternen`}>
              <Star className="w-5 h-5 fill-current" aria-hidden="true" />
              <span className="font-semibold" aria-hidden="true">
                {BUSINESS_INFO.reviews.rating} Sterne
              </span>
              <span className="text-gray-400">
                ({BUSINESS_INFO.reviews.count}+ Bewertungen)
              </span>
            </div>
          </div>

          <section aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading" className="font-playfair text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  aria-label={`Anrufen: ${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_INFO.phone}</span>
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
              <li
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
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
                  </span>
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

          <section aria-labelledby="footer-hours-heading">
            <h3 id="footer-hours-heading" className="font-playfair text-lg font-bold mb-6">Öffnungszeiten</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-2 text-gray-400">
                <span className="flex-shrink-0">Montag</span>
                <span className="text-right">Geschlossen</span>
              </li>
              <li className="flex justify-between gap-2 text-gray-300">
                <span className="flex-shrink-0 min-w-0">Dienstag - Freitag</span>
                <span className="whitespace-nowrap text-right">{OPENING_HOURS.tuesday.times}</span>
              </li>
              <li className="flex justify-between gap-2 text-gray-300">
                <span className="flex-shrink-0">Samstag</span>
                <span className="whitespace-nowrap text-right">{OPENING_HOURS.saturday.times}</span>
              </li>
              <li className="flex justify-between gap-2 text-gray-400">
                <span className="flex-shrink-0">Sonntag</span>
                <span className="text-right">Geschlossen</span>
              </li>
              <li className="pt-3 mt-3 border-t border-gray-700">
                <div className="flex items-center gap-2 text-amber-400">
                  <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium text-sm">Afterwork Specials</span>
                </div>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  {OPENING_HOURS.afterwork.weekdays} & {OPENING_HOURS.afterwork.saturday}
                  <br />
                  Regulärer Preis {OPENING_HOURS.afterwork.surcharge}
                </p>
              </li>
            </ul>
          </section>

          <nav aria-labelledby="footer-nav-heading">
            <h3 id="footer-nav-heading" className="font-playfair text-lg font-bold mb-6">Leistungen</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/friseur-hamburg-hamm" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Friseur Hamburg Hamm
                </Link>
              </li>
              <li>
                <Link href="/damenfriseur-hamburg-hamm" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Damenfriseur
                </Link>
              </li>
              <li>
                <Link href="/herrenfriseur-hamburg-hamm" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Herrenfriseur
                </Link>
              </li>
              <li>
                <Link href="/balayage-hamburg-hamm" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Balayage
                </Link>
              </li>
              <li>
                <Link href="/haare-faerben-hamburg-hamm" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Haare färben
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Alle Leistungen & Preise
                </Link>
              </li>
              <li>
                <Link href="/bewertungen" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Kundenbewertungen
                </Link>
              </li>
              <li>
                <Link href="/termin-buchen" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Termin buchen
                </Link>
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-700 space-y-1 mb-4">
              <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Stadtteile</p>
              <Link href="/areas/hamm" className="block text-gray-500 hover:text-teal-400 transition-colors text-xs">
                Hamburg Hamm
              </Link>
              <Link href="/areas/borgfelde" className="block text-gray-500 hover:text-teal-400 transition-colors text-xs">
                Borgfelde
              </Link>
              <Link href="/areas/hamburg-mitte" className="block text-gray-500 hover:text-teal-400 transition-colors text-xs">
                Hamburg Mitte
              </Link>
              <Link href="/areas/horn" className="block text-gray-500 hover:text-teal-400 transition-colors text-xs">
                Horn
              </Link>
            </div>
            <a
              href={BUSINESS_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uns auf Google Maps ansehen (öffnet in neuem Tab)"
              className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Google Maps
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="mb-6 pb-6 border-b border-gray-800">
            <PaymentBadges variant="dark" showLabel={true} />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
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
              <Link
                href="/barrierefreiheit"
                className="hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Barrierefreiheit
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #1f2937' }}>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ marginRight: '0.5rem', color: '#9ca3af' }}>Erstellt mit</span>
              <a
                href="https://formellavision.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(to right, #00D4FF, #8B5CF6, #FF6B35)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Formella Vision
              </a>
              <span style={{
                marginLeft: '0.5rem',
                color: '#00D4FF',
                animation: 'sparkle 2s ease-in-out infinite'
              }}>
                ✨
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
