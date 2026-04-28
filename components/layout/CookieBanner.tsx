'use client';

import { useState, useEffect, useRef } from 'react';
import { useConsent } from '@/hooks/useConsent';
import { CookieSettings } from './CookieSettings';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieBanner() {
  const { consent, isLoaded, acceptAll, rejectAll, hasUserDecided } = useConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isLoaded) {
      setShowBanner(!hasUserDecided);
    }
  }, [isLoaded, hasUserDecided]);

  useEffect(() => {
    if (showBanner) {
      setTimeout(() => firstButtonRef.current?.focus(), 100);
    }
  }, [showBanner]);

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
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-teal-600 shadow-2xl animate-in slide-in-from-bottom duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 id="cookie-banner-title" className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                  Cookie-Einstellungen
                </h3>
                <p id="cookie-banner-desc" className="text-sm text-gray-600 leading-relaxed">
                  Wir nutzen Cookies und externe Dienste (Google Analytics, Google Maps)
                  für Analyse und Funktionalität. Diese Auswahl wird für 365 Tage gespeichert.
                  Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ im Footer
                  widerrufen. Mehr erfahren Sie in unserer{' '}
                  <a
                    href="/datenschutz"
                    className="text-teal-700 hover:text-teal-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 rounded"
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

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                ref={firstButtonRef}
                onClick={() => {
                  rejectAll();
                  setShowBanner(false);
                }}
                className="flex-1 order-2 sm:order-1 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300"
                aria-label="Nur notwendige Cookies akzeptieren (Ablehnen)"
              >
                Ablehnen
              </Button>
              <Button
                onClick={() => {
                  acceptAll();
                  setShowBanner(false);
                }}
                className="flex-1 order-1 sm:order-2 bg-teal-600 hover:bg-teal-700 text-white"
                aria-label="Alle Cookies akzeptieren"
              >
                Alle akzeptieren
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="ghost"
                className="flex-1 order-3 text-gray-500 hover:text-gray-800 hover:bg-gray-50 text-sm underline underline-offset-2"
                aria-label="Cookie-Einstellungen anpassen"
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
