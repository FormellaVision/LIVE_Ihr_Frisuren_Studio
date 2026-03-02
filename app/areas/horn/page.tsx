import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Horn Hamburg – Ihr Frisuren-Studio | Meisterbetrieb, nur 10 Min.',
  description: `Friseur nahe Horn Hamburg – Meisterbetrieb seit 2004. Ca. 10 Min. mit U2. Damen ab 33€, Herren ab 18€, Balayage ab 179€. ${BUSINESS_INFO.reviews.count}+ Bewertungen. Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    'friseur horn hamburg',
    'friseur horn',
    'haarschnitt horn hamburg',
    'friseursalon horn hamburg',
    'damenfriseur horn hamburg',
    'herrenfriseur horn hamburg',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/horn` },
  openGraph: {
    title: 'Friseur Horn Hamburg – Ihr Frisuren-Studio | Meisterbetrieb, nur 10 Min.',
    description: `Premium Friseur nahe Horn Hamburg. Ca. 10 Min. mit U2 Burgstraße. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/horn`,
  },
};

export default function HornPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Stadtteile', url: `${BUSINESS_INFO.website}/areas/hamm` },
    { name: 'Friseur Horn Hamburg', url: `${BUSINESS_INFO.website}/areas/horn` },
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
      { '@type': 'Neighborhood', name: 'Horn', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
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
          name: 'Horn',
          slug: 'horn',
          intro: `Kunden aus Horn schätzen den kurzen Weg zu Ihrem Frisuren-Studio in Hamburg-Hamm. Per U2 oder Fahrrad in etwa 10 Minuten – und Sie genießen Meisterqualität in entspannter Atmosphäre. Für die ganze Familie, für besondere Anlässe und für den Alltag.`,
          distance: 'ca. 10 Minuten entfernt',
          travelInfo: `Von Horn zur Hammer Landstraße: Mit der U2 ab Rauhes Haus oder Horn bis Burgstraße (4–5 Minuten Fahrzeit), dann 5 Minuten zu Fuß. Per Fahrrad über den Mümmelmannsberg-Weg ca. 10–12 Minuten. Mit dem Auto über die Horner Rennbahn in ca. 8 Minuten.`,
          travelIcon: 'train',
          highlights: [
            'Kurze, direkte Verbindung aus Horn – 10 Min. per U2 oder Fahrrad',
            `Über ${BUSINESS_INFO.reviews.count} zufriedene Kunden – ${BUSINESS_INFO.reviews.rating} Sterne auf Google`,
            'Familienfreundlich: Kinder, Damen und Herren willkommen',
            'Spezialisiert auf anspruchsvolle Schnitte, Balayage und Colorationen',
            'Afterwork-Termine Di–Fr nach 19:00 Uhr – ideal für Berufstätige',
            'Persönliche Beratung auf Deutsch, Englisch, Türkisch und Persisch',
          ],
          nearbyDistricts: ['Hamm', 'Borgfelde', 'Rothenburgsort', 'Billstedt'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
