'use client';

import { useConsent } from '@/hooks/useConsent';
import { MapPin } from 'lucide-react';

interface MapPlaceholderProps {
  title?: string;
}

export function MapPlaceholder({ title = 'Google Maps' }: MapPlaceholderProps) {
  const { consent, isLoaded, updateConsent } = useConsent();

  if (!isLoaded || !consent) {
    return <div className="w-full h-full bg-gray-200 animate-pulse" />;
  }

  if (consent.marketing) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Google Maps wird geladen...</p>
      </div>
    );
  }

  const handleLoad = () => {
    updateConsent({ ...consent, marketing: true });
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 flex flex-col items-center justify-center gap-4 border border-stone-300 rounded-2xl px-6">
      <MapPin className="w-10 h-10 text-stone-400" />
      <div className="text-center">
        <h3 className="text-base font-semibold text-stone-700 mb-1">{title}</h3>
        <p className="text-sm text-stone-500 max-w-xs leading-relaxed">
          Durch das Laden der Karte werden Daten (inkl. Ihrer IP-Adresse) an Google in die USA übertragen.
        </p>
      </div>
      <button
        onClick={handleLoad}
        className="mt-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
      >
        Karte laden
      </button>
      <p className="text-xs text-stone-400 text-center">
        Mit dem Klick stimmen Sie der Verarbeitung gemäß unserer{' '}
        <a href="/datenschutz" className="underline hover:text-stone-600">Datenschutzerklärung</a> zu.
      </p>
    </div>
  );
}
