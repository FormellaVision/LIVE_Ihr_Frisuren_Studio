import Link from 'next/link';
import { MapPin, Star, Clock, Image, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

interface GBPTipProps {
  icon: React.ElementType;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  completed?: boolean;
}

function GBPTip({ icon: Icon, title, description, actionLabel, actionHref, completed }: GBPTipProps) {
  return (
    <div className={`flex gap-4 p-5 rounded-xl border transition-colors ${completed ? 'bg-teal-50 border-teal-200' : 'bg-white border-gray-200 hover:border-teal-300'}`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${completed ? 'bg-teal-600' : 'bg-gray-100'}`}>
        {completed ? (
          <CheckCircle className="w-5 h-5 text-white" />
        ) : (
          <Icon className="w-5 h-5 text-gray-600" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm mb-1 ${completed ? 'text-teal-700' : 'text-gray-900'}`}>{title}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <a
          href={actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 mt-2 transition-colors"
        >
          {actionLabel}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export function GoogleBusinessProfile() {
  const tips: GBPTipProps[] = [
    {
      icon: MapPin,
      title: 'NAP-Konsistenz prüfen',
      description: `Stellen Sie sicher, dass Name, Adresse und Telefonnummer auf Google Business mit Ihrer Website übereinstimmen: "${BUSINESS_INFO.name}", ${BUSINESS_INFO.address.full}, ${BUSINESS_INFO.phone}`,
      actionLabel: 'Google Business Profil öffnen',
      actionHref: 'https://business.google.com',
      completed: true,
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten aktuell halten',
      description: 'Öffnungszeiten auf Google Business müssen mit der Website übereinstimmen: Di-Fr 09:00-19:00, Sa 08:00-14:00, Mo+So geschlossen.',
      actionLabel: 'Öffnungszeiten bearbeiten',
      actionHref: 'https://business.google.com',
      completed: true,
    },
    {
      icon: Star,
      title: 'Auf Bewertungen antworten',
      description: `Mit ${BUSINESS_INFO.reviews.count}+ Bewertungen bei ${BUSINESS_INFO.reviews.rating} Sternen ist Ihr Profil stark. Antworten Sie auf neue Bewertungen innerhalb von 24-48 Stunden, um das Engagement zu zeigen.`,
      actionLabel: 'Bewertungen verwalten',
      actionHref: BUSINESS_INFO.googleMaps,
    },
    {
      icon: Image,
      title: 'Regelmäßig Fotos hochladen',
      description: 'Laden Sie wöchentlich neue Fotos hoch: Vorher/Nachher-Bilder, Teamfotos, Salon-Atmosphäre. Profile mit Fotos erhalten 42% mehr Routenanfragen.',
      actionLabel: 'Fotos hinzufügen',
      actionHref: 'https://business.google.com',
    },
    {
      icon: MessageSquare,
      title: 'Google Posts nutzen',
      description: 'Veröffentlichen Sie regelmäßig Posts über Angebote, Events oder Neuigkeiten (z.B. Afterwork Spezialcut). Google Posts bleiben 7 Tage sichtbar.',
      actionLabel: 'Post erstellen',
      actionHref: 'https://business.google.com',
    },
    {
      icon: CheckCircle,
      title: 'Dienstleistungen vollständig auflisten',
      description: 'Fügen Sie alle Dienstleistungen mit Preisen hinzu: Damenhaarschnitt, Herrenhaarschnitt, Balayage, Coloration, Kosmetik, Bartpflege.',
      actionLabel: 'Dienstleistungen bearbeiten',
      actionHref: 'https://business.google.com',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <h2 className="font-playfair text-xl font-bold text-gray-900 mb-1">
            Google Business Profil optimieren
          </h2>
          <p className="text-sm text-gray-600">
            Checkliste für maximale lokale Sichtbarkeit in Hamburg Hamm
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {tips.map((tip, index) => (
          <GBPTip key={index} {...tip} />
        ))}
      </div>

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-sm font-semibold text-amber-800 mb-1">Tipp: Bewertungen sammeln</p>
        <p className="text-sm text-amber-700">
          Bitten Sie zufriedene Kunden nach dem Besuch um eine Google-Bewertung. Ein direkter Link erleichtert den Prozess:
        </p>
        <a
          href={BUSINESS_INFO.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900 mt-2 underline transition-colors"
        >
          Ihr Google Business Profil
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
