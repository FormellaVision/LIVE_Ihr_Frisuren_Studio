'use client';

import { useConsent } from '@/hooks/useConsent';
import { BUSINESS_INFO } from '@/lib/constants';
import { MapEmbed } from './MapEmbed';
import { MapPlaceholder } from './MapPlaceholder';

interface GoogleMapProps {
  title?: string;
  latitude?: number;
  longitude?: number;
}

export function GoogleMap({ title = 'Google Maps' }: GoogleMapProps) {
  const { consent, isLoaded } = useConsent();

  if (!isLoaded || !consent?.marketing) {
    return (
      <MapEmbed>
        <MapPlaceholder title={title} />
      </MapEmbed>
    );
  }

  return (
    <MapEmbed>
      <iframe
        className="w-full h-full flex-1"
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
