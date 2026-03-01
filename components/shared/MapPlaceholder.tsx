'use client';

import { useState, useEffect } from 'react';
import { useConsent } from '@/hooks/useConsent';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { CookieSettings } from '@/components/layout/CookieSettings';

interface MapPlaceholderProps {
  title?: string;
  description?: string;
}

export function MapPlaceholder({
  title = 'Google Maps',
  description = 'Um die Karte zu sehen, aktivieren Sie bitte Marketing-Cookies in unseren Cookie-Einstellungen.',
}: MapPlaceholderProps) {
  const { consent, isLoaded } = useConsent();
  const [showSettings, setShowSettings] = useState(false);

  if (!isLoaded || !consent) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse" />
    );
  }

  if (consent.marketing) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Google Maps wird geladen...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex flex-col items-center justify-center gap-4 border border-gray-300">
        <MapPin className="w-12 h-12 text-gray-400" />
        <h3 className="text-lg font-semibold text-gray-700 text-center px-4">
          {title}
        </h3>
        <p className="text-sm text-gray-600 text-center max-w-xs px-4">
          {description}
        </p>
        <Button
          onClick={() => setShowSettings(true)}
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white"
        >
          Cookies aktualisieren
        </Button>
      </div>

      <CookieSettings open={showSettings} onOpenChange={setShowSettings} />
    </>
  );
}
