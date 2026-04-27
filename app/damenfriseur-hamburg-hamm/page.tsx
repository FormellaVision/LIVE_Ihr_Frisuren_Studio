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
  title: 'Damenfriseur Hamburg Hamm | Meisterbetrieb · ab 43€',
  description: `Damenfriseur Hamburg Hamm ✓ Meisterbetrieb seit 2004 ✓ Balayage ab 179€ ✓ Haarschnitt ab 43€ ✓ 277+ Bewertungen 4,9★ Jetzt Termin: ☎ 040 2509029`,
  keywords: ['damenfriseur hamburg hamm', 'friseur damen hamburg', 'haarschnitt damen hamburg hamm', 'balayage hamburg', 'coloration hamburg'],
  openGraph: {
    title: 'Damenfriseur Hamburg Hamm – Meisterbetrieb seit 2004 | Ihr Frisuren-Studio',
    description: `Professionelle Damenhaarschnitte in Hamburg Hamm ab 43€. Balayage-Spezialist. ${BUSINESS_INFO.reviews.count}+ Bewertungen (${BUSINESS_INFO.reviews.rating})`,
    url: 'https://ihr-frisuren-studio.de/damenfriseur-hamburg-hamm',
    images: [
      {
        url: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp',
        width: 1200,
        height: 630,
        alt: 'Ihr Frisuren-Studio – Friseur Hamburg Hamm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://res.cloudinary.com/dqkld61zu/image/upload/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp'],
  },
  alternates: {
    canonical: 'https://ihr-frisuren-studio.de/damenfriseur-hamburg-hamm',
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
    [
      { name: 'Cut & Go', description: 'Trockenhaarschnitt für schnelle Auffrischung', price: '33' },
      { name: 'Waschen, Schneiden, Föhnen', description: 'Inkl. Typberatung und Styling', price: '43' },
      { name: 'Balayage inkl. Veredelung & Schnitt', description: 'Natürliche Highlights mit Olaplex-Schutz', price: '179' },
      { name: 'Ansatz färben', description: 'Professionelle Farbauffrischung', price: '43' },
      { name: 'Foliensträhnen', description: 'Klassische Strähnen-Technik', price: '85' },
    ]
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
        title="Damenfriseur Hamburg Hamm – Meisterbetrieb seit 2004"
        subtitle="Premium Haarschnitte & Colorationen"
        description="Professionelle Damenhaarschnitte, Balayage und Colorationen von erfahrenen Stylisten in Hamburg-Hamm"
        backgroundImage="https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <AnimatedFeatureCards features={features} processSteps={processSteps}>
        <PriceList title="Damen" services={SERVICES_DAMEN} />
      </AnimatedFeatureCards>

      {/* SEO-Inhaltssektionen: Damenhaarschnitte, Balayage, Kosmetik */}
      <section className="section-padding" aria-labelledby="damen-schnitte-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">

            <div>
              <h2 id="damen-schnitte-heading" className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                Damenhaarschnitte in Hamburg Hamm
              </h2>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Bei Ihr Frisuren-Studio in Hamburg Hamm erhalten Damen professionelle Haarschnitte
                von erfahrenen Stylisten. Ob kurzer Pixie-Cut, moderner Bob oder langer Stufenhaarschnitt —
                wir beraten Sie individuell und setzen Ihren Wunsch-Look präzise um. Als zertifizierter
                Meisterbetrieb seit 2004 garantieren wir höchste Qualität bei jedem Haarschnitt
                in Hamburg Hamm.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Unsere Preise für Damenhaarschnitte: <strong>Cut &amp; Go ab 33€</strong> (Trockenherrschnitt)
                · <strong>Waschen, Schneiden &amp; Föhnen ab 43€</strong> (kurz), 47€ (mittel), 49€ (lang)
                · inkl. Typberatung, Festiger und Finish-Spray.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Über 277 Kundinnen bewerten uns mit 4,9 Sternen für unsere persönliche Beratung,
                präzisen Schnitte und die angenehme Atmosphäre. Wir bieten auch Afterwork-Termine
                nach 19:00 Uhr — ideal für Berufstätige in Hamburg-Hamm.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                Balayage &amp; Colorationen für Damen in Hamburg Hamm
              </h2>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Als Balayage-Spezialisten in Hamburg Hamm bieten wir natürliche, sonnendurchflutete
                Highlights, die perfekt zu Ihrem Typ passen. Unsere Coloristinnen sind spezialisiert
                auf Balayage, Foliensträhnen, Ombre/Sombre und komplette Colorationen — immer mit
                persönlicher Farbberatung und Olaplex-Schutz für Ihr Haar.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Unsere Colorationspreise: <strong>Balayage inkl. Veredelung &amp; Schnitt ab 179€</strong>
                · Balayage (nur Farbe) ab 129€ · Foliensträhnen ab 85€
                · Ansatz färben ab 43€ · Coloration komplett inkl. Schnitt ab 87€.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nassrin Karimi, unsere Balayage- und Colorations-Spezialistin, berät Sie
                individuell zur optimalen Technik und Farbgebung für Ihren Haartyp und
                Lifestyle in Hamburg Hamm.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                Kosmetik für Damen in Hamburg Hamm
              </h2>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Ihr Frisuren-Studio bietet neben Haarschnitten und Colorationen auch professionelle
                Kosmetikbehandlungen für Damen in Hamburg Hamm. Unser Angebot umfasst klassische
                Gesichtsbehandlungen, Maniküre und medizinische Fußpflege — alles unter einem Dach
                in der Hammer Landstraße 4, 20537 Hamburg-Hamm.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                So können Sie Ihren Friseursalon-Besuch perfekt mit einer entspannenden
                Kosmetikbehandlung kombinieren. Unser mehrsprachiges Team berät Sie auf
                Deutsch, Englisch, Türkisch und Persisch.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Für Kosmetiktermine empfehlen wir eine telefonische Vorabanmeldung unter
                <strong> 040 2509029</strong> oder per WhatsApp, damit wir ausreichend Zeit
                für Ihre Behandlung einplanen können.
              </p>
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
