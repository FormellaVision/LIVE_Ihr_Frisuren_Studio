import { Metadata } from 'next';
import { BUSINESS_INFO, SERVICES_DAMEN, SERVICES_HERREN } from '@/lib/constants';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';
import { PriceList } from '@/components/shared/PriceList';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Hamm | Meisterbetrieb seit 2004 · Ihr Frisuren-Studio',
  description: `Ihr Friseur in Hamburg Hamm – Meisterbetrieb seit 2004. 270+ Bewertungen ★4,9. Damen, Herren, Balayage & Kosmetik. Hammer Landstraße 4. ☎ 040 2509029`,
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
    { name: 'Einzugsgebiet', url: `${BUSINESS_INFO.website}/einzugsgebiet` },
    { name: 'Hamburg Hamm', url: `${BUSINESS_INFO.website}/areas/hamm` },
  ]);

  const hammFaqs = [
    {
      question: 'Warum ist Ihr Frisuren-Studio der beste Friseur in Hamburg Hamm?',
      answer: 'Als einziger zertifizierter Meisterbetrieb in Hamburg Hamm mit 270+ Google-Bewertungen (4,9 ★) bieten wir seit 2004 höchste Qualität für Damen und Herren. Unser mehrsprachiges Team (Deutsch, Englisch, Türkisch, Persisch) und Afterwork-Termine nach 19 Uhr machen uns einzigartig.',
    },
    {
      question: 'Wo genau befindet sich Ihr Frisuren-Studio in Hamburg Hamm?',
      answer: 'Wir befinden uns in der Hammer Landstraße 4, 20537 Hamburg-Hamm. Direkt erreichbar mit U2/U4 Haltestelle Burgstraße (5 Min. zu Fuß) sowie den Buslinien 25, 130, 160, 261, 609 und 610. Parkplätze sind in der Umgebung verfügbar.',
    },
  ];

  const faqSchema = getFAQSchema(hammFaqs);

  const hammLocalSchema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': 'https://ihr-frisuren-studio.de/#business',
    'name': 'Ihr Frisuren-Studio',
    'url': 'https://ihr-frisuren-studio.de',
    'image': 'https://res.cloudinary.com/dqkld61zu/image/upload/v1770218177/Ihr_Frisuren-Studio_Au%C3%9Fenansicht_oyydcb.webp',
    'telephone': '+49402509029',
    'email': 'ihr.frisuren.studio.hamburg@gmail.com',
    'priceRange': '€€',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Hammer Landstraße 4',
      'addressLocality': 'Hamburg',
      'postalCode': '20537',
      'addressCountry': 'DE'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Hamburg Hamm',
      'postalCode': '20537'
    }
  };

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Hamburg Hamm',
          slug: 'hamm',
          isMainLocation: true,
          intro: `Willkommen in Ihrem Frisuren-Studio – Ihr Friseur in Hamburg Hamm seit 2004. Direkt vor Ort in der Hammer Landstraße 4 bieten wir Ihnen erstklassige Friseurdienstleistungen ohne lange Anfahrtswege. Als zertifizierter Meisterbetrieb garantieren wir höchste Qualität für Damen, Herren und Kinder. Ob moderner Haarschnitt, brillante Coloration oder trendiges Balayage – unser Team verbindet jahrelange Erfahrung mit aktuellen Trends. Über 270 zufriedene Kunden bewerten uns mit 4,9 Sternen auf Google. Sie erreichen uns bequem zu Fuß, mit dem Fahrrad oder der U2/U4 Haltestelle Burgstraße.`,
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

      <ServiceCardsSection title="Unsere Leistungen in Hamburg Hamm" />

      <section className="section-padding bg-warm-white" aria-labelledby="hamm-prices-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="hamm-prices-heading" className="heading-lg text-center mb-12">
              Leistungen & Preise in Hamburg Hamm
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <PriceList title="Damen" services={SERVICES_DAMEN as any} />
              <PriceList title="Herren" services={SERVICES_HERREN as any} />
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQSection 
        faqs={hammFaqs} 
        title="FAQ – Friseur Hamburg Hamm" 
        subtitle="Häufige Fragen zu unserem Standort in Hamburg Hamm (20537)"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hammLocalSchema) }} />
    </>
  );
}
