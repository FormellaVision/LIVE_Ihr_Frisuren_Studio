import { BUSINESS_INFO, OPENING_HOURS } from './constants';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${BUSINESS_INFO.website}/#organization`,
    name: BUSINESS_INFO.name,
    alternateName: 'Ihr Frisuren-Studio Hamburg Hamm',
    url: BUSINESS_INFO.website,
    logo: {
      '@type': 'ImageObject',
      url: `${BUSINESS_INFO.website}/logo.png`,
      width: 400,
      height: 120,
    },
    image: `${BUSINESS_INFO.website}/og-image.jpg`,
    description:
      'Premium Friseur in Hamburg Hamm - Meisterbetrieb seit 2004. Spezialisiert auf Damenhaarschnitte, Herrenhaarschnitte, Balayage, Colorationen und Kosmetik.',
    telephone: BUSINESS_INFO.phoneFormatted,
    email: BUSINESS_INFO.email,
    priceRange: '€€',
    paymentAccepted: 'Cash, EC-Karte, Kreditkarte',
    currenciesAccepted: 'EUR',
    foundingDate: BUSINESS_INFO.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.district,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      {
        '@type': 'Neighborhood',
        name: 'Hamm',
        containedInPlace: { '@type': 'City', name: 'Hamburg' },
      },
      {
        '@type': 'Neighborhood',
        name: 'Horn',
        containedInPlace: { '@type': 'City', name: 'Hamburg' },
      },
      {
        '@type': 'Neighborhood',
        name: 'Rothenburgsort',
        containedInPlace: { '@type': 'City', name: 'Hamburg' },
      },
      {
        '@type': 'Neighborhood',
        name: 'St. Georg',
        containedInPlace: { '@type': 'City', name: 'Hamburg' },
      },
      {
        '@type': 'Neighborhood',
        name: 'Borgfelde',
        containedInPlace: { '@type': 'City', name: 'Hamburg' },
      },
    ],
    hasMap: BUSINESS_INFO.googleMaps,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(BUSINESS_INFO.reviews.rating),
      reviewCount: String(BUSINESS_INFO.reviews.count),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [BUSINESS_INFO.instagramUrl, BUSINESS_INFO.googleMaps, BUSINESS_INFO.appleMaps],
    founder: {
      '@type': 'Person',
      name: BUSINESS_INFO.owner,
      jobTitle: 'Friseurmeister',
    },
    knowsAbout: [
      'Damenhaarschnitte',
      'Herrenhaarschnitte',
      'Balayage',
      'Coloration',
      'Dauerwelle',
      'Kosmetik',
      'Gesichtsbehandlung',
      'Maniküre',
      'Medizinische Fußpflege',
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Öffentliche Verkehrsmittel',
        value: 'U2, U4 Haltestelle Burgstraße - 5 Minuten zu Fuß',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Busverbindungen',
        value: 'Buslinien 25, 130, 160, 261, 609, 610',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parkplätze',
        value: 'Parkplätze in der Nähe verfügbar',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mehrsprachiges Team',
        value: 'Beratung in Deutsch, Englisch, Türkisch, Persisch',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Afterwork Service',
        value: 'Termine nach 19:00 Uhr möglich',
      },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Meisterbetrieb',
      description: 'Zertifizierter Friseurmeisterbetrieb seit 2004',
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS_INFO.website}/#localbusiness`,
    name: BUSINESS_INFO.fullName,
    image: `${BUSINESS_INFO.website}/og-image.jpg`,
    telephone: BUSINESS_INFO.phoneFormatted,
    email: BUSINESS_INFO.email,
    url: BUSINESS_INFO.website,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    priceRange: '€€',
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(
  serviceType: string,
  name: string,
  description: string,
  url: string,
  offers: { name: string; description: string; price: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name,
    description,
    provider: {
      '@id': `${BUSINESS_INFO.website}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      {
        '@type': 'Neighborhood',
        name: 'Hamm',
        containedInPlace: { '@type': 'City', name: 'Hamburg' },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceType} Leistungen`,
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description,
        },
        price: offer.price.replace('€', '').replace('ab ', '').trim(),
        priceCurrency: 'EUR',
      })),
    },
    url,
  };
}

export const DEFAULT_FAQS = [
  {
    question: 'Wo befindet sich Ihr Frisuren-Studio in Hamburg Hamm?',
    answer: `Ihr Frisuren-Studio befindet sich in der ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}-${BUSINESS_INFO.address.district}. Perfekt erreichbar mit U-Bahn U2/U4 Haltestelle Burgstraße (5 Min. zu Fuß) und Buslinien 25, 130, 160, 261, 609, 610. Parkplätze sind in der Nähe vorhanden.`,
  },
  {
    question: 'Was kostet ein Damenhaarschnitt bei Ihr Frisuren-Studio?',
    answer:
      'Ein professioneller Damenhaarschnitt (Waschen, Schneiden & Föhnen inkl. Festiger und Spray) kostet bei uns ab 43€ für kurzes Haar, ab 47€ für mittellanges und ab 49€ für langes Haar.',
  },
  {
    question: 'Bietet Ihr Frisuren-Studio auch Balayage in Hamburg Hamm an?',
    answer:
      'Ja, als spezialisierter Friseur in Hamburg Hamm bieten wir professionelle Balayage-Behandlungen ab 179€ an. Das Paket beinhaltet Balayage, Veredelung, Schnitt sowie alle Styling- und Finishprodukte.',
  },
  {
    question: 'Wie kann ich einen Termin buchen?',
    answer: `Sie können telefonisch unter ${BUSINESS_INFO.phone}, per WhatsApp unter ${BUSINESS_INFO.phone} oder über unsere Online-Buchungsseite einen Termin vereinbaren. Für Afterwork-Termine nach 19:00 Uhr rufen Sie uns bitte direkt an.`,
  },
  {
    question: 'Warum ist Ihr Frisuren-Studio der beste Friseur in Hamburg Hamm?',
    answer: `Als zertifizierter Meisterbetrieb seit ${BUSINESS_INFO.founded} bieten wir höchste Qualität in Hamburg Hamm. Mit über ${BUSINESS_INFO.reviews.count} Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne Durchschnitt) und einem mehrsprachigen Team (Deutsch, Englisch, Türkisch, Persisch) sind wir der vertrauensvolle Partner für Premium-Haarschnitte, Balayage und Kosmetik.`,
  },
  {
    question: 'Welche Sprachen sprechen Sie?',
    answer:
      'Unser mehrsprachiges Team bietet Beratung in Deutsch, Englisch, Türkisch und Persisch. So können wir Kunden aus verschiedenen Kulturen optimal beraten.',
  },
  {
    question: 'Was ist der Afterwork Spezialcut?',
    answer: `Der Afterwork Spezialcut ist unser exklusiver Service nach Feierabend. Genießen Sie eine private 1-zu-1 Behandlung in entspannter Atmosphäre. Verfügbar ${OPENING_HOURS.afterwork.weekdays} und ${OPENING_HOURS.afterwork.saturday}. Regulärer Preis ${OPENING_HOURS.afterwork.surcharge} Aufschlag.`,
  },
];
