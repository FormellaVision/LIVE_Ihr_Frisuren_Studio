export const BUSINESS_INFO = {
  name: 'Ihr Frisuren-Studio',
  fullName: 'Friseur Hamburg Hamm - Ihr Frisuren-Studio',
  owner: 'Serbay Eskici',
  address: {
    street: 'Hammer Landstraße 4',
    city: 'Hamburg',
    district: 'Hamm',
    postalCode: '20537',
    country: 'Deutschland',
    full: 'Hammer Landstraße 4, 20537 Hamburg-Hamm, Deutschland',
  },
  phone: '040 2509029',
  phoneInternational: '+49402509029',
  phoneFormatted: '+49402509029',
  whatsapp: '+49402509029',
  email: 'ihr.frisuren.studio.hamburg@gmail.com',
  website: 'https://ihr-frisuren-studio.de',
  founded: '2004',
  taxId: 'DE235319231',
  instagram: '@ihrfrisurenstudio',
  instagramUrl: 'https://www.instagram.com/ihrfrisurenstudio/',
  googleMaps: 'https://maps.app.goo.gl/FPjSjzu6HpPyeJco6',
  appleMaps: 'https://maps.apple.com/place?place-id=I63F08FF445E51F7F&_provider=9902',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.1!2d10.0412498!3d53.5553174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18ebd949375c1%3A0xe58185a4fcf09502!2sIhr%20Frisuren-Studio!5e0!3m2!1sde!2sde',
  coordinates: {
    latitude: 53.5553174,
    longitude: 10.0412498,
  },
  // ⚠️ MONATLICH AKTUALISIEREN: reviewCount + rating mit GBP-Werten abgleichen
  // GBP aufrufen: https://business.google.com → Bewertungen
  // Zuletzt aktualisiert: April 2026
  reviews: {
    count: 270,
    rating: 4.9,
  },
} as const;

export const OPENING_HOURS = {
  monday: { open: false, times: null },
  tuesday: { open: true, times: '09:00 - 19:00' },
  wednesday: { open: true, times: '09:00 - 19:00' },
  thursday: { open: true, times: '09:00 - 19:00' },
  friday: { open: true, times: '09:00 - 19:00' },
  saturday: { open: true, times: '08:00 - 14:00' },
  sunday: { open: false, times: null },
  afterwork: {
    weekdays: 'Di-Fr ab 19:00 Uhr',
    saturday: 'Sa ab 14:00 Uhr',
    surcharge: '+10€',
  },
} as const;

