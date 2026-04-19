import { Metadata } from 'next';
import { BUSINESS_INFO, SERVICES_KOSMETIK } from '@/lib/constants';
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from '@/lib/schema';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PriceList } from '@/components/shared/PriceList';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { CTABanner } from '@/components/shared/CTABanner';
import { RelatedServices } from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
  title: 'Kosmetik Hamburg Hamm | Gesichtsbehandlung, Maniküre & Fußpflege · Ihr Frisuren-Studio',
  description: 'Kosmetik Hamburg Hamm ✓ Gesichtsbehandlung ab 45€ ✓ Maniküre ab 26€ ✓ Med. Fußpflege ab 32€ ✓ Meisterbetrieb seit 2004 ✓ 270+ Bewertungen 4,9★ ☎ 040 2509029',
  keywords: [
    'kosmetik hamburg hamm',
    'gesichtsbehandlung hamburg hamm',
    'maniküre hamburg hamm',
    'fußpflege hamburg hamm',
    'med fußpflege hamburg hamm',
    'kosmetikstudio hamburg hamm',
    'kosmetik 20537',
    'retinol peeling hamburg',
  ],
  openGraph: {
    title: 'Kosmetik Hamburg Hamm | Ihr Frisuren-Studio – Meisterbetrieb seit 2004',
    description: 'Kosmetik Hamburg Hamm: Gesichtsbehandlung, Maniküre und medizinische Fußpflege im Meisterbetrieb Ihr Frisuren-Studio. Hammer Landstraße 4, 20537 Hamburg-Hamm.',
    url: `${BUSINESS_INFO.website}/kosmetik-hamburg-hamm`,
    images: [
      {
        url: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp',
        width: 1200,
        height: 630,
        alt: 'Kosmetik Hamburg Hamm – Ihr Frisuren-Studio',
      },
    ],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/kosmetik-hamburg-hamm`,
  },
};

const kosmetikFaqs = [
  {
    question: 'Welche Kosmetik-Leistungen bietet Ihr Frisuren-Studio in Hamburg Hamm an?',
    answer: 'Wir bieten ein vollständiges Kosmetik-Angebot im Meisterbetrieb: Gesichtsbehandlung Basic (45€) und Deluxe (69€), Retinol Peeling (79€), Maniküre ab 26€, Maniküre mit Lack ab 32€, medizinische Fußpflege ab 32€ sowie Augenbrauen-Korrekturen und Wimpernfärben. Alle Behandlungen werden von geschultem Fachpersonal in angenehmer, ruhiger Atmosphäre durchgeführt. Eine Terminvereinbarung vorab ist empfohlen.',
  },
  {
    question: 'Was beinhaltet die Gesichtsbehandlung in Hamburg Hamm?',
    answer: 'Die Gesichtsbehandlung Basic (45€) umfasst eine professionelle Reinigung, Peeling, Extraktion und abschließende Pflege – abgestimmt auf Ihren Hauttyp. Die Gesichtsbehandlung Deluxe (69€) beinhaltet zusätzlich eine Intensivpflege-Maske und Massagen für das optimale Ergebnis. Das Retinol Peeling (79€) ist ideal für Anti-Aging-Pflege und eine gleichmäßigere Hauttextur. Bitte kommen Sie ungeschminkt zum Termin.',
  },
  {
    question: 'Was kostet Maniküre in Hamburg Hamm?',
    answer: 'Maniküre gibt es bei uns ab 26€, Maniküre mit Lack ab 32€. Die Behandlung umfasst Nagelpflege, Formgebung, Nagelhautpflege und auf Wunsch eine Lackierung. Unsere Maniküre ist für Damen und Herren geeignet. Für Termine bitte telefonisch unter 040 2509029 anfragen – Kosmetik-Termine laufen separat vom Friseur-Betrieb.',
  },
  {
    question: 'Was ist medizinische Fußpflege und was kostet sie?',
    answer: 'Medizinische Fußpflege (Podologie) bei uns beginnt ab 32€ und umfasst die Behandlung von Hornhaut, Nägeln und Nagelproblemen durch geschultem Fachpersonal. Im Gegensatz zur kosmetischen Fußpflege werden dabei auch problemhafte Nägel und Hornhautbildungen fachgerecht behandelt. Ideal für Menschen mit empfindlichen Füßen oder nach langen Stehberufen.',
  },
  {
    question: 'Muss ich für Kosmetik-Termine extra anrufen?',
    answer: `Ja, bitte vereinbaren Sie Kosmetik-Termine immer telefonisch unter ${BUSINESS_INFO.phone} oder per WhatsApp. Kosmetik-Termine laufen separat vom Friseur-Betrieb und benötigen mehr Vorlaufzeit. Wir empfehlen mindestens 2-3 Tage Vorlauf, besonders für Gesichtsbehandlungen und Peelings. Afterwork-Termine für Kosmetik sind nach Absprache möglich.`,
  },
  {
    question: 'Bieten Sie auch Kosmetik für Männer in Hamburg Hamm an?',
    answer: 'Ja, unsere Kosmetik-Leistungen sind für Damen und Herren gleichermaßen geeignet. Besonders Gesichtsbehandlungen, Augenbrauen-Korrekturen und Maniküre werden auch von männlichen Kunden regelmäßig gebucht. Das Retinol Peeling für die Hautpflege ist ebenfalls unabhängig vom Geschlecht. Unser mehrsprachiges Team berät Sie gerne auf Deutsch, Englisch, Türkisch oder Persisch.',
  },
];

export default function KosmetikHamburgHammPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Leistungen', url: `${BUSINESS_INFO.website}/leistungen` },
    { name: 'Kosmetik Hamburg Hamm', url: `${BUSINESS_INFO.website}/kosmetik-hamburg-hamm` },
  ]);

  const serviceSchema = getServiceSchema(
    'Kosmetik',
    'Kosmetik Hamburg Hamm – Ihr Frisuren-Studio',
    'Professionelle Kosmetikbehandlungen in Hamburg Hamm: Gesichtsbehandlung, Maniküre und medizinische Fußpflege im Meisterbetrieb seit 2004.',
    `${BUSINESS_INFO.website}/kosmetik-hamburg-hamm`,
    [
      { name: 'Gesichtsbehandlung Basic', description: 'Professionelle Gesichtsbehandlung', price: '45' },
      { name: 'Gesichtsbehandlung Deluxe', description: 'Intensive Gesichtsbehandlung mit Maske', price: '69' },
      { name: 'Maniküre', description: 'Professionelle Nagelpflege', price: '26' },
      { name: 'Med. Fußpflege', description: 'Medizinische Fußpflege', price: '32' },
      { name: 'Retinol Peeling', description: 'Anti-Aging Peeling-Behandlung', price: '79' },
    ]
  );

  const faqSchema = getFAQSchema(kosmetikFaqs);

  const kosmetikLocalSchema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': 'https://ihr-frisuren-studio.de/#business',
    'name': 'Ihr Frisuren-Studio',
    'url': 'https://ihr-frisuren-studio.de',
    'telephone': '+49402509029',
    'priceRange': '€€',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Hammer Landstraße 4',
      'addressLocality': 'Hamburg',
      'postalCode': '20537',
      'addressCountry': 'DE',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Kosmetik-Leistungen',
      'itemListElement': [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Gesichtsbehandlung Basic' }, 'price': '45', 'priceCurrency': 'EUR' },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Gesichtsbehandlung Deluxe' }, 'price': '69', 'priceCurrency': 'EUR' },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Maniküre' }, 'price': '26', 'priceCurrency': 'EUR' },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Med. Fußpflege' }, 'price': '32', 'priceCurrency': 'EUR' },
      ],
    },
  };

  return (
    <>
      <ServicePageHeader
        title="Kosmetik Hamburg Hamm"
        subtitle="Gesichtsbehandlung, Maniküre & med. Fußpflege"
        description="Professionelle Kosmetikbehandlungen im Meisterbetrieb – für Damen und Herren in Hamburg-Hamm."
        backgroundImage="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <section className="section-padding" aria-labelledby="kosmetik-prices-heading">
        <div className="container-custom">
          <h2 id="kosmetik-prices-heading" className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4">
            Unsere Kosmetik-Leistungen & Preise
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Alle Kosmetikbehandlungen im Meisterbetrieb Ihr Frisuren-Studio, Hammer Landstraße 4, Hamburg-Hamm
          </p>
          <div className="max-w-xl mx-auto">
            <PriceList title="Kosmetik" services={SERVICES_KOSMETIK as any} />
          </div>
        </div>
      </section>

      <ServiceFAQSection
        faqs={kosmetikFaqs}
        title="FAQ – Kosmetik Hamburg Hamm"
        subtitle="Häufige Fragen zu unseren Kosmetik-Leistungen in Hamburg-Hamm"
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <RelatedServices
            title="Weitere Leistungen im Überblick"
            services={[
              { href: '/damenfriseur-hamburg-hamm', label: 'Damenfriseur Hamburg Hamm', description: 'Haarschnitte, Balayage & Colorationen' },
              { href: '/herrenfriseur-hamburg-hamm', label: 'Herrenfriseur Hamburg Hamm', description: 'Haarschnitte, Bartpflege & Gentleman-Paket' },
              { href: '/balayage-hamburg-hamm', label: 'Balayage Hamburg Hamm', description: 'Natürliche Highlights ab 179€' },
              { href: '/leistungen', label: 'Alle Leistungen & Preise', description: 'Komplette Preisliste im Überblick' },
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Kosmetik-Termin in Hamburg Hamm buchen"
        description="Gesichtsbehandlung ab 45€ · Maniküre ab 26€ · Med. Fußpflege ab 32€ · Bitte telefonisch anfragen"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kosmetikLocalSchema) }} />
    </>
  );
}
