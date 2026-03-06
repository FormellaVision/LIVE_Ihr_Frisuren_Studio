import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
}

interface ServiceCardsProps {
  title: string;
  subtitle?: string;
  items: ServiceCard[];
  columns?: 'auto' | 3 | 4;
}

export function ServiceCards({
  title,
  subtitle,
  items,
  columns = 'auto',
}: ServiceCardsProps) {
  const gridClass = {
    auto: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    3: 'grid sm:grid-cols-2 md:grid-cols-3 gap-4',
    4: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
  }[columns];

  return (
    <div>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {title && (
            <div className="mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                {title}
              </h2>
              {subtitle && (
                <p className="text-gray-600">{subtitle}</p>
              )}
            </div>
          )}

          <div className={gridClass}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium text-sm">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
