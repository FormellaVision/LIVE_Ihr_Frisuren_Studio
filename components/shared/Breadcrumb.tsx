'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { SERVICE_LABELS, AREA_LABELS, AREA_HREFS } from '@/lib/breadcrumbs';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb() {
  const pathname = usePathname();

  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    if (!pathname || pathname === '/') return [];

    const segments = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [];

    // /leistungen, /kontakt, etc. — or flat service-area slugs like /damenfriseur-hamburg-hamm
    if (segments.length === 1) {
      const segment = segments[0];

      // detect pattern: <service>-hamburg-<area>
      const serviceAreaMatch = segment.match(/^([a-z-]+?)-hamburg-(.+)$/);
      if (serviceAreaMatch) {
        const serviceSlug = serviceAreaMatch[1];
        const areaSlug = serviceAreaMatch[2];
        const serviceLabel = SERVICE_LABELS[serviceSlug] || formatLabel(serviceSlug);
        const areaLabel = AREA_LABELS[areaSlug] || formatLabel(areaSlug);
        const areaHref = AREA_HREFS[areaSlug] || `/areas/${areaSlug}`;
        items.push({ label: areaLabel, href: areaHref });
        items.push({ label: serviceLabel, href: undefined });
        return items;
      }

      const label = SERVICE_LABELS[segment] || formatLabel(segment);
      items.push({ label, href: undefined });
      return items;
    }

    // /areas/<slug>
    if (segments[0] === 'areas' && segments[1]) {
      const areaSlug = segments[1];
      const areaLabel = AREA_LABELS[areaSlug] || formatLabel(areaSlug);
      items.push({ label: areaLabel, href: undefined });
      return items;
    }

    // /<service>-hamburg-<area...>
    if (segments.length >= 2) {
      const areaLabel = extractAreaLabel(segments);
      const serviceLabel = extractServiceLabel(segments[0]);

      items.push({
        label: areaLabel,
        href: extractAreaHref(segments),
      });

      items.push({
        label: serviceLabel,
        href: undefined,
      });

      return items;
    }

    return items;
  };

  const items = getBreadcrumbItems();
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <ol
          className="flex items-center gap-2 py-3 md:py-4 overflow-x-auto text-sm list-none m-0 p-0"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            className="flex items-center gap-2 whitespace-nowrap list-none m-0 p-0"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content="1" />
            <meta itemProp="name" content="Start" />
            <meta itemProp="item" content="/" />
            <Link
              href="/"
              className="inline-flex items-center justify-center hover:opacity-75 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded"
              aria-label="Startseite"
              data-breadcrumb-logo
            >
              <img
                src="https://res.cloudinary.com/dqkld61zu/image/upload/v1770245111/Ihr-Frisuren-Studio_transparent_obd4aa.png"
                alt="Startseite"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2 whitespace-nowrap list-none m-0 p-0"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 2)} />
                <meta itemProp="name" content={item.label} />
                <meta itemProp="item" content={item.href || pathname} />

                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />

                {isLast ? (
                  <span className="text-sm font-montserrat text-gray-600 px-2 py-1" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="text-sm font-montserrat text-gray-600 hover:text-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 rounded px-2 py-1"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

function formatLabel(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function extractServiceLabel(service: string): string {
  return SERVICE_LABELS[service] || formatLabel(service);
}

function extractAreaLabel(segments: string[]): string {
  for (let i = segments.length - 1; i >= 0; i--) {
    const part = segments[i];
    if (AREA_LABELS[part]) return AREA_LABELS[part];
  }
  return formatLabel(segments[segments.length - 1]);
}

function extractAreaHref(segments: string[]): string {
  for (let i = segments.length - 1; i >= 0; i--) {
    const part = segments[i];
    if (AREA_LABELS[part]) return AREA_HREFS[part] || `/areas/${part}`;
  }
  return '/';
}