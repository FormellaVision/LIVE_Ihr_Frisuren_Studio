import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { getOrganizationSchema } from '@/lib/schema';
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

  return (
    <html lang="de" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0d9488" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EYXFK59BYC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EYXFK59BYC');
            `,
          }}
        />
      </head>
      <body className="font-montserrat pb-16 md:pb-0">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyMobileBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
