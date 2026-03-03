import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface Area {
  name: string;
  slug: string;
  urlSlug: string;
}

interface ServiceAreaLinksProps {
  service: string;
  serviceSlug: string;
  areas?: Area[];
}

const AREAS: Area[] = [
  { name: 'Hamburg Hamm', slug: 'hamm', urlSlug: 'hamm' },
  { name: 'Borgfelde', slug: 'borgfelde', urlSlug: 'borgfelde' },
  { name: 'Hamburg Mitte', slug: 'mitte', urlSlug: 'mitte' },
  { name: 'Horn', slug: 'horn', urlSlug: 'horn' },
];

function getAreaTitle(service: string, area: Area): string {
  if (area.slug === 'hamm') return `${service} Hamburg Hamm`;
  return `${service} nahe ${area.name}`;
}

function getAreaSubtitle(area: Area): string {
  if (area.slug === 'hamm') return 'Unser Standort in Hamburg Hamm';
  return `Für Kunden aus ${area.name}`;
}

function getAreaHref(serviceSlug: string, area: Area): string {
  if (area.slug === 'hamm') return '/areas/hamm';
  return `/${serviceSlug}-hamburg-${area.urlSlug}`;
}

export function ServiceAreaLinks({
  service,
  serviceSlug,
  areas = AREAS,
}: ServiceAreaLinksProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-teal-600" />
            <h2 className="font-playfair text-2xl md:text-3xl font-bold">
              {service} in Ihrer Nähe
            </h2>
          </div>
          <p className="text-gray-600 mb-8">
            Unser Salon in Hamburg Hamm ist gut erreichbar für Kundinnen und Kunden aus den umliegenden Stadtteilen:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={getAreaHref(serviceSlug, area)}
                className="group bg-white rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-100 hover:border-teal-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {getAreaTitle(service, area)}
                  </h3>
                </div>
                <p className="text-xs text-gray-500">
                  {getAreaSubtitle(area)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
