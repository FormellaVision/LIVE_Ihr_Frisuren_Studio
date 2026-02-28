import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Award, Star, MapPin, Check, Scissors, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from '@/lib/schema';
import { ServiceContactBlock } from '@/components/shared/ServiceContactBlock';
import { CTABanner } from '@/components/shared/CTABanner';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
  description: `Friseur Hamburg Hamm: Premium Meisterbetrieb seit 2004. Damen ab 33€, Herren ab 18€, Balayage ab 179€. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating}). Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    'friseur hamburg hamm',
    'friseur hamm',
    'friseursalon hamburg hamm',
    'meisterbetrieb hamburg hamm',
    'friseur 20537',
    'friseur 20535',
    'haarschnitt hamburg hamm',
  ],
  openGraph: {
    title: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
    description: `Premium Friseur in Hamburg Hamm seit 2004. Damen, Herren, Balayage, Kosmetik. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating})`,
    url: `${BUSINESS_INFO.website}/friseur-hamburg-hamm`,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/friseur-hamburg-hamm`,
  },
};

const mainServices = [
  { icon: Sparkles, title: 'Damenfriseur', href: '/damenfriseur-hamburg-hamm', desc: 'Haarschnitte, Balayage & Colorationen' },
  { icon: Scissors, title: 'Herrenfriseur', href: '/herrenfriseur-hamburg-hamm', desc: 'Haarschnitte, Bartpflege & Gentleman-Paket' },
  { icon: Sparkles, title: 'Haare färben', href: '/haare-faerben-hamburg-hamm', desc: 'Coloration, Strähnen & Balayage' },
  { icon: Sparkles, title: 'Balayage', href: '/balayage-hamburg-hamm', desc: 'Natürliche Highlights ab 179€' },
];

const whyUs = [
  `Meisterbetrieb seit ${BUSINESS_INFO.founded} — zertifizierte Qualität`,
  `${BUSINESS_INFO.reviews.count}+ Google-Bewertungen mit ${BUSINESS_INFO.reviews.rating} Sterne Durchschnitt`,
  'Mehrsprachiges Team (Deutsch, Englisch, Türkisch, Persisch)',
  'Afterwork-Termine nach 19:00 Uhr möglich',
  'Balayage-Spezialist und Colorations-Expertin im Team',
  'Bestens erreichbar mit U2/U4 Burgstraße (5 Min. zu Fuß)',
  'Parkplätze in der Umgebung vorhanden',
  'Für Damen und Herren aller Altersgruppen',
];

const faqs = [
  {
    question: 'Wo befindet sich Ihr Friseur in Hamburg Hamm?',
    answer: `Unser Friseursalon liegt in der ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} Hamburg-Hamm. Perfekt erreichbar mit U2/U4 Burgstraße (5 Min.) und den Buslinien 25, 130, 160.`,
  },
  {
    question: 'Welche Leistungen bietet Ihr Frisuren-Studio in Hamburg Hamm an?',
    answer: 'Wir bieten Damen- und Herrenhaarschnitte, Balayage, Colorationen, Foliensträhnen, Dauerwellen, Hochsteckfrisuren sowie Kosmetikbehandlungen wie Gesichtsbehandlung, Maniküre und Fußpflege.',
  },
  {
    question: 'Ist Ihr Frisuren-Studio ein Meisterbetrieb?',
    answer: `Ja, Ihr Frisuren-Studio ist ein zertifizierter Meisterbetrieb seit ${BUSINESS_INFO.founded}. Inhaber Serbay Eskici ist ausgebildeter Friseurmeister mit über 20 Jahren Erfahrung in Hamburg-Hamm.`,
  },
  {
    question: 'Bedient ihr auch Kunden aus PLZ 20535 (Borgfelde)?',
    answer: `Ja! Borgfelde (20535) liegt direkt neben unserem Salon in Hamburg-Hamm (20537). Sie erreichen uns bequem in wenigen Minuten.`,
  },
];

