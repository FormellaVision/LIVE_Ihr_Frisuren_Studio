import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  href: string;
  label: string;
  description: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

export function RelatedServices({
  services,
  title = 'Auch interessant'
}: RelatedServicesProps) {
  return (
    <section className="my-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-2 text-gray-900">
        {title}
      </h2>
      <p className="text-gray-600 mb-8">Entdecken Sie weitere Leistungen</p>

      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {service.label}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium text-sm">
              Mehr erfahren
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
