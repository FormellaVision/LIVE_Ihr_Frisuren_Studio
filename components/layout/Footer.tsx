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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content={BUSINESS_INFO.name} />
      <meta itemProp="telephone" content={BUSINESS_INFO.phoneInternational} />
      <meta itemProp="email" content={BUSINESS_INFO.email} />
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
            <div className="flex items-center gap-2 text-amber-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">
                {BUSINESS_INFO.reviews.rating} Sterne
              </span>
              <span className="text-gray-400">
                ({BUSINESS_INFO.reviews.count}+ Bewertungen)
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm break-all">{BUSINESS_INFO.email}</span>
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
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
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
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span>{BUSINESS_INFO.instagram}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-6">Öffnungszeiten</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-gray-400">
                <span>Montag</span>
                <span>Geschlossen</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Dienstag - Freitag</span>
                <span>{OPENING_HOURS.tuesday.times}</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Samstag</span>
                <span>{OPENING_HOURS.saturday.times}</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sonntag</span>
                <span>Geschlossen</span>
              </li>
              <li className="pt-3 mt-3 border-t border-gray-700">
                <div className="flex items-center gap-2 text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Afterwork Specials</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  {OPENING_HOURS.afterwork.weekdays} & {OPENING_HOURS.afterwork.saturday}
                  <br />
                  Regulärer Preis {OPENING_HOURS.afterwork.surcharge}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <a
                href={BUSINESS_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Auf Google Maps ansehen
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} {BUSINESS_INFO.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-gray-300 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">
                Datenschutz
              </Link>
              <Link
                href="/barrierefreiheit"
                className="hover:text-gray-300 transition-colors"
              >
                Barrierefreiheit
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #1f2937' }}>
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
