import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Mitte – Ihr Frisuren-Studio in der Nähe',
  description: `Friseur nahe Hamburg Mitte – Meisterbetrieb seit 2004 in Hamburg-Hamm. Damen, Herren, Balayage & Kosmetik. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur hamburg mitte', 'friseur mitte hamburg', 'haarschnitt hamburg mitte', 'friseursalon hamburg mitte'],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/mitte` },
  openGraph: {
    title: 'Friseur Hamburg Mitte – Ihr Frisuren-Studio',
    description: `Premium Friseur nahe Hamburg Mitte. ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne).`,
    url: `${BUSINESS_INFO.website}/areas/mitte`,
  },
};

export default function MittePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Hamburg Mitte', url: `${BUSINESS_INFO.website}/areas/mitte` },
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
      { '@type': 'Neighborhood', name: 'Hamburg-Mitte', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
      { '@type': 'Neighborhood', name: 'Hamm', containedInPlace: { '@type': 'City', name: 'Hamburg' } },
    ],
  };

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Hamburg Mitte',
          slug: 'mitte',
          intro: 'Suchen Sie einen erstklassigen Friseur nahe Hamburg Mitte? Ihr Frisuren-Studio in Hamburg-Hamm liegt nur wenige Minuten vom Hamburger Stadtgebiet entfernt – perfekt für Kunden aus der City und den angrenzenden Stadtteilen.',
          distance: 'ca. 10–15 Minuten vom Zentrum',
          travelInfo: 'Von Hamburg Mitte fahren Sie mit der U2 oder U4 bis Haltestelle Burgstraße – nur 5 Minuten zu Fuß zu unserem Salon. Alternativ mit der S-Bahn bis Hamburg Hauptbahnhof und dann U2/U4.',
          travelIcon: 'train',
          highlights: [
            'Schnell erreichbar aus der Hamburger City – direkt per U-Bahn',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit Bestbewertungen`,
            'Entspannte Atmosphäre abseits des Stadtzentrums',
            'Premium-Leistungen zu fairen Preisen: ab 18€ Herrenschnitt, ab 43€ Damenschnitt',
            'Mehrsprachige Beratung für internationale Kunden',
          ],
          nearbyDistricts: ['St. Georg', 'HafenCity', 'Hammerbrook', 'Hamm', 'Borgfelde'],
          image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
