import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { AnalyticsScript } from '@/components/layout/AnalyticsScript';
import { getOrganizationSchema } from '@/lib/schema';
import { getContactPointSchema } from '@/lib/local-seo';
import { BUSINESS_INFO } from '@/lib/constants';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.website),
  title: {
    default: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
    template: '%s | Ihr Frisuren-Studio Hamburg Hamm',
  },
  description: `Premium Friseur in Hamburg Hamm seit 2004. Damen, Herren, Balayage, Kosmetik. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating}) Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    'friseur hamburg hamm',
    'friseur hamm',
    'friseursalon hamburg hamm',
    'meisterbetrieb hamburg',
    'balayage hamburg hamm',
    'damenfriseur hamburg hamm',
    'herrenfriseur hamburg hamm',
    'friseur hamburg',
    'haare färben hamburg',
  ],
  authors: [{ name: BUSINESS_INFO.owner }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772417125/2face_Favicon_white_qxrwom.svg',
    apple: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772417125/2face_Favicon_white_qxrwom.svg',
  },
  openGraph: {
    title: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
    description: `Premium Friseur in Hamburg Hamm seit 2004. Damen, Herren, Balayage, Kosmetik. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating})`,
    url: BUSINESS_INFO.website,
    siteName: 'Ihr Frisuren-Studio Hamburg Hamm',
    images: [
      {
        url: `${BUSINESS_INFO.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ihr Frisuren-Studio - Premium Friseur in Hamburg Hamm',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio',
    description: `Premium Friseur in Hamburg Hamm seit 2004 Tel: ${BUSINESS_INFO.phone}`,
    images: [`${BUSINESS_INFO.website}/og-image.jpg`],
  },
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg Hamm',
    'geo.position': `${BUSINESS_INFO.coordinates.latitude};${BUSINESS_INFO.coordinates.longitude}`,
    'ICBM': `${BUSINESS_INFO.coordinates.latitude}, ${BUSINESS_INFO.coordinates.longitude}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = getOrganizationSchema();
  const contactPointSchema = getContactPointSchema();

  return (
    <html lang="de" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dqkld61zu/image/upload/v1772417125/2face_Favicon_white_qxrwom.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dqkld61zu/image/upload/v1772417125/2face_Favicon_white_qxrwom.svg" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="application-name" content="Ihr Frisuren-Studio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ihr Frisuren-Studio" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
              });
            `,
          }}
        />
      </head>
      <body className="font-montserrat pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          Zum Hauptinhalt springen
        </a>
        <Navigation />
        <div className="h-16" aria-hidden="true" />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileBar />
        <CookieBanner />
        <AnalyticsScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
        />
      </body>
    </html>
  );
}
