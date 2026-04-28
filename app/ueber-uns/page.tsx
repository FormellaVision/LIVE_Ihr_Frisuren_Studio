import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceCards } from '@/components/shared/ServiceCards';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getPersonSchemas } from '@/lib/schema';
import { Award, Users, Heart, Globe } from 'lucide-react';
import { HistorySection } from '@/components/about/HistorySection';
import { TeamLightbox } from '@/components/about/TeamLightbox';

const teamServices = [
  {
    title: 'Damenfriseur',
    description: 'Professionelle Damenhaarschnitte & Balayage',
    href: '/damenfriseur-hamburg-hamm',
  },
  {
    title: 'Herrenfriseur',
    description: 'Moderne Herrenhaarschnitte & Bartpflege',
    href: '/herrenfriseur-hamburg-hamm',
  },
  {
    title: 'Balayage',
    description: 'Natürliche Highlights mit modernen Techniken',
    href: '/balayage-hamburg-hamm',
  },
  {
    title: 'Haare färben',
    description: 'Professionelle Colorationen & Strähnen',
    href: '/haare-faerben-hamburg-hamm',
  },
];

export const metadata: Metadata = {
  title: 'Team & Geschichte | Ihr Frisuren-Studio in Hamburg Hamm',
  description: `Lernen Sie das Team von Ihr Frisuren-Studio kennen. Meisterbetrieb seit 2004 in Hamburg Hamm mit Erfahrung, Leidenschaft und persönlicher Beratung.`,
  keywords: ['friseur team hamburg', 'friseurmeister hamburg hamm', 'über uns friseur hamburg'],
  openGraph: {
    title: 'Team & Geschichte - Friseur Hamburg Hamm | Ihr Frisuren-Studio',
    description: `Lernen Sie unser Team kennen. Meisterbetrieb seit ${BUSINESS_INFO.founded} in Hamburg Hamm.`,
    url: `${BUSINESS_INFO.website}/ueber-uns`,
    images: [
      {
        url: 'https://res.cloudinary.com/dqkld61zu/image/upload/q_auto,f_auto,w_1200,h_630,c_fill/v1773015024/Teamfoto2_w3uxfj.webp',
        width: 1200,
        height: 630,
        alt: 'Team – Ihr Frisuren-Studio Hamburg-Hamm | Meisterbetrieb seit 2004',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://res.cloudinary.com/dqkld61zu/image/upload/q_auto,f_auto,w_1200,h_630,c_fill/v1773015024/Teamfoto2_w3uxfj.webp'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/ueber-uns`,
  },
};

const values = [
  {
    icon: Award,
    title: 'Meisterqualität',
    description: 'Zertifizierter Meisterbetrieb mit höchsten Qualitätsansprüchen.',
  },
  {
    icon: Heart,
    title: 'Leidenschaft',
    description: 'Wir lieben was wir tun - und das sieht man am Ergebnis.',
  },
  {
    icon: Users,
    title: 'Persönlich',
    description: 'Individuelle Beratung und persönliche Betreuung für jeden Kunden.',
  },
  {
    icon: Globe,
    title: 'Vielfalt',
    description: 'Mehrsprachiges Team für Kunden aus aller Welt.',
  },
];

export default function UeberUnsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Über uns', url: `${BUSINESS_INFO.website}/ueber-uns` },
  ]);
  const personSchemas = getPersonSchemas();

  return (
    <>
      <ServicePageHeader
        title="Unser Team"
        subtitle={`Meisterbetrieb seit ${BUSINESS_INFO.founded}`}
        description="Lernen Sie die Menschen hinter Ihr Frisuren-Studio kennen - erfahrene Meister und Gesellen mit Leidenschaft fürs Handwerk"
        backgroundImage="https://res.cloudinary.com/dqkld61zu/image/upload/v1773015024/Teamfoto2_w3uxfj.webp"
        imageAlt="Das Team von Ihr Frisuren-Studio Hamburg Hamm – Ihr Friseurmeisterbetrieb seit 2004"
        backgroundFit="contain"
        backgroundPosition="center 64px"
      />

      <Breadcrumb />

      <HistorySection businessInfo={BUSINESS_INFO} />

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up" hasScale>
            <h2 className="heading-md mb-8 text-center">Das Team</h2>
          </AnimatedSection>

          <TeamLightbox />
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <AnimatedSection direction="up" hasScale>
            <h2 className="heading-md mb-12 text-center">Unsere Werte</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const directions: Array<'diagonal-up-left' | 'diagonal-up-right' | 'up' | 'down'> = [
                'diagonal-up-left',
                'diagonal-up-right',
                'up',
                'down',
              ];
              return (
                <ScrollAnimationCard
                  key={index}
                  direction={directions[index % 4]}
                  delay={index * 0.12}
                  hasScale
                >
                  <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </ScrollAnimationCard>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Lernen Sie uns persönlich kennen!"
        description="Buchen Sie Ihren ersten Termin und erleben Sie unseren Service."
      />

      <section className="section-padding">
        <div className="container-custom">
          <ServiceCards
            title="Was wir für Sie tun können"
            subtitle="Entdecken Sie unsere Leistungen"
            items={teamServices}
            columns={4}
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {personSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}