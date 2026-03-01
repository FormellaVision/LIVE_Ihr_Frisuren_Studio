import { useState, useEffect } from 'react';

export type ConsentSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const useConsent = () => {
  const [consent, setConsent] = useState<ConsentSettings | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('user-consent');
    if (saved) {
      try {
        setConsent(JSON.parse(saved));
      } catch {
        setConsent({ essential: true, analytics: false, marketing: false });
      }
    } else {
      setConsent({ essential: true, analytics: false, marketing: false });
    }
    setIsLoaded(true);
  }, []);

  const updateConsent = (newSettings: ConsentSettings) => {
    setConsent(newSettings);
    localStorage.setItem('user-consent', JSON.stringify(newSettings));

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

  return { consent, updateConsent, acceptAll, rejectAll, isLoaded };
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
