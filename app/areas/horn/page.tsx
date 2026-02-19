import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Horn Hamburg – Ihr Frisuren-Studio in der Nähe',
  description: `Friseur nahe Horn Hamburg – Meisterbetrieb seit 2004 in Hamburg-Hamm. Damen, Herren, Balayage & Kosmetik. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur horn hamburg', 'friseur horn', 'haarschnitt horn hamburg', 'friseursalon horn hamburg'],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/horn` },
  openGraph: {
    title: 'Friseur Horn Hamburg – Ihr Frisuren-Studio',
    description: `Premium Friseur nahe Horn Hamburg. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/horn`,
  },
};

export default function HornPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
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
          intro: 'Kunden aus Horn kommen regelmäßig zu Ihrem Frisuren-Studio in Hamburg-Hamm. Die Nähe der beiden Stadtteile macht uns zur natürlichen Wahl für Friseurbesuche aus Horn – mit Meisterqualität und herzlichem Service.',
          distance: 'ca. 10 Minuten entfernt',
          travelInfo: 'Von Horn fahren Sie mit der U2 bis Burgstraße oder mit dem Bus direkt zur Hammer Landstraße. Per Fahrrad sind es auf direktem Weg ca. 10–15 Minuten.',
          travelIcon: 'train',
          highlights: [
            'Kurze Anfahrt aus Horn – per U-Bahn oder Fahrrad ideal',
            `Über ${BUSINESS_INFO.reviews.count} zufriedene Kunden mit ${BUSINESS_INFO.reviews.rating} Sterne Durchschnitt`,
            'Spezialisiert auf anspruchsvolle Haarschnitte und Colorationen',
            'Afterwork-Termine für Berufstätige – Di–Fr nach 19:00 Uhr',
            'Familienfreundlicher Service für die ganze Familie',
          ],
          nearbyDistricts: ['Hamm', 'Billstedt', 'Rothenburgsort', 'Borgfelde', 'Eilbek'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
