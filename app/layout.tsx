import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { AnalyticsScript } from '@/components/layout/AnalyticsScript';
import { getOrganizationSchema, getBrandOrganizationSchema } from '@/lib/schema';
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

// Absolute OG image (1200x630 recommended) for previews on Google/Facebook/X/Slack.
const OG_IMAGE_URL =
  'https://res.cloudinary.com/dqkld61zu/image/upload/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp';

export const metadata: Metadata = {
  metadataBase: new URL('https://ihr-frisuren-studio.de'),
  title: {
    default: 'Friseur Hamburg Hamm | Meisterbetrieb seit 2004 · Ihr Frisuren-Studio',
    template: '%s | Ihr Frisuren-Studio',
  },
  description: `Ihr Friseur in Hamburg Hamm – Meisterbetrieb seit 2004. Damen, Herren, Balayage, Kosmetik. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating}). Tel: ${BUSINESS_INFO.phone}`,
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
    title: 'Friseur Hamburg Hamm | Meisterbetrieb seit 2004 · Ihr Frisuren-Studio',
    description: `Ihr Friseur in Hamburg Hamm – Meisterbetrieb seit 2004. Damen, Herren, Balayage, Kosmetik. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating})`,
    url: 'https://ihr-frisuren-studio.de/',
    siteName: 'Ihr Frisuren-Studio Hamburg Hamm',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Ihr Frisuren-Studio – Friseur Hamburg Hamm',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Friseur Hamburg Hamm | Meisterbetrieb seit 2004 · Ihr Frisuren-Studio',
    description: `Ihr Friseur in Hamburg Hamm – Meisterbetrieb seit 2004 Tel: ${BUSINESS_INFO.phone}`,
    images: [OG_IMAGE_URL],
  },
  alternates: {
    canonical: 'https://ihr-frisuren-studio.de/',
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg Hamm',
    'geo.position': `${BUSINESS_INFO.coordinates.latitude};${BUSINESS_INFO.coordinates.longitude}`,
    ICBM: `${BUSINESS_INFO.coordinates.latitude}, ${BUSINESS_INFO.coordinates.longitude}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = getOrganizationSchema();
  const brandSchema = getBrandOrganizationSchema();

  return (
    <html lang="de" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dqkld61zu/image/upload/v1772399060/2face_Logo_zczbdd.svg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dqkld61zu/image/upload/q_auto,f_auto/v1770218177/Ihr_Frisuren-Studio_Au%C3%9Fenansicht_oyydcb.webp"
          fetchPriority="high"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dqkld61zu/image/upload/v1772417125/2face_Favicon_white_qxrwom.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dqkld61zu/image/upload/v1772417125/2face_Favicon_white_qxrwom.svg"
        />
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
      <body className="font-montserrat sm:pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          Zum Hauptinhalt springen
        </a>
        <Navigation />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
      </body>
    </html>
  );
}