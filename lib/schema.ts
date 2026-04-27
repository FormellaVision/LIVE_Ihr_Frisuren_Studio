import { BUSINESS_INFO, OPENING_HOURS, TEAM_MEMBERS } from './constants';

const BUSINESS_ID = `${BUSINESS_INFO.website}/#business`;

/**
 * Normalize time strings for Schema.org. Prevents invalid formats like "T09:00".
 * Accepts: "09:00", "T09:00", " 09:00 " -> returns "09:00"
 */
function normalizeTime(value: string) {
  const v = String(value || '').trim();
  return v.startsWith('T') ? v.slice(1) : v;
}

/**
 * Converts relative URLs/paths to absolute URLs for BreadcrumbList.
 */
function toAbsoluteURL(id: string): string {
  const baseUrl = BUSINESS_INFO.website;
  if (!id) return baseUrl;
  if (id.startsWith('http')) return id;
  
  // Handle root or relative paths
  try {
    return new URL(id, baseUrl).toString();
  } catch (e) {
    return id.startsWith('/') ? `${baseUrl}${id}` : `${baseUrl}/${id}`;
  }
}

export function getBrandOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_INFO.website}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    logo: {
      '@type': 'ImageObject',
      url: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1770245111/Ihr-Frisuren-Studio_transparent_obd4aa.png',
      width: 400,
      height: 120,
    },
    sameAs: [
      BUSINESS_INFO.instagramUrl,
      BUSINESS_INFO.googleMaps,
      BUSINESS_INFO.appleMaps,
    ],
  };
}

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
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/q_auto,f_auto/v1773616648/Ihr_Frisuren-Studio_Hamburg-Hamm_Meta_OG_ulwtpc.webp',
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

    // Keep areaServed validator-safe (no Neighborhood)
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
          opens: normalizeTime('09:00'),
          closes: normalizeTime('19:00'),
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
      ratingValue: '4.9',
      reviewCount: '277',
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
      item: toAbsoluteURL(item.url),
    })),
  };
}

export type FAQItem = {
  question: string;
  answer: string;
  bullets?: string[];
};

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.bullets
          ? `${faq.answer} ${faq.bullets.join(', ')}`
          : faq.answer,
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
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Hamburg-Hamm, Hamburg, DE' }],
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
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BUSINESS_INFO.website}/bewertungen#webpage`,
    name: 'Bewertungen | Ihr Frisuren-Studio',
    url: `${BUSINESS_INFO.website}/bewertungen`,
    about: { '@id': BUSINESS_ID },
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
    '@type': 'Service',
    name: 'Afterwork Spezialcut',
    description: `Exklusiver Afterwork-Termin nach Feierabend. Verfügbar ${OPENING_HOURS.afterwork.weekdays} und ${OPENING_HOURS.afterwork.saturday}.`,
    provider: {
      '@type': 'HairSalon',
      '@id': BUSINESS_ID,
    },
    offers: {
      '@type': 'Offer',
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
      opens: normalizeTime('09:00'),
      closes: normalizeTime('19:00'),
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: normalizeTime('08:00'),
      closes: normalizeTime('14:00'),
    },
  ];
}

