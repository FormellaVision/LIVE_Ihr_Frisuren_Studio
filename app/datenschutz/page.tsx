import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: `Datenschutzerklärung von ${BUSINESS_INFO.name}`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg mb-8">Datenschutzerklärung</h1>

          <div className="prose-body">
            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
              es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
              Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
              des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen,
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
              sonstige Daten, die über eine Website generiert werden, handeln.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {BUSINESS_INFO.name}
              <br />
              {BUSINESS_INFO.owner}
              <br />
              {BUSINESS_INFO.address.street}
              <br />
              {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}-{BUSINESS_INFO.address.district}
            </p>
            <p>
              Telefon: {BUSINESS_INFO.phone}
              <br />
              E-Mail: {BUSINESS_INFO.email}
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
              eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
              wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben; in einem solchen Fall erfolgt die Löschung nach Fortfall
              dieser Gründe.
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>

            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2>5. Plugins und Tools</h2>

            <h3>Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
              speichern. Diese Informationen werden in der Regel an einen Server von Google in den
              USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
              diese Datenübertragung.
            </p>
            <p>
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung
              unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der
              Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
              Abs. 1 lit. f DSGVO dar.
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
              von Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>

            <h2>6. Cookies und Tracking</h2>

            <h3>Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem
              Endgerät gespeichert werden und bestimmte Einstellungen und Daten zum Austausch mit
              unserem System über Ihren Browser speichern. Ein Cookie enthält in der Regel den Namen
              der Domain, von der die Cookie-Daten gesendet wurden, sowie Informationen über das
              Alter des Cookies und einen alphanumerischen Bezeichner.
            </p>
            <p>
              Wir verwenden Cookies, um unsere Website nutzerfreundlich zu gestalten. Einige Cookies
              bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns,
              Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>

            <h3>Google Analytics 4</h3>
            <p>
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland (nachfolgend: Google).
            </p>
            <p>
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch
              Sie ermöglichen. Die durch Cookies erzeugten Informationen über Ihre Benutzung dieser
              Website werden in der Regel an einen Server von Google in den USA übertragen und dort
              gespeichert.
            </p>
            <p>
              Die Nutzung von Google Analytics erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Analyse des Nutzerverhaltens zur Optimierung unseres
              Webangebots). Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern,
              indem Sie das Browser-Add-on zur Deaktivierung von Google Analytics herunterladen und
              installieren. Den Download finden Sie unter:{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der
              Datenschutzerklärung von Google:{' '}
              <a
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                https://support.google.com/analytics/answer/6004245
              </a>
            </p>

            <h3>Cloudinary (Bildverwaltung)</h3>
            <p>
              Diese Website verwendet Cloudinary zur Optimierung und Bereitstellung von Bildern.
              Anbieter ist die Cloudinary Ltd., 3400 Central Expressway, Suite 110, Santa Clara, CA
              95051, USA. Beim Laden von Bildern werden Ihre IP-Adresse sowie technische Metadaten
              an Server von Cloudinary übertragen. Die Übertragung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der schnellen und optimierten
              Bildauslieferung).
            </p>
            <p>
              Weitere Informationen:{' '}
              <a
                href="https://cloudinary.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                https://cloudinary.com/privacy
              </a>
            </p>

            <h2>7. Ihre Rechte (Art. 15–22 DSGVO)</h2>
            <p>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul>
              <li>
                <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, jederzeit
                Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die
                unverzügliche Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten
                zu verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die
                Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit
                die Verarbeitung nicht zur Ausübung des Rechts auf freie Meinungsäußerung,
                zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
              </li>
              <li>
                <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie
                haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das
                Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht,
                jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten
                Widerspruch einzulegen, sofern die Verarbeitung auf Art. 6 Abs. 1 lit. e oder f
                DSGVO beruht.
              </li>
              <li>
                <strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Sofern die
                Datenverarbeitung auf einer Einwilligung beruht, haben Sie das Recht, diese
                jederzeit mit Wirkung für die Zukunft zu widerrufen.
              </li>
            </ul>
            <p>
              Um Ihre Rechte auszuüben, wenden Sie sich bitte an:
            </p>
            <p>
              {BUSINESS_INFO.name}<br />
              {BUSINESS_INFO.address.street}<br />
              {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}<br />
              E-Mail: {BUSINESS_INFO.email}
            </p>

            <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
              personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p>
              Die zuständige Aufsichtsbehörde für Hamburg ist:
            </p>
            <p>
              <strong>Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</strong>
              <br />
              Ludwig-Erhard-Str. 22, 6. OG
              <br />
              20459 Hamburg
              <br />
              Telefon: 040 / 428 54 – 4040
              <br />
              <a
                href="https://www.datenschutz-hamburg.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                www.datenschutz-hamburg.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
