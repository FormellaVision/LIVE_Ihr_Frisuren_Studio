import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { CTABanner } from '@/components/shared/CTABanner';
import { PlaceholderImage } from '@/components/shared/TeamPlaceholder';
import { BUSINESS_INFO, TEAM_MEMBERS } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { Award, Users, Heart, Globe } from 'lucide-react';

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

  return (
    <>
      <ServicePageHeader
        title="Unser Team"
        subtitle={`Meisterbetrieb seit ${BUSINESS_INFO.founded}`}
        description="Lernen Sie die Menschen hinter Ihr Frisuren-Studio kennen - erfahrene Meister und Gesellen mit Leidenschaft fürs Handwerk"
        backgroundImage="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="heading-md mb-6 text-center">Unsere Geschichte</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Seit <strong>{BUSINESS_INFO.founded}</strong> ist Ihr Frisuren-Studio die erste Adresse
                für professionelle Friseur- und Kosmetikdienstleistungen in Hamburg Hamm.
                Was als kleiner Salon begann, ist heute ein moderner Meisterbetrieb mit einem
                vielseitigen Team.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Unser Inhaber, <strong>{BUSINESS_INFO.owner}</strong>, ist selbst
                Friseurmeister und bildet seit Jahren erfolgreich Nachwuchs aus. Seine Leidenschaft
                für das Handwerk und sein Auge für Trends prägen den Stil unseres Studios.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Heute sind wir stolz auf über <strong>{BUSINESS_INFO.reviews.count} positive Bewertungen</strong> bei
                Google und eine treue Stammkundschaft aus Hamburg Hamm und Umgebung. Unser Erfolgsgeheimnis?
                Qualität, Herzlichkeit und ein Team, das wirklich für Sie da ist.
              </p>
            </div>
          </div>

          <h2 className="heading-md mb-8 text-center">Das Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="aspect-square overflow-hidden">
                  <PlaceholderImage index={index} />
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
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Unsere Werte</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
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
    </>
  );
}