// DEFAULT_FAQS + SERVICE_FAQS bleiben unverändert (deine Inhalte)
export const DEFAULT_FAQS = [
  {
    question: 'Wo befindet sich Ihr Frisuren-Studio in Hamburg Hamm?',
    answer: `Ihr Frisuren-Studio befindet sich in der ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}-${BUSINESS_INFO.address.district}. Der Salon ist ideal erreichbar mit der U-Bahn U2 oder U4 bis Haltestelle Burgstraße – von dort nur 5 Minuten zu Fuß entlang der Hammer Landstraße. Wer mit dem Bus kommt, nutzt die Linien 25, 130, 160, 261, 609 oder 610. Parkplätze sind in der unmittelbaren Umgebung der Hammer Landstraße verfügbar, meist kostenlos. Kunden aus Borgfelde (20535) erreichen uns in unter 10 Minuten.`,
    bullets: [
      'U-Bahn U2/U4 Haltestelle Burgstraße – nur 5 Minuten zu Fuß',
      'Buslinien 25, 130, 160, 261, 609 und 610 in der Nähe',
      'Parkplätze in der unmittelbaren Umgebung vorhanden',
    ],
  },
  {
    question: 'Was kostet ein Damenhaarschnitt bei Ihr Frisuren-Studio?',
    answer:
      'Ein professioneller Damenhaarschnitt (Waschen, Schneiden & Föhnen inkl. Festiger und Spray) kostet bei uns ab 43€ für kurzes Haar, ab 47€ für mittellanges und ab 49€ für langes Haar. Wer es schnell braucht, wählt den Cut & Go (nur Schneiden, ohne Waschen) ab 33€. Für besondere Anlässe wie Hochzeiten oder Events bieten wir Hochsteckfrisuren ab 55€ und Brautstyling auf Anfrage. Alle Preise sind transparent – keine versteckten Aufschläge.',
  },
  {
    question: 'Bietet Ihr Frisuren-Studio auch Balayage in Hamburg Hamm an?',
    answer:
      'Ja, als spezialisierter Friseur in Hamburg Hamm bieten wir professionelle Balayage-Behandlungen ab 179€ an. Das Paket beinhaltet Balayage, Veredelung mit hochwertigen Pflegeprodukten, Schnitt sowie alle Styling- und Finishprodukte. Unsere Coloristin Nassrin Karimi ist zertifizierte Balayage-Expertin mit langjähriger Spezialisierung auf natürliche Farbverläufe und moderne Färbetechniken. Wir verwenden Olaplex zum Schutz der Haarstruktur während des gesamten Färbeprozesses. Eine persönliche Farbberatung vor dem Termin ist selbstverständlich inklusive.',
  },
  {
    question: 'Wie kann ich einen Termin buchen?',
    answer: `Sie können auf drei Wegen einen Termin vereinbaren: telefonisch unter ${BUSINESS_INFO.phone}, per WhatsApp an dieselbe Nummer, oder persönlich im Salon in der Hammer Landstraße 4. Für Standardtermine reicht in der Regel ein Anruf am selben Tag. Für Balayage, Colorationen oder Hochsteckfrisuren empfehlen wir, mindestens 2-3 Tage im Voraus zu buchen. Afterwork-Termine nach 19:00 Uhr (Di-Fr) und ab 14:00 Uhr (Sa) bitte immer telefonisch anfragen – diese sind begrenzt verfügbar und werden schnell gebucht.`,
  },
  {
    question: 'Was zeichnet Ihr Frisuren-Studio in Hamburg Hamm aus?',
    answer: `Ihr Frisuren-Studio hebt sich durch die Kombination aus Meisterbetrieb-Qualität, echter Erfahrung und persönlichem Service ab. Inhaber Serbay Eskici ist ausgebildeter Friseurmeister und führt den Salon seit ${BUSINESS_INFO.founded} in Hamburg-Hamm. Das Team aus sieben Fachkräften – darunter zwei Meisterinnen und spezialisierte Gesellinnen – deckt das gesamte Spektrum von Damenschnitten über Balayage bis Kosmetik ab. ${BUSINESS_INFO.reviews.count}+ Kunden bewerten uns mit ${BUSINESS_INFO.reviews.rating} Sternen auf Google. Termine nach Feierabend und mehrsprachige Beratung machen uns einzigartig im Stadtteil.`,
    bullets: [
      `Zertifizierter Meisterbetrieb seit ${BUSINESS_INFO.founded}`,
      `${BUSINESS_INFO.reviews.rating} Sterne bei ${BUSINESS_INFO.reviews.count}+ Google-Bewertungen`,
      'Mehrsprachiges Team: Deutsch, Englisch, Türkisch, Persisch',
      'Spezialisierung auf Haarschnitte, Balayage und Kosmetik',
    ],
  },
  {
    question: 'Welche Sprachen sprechen Sie?',
    answer:
      'Unser Team in Hamburg-Hamm bietet Beratung auf Deutsch, Englisch, Türkisch und Persisch. Inhaber Serbay Eskici spricht Deutsch und Türkisch, Nassrin Karimi berät auf Persisch und Englisch, Mehtap Aydin auf Türkisch und Geansever Osman auf Rumänisch und Türkisch. Damit sind wir einer der wenigen Friseursalons in Hamburg, der Kunden aus vier Sprachräumen ohne Sprachbarriere betreuen kann – mit echtem Fachwissen und individueller Beratung statt Standard-Übersetzungen.',
  },
  {
    question: 'Was ist der Afterwork Spezialcut?',
    answer: `Der Afterwork Spezialcut ist unser exklusiver Service für Menschen, die tagsüber arbeiten und abends flexible Termine brauchen. Verfügbar Dienstag bis Freitag ab 19:00 Uhr und samstags ab 14:00 Uhr – mit einem Aufschlag von nur ${OPENING_HOURS.afterwork.surcharge} auf den regulären Preis. Der Service bietet eine 1-zu-1 Behandlung in ruhiger, persönlicher Atmosphäre, da der Salon nach den regulären Öffnungszeiten exklusiv für Sie geöffnet ist. Terminvereinbarung ausschließlich telefonisch unter ${BUSINESS_INFO.phone}.`,
    bullets: [
      `Verfügbar ${OPENING_HOURS.afterwork.weekdays}`,
      `Samstags ${OPENING_HOURS.afterwork.saturday}`,
      `Regulärer Preis ${OPENING_HOURS.afterwork.surcharge} Aufschlag`,
      '1-zu-1 Behandlung in ruhiger, persönlicher Atmosphäre',
    ],
  },
  {
    question: 'Bedient ihr auch Kunden aus Borgfelde und Hamburg Mitte?',
    answer: `Ja, selbstverständlich. Unser Frisuren-Studio in der ${BUSINESS_INFO.address.street} (PLZ 20537) ist optimal erreichbar aus Borgfelde (20535), Hamburg Mitte, Horn und St. Georg. Aus Borgfelde sind es mit der U2 oder U4 ab Berliner Tor nur zwei Stationen bis Burgstraße – unter 10 Minuten Gesamtweg. Vom Hamburger Hauptbahnhof (Hamburg Mitte) dauert die Fahrt ebenfalls ca. 10 Minuten. Viele unserer Stammkunden kommen gezielt aus diesen Stadtteilen, weil Meisterbetrieb-Qualität mit ${BUSINESS_INFO.reviews.count}+ Bewertungen in der Nähe schwer zu finden ist.`,
  },
];

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_INFO.website}/#website`,
    url: BUSINESS_INFO.website,
    name: BUSINESS_INFO.name,
    description: 'Premium Friseur in Hamburg Hamm – Meisterbetrieb seit 2004. Damen, Herren, Balayage & Kosmetik.',
    publisher: {
      '@id': `${BUSINESS_INFO.website}/#business`,
    },
    inLanguage: 'de-DE',
  };
}

