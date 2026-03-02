'use client';

import { useConsent } from '@/hooks/useConsent';
import { BUSINESS_INFO } from '@/lib/constants';
import { MapEmbed } from './MapEmbed';
import { MapPlaceholder } from './MapPlaceholder';

interface GoogleMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  title?: string;
  description?: string;
}

export function GoogleMap({
  title = 'Google Maps',
  description = 'Um die Karte zu sehen, aktivieren Sie bitte Marketing-Cookies in unseren Cookie-Einstellungen.',
}: GoogleMapProps) {
  const { consent, isLoaded } = useConsent();

  if (!isLoaded) {
    return (
      <MapEmbed>
        <MapPlaceholder title={title} description={description} />
      </MapEmbed>
    );
  }

  if (!consent?.marketing) {
    return (
      <MapEmbed>
        <MapPlaceholder title={title} description={description} />
      </MapEmbed>
    );
  }

  return (
    <MapEmbed>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={BUSINESS_INFO.googleMapsEmbed}
        title={title}
      />
    </MapEmbed>
  );
}
