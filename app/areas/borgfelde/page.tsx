import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Borgfelde | Ihr Frisuren-Studio nahe Borgfelde',
  description: `Friseur nahe Borgfelde: Ihr Frisuren-Studio in Hamburg Hamm ist schnell erreichbar für Kunden aus Borgfelde – Damen, Herren, Balayage und Kosmetik.`,
  keywords: [
    'friseur borgfelde',
    'friseur nahe borgfelde',
    'friseur borgfelde hamburg',
    'friseur in der nähe von borgfelde',
    'damenfriseur borgfelde',
    'herrenfriseur borgfelde',
    'balayage borgfelde',
    'haare färben borgfelde',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/borgfelde` },
  openGraph: {
    title: 'Friseur nahe Borgfelde | Ihr Frisuren-Studio in Hamburg-Hamm',
    description: `Ihr Friseur nahe Borgfelde: Viele Kundinnen und Kunden aus Borgfelde besuchen Ihr Frisuren-Studio in Hamburg-Hamm für Damenhaarschnitte, Herrenhaarschnitte, Balayage und Haare färben.`,
    url: `${BUSINESS_INFO.website}/areas/borgfelde`,
  },
};

export default function BorgfeldePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Einzugsgebiet', url: `${BUSINESS_INFO.website}/einzugsgebiet` },
    { name: 'Borgfelde', url: `${BUSINESS_INFO.website}/areas/borgfelde` },
  ]);

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Borgfelde',
          slug: 'borgfelde',
          intro: `Viele Kundinnen und Kunden aus Borgfelde besuchen Ihr Frisuren-Studio in Hamburg Hamm – nur wenige Minuten entfernt. Borgfelde und Hamm sind direkte Nachbarstadtteile, und unser Salon in der Hammer Landstraße 4 ist bequem per U-Bahn oder Bus erreichbar. Meisterbetrieb seit 2004, mit persönlicher Beratung für Damen, Herren, Balayage und Haare färben.`,
          distance: 'ca. 5–10 Minuten bis Hamburg Hamm',
          travelInfo: `Von Borgfelde zum Friseur in Hamburg Hamm: Mit der U2 oder U4 ab Berliner Tor bis Burgstraße (2 Stationen), dann 5 Minuten zu Fuß entlang der Hammer Landstraße. Alternativ mit den Buslinien 25 oder 130 direkt bis zum Salon in der Hammer Landstraße 4.`,
          travelIcon: 'train',
          highlights: [
            'Für Kundinnen und Kunden aus Borgfelde – nur wenige Minuten bis Hamburg Hamm',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} ★)`,
            'Gut erreichbar: 2 U-Bahn-Stationen von Borgfelde nach Hamburg Hamm',
            'Damenfriseur, Herrenfriseur, Balayage und Haare färben in Hamburg Hamm',
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch, Persisch',
            'Flexible Afterwork-Termine nach 19:00 Uhr verfügbar',
          ],
          nearbyDistricts: ['Hamburg Hamm', 'St. Georg', 'Horn', 'Rothenburgsort'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
