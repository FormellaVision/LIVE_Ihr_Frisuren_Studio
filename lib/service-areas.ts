import { BUSINESS_INFO } from '@/lib/constants';

export interface ServiceAreaData {
  service: string;
  serviceSlug: string;
  area: string;
  areaSlug: string;
  description: string;
  benefits: string[];
  image: string;
}

export const SERVICE_AREAS: ServiceAreaData[] = [
  {
    service: 'Damenfriseur',
    serviceSlug: 'damenfriseur',
    area: 'Hamm',
    areaSlug: 'hamm',
    description: 'Professionelle Damenhaarschnitte, Balayage und Colorationen direkt in Hamburg-Hamm mit über 20 Jahren Erfahrung.',
    benefits: [
      'Meisterqualität seit 2004 direkt vor Ort',
      'Spezialisiert auf Balayage und moderne Färbetechniken',
      'Hochwertige Produkte für langanhaltende Ergebnisse',
      'Mehrsprachige Beratung (Deutsch, Englisch, Türkisch, Persisch)',
      'Afterwork-Termine nach 19:00 Uhr möglich',
    ],
    image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Damenfriseur',
    serviceSlug: 'damenfriseur',
    area: 'Borgfelde',
    areaSlug: 'borgfelde',
    description: 'Nur 5-10 Minuten von Borgfelde entfernt: Professionelle Damenhaarschnitte mit Meisterqualität seit 2004.',
    benefits: [
      'Kurze Anfahrt aus Borgfelde – ca. 5-10 Minuten',
      'U2/U4 zu Burgstraße oder Buslinien 25, 130',
      'Spezialisiert auf Damenschnitte und Colorationen',
      `${BUSINESS_INFO.reviews.count}+ Google-Bewertungen mit ${BUSINESS_INFO.reviews.rating} Sternen`,
      'Entspannte Atmosphäre und individuelle Beratung',
    ],
    image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Damenfriseur',
    serviceSlug: 'damenfriseur',
    area: 'Horn',
    areaSlug: 'horn',
    description: 'Damenfriseur für Horn-Kunden: Professionelle Haarschnitte und Colorationen mit kurzer Anfahrtszeit.',
    benefits: [
      'Etwa 10 Minuten von Horn entfernt',
      'U2 zu Burgstraße oder mit dem Fahrrad erreichbar',
      'Spezialisiert auf anspruchsvolle Haarschnitte',
      'Freundliches Team mit langem Erfahrungsrucksack',
      'Afterwork-Termine für berufstätige Frauen',
    ],
    image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Damenfriseur',
    serviceSlug: 'damenfriseur',
    area: 'Hamburg Mitte',
    areaSlug: 'mitte',
    description: 'Damenfriseur für Hamburg Mitte: Zentral erreichbar mit Meisterbetrieb-Qualität aus Hamburg Hamm.',
    benefits: [
      'Ca. 10-15 Minuten von Hamburg Mitte entfernt',
      'U2 oder U4 zu Burgstraße oder S-Bahn zum Hauptbahnhof',
      'Entspannte Atmosphäre weg vom Trubel der Innenstadt',
      'Faire Preise: Damenschnitt ab 43€',
      'Mehrsprachige Konsultation für internationale Gäste',
    ],
    image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Herrenfriseur',
    serviceSlug: 'herrenfriseur',
    area: 'Hamm',
    areaSlug: 'hamm',
    description: 'Herrenfriseur in Hamburg-Hamm: Moderne Haarschnitte, Bartpflege und Gentleman-Service vom Meister.',
    benefits: [
      'Inhaber Serbay Eskici ist Herrenspezialist mit 20+ Jahren Erfahrung',
      'Moderne Schnitt- und Styling-Techniken',
      'Professionelle Bartpflege und -beratung',
      'Entspannte Atmosphäre für den Mann von heute',
      'Afterwork-Termine nach 19:00 Uhr möglich',
    ],
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Herrenfriseur',
    serviceSlug: 'herrenfriseur',
    area: 'Borgfelde',
    areaSlug: 'borgfelde',
    description: 'Herrenfriseur für Borgfelde: Nur 5-10 Minuten entfernt mit Meisterqualität für Moderne Herrenschnitte.',
    benefits: [
      'Kurze Anfahrt aus Borgfelde – ca. 5-10 Minuten mit U-Bahn',
      'Spezialisiert auf Herrenschnitte und Bartpflege',
      `${BUSINESS_INFO.reviews.count}+ zufriedene Kunden mit ${BUSINESS_INFO.reviews.rating} Sternen`,
      'Freundliches Team, keine Wartezeiten',
      'Gentleman-Paket inkl. Schnitt, Bart & Augenbrauen ab 49€',
    ],
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Herrenfriseur',
    serviceSlug: 'herrenfriseur',
    area: 'Horn',
    areaSlug: 'horn',
    description: 'Herrenfriseur für Horn-Bewohner: Professionelle Herrenschnitte mit kurzer Anfahrtszeit.',
    benefits: [
      'Etwa 10 Minuten von Horn erreichbar',
      'U2 zu Burgstraße oder mit Fahrrad',
      'Meisterqualität mit hohen Standards',
      'Spezialisiert auf anspruchsvolle Herrenschnitte',
      'Bartberatung und -styling für gehobene Ansprüche',
    ],
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Herrenfriseur',
    serviceSlug: 'herrenfriseur',
    area: 'Hamburg Mitte',
    areaSlug: 'mitte',
    description: 'Herrenfriseur für Hamburg Mitte: Moderne Schnitte zentral und leicht erreichbar aus Hamburg Hamm.',
    benefits: [
      'Ca. 10-15 Minuten von Hamburg Mitte entfernt',
      'U2/U4 zu Burgstraße, direkt vom Hauptbahnhof erreichbar',
      'Meisterqualität mit entspannter Atmosphäre',
      'Moderne Schnitt- und Styling-Techniken',
      'Faire Preise: Design-Schnitt ab 34€',
    ],
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Balayage',
    serviceSlug: 'balayage',
    area: 'Hamm',
    areaSlug: 'hamm',
    description: 'Balayage in Hamburg-Hamm: Natürliche Highlights mit modernsten Färbetechniken von Spezialistinnen.',
    benefits: [
      'Spezialisiert auf Balayage und moderne Färbetechniken',
      'Nassrin Karimi ist zertifizierte Balayage-Expertin',
      'Natürlich aussehende, sonnendurchflutete Highlights',
      'Hochwertige Farben für langanhaltende Ergebnisse',
      'Beratung für jeden Haartyp und Wunschfarbe',
    ],
    image: 'https://images.pexels.com/photos/1787295/pexels-photo-1787295.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Balayage',
    serviceSlug: 'balayage',
    area: 'Borgfelde',
    areaSlug: 'borgfelde',
    description: 'Balayage in Borgfelde: Nur 5-10 Minuten mit professionellen Balayage-Spezialistinnen.',
    benefits: [
      'Kurze Anfahrt aus Borgfelde – ca. 5-10 Minuten',
      'Spezialisiert auf Balayage und moderne Färbetechniken',
      'Erfahrene Coloristinnen mit Spezialisierung',
      'Natürliche Übergänge ohne harte Ansätze',
      'Beratung für pflegeleichte Farbtrends',
    ],
    image: 'https://images.pexels.com/photos/1787295/pexels-photo-1787295.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Balayage',
    serviceSlug: 'balayage',
    area: 'Horn',
    areaSlug: 'horn',
    description: 'Balayage für Horn-Bewohner: Natürliche Highlights mit kurzer Anfahrtszeit.',
    benefits: [
      'Etwa 10 Minuten von Horn entfernt',
      'Spezialisiert auf anspruchsvolle Balayage-Techniken',
      'Erfahrenes Team mit modernstem Know-how',
      'Pflegeleichte Highlights für den Alltag',
      'Langanhaltende Ergebnisse mit hochwertigen Produkten',
    ],
    image: 'https://images.pexels.com/photos/1787295/pexels-photo-1787295.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Balayage',
    serviceSlug: 'balayage',
    area: 'Hamburg Mitte',
    areaSlug: 'mitte',
    description: 'Balayage für Hamburg Mitte: Moderne Highlights zentral und leicht erreichbar aus Hamburg Hamm.',
    benefits: [
      'Ca. 10-15 Minuten von Hamburg Mitte entfernt',
      'U2/U4 zu Burgstraße, leicht vom Zentrum erreichbar',
      'Spezialisiert auf Balayage und moderne Färbetechniken',
      'Entspannte Atmosphäre weg vom Trubel',
      'Individuelle Farbberatung für jeden Typ',
    ],
    image: 'https://images.pexels.com/photos/1787295/pexels-photo-1787295.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Haare färben',
    serviceSlug: 'haare-faerben',
    area: 'Hamm',
    areaSlug: 'hamm',
    description: 'Haare färben in Hamburg-Hamm: Professionelle Colorationen, Strähnen und Balayage mit Olaplex-Schutz.',
    benefits: [
      'Erfahrene Coloristinnen mit Spezialisierung auf Balayage',
      'Olaplex-Behandlung zum Schutz der Haarstruktur inklusive',
      'Hochwertige Colorationsprodukte für langanhaltende Ergebnisse',
      'Mehrsprachige Beratung (Deutsch, Englisch, Türkisch, Persisch)',
      'Faire Preise: Ansatz ab 43€, Coloration ab 87€',
    ],
    image: 'https://images.pexels.com/photos/1444067/pexels-photo-1444067.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Haare färben',
    serviceSlug: 'haare-faerben',
    area: 'Borgfelde',
    areaSlug: 'borgfelde',
    description: 'Haare färben in Borgfelde: Nur 5-10 Minuten mit professionellen Colorationen und Balayage.',
    benefits: [
      'Kurze Anfahrt aus Borgfelde – ca. 5-10 Minuten',
      'Spezialisiert auf Balayage und moderne Färbetechniken',
      'Olaplex-Schutz für gesundes, glänzendes Haar',
      'Erfahrene Coloristinnen mit modernstem Know-how',
      'Flexibles Zeitfenster inkl. Afterwork-Termine',
    ],
    image: 'https://images.pexels.com/photos/1444067/pexels-photo-1444067.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Haare färben',
    serviceSlug: 'haare-faerben',
    area: 'Horn',
    areaSlug: 'horn',
    description: 'Haare färben für Horn: Professionelle Colorationen mit kurzer Anfahrtszeit.',
    benefits: [
      'Etwa 10 Minuten von Horn entfernt',
      'Spezialisiert auf anspruchsvolle Colorationen',
      'Hochwertige Farben für langanhaltende Ergebnisse',
      'Erfahrenes Team mit modernstem Know-how',
      'Beratung für individuelle Farbwünsche',
    ],
    image: 'https://images.pexels.com/photos/1444067/pexels-photo-1444067.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    service: 'Haare färben',
    serviceSlug: 'haare-faerben',
    area: 'Hamburg Mitte',
    areaSlug: 'mitte',
    description: 'Haare färben für Hamburg Mitte: Professionelle Colorationen zentral und leicht erreichbar aus Hamburg Hamm.',
    benefits: [
      'Ca. 10-15 Minuten von Hamburg Mitte entfernt',
      'U2/U4 zu Burgstraße, vom Zentrum leicht zu erreichen',
      'Spezialisiert auf Colorationen und Balayage',
      'Olaplex-Schutz für gesundes Haar',
      'Individuelle Farbberatung für Ihren Typ',
    ],
    image: 'https://images.pexels.com/photos/1444067/pexels-photo-1444067.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

const LEGACY_AREAS = ['eilbek', 'wandsbek', 'billstedt', 'bergedorf'];
const LEGACY_AREA_NAMES: Record<string, string> = {
  eilbek: 'Eilbek',
  wandsbek: 'Wandsbek',
  billstedt: 'Billstedt',
  bergedorf: 'Bergedorf',
};

const LEGACY_DESCRIPTIONS: Record<string, Record<string, string>> = {
  damenfriseur: {
    eilbek: 'Damenfriseur in Eilbek-Nähe: Meisterbetrieb mit Spezialisierung auf Balayage und moderne Färbetechniken.',
    wandsbek: 'Damenfriseur für Wandsbek-Bewohner: Professionelle Haarschnitte mit hervorragender U-Bahn-Anbindung.',
    billstedt: 'Damenfriseur für Billstedt: Hervorragende U-Bahn-Verbindung mit professioneller Meisterqualität.',
    bergedorf: 'Damenfriseur für Bergedorf-Kunden: Premium-Service mit S-Bahn und U-Bahn-Anbindung.',
  },
  herrenfriseur: {
    eilbek: 'Herrenfriseur in Eilbek-Nähe: Moderne Schnitte und Bartpflege von Meistern.',
    wandsbek: 'Herrenfriseur für Wandsbek: Professionelle Haarschnitte mit guter U-Bahn-Anbindung.',
    billstedt: 'Herrenfriseur für Billstedt: Meisterqualität mit direkter U2-Verbindung.',
    bergedorf: 'Herrenfriseur für Bergedorf: Premium-Service mit S-Bahn und U-Bahn-Verbindung.',
  },
  balayage: {
    eilbek: 'Balayage in Eilbek: Spezialisiert auf moderne Färbetechniken für natürliche Highlights.',
    wandsbek: 'Balayage für Wandsbek: Moderne Färbetechniken mit guter U-Bahn-Anbindung.',
    billstedt: 'Balayage für Billstedt: Professionelle Highlights mit direkter U2-Verbindung.',
    bergedorf: 'Balayage für Bergedorf: Premium-Färbetechniken mit S-Bahn und U-Bahn-Anbindung.',
  },
  'haare-faerben': {
    eilbek: 'Haare färben in Eilbek: Spezialisiert auf Colorationen und Balayage mit Schutzbehandlung.',
    wandsbek: 'Haare färben für Wandsbek: Professionelle Colorationen mit guter Anbindung.',
    billstedt: 'Haare färben für Billstedt: Professionelle Colorationen mit direkter U2-Verbindung.',
    bergedorf: 'Haare färben für Bergedorf: Premium-Colorationen mit S-Bahn und U-Bahn-Anbindung.',
  },
};

const LEGACY_BENEFITS = [
  'Meisterbetrieb seit 2004 – zertifizierte Qualität',
  'Spezialisiert auf Balayage und moderne Techniken',
  'Mehrsprachiges Team (Deutsch, Englisch, Türkisch, Persisch)',
  `${BUSINESS_INFO.reviews.count}+ Google-Bewertungen mit ${BUSINESS_INFO.reviews.rating} Sternen`,
  'Individuelle Beratung und maßgeschneiderte Haarkonzepte',
];

const SERVICE_NAMES: Record<string, string> = {
  damenfriseur: 'Damenfriseur',
  herrenfriseur: 'Herrenfriseur',
  balayage: 'Balayage',
  'haare-faerben': 'Haare färben',
};

const SERVICE_IMAGES: Record<string, string> = {
  damenfriseur: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920',
  herrenfriseur: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  balayage: 'https://images.pexels.com/photos/1787295/pexels-photo-1787295.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'haare-faerben': 'https://images.pexels.com/photos/1444067/pexels-photo-1444067.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

export const ALL_SERVICE_AREAS: ServiceAreaData[] = [
  ...SERVICE_AREAS,
  ...Object.keys(SERVICE_NAMES).flatMap(serviceSlug =>
    LEGACY_AREAS.map(areaSlug => ({
      service: SERVICE_NAMES[serviceSlug],
      serviceSlug,
      area: LEGACY_AREA_NAMES[areaSlug],
      areaSlug,
      description: LEGACY_DESCRIPTIONS[serviceSlug]?.[areaSlug] ?? '',
      benefits: LEGACY_BENEFITS,
      image: SERVICE_IMAGES[serviceSlug],
    }))
  ),
];
