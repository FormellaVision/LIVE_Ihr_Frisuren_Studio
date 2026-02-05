import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getContactPointSchema,
} from '@/lib/local-seo';

/**
 * Renders local business schema markup in page head
 * Implements Schema.org markup for local SEO
 */
export function LocalBusinessSchema() {
  const localBusinessSchema = getLocalBusinessSchema();
  const organizationSchema = getOrganizationSchema();
  const contactPointSchema = getContactPointSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />
    </>
  );
}
