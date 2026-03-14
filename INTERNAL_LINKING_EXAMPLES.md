# Internal Linking Implementation Examples

This document contains practical code examples for implementing the internal linking strategy.

## 1. Breadcrumb Component (Already Implemented ✓)

The breadcrumb component is now active on all pages. It provides:
- Visual navigation hierarchy
- Automatic path generation
- Proper schema.org markup
- Accessibility features (aria-labels)

Location: `components/shared/Breadcrumb.tsx`

## 2. Related Services Component (Implemented ✓)

The RelatedServices component displays 3 related services with descriptions and links.

**Usage:**
```typescript
import { RelatedServices } from '@/components/sections/RelatedServices';

const relatedServices = [
  {
    href: '/balayage-hamburg-hamm',
    label: 'Balayage Hamburg Hamm',
    description: 'Natürliche Highlights mit modernen Färbetechniken',
  },
  {
    href: '/haare-faerben-hamburg-hamm',
    label: 'Haare färben',
    description: 'Professionelle Colorationen und Ansatzfärbungen',
  },
  {
    href: '/preise',
    label: 'Alle Preise anschauen',
    description: 'Transparente Preise für alle Leistungen',
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Existing content */}
      <section className="section-padding">
        <div className="container-custom">
          <RelatedServices
            services={relatedServices}
            title="Entdecken Sie weitere Services"
          />
        </div>
      </section>
    </>
  );
}
```

**Currently Implemented On:**
- ✓ `/damenfriseur-hamburg-hamm` (Links to Balayage, Haare färben, Preise)
- ✓ `/herrenfriseur-hamburg-hamm` (Links to Haare färben, Leistungen, Preise)
- ✓ `/balayage-hamburg-hamm` (Links to Damenfriseur, Haare färben, Preise)

## 3. Next Steps - Suggested Implementations

### 3.1 Add to Haare färben Page
**File:** `app/haare-faerben-hamburg-hamm/page.tsx`

```typescript
import { RelatedServices } from '@/components/sections/RelatedServices';

const relatedServices = [
  {
    href: '/damenfriseur-hamburg-hamm',
    label: 'Damenfriseur Hamburg Hamm',
    description: 'Kombination aus Schnitt und Färbung',
  },
  {
    href: '/balayage-hamburg-hamm',
    label: 'Balayage Highlights',
    description: 'Natürliche Färbetechnik für strahlende Highlights',
  },
  {
    href: '/leistungen',
    label: 'Alle Leistungen',
    description: 'Komplettes Service-Portfolio ansehen',
  },
];

export default function HaareFaerbenPage() {
  // ... existing code ...

  return (
    <>
      {/* Existing sections */}
      <section className="section-padding">
        <div className="container-custom">
          <RelatedServices
            services={relatedServices}
            title="Verwandte Services"
          />
        </div>
      </section>
    </>
  );
}
```

### 3.2 Home Page Links
**File:** `app/page.tsx`

Add inline links in the hero section and services section:

```typescript
// In ServicesSection or HeroSection
<div className="mt-8 flex gap-4 flex-wrap">
  <Link href="/damenfriseur-hamburg-hamm" className="btn-primary">
    Damenfriseur
  </Link>
  <Link href="/herrenfriseur-hamburg-hamm" className="btn-outline">
    Herrenfriseur
  </Link>
  <Link href="/balayage-hamburg-hamm" className="btn-outline">
    Balayage
  </Link>
  <Link href="/termin-buchen" className="btn-secondary">
    Termin buchen
  </Link>
</div>
```

### 3.3 Leistungen Page Enhancement
**File:** `app/leistungen/page.tsx`

Add anchor links and service page links:

```typescript
<section className="section-padding">
  <div className="container-custom max-w-4xl">
    <div className="grid md:grid-cols-2 gap-12">
      {/* Women Services */}
      <div>
        <h3 className="font-playfair text-2xl font-bold mb-6">Damenfrisuren</h3>
        <ul className="space-y-2 mb-6">
          {SERVICES_DAMEN.map((service) => (
            <li key={service.name} className="flex justify-between">
              <span>{service.name}</span>
              <span className="font-semibold">{service.price}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/damenfriseur-hamburg-hamm"
          className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-2"
        >
          Mehr zur Damenfriseur-Service →
        </Link>
      </div>

      {/* Men Services */}
      <div>
        <h3 className="font-playfair text-2xl font-bold mb-6">Herrenfrisuren</h3>
        <ul className="space-y-2 mb-6">
          {SERVICES_HERREN.map((service) => (
            <li key={service.name} className="flex justify-between">
              <span>{service.name}</span>
              <span className="font-semibold">{service.price}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/herrenfriseur-hamburg-hamm"
          className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-2"
        >
          Mehr zur Herrenfriseur-Service →
        </Link>
      </div>
    </div>

    {/* Special Services */}
    <div className="mt-12 grid md:grid-cols-2 gap-6">
      <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
        <h4 className="font-bold mb-3">Balayage & Färben</h4>
        <p className="text-sm text-gray-600 mb-4">
          Moderne Färbetechniken und professionelle Colorationen
        </p>
        <Link href="/balayage-hamburg-hamm" className="text-amber-600 hover:text-amber-700 font-semibold text-sm">
          Balayage-Services entdecken →
        </Link>
      </div>

      <div className="p-6 bg-teal-50 rounded-xl border border-teal-200">
        <h4 className="font-bold mb-3">Kosmetik</h4>
        <p className="text-sm text-gray-600 mb-4">
          Gesichtspflege, Maniküre & Medical Pediküre
        </p>
        <a href="#kosmetik" className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
          Kosmetik-Services ansehen →
        </a>
      </div>
    </div>
  </div>
</section>
```

