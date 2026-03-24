import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { AreaPageContent } from '@/components/areas/AreaPageContent';

export const metadata: Metadata = {
  title: 'Friseur Borgfelde | Ihr Frisuren-Studio – Nähe 20535',
  description: `Friseur Borgfelde (20535): Ihr Frisuren-Studio in Hamburg Hamm – Meisterbetrieb seit 2004. Nur 2 U-Bahn-Stationen entfernt. Damen, Herren, Balayage & Haare färben. Jetzt Termin vereinbaren!`,
  keywords: [
    'friseur borgfelde',
    'friseur nahe borgfelde',
    'friseur borgfelde hamburg',
    'friseur borgfelde 20535',
    'friseur in der nähe von borgfelde',
    'damenfriseur borgfelde',
    'herrenfriseur borgfelde',
    'balayage borgfelde',
    'haare färben borgfelde',
  ],
  alternates: { canonical: `${BUSINESS_INFO.website}/areas/borgfelde` },
  openGraph: {
    title: 'Friseur Borgfelde | Ihr Frisuren-Studio – Meisterbetrieb seit 2004',
    description: `Friseur Borgfelde: Ihr Frisuren-Studio in Hamburg-Hamm ist für Kundinnen und Kunden aus Borgfelde (20535) in nur 2 U-Bahn-Stationen erreichbar. Damen, Herren, Balayage & Haare färben.`,
    url: `${BUSINESS_INFO.website}/areas/borgfelde`,
  },
};

const borgfeldeFaqs = [
  {
    question: 'Wie schnell erreiche ich euch aus Borgfelde (20535)?',
    answer: `Von Borgfelde (20535) sind wir in unter 10 Minuten erreichbar. Mit der U2 oder U4 ab Berliner Tor bis Burgstraße (2 Stationen), dann 5 Minuten zu Fuß zur Hammer Landstraße 4. Alternativ mit den Buslinien 25 oder 130 direkt vor den Salon.`,
  },
  {
    question: 'Gibt es Parkmöglichkeiten für Kunden aus Borgfelde?',
    answer: `Ja! In der Hammer Landstraße und den umliegenden Seitenstraßen stehen Parkplätze zur Verfügung – meist kostenlos. Wer mit dem Fahrrad aus Borgfelde kommt, kann dieses direkt vor dem Salon abstellen.`,
  },
  {
    question: 'Welche Leistungen sind besonders gefragt bei Kunden aus Borgfelde?',
    answer: `Unsere Kundinnen und Kunden aus Borgfelde schätzen vor allem unsere Balayage- und Colorationsleistungen, professionelle Damenhaarschnitte sowie das Gentleman-Paket für Herren. Als Meisterbetrieb seit 2004 bieten wir höchste Qualität für alle Haartypen.`,
  },
  {
    question: 'Wie buche ich schnell einen Termin, wenn ich aus Borgfelde komme?',
    answer: `Am einfachsten rufen Sie uns direkt unter ${BUSINESS_INFO.phone} an oder schreiben Sie uns per WhatsApp. Sie können auch online über unsere Termin-Buchungsseite buchen. Für Afterwork-Termine nach 19:00 Uhr bitten wir um telefonische Anfrage.`,
  },
];

export default function BorgfeldePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Einzugsgebiet', url: `${BUSINESS_INFO.website}/einzugsgebiet` },
    { name: 'Borgfelde', url: `${BUSINESS_INFO.website}/areas/borgfelde` },
  ]);
  const faqSchema = getFAQSchema(borgfeldeFaqs);

  return (
    <>
      <AreaPageContent
        area={{
          name: 'Borgfelde',
          slug: 'borgfelde',
          isMainLocation: true,
          intro: `Kunden aus Borgfelde (20535) erreichen Ihr Frisuren-Studio in Hamburg Hamm in nur wenigen Minuten – 2 U-Bahn-Stationen via U2/U4 Burgstraße. Als Meisterbetrieb seit 2004 bieten wir Damen und Herren aus Borgfelde professionelle Haarschnitte, Balayage und Colorationen.`,
          distance: 'ca. 5–10 Minuten bis Hamburg Hamm',
          travelInfo: `Von Borgfelde zum Friseur in Hamburg Hamm: Mit der U2 oder U4 ab Berliner Tor bis Burgstraße (2 Stationen), dann 5 Minuten zu Fuß entlang der Hammer Landstraße. Alternativ mit den Buslinien 25 oder 130 direkt bis zum Salon in der Hammer Landstraße 4.`,
          travelIcon: 'train',
          highlights: [
            'Für Kundinnen und Kunden aus Borgfelde – nur wenige Minuten bis Hamburg Hamm',
            `Meisterbetrieb seit ${BUSINESS_INFO.founded} mit ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen (${BUSINESS_INFO.reviews.rating} ★)`,
            'Gut erreichbar: 2 U-Bahn-Stationen von Borgfelde (20535) nach Hamburg Hamm',
            'Damenfriseur, Herrenfriseur, Balayage und Haare färben in Hamburg Hamm',
            'Mehrsprachige Beratung: Deutsch, Englisch, Türkisch, Persisch',
            'Flexible Afterwork-Termine nach 19:00 Uhr verfügbar',
          ],
          nearbyDistricts: ['Hamburg Hamm', 'St. Georg', 'Horn', 'Rothenburgsort'],
          image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920',
        }}
      />

      {/* Services for Borgfelde – compact CTA section */}
      <section className="py-10 bg-white border-t border-gray-100" aria-labelledby="borgfelde-services-heading">
        <div className="container-custom">
          <h2 id="borgfelde-services-heading" className="font-playfair text-2xl font-bold text-center mb-6">
            Unsere Leistungen für Borgfelde (20535)
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/damenfriseur-hamburg-hamm"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-600/20"
            >
              Damenfriseur
            </Link>
            <Link
              href="/herrenfriseur-hamburg-hamm"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-600/20"
            >
              Herrenfriseur
            </Link>
            <Link
              href="/balayage-hamburg-hamm"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-600/20"
            >
              Balayage
            </Link>
            <Link
              href="/haare-faerben-hamburg-hamm"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-600/20"
            >
              Haare färben
            </Link>
          </div>
        </div>
      </section>

      {/* Borgfelde FAQ */}
      <section className="section-padding bg-warm-white" aria-labelledby="borgfelde-faq-heading">
        <div className="container-custom">
          <h2 id="borgfelde-faq-heading" className="font-playfair text-2xl md:text-3xl font-bold text-center mb-10">
            Häufige Fragen – Friseur Borgfelde
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {borgfeldeFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
