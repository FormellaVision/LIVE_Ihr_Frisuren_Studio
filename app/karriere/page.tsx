import type { Metadata } from 'next';
import { ServicePageHeader } from '@/components/shared/ServicePageHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { KarriereBenefits } from '@/components/karriere/KarriereBenefits';
import { KarriereWhoWeSeek } from '@/components/karriere/KarriereWhoWeSeek';
import { KarriereFormSection } from '@/components/karriere/KarriereFormSection';
import { KarriereClosing } from '@/components/karriere/KarriereClosing';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Karriere & Jobs – Jetzt bewerben | Ihr Frisuren-Studio Hamburg Hamm',
  description:
    'Werde Teil unseres familiären Teams und gestalte deinen Arbeitsalltag in einem Salon, der Wert auf Qualität, Menschlichkeit und Entwicklung legt.',
  openGraph: {
    title: 'Karriere bei Ihr Frisuren-Studio – Friseur Jobs Hamburg Hamm',
    description:
      'Faire Bezahlung, familiäres Team, Weiterbildung. Bewirb dich jetzt bei unserem Meisterbetrieb in Hamburg-Hamm.',
    url: `${BUSINESS_INFO.website}/karriere`,
  },
};

export default function KarrierePage() {
  return (
    <>
      <ServicePageHeader
        title="Bewirb dich bei Ihr Frisuren-Studio"
        subtitle="Meisterbetrieb in Hamburg-Hamm"
        description="Werde Teil unseres familiären Teams und gestalte deinen Arbeitsalltag in einem Salon, der Wert auf Qualität, Menschlichkeit und Entwicklung legt."
        backgroundImage="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Breadcrumb />
      <KarriereBenefits />
      <KarriereWhoWeSeek />
      <KarriereFormSection />
      <KarriereClosing />
    </>
  );
}
