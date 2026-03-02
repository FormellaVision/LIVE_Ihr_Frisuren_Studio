import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Hamm – Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
  description: `Friseur Hamburg Hamm – Meisterbetrieb direkt in Hamm seit 2004. Damen ab 33€, Herren ab 18€, Balayage ab 179€. ${BUSINESS_INFO.reviews.count}+ Bewertungen (${BUSINESS_INFO.reviews.rating}★). Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    'friseur hamburg hamm',
    'friseursalon hamm',
    'friseur hamm hamburg',
    'haarschnitt hamm',
    'damenfriseur hamm',
    'herrenfriseur hamm',
    'balayage hamm hamburg',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/hamm` },
  openGraph: {
    title: 'Friseur Hamburg Hamm – Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
    description: `Premium Friseur direkt in Hamburg-Hamm. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne). Damen, Herren, Balayage, Kosmetik.`,
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
          intro: `Willkommen in Ihrem Frisuren-Studio – dem Meisterbetrieb seit 2004, direkt im Herzen von Hamburg-Hamm. Seit über 20 Jahren vertrauen Kunden aus Hamm auf unser erfahrenes Team für Damenschnitte, Herrenschnitte, Balayage und Kosmetik. Qualität, die man sieht und spürt.`,
          distance: 'Direkter Standort – Hamburg-Hamm',
          travelInfo: `Unser Salon befindet sich in der ${BUSINESS_INFO.address.street}, direkt im Stadtteil Hamm. Mit der U-Bahn U2 oder U4 bis Haltestelle Burgstraße, dann 5 Minuten zu Fuß. Buslinien 25, 130, 160 und 261 halten in unmittelbarer Nähe. Parkmöglichkeiten in der Hammer Landstraße vorhanden.`,
          travelIcon: 'train',
          highlights: [
            `Direkter Standort in Hamburg-Hamm – seit ${BUSINESS_INFO.founded} Ihr Friseur vor Ort`,
            `${BUSINESS_INFO.reviews.count}+ Google-Bewertungen mit ${BUSINESS_INFO.reviews.rating} Sternen – Hamburgs Top-Friseur`,
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch und Persisch',
            'Volles Leistungsspektrum: Damen, Herren, Balayage, Coloration, Kosmetik',
            'Afterwork-Termine Di–Fr nach 19:00 Uhr – perfekt für Berufstätige',
            'Barrierefreier Zugang – für alle Kunden zugänglich',
          ],
          nearbyDistricts: ['Borgfelde', 'Horn', 'Rothenburgsort', 'St. Georg', 'Eilbek'],
          image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
