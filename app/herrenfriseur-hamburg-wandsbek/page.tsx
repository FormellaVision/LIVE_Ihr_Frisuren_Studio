import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ServiceAreaPageContent } from '@/components/shared/ServiceAreaPageContent';
import { ALL_SERVICE_AREAS } from '@/lib/service-areas';

const data = ALL_SERVICE_AREAS.find(
  (item) => item.serviceSlug === 'herrenfriseur' && item.areaSlug === 'wandsbek'
)!;

export const metadata: Metadata = {
  title: `${data.service} ${data.area} Hamburg - Ihr Frisuren-Studio`,
  description: `${data.service} in ${data.area} Hamburg: ${data.description.slice(0, 100)}... Meisterbetrieb seit 2004. Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    `${data.service.toLowerCase()} ${data.area.toLowerCase()} hamburg`,
    `friseur ${data.area.toLowerCase()}`,
  ],
  alternates: {
    canonical: `${BUSINESS_INFO.website}/herrenfriseur-hamburg-wandsbek`,
  },
  robots: { index: false, follow: false },
  openGraph: {
    title: `${data.service} ${data.area} Hamburg - Ihr Frisuren-Studio`,
    description: data.description,
    url: `${BUSINESS_INFO.website}/herrenfriseur-hamburg-wandsbek`,
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Herrenfriseur', url: `${BUSINESS_INFO.website}/herrenfriseur-hamburg-hamm` },
    { name: `${data.area}`, url: `${BUSINESS_INFO.website}/${data.serviceSlug}-hamburg-hamm` },
    { name: `${data.service} ${data.area}`, url: `${BUSINESS_INFO.website}/herrenfriseur-hamburg-${data.areaSlug}` },
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
