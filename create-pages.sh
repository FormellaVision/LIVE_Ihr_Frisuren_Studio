#!/bin/bash

# Define arrays of services and areas
services=("damenfriseur" "herrenfriseur" "balayage" "haare-faerben")
serviceNames=("Damenfriseur" "Herrenfriseur" "Balayage" "Haare färben")
areas=("hamm" "borgfelde" "horn" "eilbek" "wandsbek" "billstedt" "mitte" "bergedorf")
areaNames=("Hamm" "Borgfelde" "Horn" "Eilbek" "Wandsbek" "Billstedt" "Mitte" "Bergedorf")

# Skip hamm as it already exists in the main service pages
i=0
for service in "${services[@]}"; do
  serviceName="${serviceNames[$i]}"
  
  j=0
  for area in "${areas[@]}"; do
    # Skip hamm combination as we handle it differently
    if [ "$area" != "hamm" ]; then
      areaName="${areaNames[$j]}"
      dir="app/${service}-hamburg-${area}"
      
      if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        
        cat > "$dir/page.tsx" << PAGE_EOF
import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ServiceAreaPageContent } from '@/components/shared/ServiceAreaPageContent';
import { SERVICE_AREAS } from '@/lib/service-areas';

const data = SERVICE_AREAS.find(
  (item) => item.serviceSlug === '${service}' && item.areaSlug === '${area}'
)!;

export const metadata: Metadata = {
  title: \`\${data.service} \${data.area} Hamburg - Ihr Frisuren-Studio\`,
  description: \`\${data.service} in \${data.area} Hamburg: \${data.description.slice(0, 100)}... Meisterbetrieb seit 2004. Tel: \${BUSINESS_INFO.phone}\`,
  keywords: [
    \`\${data.service.toLowerCase()} \${data.area.toLowerCase()} hamburg\`,
    \`friseur \${data.area.toLowerCase()}\`,
  ],
  alternates: {
    canonical: \`\${BUSINESS_INFO.website}/${service}-hamburg-${area}\`,
  },
  openGraph: {
    title: \`\${data.service} \${data.area} Hamburg - Ihr Frisuren-Studio\`,
    description: data.description,
    url: \`\${BUSINESS_INFO.website}/${service}-hamburg-${area}\`,
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: '${serviceName}', url: \`\${BUSINESS_INFO.website}/${service}-hamburg-hamm\` },
    { name: \`\${data.area}\`, url: \`\${BUSINESS_INFO.website}/areas/\${data.areaSlug}\` },
    { name: \`\${data.service} \${data.area}\`, url: \`\${BUSINESS_INFO.website}/${service}-hamburg-\${data.areaSlug}\` },
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
PAGE_EOF
        echo "Created $dir/page.tsx"
      fi
    fi
    ((j++))
  done
  ((i++))
done

echo "✓ All service-area combination pages created"
