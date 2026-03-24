import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum von ${BUSINESS_INFO.name}, ${BUSINESS_INFO.address.full}`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
    <div className="pt-16 sm:pt-20">
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb variant="minimal" />
            <AnimatedSection direction="up" delay={0}>
              <h1 className="heading-lg mb-8 mt-4">Impressum</h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
            <div className="prose-body">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                <strong>{BUSINESS_INFO.name}</strong>
                <br />
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}-{BUSINESS_INFO.address.district}
              </p>

              <h2>Vertreten durch</h2>
              <p>
                Inhaber: {BUSINESS_INFO.owner}
                <br />
                (Friseurmeister)
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: {BUSINESS_INFO.phone}
                <br />
                E-Mail: {BUSINESS_INFO.email}
              </p>

              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                <br />
                {BUSINESS_INFO.taxId}
              </p>

              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Friseurmeister
                <br />
                Zuständige Kammer: Handwerkskammer Hamburg
                <br />
                Verliehen in: Deutschland
              </p>

              <h2>Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <br />
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>

              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
                dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
