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

const AREAS: Area[] = [
  { name: 'Hamburg Hamm', slug: 'hamm', urlSlug: 'hamm' },
  { name: 'Borgfelde', slug: 'borgfelde', urlSlug: 'borgfelde' },
  { name: 'Hamburg Mitte', slug: 'mitte', urlSlug: 'mitte' },
  { name: 'Horn', slug: 'horn', urlSlug: 'horn' },
];

function getAreaTitle(service: string, area: Area): string {
  if (area.slug === 'hamm') return `${service} Hamburg Hamm`;
  return `Leicht erreichbar aus ${area.name}`;
}

function getAreaSubtitle(area: Area): string {
  if (area.slug === 'hamm') return 'Unser Standort in Hamburg Hamm';
  return `Nur wenige Minuten von ${area.name} entfernt`;
}

function getAreaHref(serviceSlug: string, area: Area): string {
  return `/areas/${area.urlSlug}`;
}

export function ServiceAreaLinks({
  service,
  serviceSlug,
  areas = AREAS,
}: ServiceAreaLinksProps) {
  const items: ServiceCard[] = areas.map((area) => ({
    title: getAreaTitle(service, area),
    description: getAreaSubtitle(area),
    href: getAreaHref(serviceSlug, area),
  }));

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
