import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';
import { PriceList } from '@/components/shared/PriceList';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';

export const metadata: Metadata = {
  title: 'Friseur Borgfelde (20535) | Meisterbetrieb · Ihr Frisuren-Studio',
  description: 'Friseur Borgfelde (20535) ✓ Meisterbetrieb in Hamburg Hamm – nur 5 Min. entfernt ✓ 277+ Bewertungen 4,9★ ✓ Damen, Herren, Balayage ☎ 040 2509029',
  keywords: [
    'friseur borgfelde',
    'friseur nahe borgfelde',
    'friseur borgfelde hamburg',
    'friseur borgfelde 20535',
    'friseur in der nähe von borgfelde',
    'damenfriseur borgfelde',
    'herrenfriseur borgfelde',
    'balayage borgfelde',
    'haare färben borgfelde',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/einzugsgebiet/borgfelde` },
  openGraph: {
    title: 'Friseur Borgfelde | Ihr Frisuren-Studio – Meisterbetrieb seit 2004',
    description: `Friseur Borgfelde: Ihr Frisuren-Studio in Hamburg-Hamm ist für Kundinnen und Kunden aus Borgfelde (20535) in nur 2 U-Bahn-Stationen erreichbar. Damen, Herren, Balayage & Haare färben.`,
    url: `${BUSINESS_INFO.website}/einzugsgebiet/borgfelde`,
  },
};

const SERVICES_DAMEN = [
  { name: 'Cut & Go', price: '33€', description: 'Trockenhaarschnitt für die schnelle Auffrischung' },
  { name: 'Waschen, Schneiden, Föhnen', price: 'ab 43€', description: 'Inkl. Typberatung und Styling' },
  { name: 'Ansatzfarbe', price: '49€', description: 'Professionelle Farbauffrischung' },
  { name: 'Balayage', price: 'ab 179€', description: 'Natürliche Highlights inkl. Veredelung & Schnitt' },
];

const SERVICES_HERREN = [
  { name: 'Maschinenschnitt', price: '19€', description: 'Ganzer Kopf mit Maschine' },
  { name: 'Klassischer Haarschnitt', price: '28€', description: 'Trockenhaarschnitt oder Kurzhaarschnitt' },
  { name: 'Gentleman-Paket', price: '49€', description: 'Schnitt, Bartpflege & Augenbrauen' },
];

const borgfeldeFaqs = [
  {
    question: 'Gibt es einen Friseur direkt in Borgfelde?',
    answer: 'Es gibt keinen Friseursalon direkt in Borgfelde (20535). Der nächste Meisterbetrieb mit Bestbewertungen ist Ihr Frisuren-Studio in Hamburg Hamm – nur 5-10 Minuten entfernt mit U2/U4.',
  },
  {
    question: 'Welche Friseur-Services sind in Borgfelde besonders gefragt?',
    answer: 'Kunden aus Borgfelde buchen vor allem Damenhaarschnitte, Balayage und das Gentleman-Paket. Als Meisterbetrieb seit 2004 bieten wir alle Services für Damen und Herren aus Borgfelde.',
  },
  {
    question: 'Wie schnell erreiche ich euch aus Borgfelde (20535)?',
    answer: `Von Borgfelde (20535) sind wir in unter 10 Minuten erreichbar. Mit der U2 oder U4 ab Berliner Tor bis Burgstraße (2 Stationen), dann 5 Minuten zu Fuß zur Hammer Landstraße 4. Alternativ mit den Buslinien 25 oder 130 direkt vor den Salon.`,
  },
  {
    question: 'Gibt es Parkmöglichkeiten für Kunden aus Borgfelde?',
    answer: `Ja! In der Hammer Landstraße und den umliegenden Seitenstraßen stehen Parkplätze zur Verfügung – meist kostenlos. Wer mit dem Fahrrad aus Borgfelde kommt, kann dieses direkt vor dem Salon abstellen.`,
  },
  {
    question: 'Welche Leistungen sind besonders gefragt bei Kunden aus Borgfelde?',
    answer: `Unsere Kundinnen und Kunden aus Borgfelde schätzen vor allem unsere Balayage- und Colorationsleistungen, professionelle Damenhaarschnitte sowie das Gentleman-Paket für Herren. Als Meisterbetrieb seit 2004 bieten wir höchste Qualität für alle Haartypen.`,
  },
  {
    question: 'Wie buche ich schnell einen Termin, wenn ich aus Borgfelde komme?',
    answer: `Am einfachsten rufen Sie uns direkt unter ${BUSINESS_INFO.phone} an oder schreiben Sie uns per WhatsApp. Sie können auch online über unsere Termin-Buchungsseite buchen. Für Afterwork-Termine nach 19:00 Uhr bitten wir um telefonische Anfrage.`,
  },
];

export default function BorgfeldePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Einzugsgebiet', url: `${BUSINESS_INFO.website}/einzugsgebiet` },
    { name: 'Borgfelde', url: `${BUSINESS_INFO.website}/einzugsgebiet/borgfelde` },
  ]);

  const faqSchema = getFAQSchema(borgfeldeFaqs);

  const borgfeldeLocalSchema = {
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
      'name': 'Borgfelde',
      'postalCode': '20535'
    }
  };

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Borgfelde',
          slug: 'borgfelde',
          isMainLocation: true,
          intro: `Sie suchen einen erstklassigen Friseur in Borgfelde (20535)? Auch wenn sich kein Salon direkt im Stadtteil befindet, ist Ihr Frisuren-Studio in Hamburg Hamm (20537) die ideale Adresse für Sie. Als zertifizierter Meisterbetrieb seit 2004 sind wir nur 2 U-Bahn-Stationen (U2/U4 via Berliner Tor bis Burgstraße) entfernt. Über 277 Kunden bewerten uns mit 4,9 Sternen für exzellente Haarschnitte, Balayage und professionelle Beratung. Erleben Sie Premium-Qualität in Ihrer direkten Nachbarschaft.`,
          distance: 'ca. 5–10 Minuten bis Hamburg Hamm',
          travelInfo: `Von Borgfelde zum Friseur in Hamburg Hamm: Mit der U2 oder U4 ab Berliner Tor bis Burgstraße (2 Stationen), dann 5 Minuten zu Fuß entlang der Hammer Landstraße. Alternativ mit den Buslinien 25 oder 130 direkt bis zum Salon in der Hammer Landstraße 4.`,
          travelIcon: 'train',
          highlights: [
            'Für Kundinnen und Kunden aus Borgfelde – nur wenige Minuten bis Hamburg Hamm',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} ★)`,
            'Gut erreichbar: 2 U-Bahn-Stationen von Borgfelde (20535) nach Hamburg Hamm',
            'Damenfriseur, Herrenfriseur, Balayage und Haare färben in Hamburg Hamm',
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch, Persisch',
            'Flexible Afterwork-Termine nach 19:00 Uhr verfügbar',
          ],
          nearbyDistricts: ['Hamburg Hamm', 'St. Georg', 'Horn', 'Rothenburgsort'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />

      <ServiceCardsSection title="Unsere Leistungen für Kunden aus Borgfelde" />

      {/* Services and Pricing Section */}
      <section className="section-padding bg-warm-white" aria-labelledby="borgfelde-prices-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="borgfelde-prices-heading" className="heading-lg text-center mb-12">
              Leistungen & Preise für Borgfelde
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <PriceList title="Damen" services={SERVICES_DAMEN} />
              <PriceList title="Herren" services={SERVICES_HERREN} />
            </div>
          </div>
        </div>
      </section>

      {/* Borgfelde FAQ Section */}
      <ServiceFAQSection 
        faqs={borgfeldeFaqs} 
        title="FAQ – Friseur Borgfelde" 
        subtitle="Häufige Fragen unserer Kunden aus Borgfelde (20535)"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(borgfeldeLocalSchema) }} />
    </>
  );
}
