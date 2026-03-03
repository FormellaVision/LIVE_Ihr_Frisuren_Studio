import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur nahe Hamburg Mitte | Ihr Frisuren-Studio in Hamburg-Hamm',
  description: `Ihr Friseur nahe Hamburg Mitte: Unser Salon in Hamburg-Hamm ist gut erreichbar für Kundinnen und Kunden aus Hamburg Mitte – für Damen, Herren, Balayage und Haare färben.`,
  keywords: [
    'friseur hamburg mitte',
    'friseur nahe hamburg mitte',
    'friseur in der nähe von hamburg mitte',
    'damenfriseur hamburg mitte',
    'herrenfriseur hamburg mitte',
    'balayage hamburg mitte',
    'haare färben hamburg mitte',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/hamburg-mitte` },
  openGraph: {
    title: 'Friseur nahe Hamburg Mitte | Ihr Frisuren-Studio in Hamburg-Hamm',
    description: `Ihr Friseur nahe Hamburg Mitte: Unser Salon in Hamburg-Hamm ist gut erreichbar für Kundinnen und Kunden aus Hamburg Mitte – für Damen, Herren, Balayage und Haare färben.`,
    url: `${BUSINESS_INFO.website}/areas/hamburg-mitte`,
  },
};

export default function HamburgMittePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Hamburg Hamm', url: `${BUSINESS_INFO.website}/areas/hamm` },
    { name: 'Friseur nahe Hamburg Mitte', url: `${BUSINESS_INFO.website}/areas/hamburg-mitte` },
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
          name: 'Hamburg Mitte',
          slug: 'mitte',
          intro: `Viele Kundinnen und Kunden aus Hamburg Mitte besuchen Ihr Frisuren-Studio in Hamburg-Hamm – gut erreichbar in nur 10 Minuten. Unser Salon in der Hammer Landstraße 4 liegt zentral und ist bequem per U2 oder U4 ab Hauptbahnhof zu erreichen. Persönliche Beratung und Meisterqualität für Damen, Herren, Balayage und Haare färben.`,
          distance: 'ca. 10 Minuten bis Hamburg-Hamm',
          travelInfo: `Von Hamburg Mitte zum Friseur in Hamburg-Hamm: Mit der U2 oder U4 ab Hauptbahnhof direkt zur Haltestelle Burgstraße – von dort 5 Minuten zu Fuß zur Hammer Landstraße 4. Alternativ: S-Bahn bis Berliner Tor, dann Bus 25 direkt zum Salon.`,
          travelIcon: 'train',
          highlights: [
            'Für Kundinnen und Kunden aus Hamburg Mitte – gut erreichbar in 10 Minuten',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} ★)`,
            'Zentrale Lage in Hamburg-Hamm – kurze Wege, persönliche Atmosphäre',
            'Damenfriseur, Herrenfriseur, Balayage und Haare färben in Hamburg-Hamm',
            'Mehrsprachig: Deutsch, Englisch, Türkisch, Persisch',
            'Afterwork-Termine Di–Fr nach 19:00 Uhr verfügbar',
          ],
          nearbyDistricts: ['Hamburg Hamm', 'Borgfelde', 'St. Georg', 'HafenCity', 'Hammerbrook'],
          image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
