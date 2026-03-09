import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceCards } from '@/components/shared/ServiceCards';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { BUSINESS_INFO, TEAM_MEMBERS } from '@/lib/constants';
import { getBreadcrumbSchema, getPersonSchemas } from '@/lib/schema';
import { Award, Users, Heart, Globe, ArrowRight } from 'lucide-react';
import { HistorySection } from '@/components/about/HistorySection';

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
  title: 'Team & Geschichte - Friseur Hamburg Hamm',
  description: `Lernen Sie das Team von Ihr Frisuren-Studio kennen. Meisterbetrieb seit ${BUSINESS_INFO.founded} in Hamburg Hamm. Mehrsprachig: Deutsch, Englisch, Türkisch, Persisch.`,
  keywords: ['friseur team hamburg', 'friseurmeister hamburg hamm', 'über uns friseur hamburg'],
  openGraph: {
    title: 'Team & Geschichte - Friseur Hamburg Hamm | Ihr Frisuren-Studio',
    description: `Lernen Sie unser Team kennen. Meisterbetrieb seit ${BUSINESS_INFO.founded} in Hamburg Hamm.`,
    url: `${BUSINESS_INFO.website}/ueber-uns`,
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
        subtitle={Meisterbetrieb seit ${BUSINESS_INFO.founded}}
        description="Lernen Sie die Menschen hinter Ihr Frisuren-Studio kennen - erfahrene Meister und Gesellen mit Leidenschaft fürs Handwerk"
        backgroundImage="https://res.cloudinary.com/dqkld61zu/image/upload/v1772474796/Teamfoto2_w3uxfj.webp"
      />

      <Breadcrumb />

      <HistorySection businessInfo={BUSINESS_INFO} />

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up" hasScale>
            <h2 className="heading-md mb-8 text-center">Das Team</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => {
              const directions: Array<'left' | 'right' | 'up'> = ['left', 'right', 'up'];
              return (
                <ScrollAnimationCard
                  key={index}
                  direction={directions[index % directions.length]}
                  delay={index * 0.1}
                  hasScale
                  hasRotation
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                    <div className="aspect-square overflow-hidden relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-playfair text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-teal-600 font-semibold mb-3 text-base">{member.role}</p>
                      <p className="text-gray-600 mb-4 flex-grow">{member.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {member.languages.map((lang, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimationCard>
              );
            })}

            <ScrollAnimationCard
              direction="up"
              delay={TEAM_MEMBERS.length * 0.1}
              hasScale
              hasRotation
            >
              <Link href="/karriere" className="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-teal-600 to-amber-500 flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772473119/Name_wrzzyw.webp"
                    alt="Karriere bei Ihr Frisuren-Studio"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex flex-col flex-grow items-center text-center">
                  <h3 className="font-playfair text-2xl font-bold mb-2">Hier könnte dein Name stehen</h3>
                  <p className="text-teal-600 font-semibold mb-3 text-base">Bewerbung</p>
                  <p className="text-gray-600 mb-6 flex-grow">Werde Teil unseres Teams und entdecke die Chance auf deine Traumposition</p>
                  <span className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-teal-700 transition-colors">
                    Jetzt bewerben
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollAnimationCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <AnimatedSection direction="up" hasScale>
            <h2 className="heading-md mb-12 text-center">Unsere Werte</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const directions: Array<'diagonal-up-left' | 'diagonal-up-right' | 'up' | 'down'> = ['diagonal-up-left', 'diagonal-up-right', 'up', 'down'];
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

      <CTABanner
        title="Lernen Sie uns persönlich kennen!"
        description="Buchen Sie Ihren ersten Termin und erleben Sie unseren Service."
      />

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
