import { BUSINESS_INFO } from './constants';

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

export function getCanonicalUrl(path: string): string {
  return `${BUSINESS_INFO.website}${path}`;
}

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

export const napConsistencyRules = {
  nameFormat: BUSINESS_INFO.name,
  addressFormat: BUSINESS_INFO.address.full,
  phoneFormat: BUSINESS_INFO.phone,
  sources: [
    'Website',
    'Google Business Profile',
    'Facebook',
    'Instagram',
    'Local directories',
  ],
};
