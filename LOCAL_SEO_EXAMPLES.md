# Local SEO Implementation Examples

Code examples and templates for implementing local SEO elements across your website.

---

## 1. Using NAP Component in Contact Page

### File: `app/kontakt/page.tsx`

```typescript
import { NAPInfo } from '@/components/shared/NAPInfo';

export default function KontaktPage() {
  return (
    <>
      <ServicePageHeader
        title="Kontakt - Friseur Hamburg Hamm"
        subtitle="Wir freuen uns auf deinen Besuch"
      />

      <section className="section-padding bg-warm-white">
        <div className="container-custom max-w-2xl">
          {/* Main NAP info with hours */}
          <h2 className="font-playfair text-3xl font-bold mb-8">Unsere Kontaktdaten</h2>

          <NAPInfo layout="vertical" showHours={true} className="mb-12" />

          {/* Additional contact info */}
          <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
            <h3 className="font-playfair text-xl font-bold mb-4">
              Kontaktiere uns
            </h3>
            <p className="text-gray-600">
              Ruf uns an, schreib uns eine E-Mail oder besuche uns direkt.
              Wir sprechen Deutsch, Türkisch, Persisch und Englisch!
            </p>
          </div>

          {/* Google Maps embed for local context */}
          <div className="mt-12">
            <h3 className="font-playfair text-xl font-bold mb-4">
              Unser Standort auf der Karte
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
```

---

## 2. Service Page with Local Schema

### File: `app/damenfriseur-hamburg-hamm/page.tsx`

```typescript
import { getServiceSchema, getLocalBusinessFAQSchema } from '@/lib/local-seo';

export default function DamenfriseurPage() {
  const serviceSchema = getServiceSchema(
    'Damenfriseur Hamburg Hamm',
    'Professionelle Damenhaarschnitte & Balayage in Hamburg-Hamm von unserem erfahrenen Team',
    '$$',
    'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg'
  );

  const faqSchema = getLocalBusinessFAQSchema();

  return (
    <>
      <ServicePageHeader
        title="Damenfriseur Hamburg Hamm"
        subtitle="Premium Haarschnitte & Colorationen"
      />

      {/* Location-specific content */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <h2 className="font-playfair text-3xl font-bold mb-8">
            Ihr Damenfriseur in Hamburg-Hamm seit 2004
          </h2>

          <div className="prose max-w-3xl">
            <p>
              Willkommen bei Ihrem vertrauenswürdigen Damenfriseur in Hamburg-Hamm!
              Seit 2004 bieten wir professionelle Damenhaarschnitte, Balayage und
              Colorationen in unserem gemütlichen Studio auf der Hammer Landstraße.
            </p>

            <p>
              Unser Team von erfahrenen Friseurmeisterinnen hat sich auf hochwertige
              Damenfrisuren spezialisiert. Egal ob einfacher Schnitt oder aufwendiges
              Balayage - wir kümmern uns mit Leidenschaft um deinen neuen Look.
            </p>

            <h3>Warum Ihr Frisuren-Studio?</h3>
            <ul>
              <li>Meisterqualität seit 2004 in Hamburg-Hamm</li>
              <li>Spezialisiert auf Balayage und moderne Färbetechniken</li>
              <li>Hochwertige Olaplex-Produkte für gesundes Haar</li>
              <li>Mehrsprachige Beratung (Deutsch, Englisch, Türkisch, Persisch)</li>
              <li>Zentraler Standort in Hamburg-Hamm, gut erreichbar</li>
              <li>Afterwork-Termine ab 19:00 Uhr möglich</li>
            </ul>
          </div>

          {/* NAP displayed again for local context */}
          <div className="mt-12 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8">
            <h3 className="font-bold mb-4">Besuche uns vor Ort</h3>
            <NAPInfo layout="compact" showHours={false} />
          </div>
        </div>
      </section>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
```

---

## 3. Team Member Schema

### Usage: About/Team Page

```typescript
import { getPersonSchema } from '@/lib/local-seo';

export function TeamMemberCard({ member }) {
  const personSchema = getPersonSchema(
    member.name,
    member.role,
    member.description,
    member.image
  );

  return (
    <>
      <div
        className="p-6 bg-white rounded-xl shadow-lg"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content={member.name} />
        <meta itemProp="jobTitle" content={member.role} />
        <meta itemProp="description" content={member.description} />
        <meta itemProp="image" content={member.image} />

        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        <h3 className="font-bold text-center">{member.name}</h3>
        <p className="text-sm text-gray-600 text-center">{member.role}</p>
        <p className="text-xs text-gray-500 text-center mt-2">
          {member.description}
        </p>

        {member.languages && (
          <p className="text-xs text-gray-500 text-center mt-2">
            Sprachen: {member.languages.join(', ')}
          </p>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
```

