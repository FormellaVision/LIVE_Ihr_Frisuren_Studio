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
  title: 'Friseur Hamburg Hamm | Meisterbetrieb seit 2004 · Ihr Frisuren-Studio',
  description: `Friseur Hamburg Hamm ✓ Meisterbetrieb seit 2004 ✓ ${BUSINESS_INFO.reviews.count}+ Bewertungen ${BUSINESS_INFO.reviews.rating}★ ✓ Damen ab 33€ · Herren ab 19€ ✓ Balayage ✓ Afterwork-Termine ☎ ${BUSINESS_INFO.phone}`,
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
    title: 'Friseur Hamburg Hamm | Meisterbetrieb seit 2004 · Ihr Frisuren-Studio',
    description: `Friseur Hamburg Hamm ✓ Meisterbetrieb seit 2004 ✓ ${BUSINESS_INFO.reviews.count}+ Bewertungen ${BUSINESS_INFO.reviews.rating}★ ✓ Damen ab 33€ · Herren ab 19€ ✓ Balayage ✓ Afterwork-Termine ☎ ${BUSINESS_INFO.phone}`,
    url: 'https://ihr-frisuren-studio.de',
    images: [
      {
        url: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp',
        width: 1200,
        height: 630,
        alt: 'Ihr Frisuren-Studio – Friseur Hamburg Hamm',
      },
    ],
  },
  alternates: {
    canonical: 'https://ihr-frisuren-studio.de',
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
      <CTASection />
      <LocationSection />
      <ServiceAreaStrip />
      <FAQSection />
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
