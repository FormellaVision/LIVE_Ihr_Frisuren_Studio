import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Brain as Train, Clock, Phone, ChevronRight, Star } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';

export const metadata: Metadata = {
  title: 'Einzugsgebiet | Friseur Hamburg Hamm & Umgebung – Ihr Frisuren-Studio',
  description: `Friseur Hamburg Hamm & Einzugsgebiet: Unser Salon in der Hammer Landstraße 4 ist gut erreichbar aus Hamburg Hamm, Borgfelde, Hamburg Mitte und Horn. Meisterbetrieb seit 2004.`,
  keywords: [
    'friseur einzugsgebiet hamburg',
    'friseur hamburg hamm umgebung',
    'friseur borgfelde',
    'friseur horn hamburg',
    'friseur hamburg mitte',
    'friseur nahe hamburg hamm',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/einzugsgebiet` },
  openGraph: {
    title: 'Einzugsgebiet – Friseur Hamburg Hamm & Umgebung',
    description: `Unser Friseursalon in Hamburg-Hamm ist gut erreichbar aus Borgfelde, Hamburg Mitte, Horn und weiteren Stadtteilen. Meisterbetrieb seit 2004.`,
    url: `${BUSINESS_INFO.website}/einzugsgebiet`,
  },
};

const AREAS = [
  {
    name: 'Hamburg Hamm',
    plz: '20537',
    href: '/friseur-hamburg-hamm',
    description: 'Unser Standort – direkt in Hamburg-Hamm, Hammer Landstraße 4. Meisterbetrieb seit 2004.',
    travel: 'U2/U4 Burgstraße – 5 Min. zu Fuß',
    isMain: true,
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Borgfelde',
    plz: '20535',
    href: '/einzugsgebiet/borgfelde',
    description: 'Ihr Friseur Borgfelde (20535) ist nur 2 U-Bahn-Stationen via U2/U4 von uns entfernt. Bequem erreichbar in 5-10 Minuten.',
    travel: 'U2/U4 ab Berliner Tor – 2 Stationen',
    isMain: false,
    image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Hamburg Mitte',
    plz: '20099',
    href: '/einzugsgebiet/hamburg-mitte',
    description: 'Direkt vom Hauptbahnhof erreichbar – ca. 10 Minuten mit der U-Bahn.',
    travel: 'U2/U4 ab Hauptbahnhof – direkt',
    isMain: false,
    image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Horn',
    plz: '22111',
    href: '/einzugsgebiet/horn',
    description: 'Per U2 oder Fahrrad in ca. 10 Minuten bei uns im Salon.',
    travel: 'U2 ab Rauhes Haus/Horn – 4-5 Min.',
    isMain: false,
    image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const SERVICES = [
  { title: 'Damenfriseur Hamburg Hamm', href: '/damenfriseur-hamburg-hamm' },
  { title: 'Herrenfriseur Hamburg Hamm', href: '/herrenfriseur-hamburg-hamm' },
  { title: 'Balayage Hamburg Hamm', href: '/balayage-hamburg-hamm' },
  { title: 'Haare färben Hamburg Hamm', href: '/haare-faerben-hamburg-hamm' },
];

export default function EinzugsgebietPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Einzugsgebiet', url: `${BUSINESS_INFO.website}/einzugsgebiet` },
  ]);

  return (
    <>
      <ServicePageHeader
        title="Ihr Friseur für Hamburg Hamm & Umgebung"
        subtitle="Einzugsgebiet & Anfahrt"
        description="Unser Salon in der Hammer Landstraße 4 ist gut erreichbar für Kundinnen und Kunden aus Hamburg Hamm, Borgfelde, Hamburg Mitte und Horn."
        backgroundImage="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Alle Stadtteile im Überblick
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wählen Sie Ihren Stadtteil für detaillierte Anreiseinformationen, Öffnungszeiten und alle Leistungen in Ihrer Nähe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {AREAS.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`Friseur ${area.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {area.isMain && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      Standort
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white font-bold text-base leading-tight">{area.name}</p>
                    <p className="text-gray-300 text-xs">PLZ {area.plz}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{area.description}</p>
                  <div className="flex items-start gap-2 text-xs text-teal-700">
                    <Train className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{area.travel}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-semibold">
                    <span>Details & Anfahrt</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                Unser Standort
              </h2>
              <p className="text-gray-600">
                Hammer Landstraße 4, 20537 Hamburg-Hamm — gut erreichbar mit U2/U4 Burgstraße
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Train className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Öffentliche Verkehrsmittel</h3>
                <p className="text-sm text-gray-600">U2/U4 Haltestelle Burgstraße, 5 Min. zu Fuß. Buslinien 25, 130, 160, 261 direkt vor dem Salon.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Parken</h3>
                <p className="text-sm text-gray-600">Parkmöglichkeiten in der Hammer Landstraße und den Nebenstraßen vorhanden. Meist kostenfrei.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
                <p className="text-sm text-gray-600">Di–Fr {OPENING_HOURS.tuesday.times} Uhr (Afterwork {OPENING_HOURS.afterwork.weekdays}), Sa {OPENING_HOURS.saturday.times} Uhr. Mo + So geschlossen.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{BUSINESS_INFO.reviews.count}+ Google-Bewertungen</p>
                  <p className="text-sm text-gray-500">{BUSINESS_INFO.reviews.rating} Sterne · Meisterbetrieb seit {BUSINESS_INFO.founded}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Unsere Kundinnen und Kunden kommen aus dem gesamten Hamburger Osten – aus Hamburg-Hamm, Borgfelde, Horn, Hamburg Mitte, Rothenburgsort, St. Georg und weiteren Stadtteilen. Überzeugen Sie sich selbst von unserem persönlichen Service und unserer Meisterqualität.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-gray-600 mb-8">
              Für alle Kunden aus dem Einzugsgebiet bieten wir das komplette Spektrum moderner Friseurleistungen.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-white border border-gray-200 hover:border-teal-400 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-700 transition-all duration-200 hover:shadow-md text-center"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              Alle Leistungen & Preise ansehen
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Termin vereinbaren"
        description="Rufen Sie uns an oder buchen Sie direkt online – wir freuen uns auf Ihren Besuch."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
