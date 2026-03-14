'use client';

import { useState, useEffect } from 'react';
import { useConsent } from '@/hooks/useConsent';
import { CookieSettings } from './CookieSettings';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieBanner() {
  const { consent, isLoaded, acceptAll, rejectAll, hasUserDecided } = useConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setShowBanner(!hasUserDecided);
    }
  }, [isLoaded, hasUserDecided]);

  useEffect(() => {
    const handleOpenBanner = () => {
      setShowBanner(true);
      setShowSettings(false);
    };

    window.addEventListener('open-cookie-banner', handleOpenBanner);
    return () => {
      window.removeEventListener('open-cookie-banner', handleOpenBanner);
    };
  }, []);

  if (!showBanner || !isLoaded) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wir nutzen Cookies und externe Dienste (Google Analytics, Google Maps)
                  für Analyse und Funktionalität. Diese Auswahl wird für 365 Tage gespeichert.
                  Sie können Ihre Einwilligung jederzeit über "Cookie-Einstellungen" im Footer
                  widerrufen. Mehr erfahren Sie in unserer{' '}
                  <a
                    href="/datenschutz"
                    className="text-teal-700 hover:text-teal-800 underline"
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>
              <button
                onClick={() => {
                  rejectAll();
                  setShowBanner(false);
                }}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 rounded p-1"
                aria-label="Banner schließen"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <Button
                onClick={() => {
                  acceptAll();
                  setShowBanner(false);
                }}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
              >
                Alle akzeptieren
              </Button>
              <Button
                onClick={() => {
                  rejectAll();
                  setShowBanner(false);
                }}
                className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Nur notwendige
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="ghost"
                className="flex-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 underline"
              >
                Einstellungen
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CookieSettings open={showSettings} onOpenChange={setShowSettings} />
    </>
  );
}
