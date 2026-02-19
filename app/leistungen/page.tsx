import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { PriceList } from '@/components/shared/PriceList';
import { CTABanner } from '@/components/shared/CTABanner';
import { PaymentBadges } from '@/components/shared/PaymentBadges';
import { SERVICES_DAMEN, SERVICES_HERREN, SERVICES_KOSMETIK, BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';

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

  return (
    <>
      <ServicePageHeader
        title="Leistungen & Preise"
        subtitle="Ihr Frisuren-Studio Hamburg Hamm"
        description="Transparente Preise, professioneller Service - Damen, Herren, Balayage & Kosmetik"
        backgroundImage="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PriceList title="Damen" services={SERVICES_DAMEN} />
            <PriceList title="Herren" services={SERVICES_HERREN} />
          </div>

          <div id="kosmetik" className="mt-8 max-w-3xl mx-auto">
            <PriceList title="Kosmetik" services={SERVICES_KOSMETIK} />
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-playfair text-xl font-bold mb-3 text-amber-800">
              Afterwork Specials
            </h3>
            <p className="text-gray-700">
              Genießen Sie exklusive Termine nach Feierabend: Di-Fr ab 19:00 Uhr & Sa ab 14:00 Uhr.
              <br />
              <strong>Aufpreis: +10€ auf reguläre Preise</strong>
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-center text-sm text-gray-500">
            <p>
              Alle Preise verstehen sich inklusive Beratung und professioneller Produkte.
              <br />
              Bei besonderen Wünschen oder längeren Haaren kann der Preis variieren.
            </p>
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-playfair text-lg font-bold text-gray-800 text-center mb-1">
              Zahlungsmethoden
            </h3>
            <p className="text-sm text-gray-500 text-center mb-5">
              Wir akzeptieren alle gängigen Zahlungsarten
            </p>
            <PaymentBadges variant="light" showLabel={false} />
          </div>
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
    </>
  );
}
