import { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PriceList } from '@/components/shared/PriceList';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceContactBlock } from '@/components/shared/ServiceContactBlock';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { AnimatedFeatureCards } from '@/components/shared/AnimatedFeatureCards';
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
    iconName: 'sparkles' as const,
    title: 'Individuelle Beratung',
    description: 'Persönliche Typberatung für den perfekten Look',
  },
  {
    iconName: 'palette' as const,
    title: 'Balayage-Spezialist',
    description: 'Natürliche Highlights mit modernsten Färbetechniken',
  },
  {
    iconName: 'award' as const,
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

      <Breadcrumb />

      <AnimatedFeatureCards features={features} processSteps={processSteps}>
        <PriceList title="Damen" services={SERVICES_DAMEN} />
      </AnimatedFeatureCards>

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
