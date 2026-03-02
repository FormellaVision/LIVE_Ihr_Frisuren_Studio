import type { Metadata } from 'next';
import { KarriereHero } from '@/components/karriere/KarriereHero';
import { KarriereBenefits } from '@/components/karriere/KarriereBenefits';
import { KarriereWhoWeSeek } from '@/components/karriere/KarriereWhoWeSeek';
import { KarriereFormSection } from '@/components/karriere/KarriereFormSection';
import { KarriereClosing } from '@/components/karriere/KarriereClosing';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Karriere & Jobs – Jetzt bewerben | Ihr Frisuren-Studio Hamburg Hamm',
  description:
    'Werde Teil unseres Teams! Meisterbetrieb seit 2004 in Hamburg-Hamm. Wir suchen Friseur:innen, Azubis und Quereinsteiger – Vollzeit, Teilzeit oder Mini-Job. Jetzt direkt bewerben.',
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
      <KarriereHero />
      <KarriereBenefits />
      <KarriereWhoWeSeek />
      <KarriereFormSection />
      <KarriereClosing />
    </>
  );
}