export const NAV_LINKS = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/ueber-uns', label: 'Team' },
  { href: '/bewertungen', label: 'Bewertungen' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;

export const TEAM_MEMBERS = [
  {
    name: 'Serbay Eskici',
    role: 'Friseurmeister & Inhaber',
    description: 'Herrenspezialist, Ausbilder, Seit 2004 in Hamburg-Hamm',
    languages: ['Deutsch', 'Türkisch', 'Englisch'],
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772457720/Serbay_iyhc9z.webp',
  },
  {
    name: 'Nassrin Karimi',
    role: 'Gesellin',
    description: 'Hochsteck- & Colorations-Spezialistin, Balayage-Expertin',
    languages: ['Deutsch', 'Persisch', 'Englisch'],
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772457719/Nassrin_q8hxqf.webp',
  },
  {
    name: 'Brigitte Prengel',
    role: 'Meisterin',
    description: 'Schnitt-Expertin, Langjährige Erfahrung, Kundenberatung',
    languages: ['Deutsch', 'Englisch'],
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772457719/Brigitte_yyc8i0.webp',
  },
  {
    name: 'Mehtap Aydin',
    role: 'Gesellin',
    description: 'Vielseitige Friseurin mit breitem Fachwissen, Kundenberatung und persönliches Engagement',
    languages: ['Deutsch', 'Türkisch', 'Englisch'],
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772457719/Mehtap_srb10k.webp',
  },
  {
    name: 'Geansever Osman',
    role: 'Gesellin',
    description: 'Hair & Make-up Artistin mit kreativer Expertise und leidenschaftlicher Kundenbetreuung',
    languages: ['Deutsch', 'Türkisch', 'Rumänisch'],
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772466585/Geansever_uygo4u.webp',
  },
  {
    name: 'Jessica',
    role: 'Gesellin',
    description: 'Über 15 Jahre Erfahrung, Spezialistin mit großer Leidenschaft für ihr Handwerk',
    languages: ['Deutsch'],
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772457719/Jessica_i7zltn.webp',
  },
  {
    name: 'Gül',
    role: 'Friseurmeisterin',
    description: 'Mehr als 10 Jahre Erfahrung, Fachkompetenz und freundliche Beratung',
    languages: ['Deutsch', 'Türkisch'],
    image: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1772457719/Gu%CC%88l_tx8xms.webp',
  },
] as const;

export const REVIEWS = [
  {
    text: 'Top Leute, die was von ihrem Handwerk verstehen. Kann es nur jedem weiter empfehlen. Von Färben bis krasse Fades kriegt man da alles.',
    author: 'Google Kunde',
    initial: 'G',
    date: 'vor 2 Wochen',
    rating: 5,
  },
  {
    text: 'Ich bin seit vielen Jahren hier Kunde und immer absolut zufrieden. Super angenehme Atmosphäre, sehr nette Menschen und immer ein guter Haarschnitt.',
    author: 'Google Kunde',
    initial: 'G',
    date: 'vor 1 Monat',
    rating: 5,
  },
  {
    text: 'Immer top zufrieden! Erste Klasse Service und super freundliche Mitarbeiter! Serbay bester Mann!',
    author: 'Google Kunde',
    initial: 'G',
    date: 'vor 3 Wochen',
    rating: 5,
  },
  {
    text: 'Seit Jahren Stammkunde, wer schwierige Haare hat oder einfach konstant gute Schnitte will ist hier richtig.',
    author: 'Google Kunde',
    initial: 'G',
    date: 'vor 1 Monat',
    rating: 5,
  },
  {
    text: 'Moin, Habe schon oft von euch gehört! Mein Bester Freund sieht nach einem Besuch bei euch immer on Point aus! Werde mit Sicherheit auch nochmal vorbeischauen!',
    author: 'Google Kunde',
    initial: 'G',
    date: 'vor 2 Monaten',
    rating: 5,
  },
  {
    text: 'Gehe hier seit 2 Jahren hin. Bin super happy. Beratung, Service und Leistung sind einfach top. Ich war noch nie so zufrieden bei einem Friseur! Vor allem das Personal ist einfach spitze! Man kennt die Kunden beim Namen und gibt 110%, dass die Kunden sich wohl fühlen. Kann ich nur empfehlen.',
    author: 'Google Kunde',
    initial: 'G',
    date: 'vor 3 Monaten',
    rating: 5,
  },
] as const;

export const SERVICES_DAMEN = [
  { name: 'Cut & Go (Waschen + Schneiden)', price: '33€' },
  { name: 'Waschen, Schneiden, Föhnen', price: 'ab 43€' },
  { name: 'Ansatzfarbe', price: '49€' },
  { name: 'Balayage', price: 'ab 179€' },
  { name: 'Paket "Schöne Augen"', price: '39€' },
  { name: 'Längen/Spitzen färben', price: 'ab 29€' },
  { name: 'Coloration komplett inkl. Schnitt', price: 'ab 87€' },
  { name: 'Foliensträhnen', price: 'ab 85€' },
  { name: 'Dauerwelle/Volumenwelle inkl. Schnitt', price: 'ab 99€' },
  { name: 'Hochsteckfrisur', price: 'ab 55€' },
  { name: 'Brautstyling', price: 'auf Anfrage' },
] as const;

export const SERVICES_HERREN = [
  { name: 'Klassischer Herrenhaarschnitt (trocken)', price: '28€' },
  { name: 'Maschinenschnitt', price: '19€' },
  { name: 'Waschen, Schneiden, Föhnen', price: '33€' },
  { name: 'Barttrimmen', price: 'ab 8€' },
  { name: 'Paket "Gentleman" (Schnitt + Bart + Augenbrauen)', price: '49€' },
  { name: 'Design-Schnitt', price: '34€' },
  { name: 'Bartmodellage', price: 'ab 15€' },
  { name: 'Coloration', price: 'ab 25€' },
  { name: 'Camouflage (Graue Haare)', price: 'ab 29€' },
] as const;

export const SERVICES_KOSMETIK = [
  { name: 'Gesichtsbehandlung Basic', price: '45€' },
  { name: 'Gesichtsbehandlung Deluxe', price: '69€' },
  { name: 'Maniküre', price: 'ab 26€' },
  { name: 'Maniküre mit Lack', price: 'ab 32€' },
  { name: 'Med. Fußpflege', price: 'ab 32€' },
  { name: 'Retinol Peeling', price: '79€' },
  { name: 'Augenbrauen zupfen', price: '12€' },
  { name: 'Augenbrauen färben', price: '10€' },
  { name: 'Wimpern färben', price: '12€' },
] as const;

export const SERVICES_BALAYAGE = [
  { name: 'Balayage inkl. Veredelung & Schnitt', price: 'ab 179€' },
  { name: 'Balayage (nur Farbe)', price: 'ab 129€' },
  { name: 'Foliensträhnen', price: 'ab 85€' },
  { name: 'Ombre/Sombre', price: 'ab 159€' },
  { name: 'Babylights', price: 'ab 149€' },
  { name: 'Color Refresh', price: 'ab 69€' },
] as const;
