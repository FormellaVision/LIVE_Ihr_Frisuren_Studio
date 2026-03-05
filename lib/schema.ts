import { BUSINESS_INFO, OPENING_HOURS, TEAM_MEMBERS, REVIEWS } from './constants';

const BUSINESS_ID = `${BUSINESS_INFO.website}/#business`;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': BUSINESS_ID,
    name: BUSINESS_INFO.name,
    alternateName: 'Ihr Frisuren-Studio Hamburg Hamm',
    url: BUSINESS_INFO.website,
    logo: {
      '@type': 'ImageObject',
      url: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1770245111/Ihr-Frisuren-Studio_transparent_obd4aa.png',
      width: 400,
      height: 120,
    },
    image: [
      'https://res.cloudinary.com/dqkld61zu/image/upload/v1770218177/Ihr_Frisuren-Studio_Au%C3%9Fenansicht_oyydcb.webp',
    ],
    description:
      'Premium Friseur in Hamburg Hamm - Meisterbetrieb seit 2004. Spezialisiert auf Damenhaarschnitte, Herrenhaarschnitte, Balayage, Colorationen und Kosmetik.',
    telephone: BUSINESS_INFO.phoneInternational,
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
    openingHoursSpecification: getOpeningHoursSpecification(),
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Hamburg-Hamm, Hamburg, DE' },
      { '@type': 'AdministrativeArea', name: 'Borgfelde, Hamburg, DE' },
      { '@type': 'AdministrativeArea', name: 'Hamburg Mitte, Hamburg, DE' },
      { '@type': 'AdministrativeArea', name: 'Horn, Hamburg, DE' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phoneInternational,
        contactType: 'customer service',
        availableLanguage: ['German', 'Turkish', 'Persian', 'English'],
        areaServed: 'DE',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phoneInternational,
        contactType: 'customer service',
        availableLanguage: ['German', 'Turkish', 'Persian', 'English'],
        description: 'WhatsApp verfügbar',
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
    sameAs: [
      BUSINESS_INFO.instagramUrl,
      BUSINESS_INFO.googleMaps,
      BUSINESS_INFO.appleMaps,
    ],
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

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
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
      '@type': 'HairSalon',
      '@id': BUSINESS_ID,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phoneInternational,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: 'DE',
      },
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Hamburg-Hamm, Hamburg, DE' },
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
        seller: {
          '@type': 'HairSalon',
          name: BUSINESS_INFO.name,
          url: BUSINESS_INFO.website,
        },
      })),
    },
    url,
  };
}

export function getReviewSchema() {
  const staticDates = [
    '2025-12-15',
    '2025-12-01',
    '2025-11-10',
    '2025-10-15',
    '2025-09-01',
    '2025-08-01',
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': BUSINESS_ID,
    name: BUSINESS_INFO.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(BUSINESS_INFO.reviews.rating),
      reviewCount: String(BUSINESS_INFO.reviews.count),
      bestRating: '5',
      worstRating: '1',
    },
    review: REVIEWS.map((review, index) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.text,
      datePublished: staticDates[index] || '2025-01-01',
    })),
  };
}

export function getPersonSchemas() {
  return TEAM_MEMBERS.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    description: member.description,
    knowsLanguage: member.languages,
    worksFor: {
      '@type': 'HairSalon',
      '@id': BUSINESS_ID,
      name: BUSINESS_INFO.name,
    },
    affiliation: {
      '@type': 'HairSalon',
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.website,
    },
  }));
}

export function getAfterworkOfferSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Afterwork Spezialcut',
    description: `Exklusiver Afterwork-Termin nach Feierabend. Verfügbar ${OPENING_HOURS.afterwork.weekdays} und ${OPENING_HOURS.afterwork.saturday}.`,
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      description: `${OPENING_HOURS.afterwork.surcharge} Aufschlag auf den regulären Preis`,
    },
    seller: {
      '@type': 'HairSalon',
      '@id': BUSINESS_ID,
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.website,
      telephone: BUSINESS_INFO.phoneInternational,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: 'DE',
      },
    },
    eligibleRegion: {
      '@type': 'City',
      name: 'Hamburg',
    },
    availableAtOrFrom: {
      '@type': 'Place',
      name: BUSINESS_INFO.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: 'DE',
      },
    },
  };
}

export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': BUSINESS_ID,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phoneInternational,
    email: BUSINESS_INFO.email,
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
    openingHoursSpecification: getOpeningHoursSpecification(),
    hasMap: BUSINESS_INFO.googleMaps,
    sameAs: [
      BUSINESS_INFO.instagramUrl,
      BUSINESS_INFO.googleMaps,
      BUSINESS_INFO.appleMaps,
    ],
  };
}

function getOpeningHoursSpecification() {
  return [
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
  ];
}

