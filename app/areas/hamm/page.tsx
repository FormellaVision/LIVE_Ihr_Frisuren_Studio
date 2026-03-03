import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Hamm – Standort & Leistungen',
  description: `Ihr Friseur in Hamburg Hamm: Ihr Frisuren-Studio in der Hammer Landstraße 4 für Damen, Herren, Balayage und Haare färben. Meisterbetrieb seit 2004, persönlich und gut erreichbar.`,
  keywords: [
    'friseur hamburg hamm',
    'friseur hamm',
    'friseur in hamburg hamm',
    'friseursalon hamburg hamm',
    'damenfriseur hamburg hamm',
    'herrenfriseur hamburg hamm',
    'balayage hamburg hamm',
    'haare färben hamburg hamm',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/hamm` },
  openGraph: {
    title: 'Friseur Hamburg Hamm – Standort & Leistungen',
    description: `Ihr Friseur in Hamburg Hamm: Ihr Frisuren-Studio in der Hammer Landstraße 4 für Damen, Herren, Balayage und Haare färben. Meisterbetrieb seit 2004, persönlich und gut erreichbar.`,
    url: `${BUSINESS_INFO.website}/areas/hamm`,
  },
};

export default function HammPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Hamburg Hamm', url: `${BUSINESS_INFO.website}/areas/hamm` },
  ]);

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Hamburg Hamm',
          slug: 'hamm',
          isMainLocation: true,
          intro: `Willkommen in Ihrem Frisuren-Studio – Ihr Friseur in Hamburg Hamm seit 2004. In der Hammer Landstraße 4 erwartet Sie unser erfahrenes Team für Damenschnitte, Herrenschnitte, Balayage und Haare färben. Persönliche Beratung, moderne Techniken und Meisterqualität seit über 20 Jahren.`,
          distance: 'Direkter Standort – Hammer Landstraße 4',
          travelInfo: `Unser Salon befindet sich zentral in Hamburg Hamm, Hammer Landstraße 4. Mit der U2 oder U4 bis Haltestelle Burgstraße, dann 5 Minuten zu Fuß. Buslinien 25, 130, 160 und 261 halten in unmittelbarer Nähe. Parkmöglichkeiten in der Hammer Landstraße vorhanden. Auch gut erreichbar aus Borgfelde, Hamburg Mitte und Horn.`,
          travelIcon: 'train',
          highlights: [
            `Ihr Frisuren-Studio in Hamburg Hamm – Meisterbetrieb seit ${BUSINESS_INFO.founded}`,
            `${BUSINESS_INFO.reviews.count}+ Google-Bewertungen mit ${BUSINESS_INFO.reviews.rating} Sternen`,
            'Damen, Herren, Balayage und Haare färben unter einem Dach',
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch und Persisch',
            'Afterwork-Termine Di–Fr nach 19:00 Uhr – perfekt für Berufstätige',
            'Barrierefreier Zugang – für alle Kunden zugänglich',
          ],
          nearbyDistricts: ['Borgfelde', 'Horn', 'Hamburg Mitte', 'Rothenburgsort', 'St. Georg'],
          image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
