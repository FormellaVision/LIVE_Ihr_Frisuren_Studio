'use client';

import { useConsent } from '@/hooks/useConsent';
import { BUSINESS_INFO } from '@/lib/constants';
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
    return <MapPlaceholder title={title} description={description} />;
  }

  if (!consent?.marketing) {
    return <MapPlaceholder title={title} description={description} />;
  }

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '0.5rem', minHeight: '300px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={BUSINESS_INFO.googleMapsEmbed}
      title={title}
    />
  );
}
