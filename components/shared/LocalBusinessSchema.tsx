import { getOrganizationSchema } from '@/lib/schema';

export function LocalBusinessSchema() {
  const organizationSchema = getOrganizationSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