export const DEFAULT_FAQS = [
  {
    question: 'Wo befindet sich Ihr Frisuren-Studio in Hamburg Hamm?',
    answer: `Ihr Frisuren-Studio befindet sich in der ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}-${BUSINESS_INFO.address.district}. Gut erreichbar mit U-Bahn U2/U4 Haltestelle Burgstraße (5 Min. zu Fuß) und Buslinien 25, 130, 160, 261, 609, 610. Parkplätze sind in der Nähe vorhanden.`,
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
    answer: `Sie können telefonisch unter ${BUSINESS_INFO.phone}, per WhatsApp unter ${BUSINESS_INFO.phone} oder persönlich im Salon einen Termin vereinbaren. Für Afterwork-Termine nach 19:00 Uhr rufen Sie uns bitte direkt an.`,
  },
  {
    question: 'Was zeichnet Ihr Frisuren-Studio in Hamburg Hamm aus?',
    answer: `Als zertifizierter Meisterbetrieb seit ${BUSINESS_INFO.founded} bieten wir höchste Qualität in Hamburg Hamm. Mit über ${BUSINESS_INFO.reviews.count} Google-Bewertungen (${BUSINESS_INFO.reviews.rating} Sterne Durchschnitt) und einem mehrsprachigen Team (Deutsch, Englisch, Türkisch, Persisch) ist Ihr Frisuren-Studio ein erfahrener Partner für Haarschnitte, Balayage und Kosmetik.`,
  },
  {
    question: 'Welche Sprachen sprechen Sie?',
    answer:
      'Unser mehrsprachiges Team bietet Beratung in Deutsch, Englisch, Türkisch und Persisch. So können wir Kunden aus verschiedenen Kulturen optimal beraten.',
  },
  {
    question: 'Was ist der Afterwork Spezialcut?',
    answer: `Der Afterwork Spezialcut ist unser Service nach Feierabend. Verfügbar ${OPENING_HOURS.afterwork.weekdays} und ${OPENING_HOURS.afterwork.saturday}. Regulärer Preis ${OPENING_HOURS.afterwork.surcharge} Aufschlag.`,
  },
  {
    question: 'Bedient ihr auch Kunden aus Borgfelde und Hamburg Mitte?',
    answer: `Ja, selbstverständlich! Unser Frisuren-Studio in der ${BUSINESS_INFO.address.street} (PLZ 20537) ist gut erreichbar aus Borgfelde, Horn und Hamburg Mitte. Mit der U2/U4 Haltestelle Burgstraße sind wir nur wenige Minuten entfernt.`,
  },
];

