import { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { PriceList } from '@/components/shared/PriceList';
import { CTABanner } from '@/components/shared/CTABanner';
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

          <div className="max-w-3xl mx-auto">
            <PriceList title="Damen" services={SERVICES_DAMEN} />
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
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
