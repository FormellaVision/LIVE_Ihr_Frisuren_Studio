import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTABanner } from '@/components/shared/CTABanner';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { BUSINESS_INFO, REVIEWS } from '@/lib/constants';
import { getBreadcrumbSchema, getReviewSchema } from '@/lib/schema';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';
import { DynamicReviewCount } from '@/components/shared/DynamicReviewCount';

const nextStepServices = [
  {
    href: '/damenfriseur-hamburg-hamm',
    label: 'Damenfriseur Hamburg Hamm',
    description: 'Professionelle Haarschnitte, Colorationen und Styling für Damen.',
  },
  {
    href: '/herrenfriseur-hamburg-hamm',
    label: 'Herrenfriseur Hamburg Hamm',
    description: 'Klassische und moderne Schnitte, Bartpflege - für den gepflegten Herren.',
  },
  {
    href: '/balayage-hamburg-hamm',
    label: 'Balayage Hamburg Hamm',
    description: 'Natürliche Farbverläufe und strahlende Farbergebnisse vom Experten.',
  },
  {
    href: '/haare-faerben-hamburg-hamm',
    label: 'Haare Färben Hamburg Hamm',
    description: 'Professionelle Haarfärbungen und Colorationen nach Ihrem Wunsch.',
  },
];

export const metadata: Metadata = {
  title: 'Bewertungen | Friseur Hamburg Hamm – Ihr Frisuren-Studio',
  description: `Lesen Sie Bewertungen zu Ihr Frisuren-Studio in Hamburg Hamm. ${BUSINESS_INFO.reviews.rating} Sterne und ${BUSINESS_INFO.reviews.count}+ Kundenmeinungen zu Service, Qualität und Atmosphäre.`,
  keywords: ['friseur bewertungen hamburg', 'friseur erfahrungen hamburg hamm', 'bester friseur hamburg hamm'],
  openGraph: {
    title: `Bewertungen - Friseur Hamburg Hamm | ${BUSINESS_INFO.reviews.rating} Sterne`,
    description: `${BUSINESS_INFO.reviews.count}+ echte Google-Bewertungen. Lesen Sie was unsere Kunden sagen.`,
    url: `${BUSINESS_INFO.website}/bewertungen`,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/bewertungen`,
  },
};

export default function BewertungenPage() {
  const reviewPageSchema = getReviewSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Bewertungen', url: `${BUSINESS_INFO.website}/bewertungen` },
  ]);

  return (
    <>
      <ServicePageHeader
        title="Kundenbewertungen"
        subtitle={<>{BUSINESS_INFO.reviews.rating} Sterne bei <DynamicReviewCount fallback={BUSINESS_INFO.reviews.count} /> Bewertungen</>}
        description="Lesen Sie was unsere zufriedenen Kunden über Ihr Frisuren-Studio in Hamburg Hamm sagen"
        backgroundImage="https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Breadcrumb />

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up" delay={0} hasScale className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center">
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-5xl font-bold mb-2">{BUSINESS_INFO.reviews.rating}</div>
              <p className="text-xl text-white/90">
                Durchschnittliche Bewertung bei <DynamicReviewCount fallback={BUSINESS_INFO.reviews.count} /> Google-Rezensionen
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {REVIEWS.map((review, index) => (
              <ScrollAnimationCard
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.08}
                hasScale
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg relative h-full">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed relative z-10">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-xl font-bold text-teal-600">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold">{review.author}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimationCard>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.1} className="text-center mt-12">
            <a
              href={BUSINESS_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="w-5 h-5" />
              Alle Bewertungen auf Google ansehen
            </a>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15} className="mt-16 max-w-3xl mx-auto text-center">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Hat Ihnen Ihr Besuch gefallen?
              </h2>
              <p className="text-gray-700 mb-6">
                Dann freuen wir uns über Ihre Bewertung! Ihr Feedback hilft uns und anderen Kunden
                bei der Entscheidung für den richtigen Friseur.
              </p>
              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Star className="w-5 h-5" />
                Jetzt bei Google bewerten ⭐
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Überzeugt von unseren Bewertungen?"
        description="Werden Sie Teil unserer zufriedenen Stammkunden!"
      />

      <section className="section-padding bg-warm-white">
        <div className="container-custom max-w-6xl mx-auto">
          <RelatedServices
            services={nextStepServices}
            title="Bereit für Ihren Termin?"
          />
        </div>
      </section>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
