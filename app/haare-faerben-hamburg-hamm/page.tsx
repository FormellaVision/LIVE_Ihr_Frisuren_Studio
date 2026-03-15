import { Metadata } from 'next';
import Link from 'next/link';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PriceList } from '@/components/shared/PriceList';
import { CTABanner } from '@/components/shared/CTABanner';
import { ServiceContactBlock } from '@/components/shared/ServiceContactBlock';
import { ServiceFAQSection } from '@/components/shared/ServiceFAQSection';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';
import { SERVICES_DAMEN, BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, SERVICE_FAQS } from '@/lib/schema';
import { Check, Palette, Sparkles, Award, Clock, Droplets, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Haare färben Hamburg Hamm | Coloration, Strähnen & Balayage',
    description: `Haare färben in Hamburg Hamm: professionelle Coloration, Strähnen und Balayage mit persönlicher Beratung und hochwertigen Ergebnissen.`,
    keywords: [
        'haare färben hamburg hamm',
        'coloration hamburg hamm',
        'haarfarbe hamburg',
        'strähnen hamburg hamm',
        'ansatz färben hamburg',
        'balayage hamburg hamm',
        'foliensträhnen hamburg',
    ],
    openGraph: {
        title: 'Haare färben Hamburg Hamm - Coloration & Balayage | Ihr Frisuren-Studio',
        description: `Professionelles Haare färben in Hamburg Hamm. Ansatz ab 43€, Balayage ab 179€. ${BUSINESS_INFO.reviews.count}+ Bewertungen (${BUSINESS_INFO.reviews.rating})`,
        url: 'https://ihr-frisuren-studio.de/haare-faerben-hamburg-hamm',
        images: [
            {
                url: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp',
                width: 1200,
                height: 630,
                alt: 'Ihr Frisuren-Studio – Friseur Hamburg Hamm',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['https://res.cloudinary.com/dqkld61zu/image/upload/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp'],
    },
    alternates: {
        canonical: 'https://ihr-frisuren-studio.de/haare-faerben-hamburg-hamm',
    },
};

const colorationServices = [
    { name: 'Ansatz färben', price: 'ab 43€' },
    { name: 'Längen/Spitzen färben', price: 'ab 29€' },
    { name: 'Coloration komplett inkl. Schnitt', price: 'ab 87€' },
    { name: 'Foliensträhnen', price: 'ab 85€' },
    { name: 'Balayage inkl. Veredelung & Schnitt', price: 'ab 179€' },
    { name: 'Balayage (nur Farbe)', price: 'ab 129€' },
    { name: 'Ombre / Sombre', price: 'ab 159€' },
];

const processSteps = [
    {
        step: '1',
        title: 'Beratung',
        description: 'Individuelle Farbberatung mit unseren erfahrenen Coloristinnen. Wir analysieren Ihren Haartyp und besprechen Ihre Wünsche.',
    },
    {
        step: '2',
        title: 'Farbwahl',
        description: 'Gemeinsam wählen wir den perfekten Farbton und die ideale Technik für Ihr gewünschtes Ergebnis.',
    },
    {
        step: '3',
        title: 'Behandlung',
        description: 'Professionelle Anwendung mit hochwertigen Produkten und Olaplex-Schutz für gesundes, glänzendes Haar.',
    },
    {
        step: '4',
        title: 'Finish & Pflege',
        description: 'Styling und Pflegetipps für langanhaltende Farbergebnisse. Wir beraten Sie zu den richtigen Produkten für zu Hause.',
    },
];

const features = [
    {
        icon: Palette,
        title: 'Alle Techniken',
        description: 'Coloration, Balayage, Strähnen, Ombre — wir beherrschen alle modernen Färbetechniken.',
    },
    {
        icon: Shield,
        title: 'Olaplex-Schutz',
        description: 'Wir schützen Ihr Haar mit dem bewährten Olaplex-System während jeder Behandlung.',
    },
    {
        icon: Award,
        title: 'Meisterqualität',
        description: `Erfahrene Coloristinnen mit ${new Date().getFullYear() - 2004}+ Jahren Expertise in Hamburg Hamm.`,
    },
];

const suitableFor = [
    'Graue Haare natürlich abdecken',
    'Neue Haarfarbe ausprobieren',
    'Natürliche Highlights mit Balayage',
    'Farbauffrischung und Ansatz-Korrektur',
    'Ombre- und Sombre-Looks',
    'Herren-Coloration und Camouflage',
];

export default function HaareFaerbenPage() {
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Start', url: BUSINESS_INFO.website },
        { name: 'Haare färben Hamburg Hamm', url: `${BUSINESS_INFO.website}/haare-faerben-hamburg-hamm` },
    ]);

    const serviceSchema = getServiceSchema(
        'Haare färben',
        'Haare färben Hamburg Hamm',
        'Professionelles Haare färben in Hamburg Hamm. Coloration, Balayage, Strähnen und Ombre mit Olaplex-Schutz.',
        `${BUSINESS_INFO.website}/haare-faerben-hamburg-hamm`,
        colorationServices.map((s) => ({
            name: s.name,
            description: s.name,
            price: s.price,
        }))
    );

    const faqSchema = getFAQSchema(SERVICE_FAQS.haereFaerben);

    const relatedServices = [
        {
            href: '/balayage-hamburg-hamm',
            label: 'Balayage Hamburg Hamm',
            description: 'Natürliche Highlights mit der handgemalten Balayage-Technik',
        },
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
            href: '/leistungen',
            label: 'Alle Leistungen & Preise',
            description: 'Komplettes Angebot: Damen, Herren & Kosmetik',
        },
    ];

    return (
        <>
            <ServicePageHeader
                title="Haare färben Hamburg Hamm"
                subtitle="Coloration, Balayage & Strähnen"
                description="Professionelles Haare färben von erfahrenen Coloristinnen — mit Olaplex-Schutz für gesundes, strahlendes Haar"
                backgroundImage="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920"
            />

            <Breadcrumb />

            {/* Features */}
            <section className="section-padding bg-warm-white">
                <div className="container-custom">
                    <h2 className="sr-only">Unsere Stärken beim Haare färben in Hamburg Hamm</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                        {features.map((feature, index) => (
                            <ScrollAnimationCard key={index} direction="up" delay={index * 0.07} hasScale>
                                <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-8 h-8 text-teal-600" />
                                    </div>
                                    <h3 className="font-playfair text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </ScrollAnimationCard>
                        ))}
                    </div>

                    {/* Ablauf */}
                    <ScrollAnimationCard direction="up" delay={0.05} hasScale>
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="font-playfair text-3xl font-bold text-center mb-10">So läuft Ihre Färbebehandlung ab</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {processSteps.map((step, index) => (
                                    <ScrollAnimationCard key={index} direction="up" delay={index * 0.06}>
                                        <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                                                {step.step}
                                            </div>
                                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                            <p className="text-sm text-gray-600">{step.description}</p>
                                        </div>
                                    </ScrollAnimationCard>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimationCard>

                    {/* Preise */}
                    <ScrollAnimationCard direction="up" delay={0.05} hasScale>
                        <div className="max-w-3xl mx-auto mb-16">
                            <PriceList title="Haare färben — Unsere Preise" services={colorationServices} />
                        </div>
                    </ScrollAnimationCard>

                    {/* Für wen geeignet */}
                    <ScrollAnimationCard direction="up" delay={0.05} hasScale>
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
                                <h2 className="font-playfair text-2xl font-bold mb-4">
                                    Für wen ist professionelles Haare färben geeignet?
                                </h2>
                                <ul className="space-y-3">
                                    {suitableFor.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimationCard>

                    {/* Vertrauenselemente */}
                    <ScrollAnimationCard direction="up" delay={0.05} hasScale>
                        <div className="mt-12 max-w-3xl mx-auto">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="font-playfair text-2xl font-bold mb-4">
                                    Warum Ihr Frisuren-Studio für Haare färben in Hamburg Hamm?
                                </h2>
                                <ul className="space-y-3">
                                    {[
                                        `Meisterbetrieb seit ${BUSINESS_INFO.founded} in Hamburg Hamm`,
                                        'Erfahrene Coloristinnen mit Spezialisierung auf Balayage und Strähnen',
                                        'Olaplex-Behandlung zum Schutz der Haarstruktur inklusive',
                                        'Hochwertige Colorationsprodukte für langanhaltende Ergebnisse',
                                        'Mehrsprachige Beratung (Deutsch, Englisch, Türkisch, Persisch)',
                                        `${BUSINESS_INFO.reviews.count}+ zufriedene Kunden (${BUSINESS_INFO.reviews.rating} Sterne bei Google)`,
                                        'Afterwork-Termine nach 19:00 Uhr möglich',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimationCard>
                </div>
            </section>

            {/* Kontaktblock */}
            <ServiceContactBlock />

            {/* FAQs */}
            <ServiceFAQSection
                faqs={SERVICE_FAQS.haereFaerben}
                title="Häufige Fragen zum Haare färben"
                subtitle="Alles Wichtige zu Colorationen in Hamburg Hamm"
            />

            {/* Related Services */}
            <section className="section-padding">
                <div className="container-custom">
                    <RelatedServices
                        services={relatedServices}
                        title="Entdecken Sie weitere Services"
                    />
                </div>
            </section>

            <CTABanner
                title="Bereit für Ihre Traumfarbe?"
                description="Buchen Sie jetzt Ihren Termin für professionelles Haare färben in Hamburg Hamm."
            />

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
