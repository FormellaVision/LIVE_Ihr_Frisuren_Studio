import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Borgfelde Hamburg – Ihr Frisuren-Studio | Nur 5 Min. entfernt',
  description: `Friseur nahe Borgfelde Hamburg – Meisterbetrieb seit 2004. Nur 5–10 Min. mit U2/U4. Damen ab 33€, Herren ab 18€, Balayage ab 179€. Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    'friseur borgfelde',
    'friseur borgfelde hamburg',
    'haarschnitt borgfelde',
    'friseursalon borgfelde',
    'damenfriseur borgfelde',
    'herrenfriseur borgfelde',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/borgfelde` },
  openGraph: {
    title: 'Friseur Borgfelde Hamburg – Ihr Frisuren-Studio | Nur 5 Min. entfernt',
    description: `Premium Friseur nahe Borgfelde Hamburg. Nur 5–10 Min. mit U-Bahn. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/borgfelde`,
  },
};

export default function BorgfeldePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Stadtteile', url: `${BUSINESS_INFO.website}/areas/hamm` },
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
          intro: `Borgfelde und Hamm sind direkte Nachbarstadtteile – und Ihr Frisuren-Studio liegt genau an dieser Grenze. Nur 5–10 Minuten per U-Bahn oder Bus, und Sie sind bei einem der besten Friseure Hamburgs. Meisterbetrieb seit 2004, mit Herz fürs Handwerk und persönlicher Beratung.`,
          distance: 'ca. 5–10 Minuten entfernt',
          travelInfo: `Von Borgfelde erreichen Sie uns einfach und schnell: Mit der U2 oder U4 ab Berliner Tor bis Burgstraße (2 Stationen), dann 5 Minuten zu Fuß entlang der Hammer Landstraße. Alternativ mit den Buslinien 25 oder 130 direkt bis zum Salon.`,
          travelIcon: 'train',
          highlights: [
            'Direkter Nachbarschaftssalon – Borgfelde grenzt direkt an Hamm',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} ★)`,
            'Nur 2 U-Bahn-Stationen von Borgfelde – schnell und unkompliziert',
            'Damen, Herren, Balayage, Coloration und Kosmetik unter einem Dach',
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch, Persisch',
            'Flexible Afterwork-Termine nach 19:00 Uhr verfügbar',
          ],
          nearbyDistricts: ['Hamm', 'St. Georg', 'Horn', 'Rothenburgsort'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