export const SERVICE_FAQS = {
  damen: [
    {
      question: 'Was kostet ein Damenhaarschnitt in Hamburg Hamm?',
      answer: 'Damenhaarschnitte (Waschen, Schneiden & Föhnen) kosten ab 43€ für kurzes, ab 47€ für mittellanges und ab 49€ für langes Haar. Trockenherrschnitt (Cut & Go) ab 33€.',
    },
    {
      question: 'Bieten Sie Balayage für Damen an?',
      answer: 'Ja, wir sind Balayage-Spezialisten in Hamburg Hamm. Das Komplettpaket (Balayage inkl. Veredelung & Schnitt) kostet ab 179€. Unsere Coloristinnen beraten Sie individuell.',
    },
    {
      question: 'Wie lange dauert ein Balayage-Termin?',
      answer: 'Ein Balayage-Termin dauert je nach Haarlänge und gewünschtem Ergebnis ca. 3-4 Stunden. Wir empfehlen, ausreichend Zeit einzuplanen für das beste Ergebnis.',
    },
    {
      question: 'Welche Pflegeprodukte verwenden Sie für Damen?',
      answer: 'Wir verwenden hochwertige Produkte wie Olaplex für die Veredelung und Pflegebehandlungen. Alle Produkte sind auf verschiedene Haartypen abgestimmt.',
    },
  ],
  herren: [
    {
      question: 'Was kostet ein Herrenhaarschnitt in Hamburg Hamm?',
      answer: 'Herrenhaarschnitte beginnen bei 19€ (Maschinenschnitt). Der Design-Schnitt kostet 34€, Waschen, Schneiden & Föhnen 33€. Das Gentleman-Paket (Schnitt + Bart + Augenbrauen) nur 49€.',
    },
    {
      question: 'Bieten Sie Bart-Styling an?',
      answer: 'Ja, wir sind Bartpflege-Spezialisten. Bart-Styling ab 8€, Bartmodellage ab 15€. Unser Inhaber Serbay Eskici ist Herrenspezialist mit über 20 Jahren Erfahrung.',
    },
    {
      question: 'Was beinhaltet das Gentleman-Paket?',
      answer: 'Das Gentleman-Paket (49€) umfasst einen Design-Schnitt mit Waschen & Styling, professionelle Bartmodellage und Augenbrauen-Korrektur. Das perfekte Rundum-Paket für den modernen Mann.',
    },
    {
      question: 'Muss ich einen Termin vereinbaren?',
      answer: `Terminvereinbarung ist empfohlen, um Wartezeiten zu vermeiden. Rufen Sie uns unter ${BUSINESS_INFO.phone} an oder schreiben Sie per WhatsApp. Wir bieten auch Afterwork-Termine nach 19:00 Uhr an.`,
    },
    {
      question: 'Bieten Sie Afterwork-Termine für Herren an?',
      answer: `Ja! Unser Afterwork-Service ist ideal für Berufstätige. Verfügbar ${OPENING_HOURS.afterwork.weekdays} und ${OPENING_HOURS.afterwork.saturday}. Regulärer Preis ${OPENING_HOURS.afterwork.surcharge} Aufschlag. Rufen Sie uns an unter ${BUSINESS_INFO.phone}.`,
    },
    {
      question: 'Was kostet Bartpflege in Hamburg Hamm?',
      answer: 'Bart-Styling gibt es bei uns ab 8€, eine professionelle Bartmodellage ab 15€. Im beliebten Gentleman-Paket (49€) ist die Bartmodellage bereits inklusive.',
    },
  ],
  balayage: [
    {
      question: 'Was ist der Unterschied zwischen Balayage und Foliensträhnen?',
      answer: 'Bei Balayage wird die Farbe frei mit dem Pinsel aufgetragen (handgemalt), was weichere, natürlichere Übergänge erzeugt. Foliensträhnen geben präzisere Helligkeitspunkte. Wir beraten Sie gerne, welche Technik zu Ihnen passt.',
    },
    {
      question: 'Wie lange hält Balayage?',
      answer: 'Balayage hält in der Regel 3-6 Monate, da es natürlich herauswächst ohne harte Ansätze. Das ist einer der großen Vorteile: weniger häufige Terminbesuche als bei klassischen Colorationen.',
    },
    {
      question: 'Was kostet Balayage in Hamburg Hamm?',
      answer: 'Balayage inkl. Veredelung & Schnitt kostet bei uns ab 179€. Nur Balayage (ohne Schnitt) ab 129€. Ombre/Sombre ab 159€. Der genaue Preis hängt von der Haarlänge und dem gewünschten Ergebnis ab.',
    },
    {
      question: 'Verwenden Sie Olaplex bei Balayage?',
      answer: 'Ja, wir verwenden hochwertige Pflegeprodukte inklusive Olaplex-Behandlungen, um das Haar während und nach dem Färbeprozess optimal zu schützen und zu kräftigen.',
    },
    {
      question: 'Ist Balayage schädlich für die Haare?',
      answer: 'Bei uns nicht! Wir verwenden Olaplex und hochwertige Pflegeprodukte, um Ihr Haar während des gesamten Färbeprozesses zu schützen. Unsere erfahrenen Coloristinnen achten auf die Haargesundheit.',
    },
    {
      question: 'Kann ich Balayage auch bei dunklen Haaren machen lassen?',
      answer: 'Absolut! Balayage funktioniert bei allen Haarfarben. Bei sehr dunklem Haar sind eventuell mehrere Sitzungen nötig, um das gewünschte Ergebnis schonend zu erreichen. Wir beraten Sie im Vorfeld ausführlich.',
    },
  ],
  haereFaerben: [
    {
      question: 'Was kostet Haare färben in Hamburg Hamm?',
      answer: 'Ansatz färben gibt es bei uns ab 49€, Längen/Spitzen färben ab 29€, Coloration komplett inkl. Schnitt ab 87€, Foliensträhnen ab 85€ und Balayage inkl. Veredelung & Schnitt ab 179€.',
    },
    {
      question: 'Wie lange dauert eine Coloration beim Friseur?',
      answer: 'Eine einfache Ansatzfärbung dauert ca. 1-1,5 Stunden. Eine komplette Coloration mit Schnitt ca. 2 Stunden. Balayage-Behandlungen benötigen ca. 3-4 Stunden je nach Haarlänge und gewünschtem Ergebnis.',
    },
    {
      question: 'Welche Färbetechniken bieten Sie in Hamburg Hamm an?',
      answer: 'Wir bieten das komplette Spektrum: Ansatz-/Komplett-Coloration, Foliensträhnen, Balayage, Ombre/Sombre sowie Herren-Coloration und Graue-Haare-Camouflage. Unsere Coloristinnen beraten Sie individuell.',
    },
    {
      question: 'Wie pflege ich gefärbte Haare richtig?',
      answer: 'Verwenden Sie sulfatfreies Shampoo, waschen Sie Ihr Haar nicht zu heiß und nutzen Sie regelmäßig eine Farbschutz-Kur. Wir empfehlen zudem alle 6-8 Wochen eine Auffrischung. Gerne beraten wir Sie zu passenden Pflegeprodukten.',
    },
    {
      question: 'Ist Haare färben schädlich?',
      answer: 'Mit professionellen Produkten und erfahrenen Stylisten ist das Risiko minimal. Wir verwenden Olaplex-Behandlungen zum Schutz der Haarstruktur und hochwertige Colorationen, die das Haar schonen.',
    },
  ],
};
