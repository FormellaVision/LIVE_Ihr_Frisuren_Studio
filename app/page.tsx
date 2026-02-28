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
import { getFAQSchema, getLocalBusinessSchema, getReviewSchema } from '@/lib/schema';
import { DEFAULT_FAQS } from '@/lib/schema';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
  description: `Friseur Hamburg Hamm: Premium Meisterbetrieb seit 2004. Damen ab 33€, Herren ab 18€, Balayage ab 179€. ${BUSINESS_INFO.reviews.count}+ Top-Bewertungen (${BUSINESS_INFO.reviews.rating}) Tel: ${BUSINESS_INFO.phone}`,
  keywords: [
    'friseur hamburg hamm',
    'friseur hamm',
    'friseursalon hamburg hamm',
    'meisterbetrieb hamburg',
    'balayage hamburg hamm',
    'damenfriseur hamburg hamm',
    'herrenfriseur hamburg hamm',
  ],
  openGraph: {
    title: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio | Meisterbetrieb seit 2004',
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
  const localBusinessSchema = getLocalBusinessSchema();
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
