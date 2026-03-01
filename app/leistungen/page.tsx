import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PriceList } from '@/components/shared/PriceList';
import { CTABanner } from '@/components/shared/CTABanner';
import { PaymentBadges } from '@/components/shared/PaymentBadges';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';
import { SERVICES_DAMEN, SERVICES_HERREN, SERVICES_KOSMETIK, BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getAfterworkOfferSchema, getServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Leistungen & Preise - Friseur Hamburg Hamm',
  description: `Alle Leistungen & Preise: Damen ab 33€, Herren ab 18€, Balayage ab 179€, Kosmetik. Transparent & fair. Meisterbetrieb Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur preise hamburg', 'haarschnitt preise hamburg hamm', 'balayage preis hamburg', 'friseur leistungen hamburg'],
  openGraph: {
    title: 'Leistungen & Preise - Friseur Hamburg Hamm | Ihr Frisuren-Studio',
    description: 'Alle Leistungen & Preise: Damen ab 33€, Herren ab 18€, Balayage ab 179€, Kosmetik. Transparent & fair.',
    url: `${BUSINESS_INFO.website}/leistungen`,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/leistungen`,
  },
};

export default function LeistungenPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Leistungen', url: `${BUSINESS_INFO.website}/leistungen` },
  ]);
  const afterworkOfferSchema = getAfterworkOfferSchema();
  const serviceSchema = getServiceSchema(
    'Friseursalon',
    'Leistungen & Preise - Ihr Frisuren-Studio Hamburg Hamm',
    'Professionelle Friseurdienstleistungen in Hamburg Hamm: Damen, Herren, Balayage & Kosmetik. Transparente Preise im Meisterbetrieb seit 2004.',
    `${BUSINESS_INFO.website}/leistungen`,
    [
      ...SERVICES_DAMEN.slice(0, 4).map((s) => ({ name: s.name, description: s.name, price: s.price })),
      ...SERVICES_HERREN.slice(0, 3).map((s) => ({ name: s.name, description: s.name, price: s.price })),
    ]
  );

  return (
    <>
      <ServicePageHeader
        title="Leistungen & Preise"
        subtitle="Ihr Frisuren-Studio Hamburg Hamm"
        description="Transparente Preise, professioneller Service - Damen, Herren, Balayage & Kosmetik"
        backgroundImage="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollAnimationCard direction="left" delay={0.1} hasScale>
              <PriceList title="Damen" services={SERVICES_DAMEN} />
            </ScrollAnimationCard>
            <ScrollAnimationCard direction="right" delay={0.2} hasScale>
              <PriceList title="Herren" services={SERVICES_HERREN} />
            </ScrollAnimationCard>
          </div>

          <AnimatedSection direction="up" delay={0.3} hasScale>
            <div id="kosmetik" className="mt-8 max-w-3xl mx-auto">
              <PriceList title="Kosmetik" services={SERVICES_KOSMETIK} />
            </div>
          </AnimatedSection>

          <ScrollAnimationCard direction="diagonal-up-left" delay={0.4} hasScale>
            <div className="mt-12 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="font-playfair text-xl font-bold mb-3 text-amber-800">
                Afterwork Specials
              </h2>
              <p className="text-gray-700">
                Genießen Sie exklusive Termine nach Feierabend: Di-Fr ab 19:00 Uhr & Sa ab 14:00 Uhr.
                <br />
                <strong>Aufpreis: +10€ auf reguläre Preise</strong>
              </p>
            </div>
          </ScrollAnimationCard>

          <AnimatedSection direction="up" delay={0.5}>
            <div className="mt-8 max-w-3xl mx-auto text-center text-sm text-gray-500">
              <p>
                Alle Preise verstehen sich inklusive Beratung und professioneller Produkte.
                <br />
                Bei besonderen Wünschen oder längeren Haaren kann der Preis variieren.
              </p>
            </div>
          </AnimatedSection>

          <ScrollAnimationCard direction="diagonal-up-right" delay={0.6} hasScale>
            <div className="mt-10 max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="font-playfair text-lg font-bold text-gray-800 text-center mb-1">
                Zahlungsmethoden
              </h2>
              <p className="text-sm text-gray-500 text-center mb-5">
                Wir akzeptieren alle gängigen Zahlungsarten
              </p>
              <PaymentBadges variant="light" showLabel={false} />
            </div>
          </ScrollAnimationCard>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <RelatedServices
            title="Entdecken Sie weitere Services"
            services={[
              {
                href: '/damenfriseur-hamburg-hamm',
                label: 'Damenfriseur Hamburg Hamm',
                description: 'Professionelle Damenhaarschnitte & Styling',
              },
              {
                href: '/herrenfriseur-hamburg-hamm',
                label: 'Herrenfriseur Hamburg Hamm',
                description: 'Moderne Herrenhaarschnitte & Bartpflege',
              },
              {
                href: '/balayage-hamburg-hamm',
                label: 'Balayage Hamburg Hamm',
                description: 'Natürliche Highlights mit modernen Färbetechniken',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Überzeugt? Buchen Sie Ihren Termin!"
        description="Rufen Sie uns an oder schreiben Sie uns per WhatsApp."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(afterworkOfferSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