export default function FriseurHamburgHammPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Friseur Hamburg Hamm', url: `${BUSINESS_INFO.website}/friseur-hamburg-hamm` },
  ]);

  const serviceSchema = getServiceSchema(
    'Friseur',
    'Friseur Hamburg Hamm',
    'Premium Friseursalon in Hamburg Hamm. Meisterbetrieb seit 2004 für Damen und Herren. Spezialisiert auf Haarschnitte, Balayage und Colorationen.',
    `${BUSINESS_INFO.website}/friseur-hamburg-hamm`,
    [
      { name: 'Damenhaarschnitt', description: 'Waschen, Schneiden & Föhnen', price: 'ab 43' },
      { name: 'Herrenhaarschnitt', description: 'Design-Schnitt', price: '34' },
      { name: 'Balayage', description: 'inkl. Veredelung & Schnitt', price: 'ab 179' },
    ]
  );

  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <div className="pt-16">
        <section
          className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          aria-label="Friseur Hamburg Hamm – Ihr Frisuren-Studio"
        >
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Friseur Hamburg Hamm – Ihr Frisuren-Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="relative z-10 container-custom text-center text-white py-20">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Meisterbetrieb seit {BUSINESS_INFO.founded}</span>
              <span className="w-px h-4 bg-white/30" />
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm">{BUSINESS_INFO.reviews.rating} · {BUSINESS_INFO.reviews.count}+ Bewertungen</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Friseur Hamburg Hamm
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              Premium Friseursalon · Meisterbetrieb seit {BUSINESS_INFO.founded}
            </p>
            <p className="text-white/70 mb-8">
              {BUSINESS_INFO.address.street} · {BUSINESS_INFO.address.postalCode} Hamburg-Hamm
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-warm-white" aria-labelledby="services-friseur-heading">
          <div className="container-custom">
            <h2 id="services-friseur-heading" className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4">
              Unsere Leistungen in Hamburg Hamm
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Damen, Herren, Balayage und Kosmetik — alles unter einem Dach in Hamburg-Hamm (20537)
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {mainServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors">
                    <service.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="why-us-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="why-us-heading" className="font-playfair text-3xl font-bold mb-6">
                  Warum Ihr Frisuren-Studio der beste Friseur in Hamburg Hamm ist
                </h2>
                <p className="text-gray-600 mb-6">
                  Seit {BUSINESS_INFO.founded} sind wir der vertrauensvolle Friseur in Hamburg-Hamm. Als
                  zertifizierter Meisterbetrieb bieten wir höchste Qualität für Damen und Herren —
                  mitten im Herzen von Hamburg-Hamm, nur wenige Minuten von Borgfelde und Horn entfernt.
                </p>
                <ul className="space-y-3">
                  {whyUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-teal-200" />
                    <h3 className="font-bold text-lg">Öffnungszeiten</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between text-white/60">
                      <span>Montag</span><span>Geschlossen</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dienstag – Freitag</span>
                      <span className="font-semibold">{OPENING_HOURS.tuesday.times}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samstag</span>
                      <span className="font-semibold">{OPENING_HOURS.saturday.times}</span>
                    </li>
                    <li className="flex justify-between text-white/60">
                      <span>Sonntag</span><span>Geschlossen</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/20 text-sm text-amber-300">
                    Afterwork: {OPENING_HOURS.afterwork.weekdays} & {OPENING_HOURS.afterwork.saturday} (+10€)
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-teal-600" />
                    <h3 className="font-bold text-lg">Adresse & Anfahrt</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>{BUSINESS_INFO.name}</strong><br />
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.postalCode} Hamburg-Hamm
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    U2/U4 Burgstraße · 5 Min. zu Fuß<br />
                    Bus: 25, 130, 160, 261, 609, 610
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-semibold"
                  >
                    <MapPin className="w-4 h-4" />
                    Google Maps öffnen
                  </a>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-amber-800">
                      {BUSINESS_INFO.reviews.rating} Sterne auf Google
                    </span>
                  </div>
                  <p className="text-amber-700 text-sm">
                    {BUSINESS_INFO.reviews.count}+ zufriedene Kunden aus Hamburg-Hamm
                    und Umgebung haben uns bewertet.
                  </p>
                  <a
                    href="https://www.google.com/search?q=Ihr+Frisuren-Studio+Hamburg+Rezensionen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-800 font-semibold mt-3"
                  >
                    Alle Bewertungen ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceContactBlock />

        <section className="section-padding bg-warm-white" aria-labelledby="faq-friseur-heading">
          <div className="container-custom">
            <h2 id="faq-friseur-heading" className="font-playfair text-3xl font-bold text-center mb-10">
              Häufige Fragen — Friseur Hamburg Hamm
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="internal-links-heading">
          <div className="container-custom">
            <h2 id="internal-links-heading" className="font-playfair text-2xl font-bold text-center mb-8">
              Alle Leistungen im Überblick
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { href: '/damenfriseur-hamburg-hamm', label: 'Damenfriseur Hamburg Hamm' },
                { href: '/herrenfriseur-hamburg-hamm', label: 'Herrenfriseur Hamburg Hamm' },
                { href: '/balayage-hamburg-hamm', label: 'Balayage Hamburg Hamm' },
                { href: '/haare-faerben-hamburg-hamm', label: 'Haare färben Hamburg Hamm' },
                { href: '/leistungen', label: 'Alle Leistungen & Preise' },
                { href: '/bewertungen', label: 'Kundenbewertungen' },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4 hover:shadow-lg hover:text-teal-600 transition-all group"
                >
                  <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="font-medium text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ihr Termin beim besten Friseur in Hamburg Hamm"
          description="Meisterbetrieb seit 2004. Damen ab 33€ · Herren ab 18€ · Balayage ab 179€"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
