/**
 * NAP (Name, Address, Phone) Consistency Component
 *
 * Ensures consistent Name, Address, and Phone information across all pages
 * Implements microdata attributes for search engine recognition
 * Used in Footer and Contact pages for local SEO
 */

import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface NAPInfoProps {
  layout?: 'vertical' | 'horizontal' | 'compact';
  showHours?: boolean;
  className?: string;
}

export function NAPInfo({
  layout = 'vertical',
  showHours = false,
  className = '',
}: NAPInfoProps) {
  const isVertical = layout === 'vertical';
  const isCompact = layout === 'compact';

  return (
    <div
      className={`${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Hidden meta tags for schema.org recognition */}
      <meta itemProp="name" content={BUSINESS_INFO.name} />
      <meta itemProp="telephone" content={BUSINESS_INFO.phoneInternational} />
      <meta itemProp="email" content={BUSINESS_INFO.email} />
      <meta
        itemProp="image"
        content="https://res.cloudinary.com/dqkld61zu/image/upload/v1770218177/Ihr_Frisuren-Studio_Au%C3%9Fenansicht_oyydcb.webp"
      />
      <meta
        itemProp="priceRange"
        content="$$ (ab 18€ für Herrenhaarschnitt bis 179€ für Balayage)"
      />

      {/* Address with microdata */}
      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className={isCompact ? 'text-sm' : ''}
      >
        <meta itemProp="streetAddress" content={BUSINESS_INFO.address.street} />
        <meta itemProp="addressLocality" content={BUSINESS_INFO.address.city} />
        <meta itemProp="postalCode" content={BUSINESS_INFO.address.postalCode} />
        <meta itemProp="addressCountry" content="DE" />

        <div className={isVertical || isCompact ? 'space-y-3' : 'flex gap-8'}>
          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className={isCompact ? 'w-4 h-4 mt-0.5 flex-shrink-0' : 'w-5 h-5 mt-0.5 flex-shrink-0'} />
            <div>
              <p className={isCompact ? 'text-xs font-semibold' : 'text-sm font-semibold'}>
                Adresse
              </p>
              <address className={isCompact ? 'text-xs not-italic' : 'text-sm not-italic'}>
                <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>
                <br />
                <span itemProp="postalCode">{BUSINESS_INFO.address.postalCode}</span>{' '}
                <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>
                {' '}
                <span className="text-gray-500">({BUSINESS_INFO.address.district})</span>
              </address>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className={isCompact ? 'w-4 h-4 mt-0.5 flex-shrink-0' : 'w-5 h-5 mt-0.5 flex-shrink-0'} />
            <div>
              <p className={isCompact ? 'text-xs font-semibold' : 'text-sm font-semibold'}>
                Telefon
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                itemProp="telephone"
                className={isCompact ? 'text-xs hover:underline' : 'text-sm hover:underline'}
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className={isCompact ? 'w-4 h-4 mt-0.5 flex-shrink-0' : 'w-5 h-5 mt-0.5 flex-shrink-0'} />
            <div>
              <p className={isCompact ? 'text-xs font-semibold' : 'text-sm font-semibold'}>
                E-Mail
              </p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                itemProp="email"
                className={isCompact ? 'text-xs hover:underline' : 'text-sm hover:underline'}
              >
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Opening Hours with microdata */}
      {showHours && (
        <div className={`mt-6 pt-6 border-t border-gray-700 ${isCompact ? 'text-xs' : 'text-sm'}`}>
          <div className="flex items-start gap-3">
            <Clock className={isCompact ? 'w-4 h-4 mt-0.5 flex-shrink-0' : 'w-5 h-5 mt-0.5 flex-shrink-0'} />
            <div>
              <p className={isCompact ? 'text-xs font-semibold' : 'text-sm font-semibold'}>
                Öffnungszeiten
              </p>
              <ul className="space-y-1">
                <li className="flex justify-between gap-4">
                  <span>Montag:</span>
                  <span className="text-gray-400">Geschlossen</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Dienstag - Freitag:</span>
                  <span>{OPENING_HOURS.tuesday.times}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Samstag:</span>
                  <span>{OPENING_HOURS.saturday.times}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sonntag:</span>
                  <span className="text-gray-400">Geschlossen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Geo coordinates for local search */}
      <meta itemProp="latitude" content={BUSINESS_INFO.coordinates.latitude.toString()} />
      <meta itemProp="longitude" content={BUSINESS_INFO.coordinates.longitude.toString()} />

      {/* Business category */}
      <meta itemProp="additionalType" content="https://schema.org/BeautySalon" />
    </div>
  );
}
