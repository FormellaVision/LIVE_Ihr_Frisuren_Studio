import { Metadata } from 'next';
import { QuickContactPhoneHero } from '@/components/shared/QuickContactPhoneHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';
import { getBreadcrumbSchema } from '@/lib/schema';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { GoogleMap } from '@/components/shared/GoogleMap';

export const metadata: Metadata = {
  title: 'Schnellkontakt - Friseur Hamburg Hamm',
  description: `Schnellkontakt zu Ihrem Friseur Hamburg Hamm. Anrufen: ${BUSINESS_INFO.phone}. Öffnungszeiten Di-Fr 9-19, Sa 8-14. Hammer Landstraße 4, Hamburg.`,
  keywords: ['friseur schnellkontakt hamburg hamm', 'friseur anrufen hamburg hamm', 'friseur hamburg hamm kontakt'],
  openGraph: {
    title: 'Schnellkontakt - Friseur Hamburg Hamm | Ihr Frisuren-Studio',
    description: `Schneller Kontakt zu Ihrem Friseur. Tel. ${BUSINESS_INFO.phone}`,
    url: `${BUSINESS_INFO.website}/schnellkontakt`,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.website}/schnellkontakt`,
  },
};

export default function SchnellkontaktPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Start', url: BUSINESS_INFO.website },
    { name: 'Schnellkontakt', url: `${BUSINESS_INFO.website}/schnellkontakt` },
  ]);

  return (
    <>
      <QuickContactPhoneHero />

      <Breadcrumb />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="heading-md mb-6">Kontaktieren Sie uns</h2>

              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Telefon</h3>
                  <p className="text-2xl text-teal-600 font-semibold">{BUSINESS_INFO.phone}</p>
                  <p className="text-sm text-gray-500 mt-1">Mo geschlossen | Di-Fr 9-19 | Sa 8-14</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">WhatsApp</h3>
                  <p className="text-xl text-green-600 font-semibold">{BUSINESS_INFO.whatsapp}</p>
                  <p className="text-sm text-gray-500 mt-1">Schreiben Sie uns jederzeit</p>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">E-Mail</h3>
                  <p className="text-teal-600 font-semibold break-all">{BUSINESS_INFO.email}</p>
                  <p className="text-sm text-gray-500 mt-1">Antwort innerhalb von 24 Stunden</p>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Instagram</h3>
                  <p className="text-teal-600 font-semibold">{BUSINESS_INFO.instagram}</p>
                  <p className="text-sm text-gray-500 mt-1">Folgen Sie uns für Inspiration</p>
                </div>
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Adresse</h3>
                    <p className="text-gray-700">
                      <strong>{BUSINESS_INFO.name}</strong>
                      <br />
                      {BUSINESS_INFO.address.street}
                      <br />
                      {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}-{BUSINESS_INFO.address.district}
                    </p>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full"
                >
                  <ExternalLink className="w-4 h-4" />
                  Route auf Google Maps
                </a>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-xl shadow-lg text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-4">Öffnungszeiten</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Montag</span>
                        <span>Geschlossen</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dienstag - Freitag</span>
                        <span className="font-semibold">{OPENING_HOURS.tuesday.times}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samstag</span>
                        <span className="font-semibold">{OPENING_HOURS.saturday.times}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sonntag</span>
                        <span>Geschlossen</span>
                      </div>
                      <div className="pt-3 mt-3 border-t border-white/20">
                        <p className="text-amber-300 font-semibold">Afterwork Specials</p>
                        <p className="text-sm text-white/80">
                          {OPENING_HOURS.afterwork.weekdays} & {OPENING_HOURS.afterwork.saturday}
                          <br />
                          Regulärer Preis {OPENING_HOURS.afterwork.surcharge}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <GoogleMap
                latitude={BUSINESS_INFO.coordinates.latitude}
                longitude={BUSINESS_INFO.coordinates.longitude}
                title="Ihr Frisuren-Studio Hamburg Hamm - Standort"
              />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
