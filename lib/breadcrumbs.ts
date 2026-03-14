import { BreadcrumbItem } from '@/components/shared/Breadcrumbs';

export const SERVICE_LABELS: Record<string, string> = {
  'damenfriseur': 'Damenfriseur',
  'herrenfriseur': 'Herrenfriseur',
  'balayage': 'Balayage',
  'haare-faerben': 'Haare Färben',
  'leistungen': 'Leistungen',
  'preise': 'Preise',
  'galerie': 'Galerie',
  'bewertungen': 'Bewertungen',
  'kontakt': 'Kontakt',
  'ueber-uns': 'Über Uns',
  'termin-buchen': 'Termin Buchen',
  'schnellkontakt': 'Schnellkontakt',
  'impressum': 'Impressum',
  'datenschutz': 'Datenschutz',
  'barrierefreiheit': 'Barrierefreiheit',
  'karriere': 'Karriere',
};

export const AREA_LABELS: Record<string, string> = {
  'hamm': 'Hamburg Hamm',
  'borgfelde': 'Borgfelde',
  'horn': 'Horn',
  'mitte': 'Hamburg Mitte',
  'hamburg-mitte': 'Hamburg Mitte',
};

export const AREA_HREFS: Record<string, string> = {
  'hamm': '/areas/hamm',
  'borgfelde': '/areas/borgfelde',
  'horn': '/areas/horn',
  'mitte': '/areas/hamburg-mitte',
  'hamburg-mitte': '/areas/hamburg-mitte',
};

export function extractBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  if (!pathname || pathname === '/') {
    return [];
  }

  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return [];
  }

  const breadcrumbs: BreadcrumbItem[] = [];

  if (segments.length === 1) {
    const segment = segments[0];
    const label = SERVICE_LABELS[segment] || formatLabel(segment);
    breadcrumbs.push({
      label,
      href: `/${segment}`,
    });
  } else if (segments[0] === 'areas') {
    const areaSlug = segments[1];
    const areaLabel = AREA_LABELS[areaSlug] || formatLabel(areaSlug);
    breadcrumbs.push({
      label: areaLabel,
      href: `/areas/${areaSlug}`,
    });
  } else if (segments.length >= 2) {
    const serviceSlug = segments[0];
    const areaSlug = segments[1];

    const serviceLabel = formatServiceLabel(serviceSlug);
    const areaLabel = extractAreaFromPath(segments.join('-'));

    breadcrumbs.push({
      label: areaLabel,
      href: `/areas/${areaSlug}`,
    });

    breadcrumbs.push({
      label: serviceLabel,
      href: pathname,
    });
  }

  return breadcrumbs;
}

function formatLabel(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatServiceLabel(service: string): string {
  const label = SERVICE_LABELS[service];
  if (label) return label;

  return service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function extractAreaFromPath(path: string): string {
  const parts = path.split('-');

  for (let i = parts.length - 1; i >= 0; i--) {
    const area = parts[i];
    if (AREA_LABELS[area]) {
      return AREA_LABELS[area];
    }
  }

  return formatLabel(parts[parts.length - 1] || '');
}

export function createServiceAreaBreadcrumbs(
  service: string,
  area: string
): BreadcrumbItem[] {
  const serviceLabel = formatServiceLabel(service);
  const areaLabel = AREA_LABELS[area] || formatLabel(area);
  const areaHref = AREA_HREFS[area] || `/areas/${area}`;

  return [
    {
      label: areaLabel,
      href: areaHref,
    },
    {
      label: serviceLabel,
      href: `/${service}-hamburg-${area}`,
    },
  ];
}
