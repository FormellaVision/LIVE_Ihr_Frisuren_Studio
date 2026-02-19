import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Hamm – Ihr Frisuren-Studio direkt vor Ort',
  description: `Friseur Hamburg Hamm – Meisterbetrieb seit 2004 direkt in Hamm. Damen, Herren, Balayage & Kosmetik. ${BUSINESS_INFO.reviews.count}+ Bewertungen (${BUSINESS_INFO.reviews.rating}★). Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur hamburg hamm', 'friseursalon hamm', 'friseur hamm hamburg', 'haarschnitt hamm'],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/hamm` },
  openGraph: {
    title: 'Friseur Hamburg Hamm – Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
    description: `Premium Friseur direkt in Hamburg Hamm. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/hamm`,
  },
};

export default function HammPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Hamburg Hamm', url: `${BUSINESS_INFO.website}/areas/hamm` },
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
      { '@type': 'Neighborhood', name: 'Hamm', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
      { '@type': 'City', name: 'Hamburg' },
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
          name: 'Hamm',
          slug: 'hamm',
          intro: `Ihr Frisuren-Studio befindet sich direkt im Herzen von Hamburg-Hamm. Als Meisterbetrieb seit 2004 sind wir der vertrauensvolle Friseur im Stadtteil – für Damen, Herren, Balayage und Kosmetik.`,
          distance: 'Direkter Standort in Hamburg-Hamm',
          travelInfo: `Unser Salon befindet sich in der ${BUSINESS_INFO.address.street}. Mit der U-Bahn U2/U4 bis Haltestelle Burgstraße – nur 5 Minuten zu Fuß. Buslinien 25, 130, 160, 261 halten direkt in der Nähe.`,
          travelIcon: 'train',
          highlights: [
            'Direkter Standort in Hamburg-Hamm – keine langen Anfahrtswege',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit über ${BUSINESS_INFO.reviews.count} Google-Bewertungen`,
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch, Persisch',
            'Afterwork-Termine nach 19:00 Uhr verfügbar',
            'Balayage, Coloration, Damenschnitte & Herrenschnitte unter einem Dach',
          ],
          nearbyDistricts: ['Borgfelde', 'Eilbek', 'Horn', 'Rothenburgsort', 'St. Georg'],
          image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
