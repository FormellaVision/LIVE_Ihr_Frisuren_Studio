import { Metadata } from 'next';
import { BUSINESS_INFO, SERVICES_DAMEN, SERVICES_HERREN } from '@/lib/constants';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';
import { PriceList } from '@/components/shared/PriceList';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { ServiceCardsSection } from '@/components/sections/ServiceCardsSection';

export const metadata: Metadata = {
  title: 'Friseur Horn | Meisterbetrieb · Ihr Frisuren-Studio',
  description: `Ihr Friseur für Hamburg Horn – Ihr Frisuren-Studio in Hamburg Hamm, nur Minuten entfernt. Meisterbetrieb seit 2004. 270+ Bewertungen ★4,9. ☎ 040 2509029`,
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

  const hornFaqs = [
    {
      question: 'Gibt es einen Meisterbetrieb-Friseur in Horn?',
      answer: 'In Horn gibt es keinen Friseursalon mit Meisterbetrieb-Status in dieser Qualität. Ihr Frisuren-Studio in Hamburg Hamm ist in ca. 10-15 Minuten erreichbar – mit 270+ Google-Bewertungen (4,9 ★) die beste Wahl für Kunden aus Horn.',
    },
    {
      question: 'Wie komme ich aus Horn zu Ihrem Salon?',
      answer: 'Von Horn erreichen Sie uns mit der U2 Richtung Niendorf Nord bis Burgstraße (ca. 4 Stationen), dann 5 Minuten zu Fuß zur Hammer Landstraße 4. Alternativ mit dem Bus direkt bis Hamburg Hamm.',
    },
  ];

  const faqSchema = getFAQSchema(hornFaqs);

  const hornLocalSchema = {
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
      'name': 'Horn',
      'postalCode': '22111'
    }
  };

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Horn',
          slug: 'horn',
          intro: `Sie suchen einen erstklassigen Friseur in Horn (22111)? Auch wenn sich kein Salon direkt im Stadtteil befindet, ist Ihr Frisuren-Studio in Hamburg Hamm (20537) die ideale Adresse für Sie. Als zertifizierter Meisterbetrieb seit 2004 sind wir nur ca. 10 Minuten Fahrtweg entfernt. Von Horn aus erreichen Sie uns bequem mit der U2 über die Haltestelle Burgstraße oder direkt mit dem Fahrrad. Über 270 Kunden bewerten uns mit 4,9 Sternen für exzellente Haarschnitte, Balayage und professionelle Beratung. Erleben Sie Premium-Qualität in Ihrer Nähe – ob Damen, Herren oder Kinder.`,
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

      <section className="section-padding bg-warm-white" aria-labelledby="horn-prices-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="horn-prices-heading" className="heading-lg text-center mb-12">
              Leistungen & Preise für Horn
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <PriceList title="Damen" services={SERVICES_DAMEN as any} />
              <PriceList title="Herren" services={SERVICES_HERREN as any} />
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQSection 
        faqs={hornFaqs} 
        title="FAQ – Friseur Horn" 
        subtitle="Häufige Fragen unserer Kunden aus Horn (22111)"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hornLocalSchema) }} />
    </>
  );
}
