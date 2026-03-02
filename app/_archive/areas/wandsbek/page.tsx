import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Wandsbek Hamburg – Ihr Frisuren-Studio in der Nähe',
  description: `Friseur nahe Wandsbek Hamburg – Meisterbetrieb seit 2004 in Hamburg-Hamm. Damen, Herren, Balayage & Kosmetik. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur wandsbek', 'friseur wandsbek hamburg', 'haarschnitt wandsbek', 'friseursalon wandsbek'],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/wandsbek` },
  openGraph: {
    title: 'Friseur Wandsbek Hamburg – Ihr Frisuren-Studio',
    description: `Premium Friseur nahe Wandsbek Hamburg. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/wandsbek`,
  },
};

export default function WandsbekPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Wandsbek Hamburg', url: `${BUSINESS_INFO.website}/areas/wandsbek` },
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
      { '@type': 'Neighborhood', name: 'Wandsbek', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
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
          name: 'Wandsbek',
          slug: 'wandsbek',
          intro: 'Viele unserer zufriedenen Kunden kommen aus Wandsbek für einen Besuch bei Ihrem Frisuren-Studio in Hamburg-Hamm. Die gute Anbindung per U-Bahn macht uns zum bevorzugten Friseur im Hamburger Osten.',
          distance: 'ca. 10–15 Minuten entfernt',
          travelInfo: 'Aus Wandsbek fahren Sie mit der U1 bis Wandsbeker Chaussee und dann mit dem Bus 25 oder 130 direkt zur Hammer Landstraße. Mit dem Auto dauert die Fahrt über die Wandsbeker Chaussee ca. 10 Minuten.',
          travelIcon: 'train',
          highlights: [
            'Gute Anbindung aus Wandsbek über U1 und Buslinien',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} – höchste Qualitätsstandards`,
            'Breites Leistungsangebot: Damen, Herren, Balayage, Kosmetik',
            'Mehrsprachige Beratung auf Deutsch, Englisch, Türkisch und Persisch',
            'Afterwork-Termine für Berufstätige aus Wandsbek verfügbar',
          ],
          nearbyDistricts: ['Eilbek', 'Hamm', 'Borgfelde', 'Bramfeld', 'Marienthal'],
          image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
