import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Bergedorf Hamburg – Ihr Frisuren-Studio in der Nähe',
  description: `Friseur nahe Bergedorf Hamburg – Meisterbetrieb seit 2004 in Hamburg-Hamm. Premium Haarschnitte, Balayage & Kosmetik. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur bergedorf', 'friseur bergedorf hamburg', 'haarschnitt bergedorf', 'friseursalon bergedorf hamburg'],
  robots: { index: false, follow: false },
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/bergedorf` },
  openGraph: {
    title: 'Friseur Bergedorf Hamburg – Ihr Frisuren-Studio',
    description: `Premium Friseur nahe Bergedorf Hamburg. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/bergedorf`,
  },
};

export default function BergedorfPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Bergedorf Hamburg', url: `${BUSINESS_INFO.website}/areas/bergedorf` },
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
      { '@type': 'Neighborhood', name: 'Bergedorf', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
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
          name: 'Bergedorf',
          slug: 'bergedorf',
          intro: 'Für Kunden aus Bergedorf, die einen Premium-Friseur in Hamburg suchen, ist Ihr Frisuren-Studio in Hamburg-Hamm die perfekte Wahl. Die Fahrt lohnt sich – für Meisterqualität, Balayage-Spezialisten und ein mehrsprachiges Team.',
          distance: 'ca. 25–30 Minuten entfernt',
          travelInfo: 'Von Bergedorf fahren Sie mit der S-Bahn S21 bis Hamburg Hauptbahnhof und dann mit der U2/U4 bis Burgstraße. Alternativ mit dem Auto über die B5 Richtung Hamburg-Mitte in ca. 25 Minuten.',
          travelIcon: 'train',
          highlights: [
            'Mit S-Bahn und U-Bahn bequem aus Bergedorf erreichbar',
            `Einer der bestbewerteten Friseursalons in Hamburg: ${BUSINESS_INFO.reviews.rating} Sterne / ${BUSINESS_INFO.reviews.count}+ Bewertungen`,
            'Spezialist für Balayage, Colorationen & Premium-Haarschnitte',
            'Mehrsprachige Beratung für internationale Kunden',
            'Der Besuch lohnt sich – Qualität die begeistert',
          ],
          nearbyDistricts: ['Lohbrügge', 'Billstedt', 'Neuallermöhe', 'Kirchwerder', 'Hamm'],
          image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