### 3.4 Gallery Page Optimization
**File:** `app/galerie/page.tsx`

Add image captions with service links:

```typescript
<div className="grid md:grid-cols-3 gap-6">
  {galleryImages.map((image) => (
    <Link
      key={image.id}
      href={image.serviceLink}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <Image
        src={image.src}
        alt={image.alt}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="font-semibold">{image.serviceTitle}</p>
          <p className="text-sm text-gray-200">{image.description}</p>
        </div>
      </div>
    </Link>
  ))}
</div>
```

### 3.5 Reviews Page Links
**File:** `app/bewertungen/page.tsx`

Add links when reviews mention specific services:

```typescript
{reviews.map((review) => (
  <div key={review.author} className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex gap-1 mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="text-gray-700 mb-4">{review.text}</p>

    {/* Contextual links based on review content */}
    {review.mentionsDamenfriseur && (
      <div className="text-sm">
        <Link href="/damenfriseur-hamburg-hamm" className="text-teal-600 hover:text-teal-700">
          Mehr zu unseren Damenfrisuren
        </Link>
      </div>
    )}

    <div className="mt-4 flex justify-between items-center">
      <p className="text-sm text-gray-500">{review.author} • {review.date}</p>
    </div>
  </div>
))}
```

## 4. Best Practice Checklist

### Link Quality
- [ ] All internal links use Next.js `Link` component
- [ ] Anchor text is descriptive and keyword-rich
- [ ] No generic phrases like "click here"
- [ ] Links are contextually relevant to surrounding content

### Link Attributes
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Links include proper `title` attributes for accessibility
- [ ] Links use `aria-label` where appropriate
- [ ] No broken internal links (404s)

### SEO Optimization
- [ ] Each page has 5-10 contextual internal links
- [ ] Links flow naturally within content
- [ ] Anchor text includes target keywords (but not over-optimized)
- [ ] Related services sections appear on all service pages

### User Experience
- [ ] Breadcrumbs appear on all pages (implemented ✓)
- [ ] Related services section at the end of service pages
- [ ] Navigation is clear and consistent
- [ ] Links are easy to identify (underlined, colored, etc.)

## 5. Monitoring & Maintenance

### Weekly Tasks
- Check Google Search Console for 404 errors
- Verify no broken internal links
- Monitor new page indexation

### Monthly Tasks
- Review internal link distribution
- Check anchor text usage statistics
- Analyze link click data in Google Analytics
- Update link targets if pages move/change

### Tools for Monitoring
```bash
# Check for broken links
npm install -D linkinator

# Run link check
npx linkinator https://ihr-frisuren-studio.de --recursive --skip-mailto

# SEO analysis with Screaming Frog (GUI tool)
# https://www.screamingfrog.co.uk/seo-spider/
```

## 6. Expected Results

After implementing this strategy, you should see:

**Week 1-2:**
- ✓ All pages now display breadcrumbs
- ✓ Service pages have related service links
- ✓ Better site navigation

**Month 1:**
- ↑ 15-25% improvement in crawlability
- ↑ 10-15% increase in pages per session
- ↓ 5-10% decrease in bounce rate

**Month 2-3:**
- ↑ Improved rankings for service keywords
- ↑ 20-30% increase in internal link clicks
- ↑ Better crawl efficiency (reported in GSC)

**Month 3-6:**
- ↑ 15-25% increase in organic traffic
- ↑ Better distribution of link juice across pages
- ↑ Improved rankings across all service pages

---

**Implementation Status:**
- ✓ Breadcrumb component: COMPLETED
- ✓ Related Services component: COMPLETED
- ✓ Damenfriseur page: COMPLETED
- ✓ Herrenfriseur page: COMPLETED
- ✓ Balayage page: COMPLETED
- ⏳ Pending: Haare färben, Homepage, Leistungen, Gallery, Reviews pages

**Next Action:** Implement related services on remaining key pages
