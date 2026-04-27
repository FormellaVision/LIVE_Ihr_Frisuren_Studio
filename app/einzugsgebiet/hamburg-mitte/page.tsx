import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';
import { PriceList } from '@/components/shared/PriceList';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Mitte | Meisterbetrieb · Ihr Frisuren-Studio',
  description: 'Friseur Hamburg Mitte ✓ Meisterbetrieb – 10 Min. vom HBF ✓ 277+ Bewertungen 4,9★ ✓ Damen ab 33€ · Herren ab 19€ ✓ Balayage ☎ 040 2509029',
  keywords: [
    'friseur hamburg mitte',
    'friseur nahe hamburg mitte',
    'friseur in der nähe von hamburg mitte',
    'damenfriseur hamburg mitte',
    'herrenfriseur hamburg mitte',
    'balayage hamburg mitte',
    'haare färben hamburg mitte',
    'friseur 20095',
    'friseur 20099',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/einzugsgebiet/hamburg-mitte` },
  openGraph: {
    title: 'Friseur Hamburg Mitte | Ihr Frisuren-Studio – Meisterbetrieb seit 2004',
    description: `Friseur Hamburg Mitte: Ihr Frisuren-Studio in Hamburg-Hamm ist für Kundinnen und Kunden aus Hamburg Mitte (20095, 20099) in ca. 10 Minuten erreichbar. Damen, Herren, Balayage & Haare färben.`,
    url: `${BUSINESS_INFO.website}/einzugsgebiet/hamburg-mitte`,
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

const hamburgMitteFaqs = [
  {
    question: 'Gibt es einen guten Friseur in Hamburg Mitte?',
    answer: 'In Hamburg Mitte gibt es mehrere Salons, aber nur wenige mit Meisterbetrieb-Status. Ihr Frisuren-Studio in Hamburg Hamm ist in wenigen Minuten erreichbar – mit 277+ Google-Bewertungen (4,9 ★) und Meisterqualität seit 2004 die erste Wahl für Kunden aus Hamburg Mitte.',
  },
  {
    question: 'Wie komme ich aus Hamburg Mitte zu Ihrem Salon?',
    answer: 'Von Hamburg Mitte (HBF) sind wir mit der U2 oder U4 in ca. 10 Minuten erreichbar – bis Haltestelle Burgstraße, dann 5 Minuten zu Fuß zur Hammer Landstraße 4. Alternativ mit den Buslinien 25 oder 130.',
  },
  {
    question: 'Bietet Ihr Frisuren-Studio Afterwork-Termine für Kunden aus Hamburg Mitte?',
    answer: `Ja! Viele Kunden aus Hamburg Mitte nutzen unseren Afterwork-Service. Wir haben Di–Fr bis 19:00 Uhr geöffnet und bieten nach telefonischer Absprache sogar spätere Termine an – ideal für alle, die in der City arbeiten.`,
  },
  {
    question: 'Welche Leistungen sind besonders gefragt bei Kunden aus Hamburg Mitte?',
    answer: `Unsere Kunden aus Hamburg Mitte schätzen besonders unsere Expertise bei Balayage und modernen Herrenhaarschnitten (Fades). Als Meisterbetrieb führen wir alle Leistungen für Damen und Herren in höchster Qualität aus.`,
  },
  {
    question: 'Kann ich aus Hamburg Mitte auch Termine für Kosmetik buchen?',
    answer: 'Ja, unser Salon in Hamburg Hamm bietet neben Friseurdienstleistungen auch professionelle Kosmetikbehandlungen an. Das ist für Kunden aus Hamburg Mitte besonders praktisch, da man beide Termine in einem Besuch kombinieren kann.',
  },
  {
    question: 'Wie sind die Preise für Kunden aus Hamburg Mitte?',
    answer: 'Unsere Preise sind transparent und fair. Ein Herrenhaarschnitt beginnt bei 19 €, ein Damenschnitt ab 33 €. Trotz der Nähe zum Stadtzentrum bieten wir Meisterqualität zu attraktiven Konditionen.',
  },
];

export default function HamburgMittePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Einzugsgebiet', url: `${BUSINESS_INFO.website}/einzugsgebiet` },
    { name: 'Hamburg Mitte', url: `${BUSINESS_INFO.website}/einzugsgebiet/hamburg-mitte` },
  ]);

  const faqSchema = getFAQSchema(hamburgMitteFaqs);

  const hamburgMitteLocalSchema = {
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
      'name': 'Hamburg Mitte',
      'postalCode': '20095'
    }
  };

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Hamburg Mitte',
          slug: 'mitte',
          isMainLocation: true,
          intro: `Suchen Sie einen exzellenten Friseur in Hamburg Mitte (20095, 20099)? Auch wenn unser Salon in Hamburg Hamm (20537) liegt, sind wir für Kunden aus Hamburg Mitte die erste Adresse für Meisterqualität. In nur 10 Minuten erreichen Sie unser Frisuren-Studio direkt ab Hauptbahnhof mit der U2 oder U4 (Haltestelle Burgstraße). Als zertifizierter Meisterbetrieb seit 2004 bieten wir Ihnen höchste Präzision bei Haarschnitten, Balayage und Colorationen. Über 277 Kunden bewerten uns mit 4,9 Sternen für unsere persönliche Beratung und erstklassigen Service in entspannter Atmosphäre.`,
          distance: 'ca. 10 Minuten bis Hamburg Hamm',
          travelInfo: `Von Hamburg Mitte zum Friseur in Hamburg Hamm: Mit der U2 oder U4 ab Hauptbahnhof direkt zur Haltestelle Burgstraße – von dort 5 Minuten zu Fuß zur Hammer Landstraße 4. Alternativ: S-Bahn bis Berliner Tor, dann Bus 25 direkt zum Salon.`,
          travelIcon: 'train',
          highlights: [
            'Für Kundinnen und Kunden aus Hamburg Mitte – gut erreichbar in 10 Minuten',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} ★)`,
            'Zentrale Lage in Hamburg Hamm – kurze Wege, persönliche Atmosphäre',
            'Damenfriseur, Herrenfriseur, Balayage und Haare färben in Hamburg Hamm',
            'Mehrsprachig: Deutsch, Englisch, Türkisch, Persisch',
            'Afterwork-Termine Di–Fr nach 19:00 Uhr verfügbar',
          ],
          nearbyDistricts: ['Hamburg Hamm', 'Borgfelde', 'St. Georg', 'HafenCity', 'Hammerbrook'],
          image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />

      <ServiceCardsSection title="Unsere Leistungen für Kunden aus Hamburg Mitte" />

      {/* Services and Pricing Section */}
      <section className="section-padding bg-warm-white" aria-labelledby="mitte-prices-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="mitte-prices-heading" className="heading-lg text-center mb-12">
              Leistungen & Preise für Hamburg Mitte
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <PriceList title="Damen" services={SERVICES_DAMEN} />
              <PriceList title="Herren" services={SERVICES_HERREN} />
            </div>
          </div>
        </div>
      </section>

      {/* Hamburg Mitte FAQ Section */}
      <ServiceFAQSection 
        faqs={hamburgMitteFaqs} 
        title="FAQ – Friseur Hamburg Mitte" 
        subtitle="Häufige Fragen unserer Kunden aus Hamburg Mitte (20095, 20099)"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hamburgMitteLocalSchema) }} />
    </>
  );
}
