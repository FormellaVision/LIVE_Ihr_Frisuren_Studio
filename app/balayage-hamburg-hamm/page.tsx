import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceContactBlock } from '@/components/shared/ServiceContactBlock';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, SERVICE_FAQS } from '@/lib/schema';
import { Check, Palette, Sparkles, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Balayage Hamburg Hamm | Natürliche Highlights & Coloration',
  description: `Balayage Hamburg Hamm mit professioneller Beratung, natürlichen Übergängen und hochwertigen Colorationen. Ihr Frisuren-Studio in Hamburg-Hamm.`,
  keywords: ['balayage hamburg hamm', 'balayage hamburg', 'ombre hamburg', 'foliensträhnen hamburg hamm', 'haare färben hamburg'],
  openGraph: {
    title: 'Balayage Hamburg Hamm - Professionelle Färbetechnik | Ihr Frisuren-Studio',
    description: 'Balayage-Spezialist in Hamburg Hamm ab 179€. Natürliche Highlights & strahlende Farben.',
    url: `${BUSINESS_INFO.website}/balayage-hamburg-hamm`,
    images: [
      {
        url: `${BUSINESS_INFO.website}/og-balayage.jpg`,
        width: 1200,
        height: 630,
        alt: 'Balayage Hamburg Hamm - Ihr Frisuren-Studio',
      },
    ],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/balayage-hamburg-hamm`,
  },
};

const balayageServices = [
  { name: 'Balayage inkl. Veredelung & Schnitt', price: 'ab 179€', description: 'Komplettpaket mit Olaplex-Behandlung' },
  { name: 'Balayage (nur Farbe)', price: 'ab 129€', description: 'Ohne Schnitt' },
  { name: 'Foliensträhnen', price: 'ab 85€', description: 'Klassische Strähnen-Technik' },
  { name: 'Ombre/Sombre', price: 'ab 159€', description: 'Sanfter Farbverlauf' },
  { name: 'Babylights', price: 'ab 149€', description: 'Feine, natürliche Strähnen' },
  { name: 'Color Refresh', price: 'ab 69€', description: 'Auffrischung bestehender Balayage' },
];

const features = [
  {
    iconName: 'palette' as const,
    title: 'Natürliche Highlights',
    description: 'Handgemalte Technik für sonnendurchflutete Strähnen',
  },
  {
    iconName: 'sparkles' as const,
    title: 'Pflegende Produkte',
    description: 'Olaplex & hochwertige Colorationsprodukte',
  },
  {
    iconName: 'award' as const,
    title: 'Expertise seit 2004',
    description: 'Colorations-Spezialistinnen im Team',
  },
  {
    iconName: 'award' as const,
    title: 'Langanhaltend',
    description: 'Natürliches Herauswachsen ohne harte Kanten',
  },
];

export default function BalayagePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Balayage Hamburg Hamm', url: `${BUSINESS_INFO.website}/balayage-hamburg-hamm` },
  ]);

  const serviceSchema = getServiceSchema(
    'Balayage',
    'Balayage Hamburg Hamm',
    'Professionelle Balayage-Behandlungen in Hamburg Hamm. Handgemalte Highlights, Ombre, Babylights und Foliensträhnen von spezialisierten Coloristinnen.',
    `${BUSINESS_INFO.website}/balayage-hamburg-hamm`,
    balayageServices.map((s) => ({
      name: s.name,
      description: s.description,
      price: s.price,
    }))
  );

  const faqSchema = getFAQSchema(SERVICE_FAQS.balayage);

  const relatedServices = [
    {
      href: '/haare-faerben-hamburg-hamm',
      label: 'Haare färben Hamburg Hamm',
      description: 'Alle Colorationstechniken: Ansatzfärbung, Strähnen & mehr',
    },
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
      href: '/leistungen',
      label: 'Alle Leistungen & Preise',
      description: 'Komplettes Angebot: Damen, Herren & Kosmetik',
    },
  ];

  return (
    <>
      <ServicePageHeader
        title="Balayage Hamburg Hamm"
        subtitle="Professionelle Färbetechnik ab 179€"
        description="Natürliche Highlights und strahlende Farben mit der Balayage-Technik - handgemalt von unseren Colorations-Expertinnen"
        backgroundImage="https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <h2 className="sr-only">Unsere Balayage-Leistungen</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold mb-6 text-amber-600">
                Balayage & Coloration Preise
              </h2>
              <div className="space-y-4">
                {balayageServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-1 pr-4">
                      <span className="font-medium text-gray-900">{service.name}</span>
                      <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                    </div>
                    <span className="font-bold text-amber-600 whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-6">
                Was ist Balayage?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Balayage (französisch für &quot;fegen&quot;) ist eine Freihand-Färbetechnik,
                    bei der die Farbe mit einem Pinsel auf das Haar aufgetragen wird.
                    Das Ergebnis: Natürlich aussehende, sonnendurchflutete Highlights.
                  </p>
                  <p className="text-gray-700">
                    Im Gegensatz zu klassischen Foliensträhnen entstehen weichere Übergänge
                    und ein natürlicheres Erscheinungsbild. Perfekt für alle, die einen
                    pflegeleichten Look suchen.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Vorteile von Balayage</h3>
                  <ul className="space-y-2">
                    {[
                      'Natürliches, sonnenverwöhntes Aussehen',
                      'Weiche Übergänge ohne harte Ansätze',
                      'Längere Abstände zwischen den Terminen',
                      'Pflegeleicht beim Herauswachsen',
                      'Individuell an Ihre Haarstruktur angepasst',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Unsere Balayage-Expertinnen
              </h2>
              <p className="text-gray-700 mb-4">
                In unserem Team haben wir spezialisierte Coloristinnen, die regelmäßig
                Fortbildungen in modernsten Färbetechniken besuchen. Nassrin Karimi ist
                unsere Balayage- und Colorations-Spezialistin mit langjähriger Erfahrung.
              </p>
              <p className="text-gray-700">
                Wir beraten Sie individuell, welche Technik und Farbgebung am besten zu
                Ihrem Typ, Ihrer Haarstruktur und Ihrem Lifestyle passt.
              </p>
            </div>
          </div>

          {/* Pflegetipps */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Pflegetipps nach der Balayage
              </h2>
              <ul className="space-y-3">
                {[
                  'Sulfatfreies Shampoo verwenden für langanhaltende Farbe',
                  'Haare nicht zu heiß waschen — lauwarmes Wasser schont die Farbe',
                  'Regelmäßig Farbschutz-Kur oder Olaplex anwenden',
                  'UV-Schutz für die Haare im Sommer nutzen',
                  'Auffrischung alle 3-6 Monate empfohlen',
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
        faqs={SERVICE_FAQS.balayage}
        title="Häufige Fragen zu Balayage"
        subtitle="Alles Wichtige zur Balayage-Behandlung in Hamburg Hamm"
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
        title="Bereit für Ihre Balayage?"
        description="Vereinbaren Sie einen Beratungstermin und lassen Sie sich von unseren Expertinnen beraten."
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
