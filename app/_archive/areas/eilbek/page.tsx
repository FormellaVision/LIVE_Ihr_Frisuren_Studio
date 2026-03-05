import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Eilbek Hamburg – Ihr Frisuren-Studio in der Nähe',
  description: `Friseur nahe Eilbek Hamburg – Meisterbetrieb seit 2004 in Hamburg-Hamm. Premium Haarschnitte, Balayage & Kosmetik. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur eilbek', 'friseur eilbek hamburg', 'haarschnitt eilbek', 'friseursalon eilbek hamburg'],
  robots: { index: false, follow: false },
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/eilbek` },
  openGraph: {
    title: 'Friseur Eilbek Hamburg – Ihr Frisuren-Studio',
    description: `Premium Friseur nahe Eilbek Hamburg. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/eilbek`,
  },
};

export default function EilbekPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Eilbek Hamburg', url: `${BUSINESS_INFO.website}/areas/eilbek` },
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
      { '@type': 'Neighborhood', name: 'Eilbek', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
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
          name: 'Eilbek',
          slug: 'eilbek',
          intro: 'Kunden aus Eilbek schätzen die kurze Anfahrt zu Ihrem Frisuren-Studio in Hamburg-Hamm. Als Meisterbetrieb bieten wir höchste Qualität bei Damenschnitten, Herrenschnitten, Balayage und Kosmetik – perfekt erreichbar aus Eilbek.',
          distance: 'ca. 10 Minuten entfernt',
          travelInfo: 'Aus Eilbek erreichen Sie uns schnell mit der U1 bis Wandsbeker Chaussee oder der U3 in Richtung Hammerbrook. Alternativ fahren Sie mit dem Fahrrad oder Auto direkt zur Hammer Landstraße 4.',
          travelIcon: 'train',
          highlights: [
            'Kurze Anfahrt aus Eilbek – ca. 10 Minuten',
            `Zertifizierter Meisterbetrieb seit ${BUSINESS_INFO.founded}`,
            'Spezialisiert auf Balayage und moderne Colorationstechniken',
            'Mehrsprachiges Team: Deutsch, Englisch, Türkisch, Persisch',
            'Individuelle Beratung und maßgeschneiderte Haarkonzepte',
          ],
          nearbyDistricts: ['Hamm', 'Borgfelde', 'Wandsbek', 'Barmbek', 'St. Georg'],
          image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
