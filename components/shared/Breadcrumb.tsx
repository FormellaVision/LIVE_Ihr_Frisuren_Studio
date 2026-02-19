'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb() {
  const pathname = usePathname();

  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    if (pathname === '/') return [];

    const segments = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [{ label: 'Start', href: '/' }];

    const breadcrumbMap: Record<string, string> = {
      'leistungen': 'Leistungen & Preise',
      'galerie': 'Galerie',
      'ueber-uns': 'Über uns',
      'bewertungen': 'Bewertungen',
      'kontakt': 'Kontakt',
      'damenfriseur-hamburg-hamm': 'Damenfriseur',
      'herrenfriseur-hamburg-hamm': 'Herrenfriseur',
      'balayage-hamburg-hamm': 'Balayage',
'friseur-hamburg-hamm': 'Friseur Hamburg Hamm',
      'preise': 'Preise',
      'termin-buchen': 'Termin buchen',
      'impressum': 'Impressum',
      'datenschutz': 'Datenschutz',
      'barrierefreiheit': 'Barrierefreiheit',
    };

    segments.forEach((segment, index) => {
      const label = breadcrumbMap[segment] || segment;
      const isLast = index === segments.length - 1;

      items.push({
        label,
        href: isLast ? undefined : `/${segments.slice(0, index + 1).join('/')}`,
      });
    });

    return items;
  };

  const items = getBreadcrumbItems();

  if (items.length === 0) return null;

  return (
    <>
    <div className="h-16" aria-hidden="true" />
    <nav aria-label="Breadcrumb" className="py-3 bg-gray-50 border-b border-gray-200">
      <div className="container-custom">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-teal-600 hover:text-teal-700 transition-colors p-1.5 rounded-md hover:bg-white/50"
              aria-label="Startseite"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
                {isLast ? (
                  <span className="text-gray-700 font-medium px-2" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="text-teal-600 hover:text-teal-700 transition-colors px-2 rounded-md hover:bg-white/50"
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
    </>
  );
}
