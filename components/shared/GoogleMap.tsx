'use client';

import { useConsent } from '@/hooks/useConsent';
import { MapPlaceholder } from './MapPlaceholder';

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
  description?: string;
}

export function GoogleMap({
  latitude,
  longitude,
  zoom = 15,
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

  const mapUrl = new URL('https://www.google.com/maps/embed/v1/place');
  mapUrl.searchParams.append('key', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '');
  mapUrl.searchParams.append('q', `${latitude},${longitude}`);
  mapUrl.searchParams.append('zoom', zoom.toString());

  return (
    <iframe
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: '0.5rem' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={mapUrl.toString()}
      title={title}
    />
  );
}
