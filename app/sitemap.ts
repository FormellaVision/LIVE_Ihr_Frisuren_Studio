import { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.website;

  const mainRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/damenfriseur-hamburg-hamm', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/herrenfriseur-hamburg-hamm', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/balayage-hamburg-hamm', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/haare-faerben-hamburg-hamm', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/leistungen', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/preise', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/friseur-hamburg-hamm', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/termin-buchen', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/bewertungen', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/kontakt', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areas/hamm', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/areas/borgfelde', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/areas/hamburg-mitte', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/areas/horn', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/galerie', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/ueber-uns', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/barrierefreiheit', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const serviceAreas = [
    'borgfelde', 'horn', 'mitte'
  ];

  const services = [
    'damenfriseur', 'herrenfriseur', 'balayage', 'haare-faerben'
  ];

  const serviceAreaRoutes = services.flatMap(service =>
    serviceAreas.map(area => ({
      path: `/${service}-hamburg-${area}`,
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    }))
  );

  const allRoutes = [...mainRoutes, ...serviceAreaRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
