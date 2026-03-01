import { useState, useEffect } from 'react';

export type ConsentSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentData = {
  settings: ConsentSettings;
  timestamp: number;
  consentId: string;
};

const generateConsentId = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'cs_';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const CONSENT_VALIDITY_MS = 365 * 24 * 60 * 60 * 1000;

export const useConsent = () => {
  const [consent, setConsent] = useState<ConsentSettings | null>(null);
  const [consentId, setConsentId] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('user-consent');
    const now = Date.now();

    if (saved) {
      try {
        const data: ConsentData = JSON.parse(saved);

        if (now - data.timestamp > CONSENT_VALIDITY_MS) {
          localStorage.removeItem('user-consent');
          setConsent({ essential: true, analytics: false, marketing: false });
          setConsentId('');
        } else {
          setConsent(data.settings);
          setConsentId(data.consentId);
        }
      } catch {
        setConsent({ essential: true, analytics: false, marketing: false });
        setConsentId('');
      }
    } else {
      setConsent({ essential: true, analytics: false, marketing: false });
      setConsentId('');
    }
    setIsLoaded(true);
  }, []);

  const updateConsent = (newSettings: ConsentSettings) => {
    setConsent(newSettings);

    const newConsentId = consentId || generateConsentId();
    setConsentId(newConsentId);

    const consentData: ConsentData = {
      settings: newSettings,
      timestamp: Date.now(),
      consentId: newConsentId,
    };

    localStorage.setItem('user-consent', JSON.stringify(consentData));

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: newSettings.analytics ? 'granted' : 'denied',
        ad_storage: newSettings.marketing ? 'granted' : 'denied',
      });
    }

    window.dispatchEvent(
      new CustomEvent('consent-updated', { detail: newSettings })
    );
  };

  const acceptAll = () => {
    updateConsent({ essential: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    updateConsent({ essential: true, analytics: false, marketing: false });
  };

  const openBanner = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-banner'));
  };

  return { consent, consentId, updateConsent, acceptAll, rejectAll, isLoaded, openBanner };
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
