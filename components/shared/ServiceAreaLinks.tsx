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
            Unser Salon in Hamburg-Hamm ist gut erreichbar für Kundinnen und Kunden aus den umliegenden Stadtteilen:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/${serviceSlug}-hamburg-${area.urlSlug}`}
                className="group bg-white rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-100 hover:border-teal-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {service} {area.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-500">
                  Friseur für {area.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
