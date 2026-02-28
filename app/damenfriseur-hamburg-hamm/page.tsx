import { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { PriceList } from '@/components/shared/PriceList';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceContactBlock } from '@/components/shared/ServiceContactBlock';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { SERVICES_DAMEN, BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, SERVICE_FAQS } from '@/lib/schema';
import { Check, Sparkles, Palette, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Damenfriseur Hamburg Hamm - Premium Haarschnitte',
  description: `Damenfriseur in Hamburg Hamm: Waschen, Schneiden & Föhnen ab 43€. Meisterbetrieb seit 2004. Balayage, Coloration, Dauerwelle. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['damenfriseur hamburg hamm', 'friseur damen hamburg', 'haarschnitt damen hamburg hamm', 'balayage hamburg', 'coloration hamburg'],
  openGraph: {
    title: 'Damenfriseur Hamburg Hamm - Premium Haarschnitte | Ihr Frisuren-Studio',
    description: `Professionelle Damenhaarschnitte in Hamburg Hamm ab 43€. Balayage-Spezialist. ${BUSINESS_INFO.reviews.count}+ Bewertungen (${BUSINESS_INFO.reviews.rating})`,
    url: `${BUSINESS_INFO.website}/damenfriseur-hamburg-hamm`,
    images: [
      {
        url: `${BUSINESS_INFO.website}/og-damen.jpg`,
        width: 1200,
        height: 630,
        alt: 'Damenfriseur Hamburg Hamm - Ihr Frisuren-Studio',
      },
    ],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/damenfriseur-hamburg-hamm`,
  },
};

const features = [
  {
    icon: Sparkles,
    title: 'Individuelle Beratung',
    description: 'Persönliche Typberatung für den perfekten Look',
  },
  {
    icon: Palette,
    title: 'Balayage-Spezialist',
    description: 'Natürliche Highlights mit modernsten Färbetechniken',
  },
  {
    icon: Award,
    title: 'Meisterqualität',
    description: 'Über 20 Jahre Erfahrung in Premium-Haarschnitten',
  },
];

const processSteps = [
  { step: '1', title: 'Beratung', description: 'Persönliche Typberatung und Wunschanalyse' },
  { step: '2', title: 'Waschen & Pflege', description: 'Premium-Pflege abgestimmt auf Ihren Haartyp' },
  { step: '3', title: 'Schnitt & Styling', description: 'Präzisionsschnitt von erfahrenen Stylisten' },
  { step: '4', title: 'Finish', description: 'Professionelles Styling mit hochwertigen Produkten' },
];

export default function DamenfriseurPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Damenfriseur Hamburg Hamm', url: `${BUSINESS_INFO.website}/damenfriseur-hamburg-hamm` },
  ]);

  const serviceSchema = getServiceSchema(
    'Damenfriseur',
    'Damenhaarschnitte Hamburg Hamm',
    'Professionelle Damenhaarschnitte in Hamburg Hamm. Waschen, Schneiden & Föhnen inkl. Styling mit hochwertigen Produkten.',
    `${BUSINESS_INFO.website}/damenfriseur-hamburg-hamm`,
    SERVICES_DAMEN.slice(0, 5).map((s) => ({
      name: s.name,
      description: s.name,
      price: s.price,
    }))
  );

  const faqSchema = getFAQSchema(SERVICE_FAQS.damen);

  const relatedServices = [
    {
      href: '/balayage-hamburg-hamm',
      label: 'Balayage Hamburg Hamm',
      description: 'Natürliche Highlights mit modernen Färbetechniken',
    },
    {
      href: '/haare-faerben-hamburg-hamm',
      label: 'Haare färben Hamburg Hamm',
      description: 'Professionelle Colorationen, Strähnen & Balayage',
    },
    {
      href: '/herrenfriseur-hamburg-hamm',
      label: 'Herrenfriseur Hamburg Hamm',
      description: 'Moderne Herrenhaarschnitte & Bartpflege',
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
        title="Damenfriseur Hamburg Hamm"
        subtitle="Premium Haarschnitte & Colorationen"
        description="Professionelle Damenhaarschnitte, Balayage und Colorationen von erfahrenen Stylisten in Hamburg-Hamm"
        backgroundImage="https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <h2 className="sr-only">Unsere Stärken als Damenfriseur Hamburg Hamm</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Ablauf */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl font-bold text-center mb-10">Ihr Termin bei uns — So läuft es ab</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <PriceList title="Damen" services={SERVICES_DAMEN} />
          </div>

          {/* Für wen geeignet */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Für wen ist unser Damenfriseur-Service ideal?
              </h2>
              <ul className="space-y-3">
                {[
                  'Frauen die Wert auf individuelle Beratung und Typanalyse legen',
                  'Kundinnen mit anspruchsvollen Haaren (lockig, dünn, dick)',
                  'Alle die natürliche Highlights mit Balayage wünschen',
                  'Bräute und feierliche Anlässe (Hochsteckfrisuren, Brautstyling)',
                  'Berufstätige Frauen — auch Afterwork-Termine nach 19:00 Uhr',
                ].map((item, index) => (
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
                Warum Ihr Frisuren-Studio für Damen?
              </h2>
              <ul className="space-y-3">
                {[
                  'Meisterqualität seit 2004 in Hamburg Hamm',
                  'Spezialisiert auf Balayage und moderne Färbetechniken',
                  'Hochwertige Produkte für langanhaltende Ergebnisse',
                  'Mehrsprachige Beratung (Deutsch, Englisch, Türkisch, Persisch)',
                  'Afterwork-Termine nach 19:00 Uhr möglich',
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
        faqs={SERVICE_FAQS.damen}
        title="Häufige Fragen zum Damenfriseur"
        subtitle="Alles Wichtige zu Damenhaarschnitten in Hamburg Hamm"
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
        title="Ihr neuer Look wartet!"
        description="Buchen Sie jetzt Ihren Termin für professionelle Damenhaarschnitte in Hamburg Hamm."
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
