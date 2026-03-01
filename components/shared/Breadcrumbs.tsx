'use client';

import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const allItems = [
    { label: 'Start', href: '/' },
    ...items,
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="container-custom">
        <ol
          className="flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 overflow-x-auto"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 whitespace-nowrap"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <meta itemProp="name" content={item.label} />
              <meta itemProp="item" content={item.href} />

              {index === 0 ? (
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center w-8 h-8 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  aria-label="Home"
                >
                  <Home className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-montserrat text-gray-600 hover:text-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 rounded px-2 py-1"
                >
                  {item.label}
                </Link>
              )}

              {index < allItems.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
