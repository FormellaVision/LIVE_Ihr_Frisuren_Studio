import { Metadata } from 'next';
import { BUSINESS_INFO, SERVICES_DAMEN, SERVICES_HERREN } from '@/lib/constants';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';
import { PriceList } from '@/components/shared/PriceList';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';

export const metadata: Metadata = {
  title: 'Friseur Hamburg-Hamm (20537) | Standort & Anfahrt · Ihr Frisuren-Studio',
  description: 'Friseur-Standort Hamburg-Hamm: Adresse Hammer Landstraße 4, Öffnungszeiten, Anfahrt mit U2/U4 Burgstraße & Parken. 277+ Bewertungen 4,9★ ☎ 040 2509029',
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
  alternates: { canonical: `${BUSINESS_INFO.website}/einzugsgebiet/hamm` },
  openGraph: {
    title: 'Friseur Hamburg-Hamm (20537) | Standort & Anfahrt – Ihr Frisuren-Studio',
    description: 'Friseur-Standort Hamburg-Hamm: Adresse Hammer Landstraße 4, Öffnungszeiten, Anfahrt mit U2/U4 Burgstraße & Parken. 277+ Bewertungen 4,9★ ☎ 040 2509029',
    url: `${BUSINESS_INFO.website}/einzugsgebiet/hamm`,
  },
};

export default function HammPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Hamburg Hamm', url: `${BUSINESS_INFO.website}/einzugsgebiet/hamm` },
  ]);

  const hammFaqs = [
  {
    question: "Warum ist Ihr Frisuren-Studio der beste Friseur in Hamburg-Hamm?",
    answer: "Ihr Frisuren-Studio ist seit 2004 als Meisterbetrieb in Hamburg-Hamm tätig. Inhaber Serbay Eskici ist ausgebildeter Friseurmeister. Das Studio hat über 277 Google-Bewertungen mit 4,9 Sternen — die stärkste Bewertungsquote unter allen Friseuren in Hamburg-Hamm. Das 7-köpfige Team bietet Damen- und Herrenschnitte, Balayage, Colorationen und Kosmetik unter einem Dach. Die Hammer Landstraße 4 ist zentral gelegen zwischen Borgfelde und Hamburg-Mitte.",
  },
  {
    question: "Welche Öffnungszeiten hat der Friseur in Hamburg-Hamm?",
    answer: "Ihr Frisuren-Studio in Hamburg-Hamm ist dienstags bis freitags von 09:00 bis 19:00 Uhr geöffnet, samstags von 08:00 bis 14:00 Uhr. Montags und sonntags ist das Studio geschlossen. Besonders beliebt sind die Afterwork-Termine dienstags bis freitags — für Kunden die nach der Arbeit noch einen Termin wahrnehmen möchten, ohne extra Urlaub nehmen zu müssen.",
  },
  {
    question: "Kann ich einen Friseurtermin in Hamburg-Hamm auch kurzfristig bekommen?",
    answer: "Termine in Hamburg-Hamm are kurzfristig möglich — oft auch noch am selben oder nächsten Tag. Am einfachsten buchen Sie online über die Website oder rufen direkt an unter 040 2509029. Das Studio bietet außerdem Afterwork-Termine bis 19:00 Uhr, sodass auch Berufstätige flexibel einen Termin finden. Für aufwändigere Leistungen wie Balayage empfehlen wir eine Woche Vorlaufzeit.",
  },
  {
    question: "Bietet der Friseur in Hamburg-Hamm auch Kosmetik-Leistungen an?",
    answer: "Ja, Ihr Frisuren-Studio in Hamburg-Hamm bietet Kosmetik direkt im Salon an. Das Angebot umfasst Gesichtsbehandlungen (Basic, Classic, Deluxe), Maniküre, Fußpflege, Medizinische Fußpflege sowie Retinol-Peeling und Aknebehandlung. Friseur- und Kosmetik-Termin lassen sich in einem Besuch kombinieren — das spart Zeit und ist für Kunden aus Hamm, Borgfelde und Horn besonders praktisch.",
  },
  {
    question: "Spricht das Team im Friseur Hamburg-Hamm auch andere Sprachen?",
    answer: "Das 7-köpfige Team von Ihr Frisuren-Studio in Hamburg-Hamm ist mehrsprachig: Deutsch, Englisch, Türkisch, Persisch und Rumänisch. Das macht das Studio besonders für internationale Kunden aus Hamburg-Hamm und den umliegenden Stadtteilen attraktiv. Kunden können ihr Anliegen in ihrer bevorzugten Sprache schildern — Beratung und Abstimmung funktionieren so präzise und ohne Missverständnisse.",
  },
  {
    question: "Was kostet ein Haarschnitt beim Friseur in Hamburg-Hamm?",
    answer: "Die Preise bei Ihr Frisuren-Studio in Hamburg-Hamm beginnen bei 19 € für einen Herrenhaarschnitt und ab 33 € für einen Damenschnitt. Balayage ist ab 179 € erhältlich. Alle aktuellen Preise finden Sie auf der Leistungsseite der Website. Das Studio bietet Meisterqualität zu fairen Preisen — und mit über 277 Google-Bewertungen bei 4,9 Sternen ist das Preis-Leistungs-Verhältnis durch echte Kundenstimmen belegt.",
  },
  {
    question: "Ist der Friseur in Hamburg-Hamm barrierefrei zugänglich?",
    answer: "Ja, Ihr Frisuren-Studio in Hamburg-Hamm ist vollständig barrierefrei. Der Eingang ist rollstuhlgerecht, es gibt rollstuhlgerechte Sitzgelegenheiten, ein rollstuhlgerechtes WC, rollstuhlgerechte Parkplätze sowie eine induktive Höranlage. Das Studio ist außerdem LGBTQ+-freundlich und ein sicherer Ort für alle Kunden.",
  },
  {
    question: "Wie erreiche ich den Friseur an der Hammer Landstraße 4 in Hamburg-Hamm?",
    answer: "Ihr Frisuren-Studio befindet sich an der Hammer Landstraße 4, 20537 Hamburg. Mit dem ÖPNV erreichen Sie das Studio bequem über die nahegelegenen Bushaltestellen. Kostenlose Parkplätze an der Straße sind vorhanden. Das Studio liegt zentral zwischen Hamburg-Mitte, Borgfelde und Horn — gut erreichbar für Kunden aus dem gesamten östlichen Hamburg.",
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
          h1Title: 'Ihr Frisuren-Studio – Standort Hamburg Hamm',
          slug: 'hamm',
          isMainLocation: true,
          intro: `Willkommen in Ihrem Frisuren-Studio – Ihr Friseur in Hamburg Hamm seit 2004. Direkt vor Ort in der Hammer Landstraße 4 bieten wir Ihnen erstklassige Friseurdienstleistungen ohne lange Anfahrtswege. Als zertifizierter Meisterbetrieb garantieren wir höchste Qualität für Damen, Herren und Kinder. Ob moderner Haarschnitt, brillante Coloration oder trendiges Balayage – unser Team verbindet jahrelange Erfahrung mit aktuellen Trends. Über 277 zufriedene Kunden bewerten uns mit 4,9 Sternen auf Google. Sie erreichen uns bequem zu Fuß, mit dem Fahrrad oder der U2/U4 Haltestelle Burgstraße.`,
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
