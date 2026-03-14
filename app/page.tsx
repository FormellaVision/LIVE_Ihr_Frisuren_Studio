import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { USPSection } from '@/components/home/USPSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TeamSection } from '@/components/home/TeamSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { ServiceAreaStrip } from '@/components/home/ServiceAreaStrip';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';
import { getFAQSchema, getReviewSchema } from '@/lib/schema';
import { DEFAULT_FAQS } from '@/lib/schema';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Hamm | Ihr Frisuren-Studio – Meisterbetrieb seit 2004',
  description: `Friseur Hamburg Hamm: Damen, Herren, Balayage & Kosmetik in 20537 Hamburg-Hamm. Meisterbetrieb seit 2004 mit 4.9 Sternen und ${BUSINESS_INFO.reviews.count}+ Bewertungen.`,
  keywords: [
    'friseur hamburg hamm',
    'friseur hamm',
    'friseursalon hamburg hamm',
    'meisterbetrieb hamburg',
    'balayage hamburg hamm',
    'damenfriseur hamburg hamm',
    'herrenfriseur hamburg hamm',
    'kosmetik hamburg hamm',
    'gesichtsbehandlung hamburg hamm',
  ],
  openGraph: {
    title: 'Friseur Hamburg Hamm | Ihr Frisuren-Studio Meisterbetrieb',
    description: `Premium Friseur in Hamburg Hamm seit 2004. Damen, Herren, Balayage, Kosmetik. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating})`,
    url: BUSINESS_INFO.website,
    images: [
      {
        url: `${BUSINESS_INFO.website}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ihr Frisuren-Studio - Premium Friseur in Hamburg Hamm',
      },
    ],
  },
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
};

export default function HomePage() {
  const faqSchema = getFAQSchema(DEFAULT_FAQS);
  const reviewSchema = getReviewSchema();

  return (
    <>
      <HeroSection />
      <USPSection />
      <ServicesSection />
      <TeamSection />
      <ReviewsSection />
      <LocationSection />
      <ServiceAreaStrip />
      <FAQSection />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
