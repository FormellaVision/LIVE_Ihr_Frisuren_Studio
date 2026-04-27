import { MapPin } from 'lucide-react';
import { ServiceCards, type ServiceCard } from '@/components/shared/ServiceCards';

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

const NEARBY_AREAS: Area[] = [
  { name: 'Borgfelde', slug: 'borgfelde', urlSlug: 'borgfelde' },
  { name: 'Hamburg Mitte', slug: 'hamburg-mitte', urlSlug: 'hamburg-mitte' },
  { name: 'Horn', slug: 'horn', urlSlug: 'horn' },
];

export function ServiceAreaLinks({
  service,
  serviceSlug,
}: ServiceAreaLinksProps) {
  const items: ServiceCard[] = [
    {
      title: `${service} Hamburg Hamm`,
      description: 'Unser Standort – Hammer Landstraße 4',
      href: `/${serviceSlug}-hamburg-hamm`,
    },
    ...NEARBY_AREAS.map((area) => ({
      title: `Gut erreichbar aus ${area.name}`,
      description: `Nur wenige Minuten von ${area.name} entfernt`,
      href: `/einzugsgebiet/${area.urlSlug}`,
    })),
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-teal-600" />
          <h2 className="font-playfair text-2xl md:text-3xl font-bold">
            {service} in Ihrer Nähe
          </h2>
        </div>
        <p className="text-gray-600 mb-8">
          Unser Salon in Hamburg Hamm ist gut erreichbar für Kundinnen und Kunden aus den umliegenden Stadtteilen:
        </p>

        <ServiceCards
          title=""
          items={items}
          columns={4}
        />
      </div>
    </section>
  );
}
