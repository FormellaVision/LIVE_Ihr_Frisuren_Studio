import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Billstedt Hamburg – Ihr Frisuren-Studio in der Nähe',
  description: `Friseur nahe Billstedt Hamburg – Meisterbetrieb seit 2004 in Hamburg-Hamm. Damen, Herren, Balayage & Kosmetik. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur billstedt', 'friseur billstedt hamburg', 'haarschnitt billstedt', 'friseursalon billstedt hamburg'],
  robots: { index: false, follow: false },
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/billstedt` },
  openGraph: {
    title: 'Friseur Billstedt Hamburg – Ihr Frisuren-Studio',
    description: `Premium Friseur nahe Billstedt Hamburg. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/billstedt`,
  },
};

export default function BillstedtPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Billstedt Hamburg', url: `${BUSINESS_INFO.website}/areas/billstedt` },
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
      { '@type': 'Neighborhood', name: 'Billstedt', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
      { '@type': 'Neighborhood', name: 'Hamm', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
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
          name: 'Billstedt',
          slug: 'billstedt',
          intro: 'Billstedt liegt östlich von Hamburg-Hamm und ist über die U2 hervorragend angebunden. Kunden aus Billstedt schätzen die Qualität und den persönlichen Service bei Ihrem Frisuren-Studio – dem Meisterbetrieb seit 2004.',
          distance: 'ca. 15–20 Minuten entfernt',
          travelInfo: 'Von Billstedt-Zentrum fahren Sie mit der U2 (Richtung Niendorf/Nordpark) bis Burgstraße – dann nur 5 Minuten zu Fuß. Die Gesamtfahrzeit beträgt ca. 15–20 Minuten.',
          travelIcon: 'train',
          highlights: [
            'Direkte U2-Verbindung von Billstedt nach Burgstraße',
            `Meisterbetrieb mit über ${BUSINESS_INFO.reviews.count} Google-Bewertungen`,
            'Mehrsprachige Beratung: Deutsch, Türkisch, Persisch, Englisch',
            'Breites Angebot: Schnitte, Colorationen, Balayage & Kosmetik',
            'Faire Preise und transparente Preisliste',
          ],
          nearbyDistricts: ['Horn', 'Hamm', 'Mümmelmannsberg', 'Öjendorf', 'Rothenburgsort'],
          image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
