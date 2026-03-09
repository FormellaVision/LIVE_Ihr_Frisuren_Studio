import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { getBreadcrumbSchema, getContactPageSchema } from '@/lib/schema';
import { GoogleMap } from '@/components/shared/GoogleMap';
import { KontaktContent } from './kontakt-content';

const contactServices = [
  {
    href: '/leistungen',
    label: 'Alle Leistungen & Preise',
    description: 'Informieren Sie sich über unser vollständiges Angebot und unsere Preise.',
  },
  {
    href: '/damenfriseur-hamburg-hamm',
    label: 'Damenfriseur Hamburg Hamm',
    description: 'Haarschnitte, Balayage, Styling und Colorationen für Damen.',
  },
  {
    href: '/herrenfriseur-hamburg-hamm',
    label: 'Herrenfriseur Hamburg Hamm',
    description: 'Professionelle Herrenschnitte und Bartpflege in Hamburg Hamm.',
  },
  {
    href: '/balayage-hamburg-hamm',
    label: 'Balayage Hamburg Hamm',
    description: 'Natürliche Farbverläufe und strahlende Farbergebnisse vom Experten.',
  },
];

export const metadata: Metadata = {
  title: 'Kontakt - Friseur Hamburg Hamm',
  description: `Kontaktieren Sie Ihr Frisuren-Studio in Hamburg Hamm. Tel: ${BUSINESS_INFO.phone}, WhatsApp, E-Mail. Hammer Landstraße 4, 20537 Hamburg.`,
  keywords: ['friseur kontakt hamburg hamm', 'friseur hamburg hamm telefon', 'friseur hamburg hamm adresse'],
  openGraph: {
    title: 'Kontakt - Friseur Hamburg Hamm | Ihr Frisuren-Studio',
    description: `Kontaktieren Sie uns: Tel. ${BUSINESS_INFO.phone}. ${BUSINESS_INFO.address.full}`,
    url: `${BUSINESS_INFO.website}/kontakt`,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/kontakt`,
  },
};

export default function KontaktPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Kontakt', url: `${BUSINESS_INFO.website}/kontakt` },
  ]);
  const contactPageSchema = getContactPageSchema();

  return (
    <>
      <ServicePageHeader
        title="Kontakt"
        subtitle="Ihr Frisuren-Studio Hamburg Hamm"
        description="So erreichen Sie uns - telefonisch, per WhatsApp, E-Mail oder persönlich vor Ort"
        backgroundImage="https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <KontaktContent googleMap={<GoogleMap latitude={BUSINESS_INFO.coordinates.latitude} longitude={BUSINESS_INFO.coordinates.longitude} title="Ihr Frisuren-Studio Hamburg Hamm - Standort" />} />

      <section className="section-padding bg-warm-white">
        <div className="container-custom max-w-6xl mx-auto">
          <RelatedServices
            services={contactServices}
            title="Unsere Leistungen"
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
