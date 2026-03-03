import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ServiceAreaPageContent } from '@/components/shared/ServiceAreaPageContent';
import { SERVICE_AREAS } from '@/lib/service-areas';

const data = SERVICE_AREAS.find(
  (item) => item.serviceSlug === 'balayage' && item.areaSlug === 'mitte'
)!;

export const metadata: Metadata = {
  title: `${data.service} nahe Hamburg Mitte – Ihr Frisuren-Studio in Hamburg Hamm`,
  description: `${data.service} nahe Hamburg Mitte: ${data.description.slice(0, 100)}... Meisterbetrieb seit 2004. Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    `${data.service.toLowerCase()} hamburg mitte`,
    `friseur hamburg mitte`,
    `friseur nahe hamburg mitte`,
  ],
  alternates: {
    canonical: `${BUSINESS_INFO.website}/balayage-hamburg-mitte`,
  },
  openGraph: {
    title: `${data.service} nahe Hamburg Mitte – Ihr Frisuren-Studio in Hamburg Hamm`,
    description: data.description,
    url: `${BUSINESS_INFO.website}/balayage-hamburg-mitte`,
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Balayage', url: `${BUSINESS_INFO.website}/balayage-hamburg-hamm` },
    { name: 'Hamburg Mitte', url: `${BUSINESS_INFO.website}/areas/hamburg-mitte` },
    { name: `${data.service} nahe Hamburg Mitte`, url: `${BUSINESS_INFO.website}/balayage-hamburg-mitte` },
  ]);

  return (
    <>
      <ServiceAreaPageContent
        service={data.service}
        serviceSlug={data.serviceSlug}
        area={data.area}
        areaSlug={data.areaSlug}
        description={data.description}
        benefits={data.benefits}
        imageUrl={data.image}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
