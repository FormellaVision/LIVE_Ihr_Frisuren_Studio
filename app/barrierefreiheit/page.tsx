import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Barrierefreiheit',
  description: `Erklärung zur Barrierefreiheit von ${BUSINESS_INFO.name}`,
  robots: { index: false, follow: true },
};

export default function BarrierefreiheitPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg mb-8">Erklärung zur Barrierefreiheit</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              {BUSINESS_INFO.name} ist bemüht, seine Website im Einklang mit den nationalen
              Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen
              Parlaments und des Rates barrierefrei zugänglich zu machen.
            </p>

            <h2>Stand der Vereinbarkeit mit den Anforderungen</h2>
            <p>
              Diese Website ist mit den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              weitgehend vereinbar. Folgende Inhalte sind nicht barrierefrei:
            </p>
            <ul>
              <li>
                Eingebettete Google Maps Karten sind möglicherweise nicht vollständig mit
                Screenreadern kompatibel.
              </li>
              <li>
                Einige ältere Bilder verfügen möglicherweise nicht über ausreichende Alternativtexte.
              </li>
            </ul>

            <h2>Erstellung dieser Erklärung zur Barrierefreiheit</h2>
            <p>
              Diese Erklärung wurde am {new Date().toLocaleDateString('de-DE')} erstellt.
            </p>

            <h2>Feedback und Kontaktangaben</h2>
            <p>
              Sollten Sie auf Barrieren stoßen, die Sie an der Nutzung unserer Website hindern,
              kontaktieren Sie uns bitte:
            </p>
            <p>
              E-Mail:{' '}
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-teal-600 hover:underline">
                {BUSINESS_INFO.email}
              </a>
              <br />
              Telefon: {BUSINESS_INFO.phone}
            </p>

            <h2>Unsere Bemühungen</h2>
            <p>Wir haben folgende Maßnahmen ergriffen, um die Barrierefreiheit zu gewährleisten:</p>
            <ul>
              <li>Verwendung semantisch korrekter HTML-Strukturen</li>
              <li>Ausreichende Farbkontraste für Text und Hintergründe</li>
              <li>Tastaturnavigation für alle interaktiven Elemente</li>
              <li>Skalierbare Schriftgrößen</li>
              <li>Alternativtexte für Bilder</li>
              <li>Klare und verständliche Sprache</li>
            </ul>

            <h2>Unser Salon vor Ort</h2>
            <p>
              Unser Salon in der {BUSINESS_INFO.address.street} ist ebenerdig zugänglich. Sollten Sie
              spezielle Bedürfnisse haben, kontaktieren Sie uns bitte im Voraus, damit wir uns
              entsprechend vorbereiten können.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
