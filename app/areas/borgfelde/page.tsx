import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Borgfelde Hamburg – Ihr Frisuren-Studio in der Nähe',
  description: `Friseur nahe Borgfelde Hamburg – Meisterbetrieb seit 2004 in Hamburg-Hamm. Damen, Herren, Balayage & Kosmetik. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur borgfelde', 'friseur borgfelde hamburg', 'haarschnitt borgfelde', 'friseursalon borgfelde'],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/borgfelde` },
  openGraph: {
    title: 'Friseur Borgfelde Hamburg – Ihr Frisuren-Studio',
    description: `Premium Friseur nahe Borgfelde Hamburg. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/borgfelde`,
  },
};

export default function BorgfeldePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Borgfelde Hamburg', url: `${BUSINESS_INFO.website}/areas/borgfelde` },
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
      { '@type': 'Neighborhood', name: 'Borgfelde', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
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
          name: 'Borgfelde',
          slug: 'borgfelde',
          intro: 'Wohnen Sie in Borgfelde und suchen einen zuverlässigen Friseur? Ihr Frisuren-Studio in Hamburg-Hamm ist Ihr nächster Premium-Friseur – direkt angrenzend an Borgfelde, bequem erreichbar mit Bus und U-Bahn.',
          distance: 'ca. 5–10 Minuten entfernt',
          travelInfo: 'Von Borgfelde erreichen Sie uns bequem mit der U-Bahn U2/U4 bis Haltestelle Burgstraße oder mit den Buslinien 25 und 130 direkt in die Hammer Landstraße.',
          travelIcon: 'train',
          highlights: [
            'Nur 5–10 Minuten von Borgfelde – ideal für Ihren nächsten Friseurbesuch',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit über ${BUSINESS_INFO.reviews.count} Bewertungen`,
            'Damen- und Herrenschnitte, Balayage, Coloration & Kosmetik',
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch, Persisch',
            'Flexible Afterwork-Termine nach 19:00 Uhr',
          ],
          nearbyDistricts: ['Hamm', 'Eilbek', 'St. Georg', 'Horn', 'Rothenburgsort'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
