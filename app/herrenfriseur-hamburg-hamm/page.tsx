import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PriceList } from '@/components/shared/PriceList';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceContactBlock } from '@/components/shared/ServiceContactBlock';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { ServiceAreaLinks } from '@/components/shared/ServiceAreaLinks';
import { SERVICES_HERREN, BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, SERVICE_FAQS } from '@/lib/schema';
import { Check, Scissors, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Herrenfriseur Hamburg Hamm - Moderne Herrenhaarschnitte',
  description: `Herrenfriseur in Hamburg Hamm: Haarschnitte ab 18€, Design-Schnitt 34€. Bartpflege & Gentleman-Paket. Meisterbetrieb Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['herrenfriseur hamburg hamm', 'friseur herren hamburg', 'herrenhaarschnitt hamburg', 'bartpflege hamburg hamm'],
  openGraph: {
    title: 'Herrenfriseur Hamburg Hamm - Moderne Herrenhaarschnitte | Ihr Frisuren-Studio',
    description: 'Professionelle Herrenhaarschnitte in Hamburg Hamm ab 18€. Bartpflege-Spezialist.',
    url: `${BUSINESS_INFO.website}/herrenfriseur-hamburg-hamm`,
    images: [
      {
        url: `${BUSINESS_INFO.website}/og-herren.jpg`,
        width: 1200,
        height: 630,
        alt: 'Herrenfriseur Hamburg Hamm - Ihr Frisuren-Studio',
      },
    ],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/herrenfriseur-hamburg-hamm`,
  },
};

const features = [
  {
    icon: Scissors,
    title: 'Präzisions-Schnitte',
    description: 'Vom klassischen Schnitt bis zum modernen Fade',
  },
  {
    icon: Scissors,
    title: 'Bart-Styling',
    description: 'Professionelle Bartpflege und -modellage',
  },
  {
    icon: Award,
    title: 'Gentleman-Service',
    description: 'Komplett-Paket mit Schnitt, Bart & Augenbrauen',
  },
];

const processSteps = [
  { step: '1', title: 'Beratung', description: 'Wunsch-Style besprechen und beraten lassen' },
  { step: '2', title: 'Schnitt', description: 'Präzisionsschnitt: Fade, Klassik oder Design' },
  { step: '3', title: 'Bart', description: 'Professionelle Bartmodellage und Kontur' },
  { step: '4', title: 'Finish', description: 'Styling und Pflege für den perfekten Look' },
];

const suitableFor = [
  'Klassische Herrenhaarschnitte jeder Art',
  'Moderne Fades und Design-Schnitte',
  'Professionelle Bartpflege und Bartmodellage',
  'Das beliebte Gentleman-Paket (Schnitt + Bart + Augenbrauen)',
  'Herren-Coloration und Grau-Camouflage',
  'Berufstätige — auch Afterwork-Termine nach 19:00 Uhr',
];

export default function HerrenfriseurPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Herrenfriseur Hamburg Hamm', url: `${BUSINESS_INFO.website}/herrenfriseur-hamburg-hamm` },
  ]);

  const serviceSchema = getServiceSchema(
    'Herrenfriseur',
    'Herrenhaarschnitte Hamburg Hamm',
    'Professionelle Herrenhaarschnitte in Hamburg Hamm. Vom Maschinenschnitt bis zum Design-Schnitt, inkl. Bartpflege.',
    `${BUSINESS_INFO.website}/herrenfriseur-hamburg-hamm`,
    SERVICES_HERREN.slice(0, 5).map((s) => ({
      name: s.name,
      description: s.name,
      price: s.price,
    }))
  );

  const faqSchema = getFAQSchema(SERVICE_FAQS.herren);

  const relatedServices = [
    {
      href: '/damenfriseur-hamburg-hamm',
      label: 'Damenfriseur Hamburg Hamm',
      description: 'Professionelle Damenhaarschnitte & Styling',
    },
    {
      href: '/haare-faerben-hamburg-hamm',
      label: 'Haare färben Hamburg Hamm',
      description: 'Professionelle Colorationen, Strähnen & Balayage',
    },
    {
      href: '/balayage-hamburg-hamm',
      label: 'Balayage Hamburg Hamm',
      description: 'Natürliche Highlights mit modernen Färbetechniken',
    },
    {
      href: '/leistungen',
      label: 'Alle Leistungen & Preise',
      description: 'Komplettes Angebot: Damen, Herren & Kosmetik',
    },
  ];

  return (
    <>
      <ServicePageHeader
        title="Herrenfriseur Hamburg Hamm"
        subtitle="Moderne Herrenhaarschnitte & Bartpflege"
        description="Professionelle Herrenhaarschnitte, Bartmodellage und Gentleman-Service von erfahrenen Stylisten"
        backgroundImage="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <h2 className="sr-only">Unsere Stärken als Herrenfriseur Hamburg Hamm</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Ablauf */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl font-bold text-center mb-10">Ihr Termin — So läuft es ab</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <PriceList title="Herren" services={SERVICES_HERREN} />
          </div>

          {/* Gentleman-Paket Highlight */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Das Gentleman-Paket — Nur 49€
              </h2>
              <p className="text-gray-700 mb-4">
                Unser Rundum-Sorglos-Paket für den modernen Mann:
              </p>
              <ul className="space-y-2">
                {[
                  'Design-Schnitt mit Waschen & Styling',
                  'Professionelle Bartmodellage',
                  'Augenbrauen-Korrektur',
                  'Hochwertige Pflegeprodukte',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Für wen geeignet */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Für wen ist unser Herrenfriseur-Service ideal?
              </h2>
              <ul className="space-y-3">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Warum Ihr Frisuren-Studio für Herren?
              </h2>
              <ul className="space-y-3">
                {[
                  'Inhaber Serbay Eskici ist Herrenspezialist mit über 20 Jahren Erfahrung',
                  'Moderne Schnitt- und Styling-Techniken',
                  'Professionelle Bartpflege und -beratung',
                  'Entspannte Atmosphäre für den Mann von heute',
                  'Afterwork-Termine auch nach 19:00 Uhr',
                  `${BUSINESS_INFO.reviews.count}+ zufriedene Kunden (${BUSINESS_INFO.reviews.rating} Sterne)`,
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceContactBlock />

      <ServiceFAQSection
        faqs={SERVICE_FAQS.herren}
        title="Häufige Fragen zum Herrenfriseur"
        subtitle="Alles Wichtige zu Herrenhaarschnitten in Hamburg Hamm"
      />

      <ServiceAreaLinks
        service="Herrenfriseur"
        serviceSlug="herrenfriseur"
      />

      <section className="section-padding">
        <div className="container-custom">
          <RelatedServices
            services={relatedServices}
            title="Entdecken Sie weitere Services"
          />
        </div>
      </section>

      <CTABanner
        title="Zeit für einen neuen Style?"
        description="Buchen Sie jetzt Ihren Termin für professionelle Herrenhaarschnitte in Hamburg Hamm."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