---

## 4. Offer/Pricing Schema

### Usage: Pricing Page

```typescript
import { getOfferSchema } from '@/lib/local-seo';

export function PriceListItem({ service }) {
  const offerSchema = getOfferSchema(
    service.name,
    service.price,
    `Professionelle ${service.name} bei Ihr Frisuren-Studio in Hamburg-Hamm`
  );

  return (
    <>
      <div
        className="flex justify-between py-3 border-b border-gray-200"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <meta itemProp="name" content={service.name} />
        <meta itemProp="priceCurrency" content="EUR" />
        <meta
          itemProp="price"
          content={service.price.match(/\d+/)?.[0] || '0'}
        />

        <div>
          <span itemProp="name" className="font-medium">
            {service.name}
          </span>
        </div>
        <span itemProp="price" className="font-bold text-teal-600">
          {service.price}
        </span>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
    </>
  );
}
```

---

## 5. Local FAQ Schema Implementation

### Usage: FAQ Section

```typescript
import { getLocalBusinessFAQSchema } from '@/lib/local-seo';

export function LocalFAQSection() {
  const faqSchema = getLocalBusinessFAQSchema();

  const faqs = [
    {
      question: 'Wo befindet sich Ihr Frisuren-Studio?',
      answer: 'Wir befinden uns in Hamburg-Hamm, Hammer Landstraße 4, 20537 Hamburg.'
    },
    {
      question: 'Wie kann ich einen Termin vereinbaren?',
      answer: 'Sie können uns unter 040 2509029 anrufen oder online einen Termin buchen.'
    },
    {
      question: 'Welche Zahlungsmöglichkeiten haben Sie?',
      answer: 'Wir akzeptieren Bargeld, EC-Karte und gängige Kartenzahlungen.'
    },
    {
      question: 'Welche Sprachen spricht Ihr Team?',
      answer: 'Unser Team spricht Deutsch, Englisch, Türkisch und Persisch.'
    }
  ];

  return (
    <>
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <h2 className="font-playfair text-3xl font-bold mb-8">
            Häufig gestellte Fragen
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-lg"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="font-bold mb-3">
                  <span itemProp="name">{faq.question}</span>
                </h3>
                <div
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text" className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
```

---

## 6. Video Schema for Local Business

### Usage: "About Studio" or "Services" Video

```typescript
import { getVideoSchema } from '@/lib/local-seo';

export function StudioTourVideo() {
  const videoSchema = getVideoSchema(
    'https://videos.your-domain.de/studio-tour.mp4',
    'Ihr Frisuren-Studio Rundgang - Hamburg-Hamm',
    'Virtueller Rundgang durch unser modernes Friseursalon in Hamburg-Hamm',
    'https://videos.your-domain.de/studio-tour-thumbnail.jpg'
  );

  return (
    <>
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <h2 className="font-playfair text-3xl font-bold mb-8">
            Besuche uns virtuell
          </h2>

          <video
            controls
            className="w-full rounded-lg shadow-lg mb-4"
            itemScope
            itemType="https://schema.org/VideoObject"
          >
            <meta
              itemProp="name"
              content="Ihr Frisuren-Studio Rundgang - Hamburg-Hamm"
            />
            <meta
              itemProp="description"
              content="Virtueller Rundgang durch unser modernes Friseursalon"
            />
            <source
              src="https://videos.your-domain.de/studio-tour.mp4"
              type="video/mp4"
              itemProp="contentUrl"
            />
            <meta
              itemProp="thumbnailUrl"
              content="https://videos.your-domain.de/studio-tour-thumbnail.jpg"
            />
            <meta itemProp="uploadDate" content={new Date().toISOString()} />
            <meta itemProp="duration" content="PT2M" />
          </video>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
    </>
  );
}
```

---

## 7. Service Area Schema (Multi-Location Ready)

### Usage: Future Expansion Template

```typescript
// lib/local-seo.ts - Add service areas

export function getServiceAreaSchema() {
  const serviceAreas = [
    {
      '@type': 'City',
      name: 'Hamburg',
      areaServed: [
        'Hamburg-Hamm',
        'Hamburg-Mitte',
        'Hamburg-Nord',
        'Hamburg-Altona'
      ]
    }
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ihr Frisuren-Studio',
    areaServed: serviceAreas,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hammer Landstraße 4',
      addressLocality: 'Hamburg',
      postalCode: '20537',
      addressCountry: 'DE'
    }
  };
}
```

