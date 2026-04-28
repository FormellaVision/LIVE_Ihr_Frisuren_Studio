import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, Clock, MapPin, Star, Award, Check, Moon, Calendar } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { getBreadcrumbSchema } from '@/lib/schema';
import { RelatedServices } from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
  title: 'Termin buchen - Ihr Frisuren-Studio Hamburg Hamm',
  description: `Termin buchen beim Friseur in Hamburg Hamm. Anrufen, WhatsApp oder E-Mail. Meisterbetrieb seit ${BUSINESS_INFO.founded}. Afterwork-Termine möglich. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['termin friseur hamburg hamm', 'friseur termin buchen hamburg', 'termin vereinbaren friseur hamm'],
  openGraph: {
    title: 'Termin buchen - Ihr Frisuren-Studio Hamburg Hamm',
    description: `Einfach Termin buchen beim Premium Friseur in Hamburg Hamm. Telefon, WhatsApp oder E-Mail. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen.`,
    url: `${BUSINESS_INFO.website}/termin-buchen`,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/termin-buchen`,
  },
};

const contactOptions = [
  {
    icon: Phone,
    title: 'Anrufen',
    description: 'Schnellste Möglichkeit — direkt mit uns sprechen',
    value: BUSINESS_INFO.phone,
    href: `tel:${BUSINESS_INFO.phoneInternational}`,
    cta: 'Jetzt anrufen',
    color: 'amber',
    recommended: true,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Nachricht senden — wir antworten zeitnah',
    value: BUSINESS_INFO.phone,
    href: `https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`,
    cta: 'WhatsApp öffnen',
    color: 'emerald',
    recommended: false,
  },
  {
    icon: Calendar,
    title: 'Online buchen',
    description: 'Service auswählen & Termin direkt online buchen',
    value: 'treatwell.de',
    href: BUSINESS_INFO.treatwell,
    cta: 'Jetzt online buchen',
    color: 'violet',
    recommended: false,
  },
  {
    icon: MapPin,
    title: 'Kontakt',
    description: 'Besuchen Sie uns persönlich in Hamburg Hamm',
    value: BUSINESS_INFO.address.full,
    href: '/kontakt',
    cta: 'Anfahrt & Kontakt',
    color: 'teal',
    recommended: false,
  },
];

const appointmentServices = [
  { name: 'Damenhaarschnitt (Kurz)', duration: '45 Min.', price: 'ab 43€' },
  { name: 'Damenhaarschnitt (Mittel/Lang)', duration: '60 Min.', price: 'ab 47€' },
  { name: 'Herrenhaarschnitt Design-Schnitt', duration: '30 Min.', price: '34€' },
  { name: 'Gentleman-Paket (Schnitt + Bart)', duration: '45 Min.', price: '49€' },
  { name: 'Balayage inkl. Schnitt', duration: '3–4 Std.', price: 'ab 179€' },
  { name: 'Coloration komplett', duration: '2 Std.', price: 'ab 87€' },
  { name: 'Kosmetik Gesichtsbehandlung', duration: '60 Min.', price: 'ab 45€' },
];

