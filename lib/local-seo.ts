import { BUSINESS_INFO, OPENING_HOURS } from './constants';

/**
 * Local SEO utilities for consistent NAP (Name, Address, Phone) and structured data
 */

export const NAP = {
  name: BUSINESS_INFO.name,
  fullName: BUSINESS_INFO.fullName,
  address: {
    street: BUSINESS_INFO.address.street,
    city: BUSINESS_INFO.address.city,
    district: BUSINESS_INFO.address.district,
    postalCode: BUSINESS_INFO.address.postalCode,
    country: BUSINESS_INFO.address.country,
    full: BUSINESS_INFO.address.full,
  },
  phone: BUSINESS_INFO.phone,
  phoneInternational: BUSINESS_INFO.phoneInternational,
  email: BUSINESS_INFO.email,
} as const;

/**
 * Format opening hours for Schema.org OpeningHoursSpecification
 */
export function getOpeningHoursSchema() {
  const dayMap: Record<string, string> = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };

  const hours: Array<Record<string, string>> = [];

  Object.entries(OPENING_HOURS).forEach(([day, info]) => {
    if (day === 'afterwork') return;

    const schemaDay = dayMap[day];
    if (!schemaDay) return;

    if ('open' in info && info.open && 'times' in info && info.times) {
      const [opens, closes] = info.times.split(' - ');
      hours.push({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: schemaDay,
        opens: opens.trim(),
        closes: closes.trim(),
      });
    } else {
      hours.push({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: schemaDay,
        opens: '00:00',
        closes: '00:00',
      });
    }
  });

  return hours;
}

/**
 * Generate Local Business Schema (Schema.org)
 * https://schema.org/LocalBusiness
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${BUSINESS_INFO.website}/#localbusiness`,
    name: BUSINESS_INFO.name,
    description: 'Premium Friseur in Hamburg Hamm - Meisterbetrieb seit 2004',
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
    openingHoursSpecification: getOpeningHoursSchema(),
    image: [
      'https://res.cloudinary.com/dqkld61zu/image/upload/v1770218177/Ihr_Frisuren-Studio_Au%C3%9Fenansicht_oyydcb.webp',
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.reviews.rating.toString(),
      ratingCount: BUSINESS_INFO.reviews.count.toString(),
    },
    sameAs: [BUSINESS_INFO.instagramUrl],
    areaServed: [
      {
        '@type': 'City',
        name: 'Hamburg',
      },
      {
        '@type': 'City',
        name: 'Hamburg-Hamm',
      },
    ],
    foundingDate: '2004',
  };
}

/**
 * Generate Service Schema for each service type
 * https://schema.org/Service
 */
export function getServiceSchema(
  serviceName: string,
  description: string,
  priceRange: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
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
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      {
        '@type': 'Neighborhood',
        name: 'Hamm',
        containedInPlace: { '@type': 'City', name: 'Hamburg' },
      },
    ],
    priceRange: priceRange,
    image: image,
  };
}

/**
 * Generate Organization Schema
 * https://schema.org/Organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    logo: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1770245111/Ihr-Frisuren-Studio_transparent_obd4aa.png',
    description: 'Premium Friseur in Hamburg Hamm - Meisterbetrieb seit 2004',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.phoneInternational,
      contactType: 'Customer Service',
      email: BUSINESS_INFO.email,
    },
    sameAs: [BUSINESS_INFO.instagramUrl],
    foundingDate: '2004',
    founder: {
      '@type': 'Person',
      name: BUSINESS_INFO.owner,
    },
  };
}

/**
 * Generate Contact Point Schema
 */
export function getContactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: BUSINESS_INFO.phoneInternational,
    contactType: 'Customer Support',
    email: BUSINESS_INFO.email,
    areaServed: 'DE',
    availableLanguage: ['German', 'Turkish', 'Persian', 'English'],
  };
}

/**
 * Generate Local Business FAQ Schema (for local questions)
 */
export function getLocalBusinessFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wo befindet sich Ihr Frisuren-Studio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Wir befinden uns in Hamburg-Hamm unter der Adresse ${BUSINESS_INFO.address.full}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Wie kann ich einen Termin buchen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Sie können uns unter ${BUSINESS_INFO.phone} anrufen oder über unsere Website einen Termin buchen.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Zahlungsmöglichkeiten haben Sie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wir akzeptieren Bargeld, EC-Karte und gängige Kartenzahlungen.',
        },
      },
    ],
  };
}

/**
 * Generate VideoObject Schema for local business videos
 */
export function getVideoSchema(
  videoUrl: string,
  title: string,
  description: string,
  thumbnailUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    contentUrl: videoUrl,
    thumbnailUrl: thumbnailUrl,
    uploadDate: new Date().toISOString(),
    duration: 'PT2M',
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.website,
    },
  };
}

/**
 * Generate Offer/Pricing Schema
 */
export function getOfferSchema(
  serviceName: string,
  price: string,
  description: string
) {
  // Extract numeric price if available
  const numericPrice = price.match(/\d+/)?.[0] || '0';

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: serviceName,
    description: description,
    priceCurrency: 'EUR',
    price: numericPrice,
    seller: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.website,
    },
  };
}

/**
 * Generate Person Schema for team members
 */
export function getPersonSchema(
  name: string,
  jobTitle: string,
  description: string,
  imageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: jobTitle,
    description: description,
    image: imageUrl,
    affiliation: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.website,
    },
  };
}

/**
 * Get canonical URL for local business pages
 */
export function getCanonicalUrl(path: string): string {
  return `${BUSINESS_INFO.website}${path}`;
}

/**
 * Get local SEO meta tags
 */
export function getLocalSEOMetaTags(
  city: string = 'Hamburg',
  district: string = 'Hamm',
  serviceType: string = 'Friseur'
) {
  return {
    'geo.position': `${BUSINESS_INFO.coordinates.latitude};${BUSINESS_INFO.coordinates.longitude}`,
    'ICBM': `${BUSINESS_INFO.coordinates.latitude}, ${BUSINESS_INFO.coordinates.longitude}`,
    'geo.placename': `${city}-${district}`,
    'geo.region': 'DE-HH',
  };
}

/**
 * NAP Consistency Check - Export for testing
 */
export const napConsistencyRules = {
  // Name must match exactly across all properties
  nameFormat: BUSINESS_INFO.name,
  // Address must match across all properties
  addressFormat: BUSINESS_INFO.address.full,
  // Phone must be consistent
  phoneFormat: BUSINESS_INFO.phone,
  // All sources must match
  sources: [
    'Website',
    'Google Business Profile',
    'Facebook',
    'Instagram',
    'Local directories',
  ],
};
