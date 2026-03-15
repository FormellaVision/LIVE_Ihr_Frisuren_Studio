import { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';

const BUILD_DATE = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ihr-frisuren-studio.de';

  const mainRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/friseur-hamburg-hamm', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/damenfriseur-hamburg-hamm', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/herrenfriseur-hamburg-hamm', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/balayage-hamburg-hamm', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/haare-faerben-hamburg-hamm', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/leistungen', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/termin-buchen', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/bewertungen', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kontakt', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/einzugsgebiet', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areas/hamm', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areas/borgfelde', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areas/hamburg-mitte', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areas/horn', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/galerie', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ueber-uns', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/karriere', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  const indexedServiceAreas = ['borgfelde', 'horn', 'mitte'];

  const services = ['damenfriseur', 'herrenfriseur', 'balayage', 'haare-faerben'];

  const serviceAreaRoutes = services.flatMap(service =>
    indexedServiceAreas.map(area => ({
      path: `/${service}-hamburg-${area}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    }))
  );

  const allRoutes = [...mainRoutes, ...serviceAreaRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
