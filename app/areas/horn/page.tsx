import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';

export const metadata: Metadata = {
  title: 'Friseur Horn | Ihr Frisuren-Studio nahe Horn',
  description: `Friseur nahe Horn: Ihr Frisuren-Studio in Hamburg Hamm ist schnell erreichbar für Haarschnitte, Balayage, Coloration und Kosmetik.`,
  keywords: [
    'friseur horn',
    'friseur nahe horn',
    'friseur horn hamburg',
    'friseur in der nähe von horn',
    'damenfriseur horn',
    'herrenfriseur horn',
    'balayage horn',
    'haare färben horn',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/horn` },
  openGraph: {
    title: 'Friseur nahe Horn – Ihr Frisuren-Studio in Hamburg Hamm',
    description: `Ihr Friseur nahe Horn: Viele Kundinnen und Kunden aus Horn besuchen Ihr Frisuren-Studio in Hamburg Hamm für moderne Schnitte, Balayage, Colorationen und persönliche Beratung.`,
    url: `${BUSINESS_INFO.website}/areas/horn`,
  },
};

export default function HornPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Einzugsgebiet', url: `${BUSINESS_INFO.website}/einzugsgebiet` },
    { name: 'Horn', url: `${BUSINESS_INFO.website}/areas/horn` },
  ]);

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Horn',
          slug: 'horn',
          intro: `Viele Kundinnen und Kunden aus Horn besuchen Ihr Frisuren-Studio in Hamburg Hamm – schnell erreichbar in nur 10 Minuten. Unser Salon in der Hammer Landstraße 4 ist bequem per U2 oder Fahrrad zu erreichen. Persönliche Beratung und Meisterqualität für Damen, Herren, Balayage und Haare färben.`,
          distance: 'ca. 10 Minuten bis Hamburg Hamm',
          travelInfo: `Von Horn zum Friseur in Hamburg Hamm: Mit der U2 ab Rauhes Haus oder Horn bis Burgstraße (4–5 Minuten Fahrzeit), dann 5 Minuten zu Fuß zur Hammer Landstraße 4. Per Fahrrad ca. 10–12 Minuten. Mit dem Auto über die Horner Rennbahn in ca. 8 Minuten.`,
          travelIcon: 'train',
          highlights: [
            'Für Kundinnen und Kunden aus Horn – schnell erreichbar in 10 Minuten',
            `${BUSINESS_INFO.reviews.count}+ zufriedene Kunden – ${BUSINESS_INFO.reviews.rating} Sterne auf Google`,
            'Damenfriseur, Herrenfriseur, Balayage und Haare färben in Hamburg Hamm',
            'Persönliche Beratung in unserem Salon in Hamburg Hamm',
            'Afterwork-Termine Di–Fr nach 19:00 Uhr – ideal für Berufstätige',
            'Beratung auf Deutsch, Englisch, Türkisch und Persisch',
          ],
          nearbyDistricts: ['Hamburg Hamm', 'Borgfelde', 'Rothenburgsort', 'Billstedt'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />

      <ServiceCardsSection title="Unsere Leistungen für Kunden aus Horn" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
