import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { CTABanner } from '@/components/shared/CTABanner';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { Check, Palette, Sparkles, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Balayage Hamburg Hamm - Professionelle Färbetechnik',
  description: `Balayage-Spezialist in Hamburg Hamm ab 179€. Moderne Färbetechniken: Balayage, Ombre, Foliensträhnen. Meisterbetrieb Tel: ${BUSINESS_INFO.phone}`,
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
    icon: Palette,
    title: 'Natürliche Highlights',
    description: 'Handgemalte Technik für sonnendurchflutete Strähnen',
  },
  {
    icon: Sparkles,
    title: 'Pflegende Produkte',
    description: 'Olaplex & hochwertige Colorationsprodukte',
  },
  {
    icon: Award,
    title: 'Expertise seit 2004',
    description: 'Colorations-Spezialistinnen im Team',
  },
  {
    icon: Clock,
    title: 'Langanhaltend',
    description: 'Natürliches Herauswachsen ohne harte Kanten',
  },
];

export default function BalayagePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Balayage Hamburg Hamm', url: `${BUSINESS_INFO.website}/balayage-hamburg-hamm` },
  ]);

  const relatedServices = [
    {
      href: '/damenfriseur-hamburg-hamm',
      label: 'Damenfriseur Hamburg Hamm',
      description: 'Professionelle Damenhaarschnitte & Styling',
    },
{
      href: '/preise',
      label: 'Alle Preise',
      description: 'Transparente Preisliste für alle Leistungen',
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

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-amber-600">
                Balayage & Coloration Preise
              </h3>
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
                  <h3 className="font-bold mb-3">Vorteile von Balayage:</h3>
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
        title="Bereit für Ihre Balayage?"
        description="Vereinbaren Sie einen Beratungstermin und lassen Sie sich von unseren Expertinnen beraten."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
