import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Hamburg-Mitte – Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
  description: `Friseur nahe Hamburg-Mitte – Meisterbetrieb seit 2004 in Hamburg-Hamm. Nur 10 Min. mit U2/U4. Damen ab 33€, Herren ab 18€, Balayage ab 179€. Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    'friseur hamburg mitte',
    'friseur mitte hamburg',
    'haarschnitt hamburg mitte',
    'friseursalon hamburg mitte',
    'damenfriseur hamburg mitte',
    'herrenfriseur hamburg mitte',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/hamburg-mitte` },
  openGraph: {
    title: 'Friseur Hamburg-Mitte – Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
    description: `Premium Friseur nahe Hamburg-Mitte. Nur 10 Min. mit U2/U4 Burgstraße. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/hamburg-mitte`,
  },
};

export default function HamburgMittePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Stadtteile', url: `${BUSINESS_INFO.website}/areas/hamm` },
    { name: 'Friseur Hamburg-Mitte', url: `${BUSINESS_INFO.website}/areas/hamburg-mitte` },
  ]);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${BUSINESS_INFO.website}/#business`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phoneInternational,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'DE',
    },
    areaServed: [
      { '@type': 'Neighborhood', name: 'Hamburg-Mitte', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
      { '@type': 'Neighborhood', name: 'Hamm', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
      { '@type': 'Neighborhood', name: 'St. Georg', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(BUSINESS_INFO.reviews.rating),
      reviewCount: String(BUSINESS_INFO.reviews.count),
    },
  };

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Hamburg-Mitte',
          slug: 'mitte',
          intro: `Suchen Sie einen erstklassigen Friseur in Hamburg-Mitte? Ihr Frisuren-Studio in Hamburg-Hamm liegt nur 10 Minuten vom Stadtzentrum entfernt – per U2 oder U4 direkt ab Hauptbahnhof. Meisterqualität, mehrsprachige Beratung und über ${BUSINESS_INFO.reviews.count} begeisterte Kundenbewertungen sprechen für sich.`,
          distance: 'ca. 10 Minuten vom Stadtzentrum',
          travelInfo: `Von Hamburg-Mitte und St. Georg fahren Sie mit der U2 oder U4 direkt zur Haltestelle Burgstraße – von dort sind es 5 Minuten zu Fuß zur ${BUSINESS_INFO.address.street}. Alternativ ab Hauptbahnhof: S-Bahn bis Berliner Tor, dann Bus 25 direkt zum Salon.`,
          travelIcon: 'train',
          highlights: [
            'Schnell erreichbar aus der Hamburger City – 10 Min. per U-Bahn',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} ★)`,
            'Entspannte Atmosphäre abseits des Innenstadttrubels',
            'Damen ab 33€, Herrenschnitt ab 18€, Balayage ab 179€',
            'Mehrsprachig: Deutsch, Englisch, Türkisch, Persisch',
            'Afterwork-Termine Di–Fr nach 19:00 Uhr verfügbar',
          ],
          nearbyDistricts: ['Hamm', 'Borgfelde', 'St. Georg', 'HafenCity', 'Hammerbrook'],
          image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