export default function TerminBuchenPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Termin buchen', url: `${BUSINESS_INFO.website}/termin-buchen` },
  ]);

  return (
    <>
      <div className="pt-16">
        <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white section-padding">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-teal-200" />
              <span className="text-sm font-medium text-teal-100">Terminvereinbarung</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Termin buchen
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
              Ihr Frisuren-Studio Hamburg Hamm — Meisterbetrieb seit {BUSINESS_INFO.founded}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{BUSINESS_INFO.reviews.rating} Sterne · {BUSINESS_INFO.reviews.count}+ Bewertungen</span>
              </div>
              <span className="hidden sm:block text-white/30">·</span>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Meisterbetrieb seit {BUSINESS_INFO.founded}</span>
              </div>
              <span className="hidden sm:block text-white/30">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-300" />
                <span>Hamburg-Hamm, 20537</span>
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb />

        <section className="section-padding bg-warm-white" aria-labelledby="contact-options-heading">
          <div className="container-custom">
            <h2 id="contact-options-heading" className="font-playfair text-3xl font-bold text-center mb-4">
              So erreichen Sie uns
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
              Wählen Sie die für Sie bequemste Art, einen Termin zu vereinbaren.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col ${
                    option.recommended ? 'ring-2 ring-teal-500' : ''
                  }`}
                >
                  {option.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Empfohlen
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      option.color === 'teal'
                        ? 'bg-teal-100'
                        : option.color === 'emerald'
                        ? 'bg-emerald-100'
                        : option.color === 'violet'
                        ? 'bg-violet-100'
                        : 'bg-amber-100'
                    }`}
                  >
                    <option.icon
                      className={`w-8 h-8 ${
                        option.color === 'teal'
                          ? 'text-teal-600'
                          : option.color === 'emerald'
                          ? 'text-emerald-600'
                          : option.color === 'violet'
                          ? 'text-violet-600'
                          : 'text-amber-600'
                      }`}
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-center mb-2">{option.title}</h3>
                  <p className="text-gray-500 text-sm text-center mb-4">{option.description}</p>
                  <p className="text-center font-semibold text-gray-800 text-sm mb-6 break-all">{option.value}</p>
                  <a
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`mt-auto w-full py-3 rounded-lg text-center font-semibold transition-all hover:scale-105 ${
                      option.color === 'teal'
                        ? 'bg-teal-600 hover:bg-teal-700 text-white'
                        : option.color === 'emerald'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : option.color === 'violet'
                        ? 'bg-violet-600 hover:bg-violet-700 text-white'
                        : 'bg-amber-600 hover:bg-amber-500 text-white'
                    }`}
                  >
                    {option.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0" aria-labelledby="hours-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h2 id="hours-heading" className="font-playfair text-2xl font-bold">Öffnungszeiten</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between text-white/60 text-sm">
                    <span>Montag</span>
                    <span>Geschlossen</span>
                  </li>
                  <li className="flex justify-between text-white text-sm">
                    <span>Dienstag – Freitag</span>
                    <span className="font-semibold">{OPENING_HOURS.tuesday.times}</span>
                  </li>
                  <li className="flex justify-between text-white text-sm">
                    <span>Samstag</span>
                    <span className="font-semibold">{OPENING_HOURS.saturday.times}</span>
                  </li>
                  <li className="flex justify-between text-white/60 text-sm">
                    <span>Sonntag</span>
                    <span>Geschlossen</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Moon className="w-4 h-4 text-amber-300" />
                    <span className="font-semibold text-amber-300 text-sm">Afterwork-Termine</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    {OPENING_HOURS.afterwork.weekdays} & {OPENING_HOURS.afterwork.saturday}
                    <br />
                    Regulärer Preis {OPENING_HOURS.afterwork.surcharge} Aufschlag
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <h2 className="font-playfair text-2xl font-bold">Anfahrt</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold">{BUSINESS_INFO.name}</p>
                    <p className="text-sm text-gray-500">{BUSINESS_INFO.address.street}</p>
                    <p className="text-sm text-gray-500">{BUSINESS_INFO.address.postalCode} Hamburg-Hamm</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold mb-1">U-Bahn</p>
                    <p className="text-sm text-gray-500">U2/U4 Burgstraße — 5 Min. zu Fuß</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Bus</p>
                    <p className="text-sm text-gray-500">Linien 25, 130, 160, 261, 609, 610</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Parkplätze</p>
                    <p className="text-sm text-gray-500">Parkplätze in der Umgebung vorhanden</p>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-semibold mt-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Auf Google Maps ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 sm:pt-12 md:pt-16 pb-0 bg-warm-white" aria-labelledby="services-overview-heading">
          <div className="container-custom">
            <h2 id="services-overview-heading" className="font-playfair text-3xl font-bold text-center mb-4">
              Termindauer & Preise
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              Planen Sie Ihren Besuch — hier finden Sie die ungefähren Zeiten und Preise unserer beliebtesten Leistungen.
            </p>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              {appointmentServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 gap-4 ${
                    index !== appointmentServices.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="font-medium text-gray-900 text-sm flex-1 min-w-0">{service.name}</span>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs text-gray-400 whitespace-nowrap">{service.duration}</span>
                    <span className="font-bold text-teal-600 whitespace-nowrap text-sm">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm"
              >
                Alle Leistungen & Preise ansehen
              </Link>
            </div>

            <div className="mt-8 pt-4">
              <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider text-center">Oder direkt Deinen Service auswählen</p>
              <RelatedServices
                title="Entdecken Sie weitere Leistungen"
                services={[
                  {
                    href: '/damenfriseur-hamburg-hamm',
                    label: 'Damenfriseur Hamburg Hamm',
                    description: 'Professionelle Damenhaarschnitte & Styling',
                  },
                  {
                    href: '/herrenfriseur-hamburg-hamm',
                    label: 'Herrenfriseur Hamburg Hamm',
                    description: 'Moderne Herrenhaarschnitte & Bartpflege',
                  },
                  {
                    href: '/balayage-hamburg-hamm',
                    label: 'Balayage Hamburg Hamm',
                    description: 'Natürliche Highlights mit modernen Färbetechniken',
                  },
                  {
                    href: '/haare-faerben-hamburg-hamm',
                    label: 'Haare färben Hamburg Hamm',
                    description: 'Coloration, Balayage & Strähnen mit Olaplex-Schutz',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-warm-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-center mb-8 text-gray-900">
                Warum Kunden uns vertrauen
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Award, text: `Meisterbetrieb seit ${BUSINESS_INFO.founded}` },
                  { icon: Star, text: `${BUSINESS_INFO.reviews.rating} Sterne · ${BUSINESS_INFO.reviews.count}+ Bewertungen` },
                  { icon: Clock, text: 'Afterwork-Termine möglich' },
                  { icon: Check, text: 'Mehrsprachiges Team' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <item.icon className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
