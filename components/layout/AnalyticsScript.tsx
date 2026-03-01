'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useConsent } from '@/hooks/useConsent';

const GA_ID = 'G-EYXFK59BYC';

export function AnalyticsScript() {
  const { consent, isLoaded } = useConsent();

  useEffect(() => {
    if (!isLoaded) return;

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consent?.analytics ? 'granted' : 'denied',
        ad_storage: consent?.marketing ? 'granted' : 'denied',
      });
    }
  }, [consent, isLoaded]);

  if (!isLoaded || !consent?.analytics) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              'anonymize_ip': true,
              'allow_google_signals': false,
              'allow_ad_personalization_signals': false
            });
          `,
        }}
      />
    </>
  );
}