export const SERVICE_FAQS = {
  damen: [
    {
      question: 'Was kostet ein Damenhaarschnitt in Hamburg Hamm?',
      answer:
        'Bei Ihr Frisuren-Studio in Hamburg Hamm beginnen Damenhaarschnitte ab 33€ (Cut & Go) bzw. ab 43€ (Waschen, Schneiden, Föhnen). Balayage ist ab 179€ erhältlich.',
    },
    {
      question: 'Bieten Sie Balayage für Damen an?',
      answer:
        'Ja, wir sind Balayage-Spezialisten in Hamburg Hamm. Das Komplettpaket (Balayage inkl. Veredelung & Schnitt) kostet ab 179€. Unsere Coloristinnen beraten Sie individuell.',
    },
    {
      question: 'Wie lange dauert ein Balayage-Termin?',
      answer:
        'Ein Balayage-Termin dauert je nach Haarlänge und gewünschtem Ergebnis ca. 3-4 Stunden. Wir empfehlen, ausreichend Zeit einzuplanen für das beste Ergebnis.',
    },
    {
      question: 'Welche Pflegeprodukte verwenden Sie für Damen?',
      answer:
        'Wir verwenden hochwertige Produkte wie Olaplex für die Veredelung und Pflegebehandlungen. Alle Produkte sind auf verschiedene Haartypen abgestimmt.',
    },
    {
      question: 'Ist eine Terminbuchung beim Damenfriseur Hamburg Hamm nötig?',
      answer:
        'Wir empfehlen eine Terminbuchung per Telefon (040 2509029) oder WhatsApp, besonders für Balayage und Colorationen. Spontanbesuche sind nach Verfügbarkeit möglich.',
    },
    {
      question: 'Macht ihr auch Kosmetikbehandlungen für Damen in Hamburg Hamm?',
      answer:
        'Ja! Über unsere Haarleistungen hinaus bieten wir Gesichtsbehandlungen, Maniküre und medizinische Fußpflege an. Bitte für Kosmetiktermine telefonisch unter 040 2509029 anfragen.',
    },
  ],
  herren: [
    {
      question: "Was kostet ein Herrenhaarschnitt in Hamburg-Hamm?",
      answer: "Ein Herrenhaarschnitt bei Ihr Frisuren-Studio in Hamburg-Hamm kostet ab 19 €. Der Preis hängt von Technik und Aufwand ab: Maschinenschnitt, Trockenschnitt und Designerschnitte variieren im Preis. Alle Preise sind transparent auf der Website einsehbar. Das Paket Gentlemen umfasst Waschen, Schneiden und Föhnen sowie Bartpflege als Komplettpaket.",
    },
    {
      question: "Bietet der Herrenfriseur in Hamburg-Hamm auch Bartpflege an?",
      answer: "Ja, Ihr Frisuren-Studio in Hamburg-Hamm bietet professionelle Bartpflege an: Bart trimmen, Bart schneiden und das vollständige Paket Gentlemen mit Rasur. Das Team ist spezialisiert auf moderne Herrenschnitte — vom klassischen Kurzhaarschnitt über Fade Cuts bis zu Designerhaarschnitten. Afterwork-Termine bis 19 Uhr ermöglichen den Besuch auch nach der Arbeit.",
    },
    {
      question: "Welche Herrenfriseur-Leistungen gibt es in Hamburg-Hamm?",
      answer: "Das Angebot für Herren bei Ihr Frisuren-Studio in Hamburg-Hamm umfasst: Maschinenschnitt, Trockenhaarschnitt, Designerhaarschnitt, Waschen/Schneiden/Föhnen, Strähnen und Colorationen für Herren, Bart trimmen, Bart schneiden sowie das Paket Gentlemen. Fade Cuts und moderne Schnitte gehören ebenso zum Repertoire. Alle Leistungen werden von ausgebildeten Friseurmeistern durchgeführt.",
    },
    {
      question: "Hat der Herrenfriseur Hamburg-Hamm Afterwork-Termine?",
      answer: "Ja, Ihr Frisuren-Studio bietet Afterwork-Termine speziell für Berufstätige an. Dienstags bis freitags ist das Studio bis 19:00 Uhr geöffnet. Termine können online oder telefonisch unter 040 2509029 gebucht werden. Das Studio liegt an der Hammer Landstraße 4 in Hamburg-Hamm — gut erreichbar aus Hamburg-Mitte, Borgfelde, Horn und Rothenburgsort.",
    },
    {
      question: "Ist eine Terminvereinbarung beim Herrenfriseur Hamburg-Hamm nötig?",
      answer: "Termine werden empfohlen, sind aber nicht zwingend erforderlich. Spontanbesuche sind möglich, je nach Auslastung. Für eine garantierte Wartezeit empfiehlt sich die Online-Buchung über die Website. Kurzfristige Termine sind oft noch am selben oder nächsten Tag verfügbar. Das Studio hat über 277 Google-Bewertungen bei 4,9 Sternen — Kunden schätzen besonders die Flexibilität und Freundlichkeit des Teams.",
    },
    {
      question: "Welcher Herrenfriseur in Hamburg-Hamm hat die besten Bewertungen?",
      answer: "Ihr Frisuren-Studio an der Hammer Landstraße 4 in Hamburg-Hamm ist der meistbewertete Friseur in der Umgebung: über 277 Google-Bewertungen mit 4,9 Sternen Durchschnitt. Als Meisterbetrieb seit 2004 kombiniert das Studio handwerkliche Qualität mit modernen Schnitttechniken. Das mehrsprachige Team spricht Deutsch, Englisch, Türkisch, Persisch und Rumänisch.",
    },
  ],
  balayage: [
    {
      question: 'Was ist der Unterschied zwischen Balayage und Foliensträhnen?',
      answer:
        'Bei Balayage wird die Farbe frei mit dem Pinsel aufgetragen (handgemalt), was weichere, natürlichere Übergänge erzeugt. Foliensträhnen geben präzisere Helligkeitspunkte. Wir beraten Sie gerne, welche Technik zu Ihnen passt.',
    },
    {
      question: 'Wie lange hält Balayage?',
      answer:
        'Balayage hält in der Regel 3-6 Monate, da es natürlich herauswächst ohne harte Ansätze. Das ist einer der großen Vorteile: weniger häufige Terminbesuche als bei klassischen Colorationen.',
    },
    {
      question: 'Was kostet Balayage in Hamburg Hamm?',
      answer:
        'Balayage inkl. Veredelung & Schnitt kostet bei uns ab 179€. Nur Balayage (ohne Schnitt) ab 129€. Ombre/Sombre ab 159€. Der genaue Preis hängt von der Haarlänge und dem gewünschten Ergebnis ab.',
    },
    {
      question: 'Verwenden Sie Olaplex bei Balayage?',
      answer:
        'Ja, wir verwenden hochwertige Pflegeprodukte inklusive Olaplex-Behandlungen, um das Haar während und nach dem Färbeprozess optimal zu schützen und zu kräftigen.',
    },
    {
      question: 'Ist Balayage schädlich für die Haare?',
      answer:
        'Bei uns nicht! Wir verwenden Olaplex und hochwertige Pflegeprodukte, um Ihr Haar während des gesamten Färbeprozesses zu schützen. Unsere erfahrenen Coloristinnen achten auf die Haargesundheit.',
    },
    {
      question: 'Kann ich Balayage auch bei dunklen Haaren machen lassen?',
      answer:
        'Absolut! Balayage funktioniert bei allen Haarfarben. Bei sehr dunklem Haar sind eventuell mehrere Sitzungen nötig, um das gewünschte Ergebnis schonend zu erreichen. Wir beraten Sie im Vorfeld ausführlich.',
    },
  ],
  haereFaerben: [
    {
      question: 'Was kostet Haare färben in Hamburg Hamm?',
      answer:
        'Ansatz färben gibt es bei uns ab 49€, Längen/Spitzen färben ab 29€, Coloration komplett inkl. Schnitt ab 87€, Foliensträhnen ab 85€ und Balayage inkl. Veredelung & Schnitt ab 179€.',
    },
    {
      question: 'Wie lange dauert eine Coloration beim Friseur?',
      answer:
        'Eine einfache Ansatzfärbung dauert ca. 1-1,5 Stunden. Eine komplette Coloration mit Schnitt ca. 2 Stunden. Balayage-Behandlungen benötigen ca. 3-4 Stunden je nach Haarlänge und gewünschtem Ergebnis.',
    },
    {
      question: 'Welche Färbetechniken bieten Sie in Hamburg Hamm an?',
      answer:
        'Wir bieten das komplette Spektrum: Ansatz-/Komplett-Coloration, Foliensträhnen, Balayage, Ombre/Sombre sowie Herren-Coloration und Graue-Haare-Camouflage. Unsere Coloristinnen beraten Sie individuell.',
    },
    {
      question: 'Wie pflege ich gefärbte Haare richtig?',
      answer:
        'Verwenden Sie sulfatfreies Shampoo, waschen Sie Ihr Haar nicht zu heiß und nutzen Sie regelmäßig eine Farbschutz-Kur. Wir empfehlen zudem alle 6-8 Wochen eine Auffrischung. Gerne beraten wir Sie zu passenden Pflegeprodukten.',
    },
    {
      question: 'Ist Haare färben schädlich?',
      answer:
        'Mit professionellen Produkten und erfahrenen Stylisten ist das Risiko minimal. Wir verwenden Olaplex-Behandlungen zum Schutz der Haarstruktur und hochwertige Colorationen, die das Haar schonen.',
    },
  ],
};