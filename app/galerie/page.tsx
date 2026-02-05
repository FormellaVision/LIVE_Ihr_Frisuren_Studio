import { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { CTABanner } from '@/components/shared/CTABanner';
import { BUSINESS_INFO } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Galerie - Friseur Hamburg Hamm',
  description: `Entdecken Sie unsere Arbeiten: Damenhaarschnitte, Balayage, Herrenhaarschnitte & mehr. Ihr Frisuren-Studio Hamburg Hamm. Tel: ${BUSINESS_INFO.phone}`,
  keywords: ['friseur galerie hamburg', 'balayage vorher nachher', 'friseur fotos hamburg hamm'],
  openGraph: {
    title: 'Galerie - Friseur Hamburg Hamm | Ihr Frisuren-Studio',
    description: 'Entdecken Sie unsere Arbeiten: Damenhaarschnitte, Balayage, Herrenhaarschnitte & mehr.',
    url: `${BUSINESS_INFO.website}/galerie`,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/galerie`,
  },
};

const galleryImages = [
  { src: 'https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Balayage Frisur Hamburg Hamm', category: 'Balayage' },
  { src: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Damenhaarschnitt Hamburg Hamm', category: 'Damen' },
  { src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Herrenhaarschnitt Hamburg Hamm', category: 'Herren' },
  { src: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Friseursalon Interieur Hamburg Hamm', category: 'Salon' },
  { src: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Styling Hamburg Hamm', category: 'Styling' },
  { src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Coloration Hamburg Hamm', category: 'Coloration' },
  { src: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Friseurbehandlung Hamburg Hamm', category: 'Behandlung' },
  { src: 'https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Haarpflege Hamburg Hamm', category: 'Pflege' },
  { src: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Haarfarbe Hamburg Hamm', category: 'Farbe' },
];

export default function GaleriePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Galerie', url: `${BUSINESS_INFO.website}/galerie` },
  ]);

  return (
    <>
      <ServicePageHeader
        title="Unsere Galerie"
        subtitle="Ihr Frisuren-Studio Hamburg Hamm"
        description="Lassen Sie sich von unseren Arbeiten inspirieren - Damenhaarschnitte, Balayage, Herrenhaarschnitte und mehr"
        backgroundImage="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white font-semibold">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Mehr von unseren Arbeiten finden Sie auf Instagram
            </p>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Instagram className="w-5 h-5" />
              {BUSINESS_INFO.instagram} auf Instagram
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Gefällt Ihnen was Sie sehen?"
        description="Buchen Sie Ihren Termin und lassen Sie sich von unserem Team verwöhnen."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