---

## 8. NAP Consistency Testing Script

### Verification Component

```typescript
// lib/verify-nap.ts

import { BUSINESS_INFO } from './constants';

export function verifyNAPConsistency() {
  const expectedNAP = {
    name: BUSINESS_INFO.name,
    address: BUSINESS_INFO.address.full,
    phone: BUSINESS_INFO.phone,
  };

  const checks = {
    // Check business name on all pages
    namePresent: () => {
      if (typeof window === 'undefined') return true;
      return document.body.textContent?.includes(expectedNAP.name);
    },

    // Check address on all pages
    addressPresent: () => {
      if (typeof window === 'undefined') return true;
      return document.body.textContent?.includes(BUSINESS_INFO.address.street);
    },

    // Check phone on all pages
    phonePresent: () => {
      if (typeof window === 'undefined') return true;
      const phoneRegex = /040\s?2509029/;
      return phoneRegex.test(document.body.textContent || '');
    },

    // Verify microdata
    microDataPresent: () => {
      if (typeof window === 'undefined') return true;
      const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      return scripts.length > 0;
    },
  };

  return {
    nap: expectedNAP,
    verification: checks,
    passed: Object.values(checks).every(check => check?.() !== false),
  };
}
```

---

## 9. Mobile-Optimized Local Contact

### Component: Quick Contact Banner

```typescript
export function QuickContactBanner() {
  return (
    <div className="sticky bottom-0 md:hidden bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 z-50">
      <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
        {/* Phone */}
        <a
          href={`tel:+49402509029`}
          className="flex-1 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg text-center font-semibold transition-colors"
        >
          <Phone className="inline-block w-4 h-4 mr-2" />
          Anrufen
        </a>

        {/* Directions */}
        <a
          href={BUSINESS_INFO.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg text-center font-semibold transition-colors"
        >
          <MapPin className="inline-block w-4 h-4 mr-2" />
          Route
        </a>

        {/* Message */}
        <a
          href={`https://wa.me/49402509029`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg text-center font-semibold transition-colors"
        >
          <MessageCircle className="inline-block w-4 h-4 mr-2" />
          Chat
        </a>
      </div>
    </div>
  );
}
```

---

## 10. Local Review Widget

### Component: Display Google Reviews

```typescript
export function LocalReviewWidget() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
          Was sagen unsere Kunden in Hamburg-Hamm?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-md"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Review rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
                <meta itemProp="ratingValue" content={review.rating} />
              </div>

              {/* Review text */}
              <p itemProp="reviewBody" className="text-gray-700 mb-4">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name" className="font-semibold text-sm">
                  {review.author}
                </span>
              </div>

              <meta itemProp="reviewRating" content={review.rating} />
            </div>
          ))}
        </div>

        {/* Link to Google Business Profile */}
        <div className="text-center mt-8">
          <a
            href={BUSINESS_INFO.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Alle Bewertungen auf Google sehen
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

## 11. Location Header Component

### Reusable Location-Specific Header

```typescript
interface LocationHeaderProps {
  title: string;
  subtitle: string;
  location: 'hamburg' | 'hamm' | 'hamburg-hamm';
  backgroundImage?: string;
}

export function LocationHeader({
  title,
  subtitle,
  location,
  backgroundImage,
}: LocationHeaderProps) {
  const locationMetadata = {
    'hamburg-hamm': {
      breadcrumb: 'Hamburg-Hamm',
      coordinates: [53.5553174, 10.0412498],
    },
    hamburg: {
      breadcrumb: 'Hamburg',
      coordinates: [53.5511, 10.0046],
    },
    hamm: {
      breadcrumb: 'Hamm',
      coordinates: [53.5553174, 10.0412498],
    },
  };

  const meta = locationMetadata[location];

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="areaServed" content={meta.breadcrumb} />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="font-playfair text-5xl font-bold mb-4">{title}</h1>
        <p className="text-2xl font-light">{subtitle}</p>
        <p className="mt-4 text-sm text-gray-300">{meta.breadcrumb}</p>
      </div>
    </div>
  );
}
```

---

## Next Steps

1. **Implement NAPInfo component** in all relevant pages
2. **Add service schemas** to all service pages
3. **Upload photos** to Google Business Profile (50+ images)
4. **Build citations** in German local directories
5. **Monitor rankings** for local keywords
6. **Respond to reviews** regularly
7. **Track metrics** in Google Search Console

These examples provide templates for implementing comprehensive local SEO across your website.
