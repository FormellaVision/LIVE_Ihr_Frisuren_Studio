# Header Structure - Implementation Fixes

This document contains specific code changes to fix all header structure issues.

---

## Fix #1: HeroSection - Remove Duplicate H1

**File:** `components/home/HeroSection.tsx`

**Issue:** Two h1 tags render on same page (mobile + desktop variants)

**Current Code (Lines 100-230):**
```jsx
<div className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* ... other content ... */}

  {/* Desktop h1 (line ~117) */}
  <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white hidden md:block">
    Haare sind Vertrauenssache
  </h1>

  {/* Mobile h1 (line ~219) */}
  <h1 className="text-3xl font-bold text-white block md:hidden">
    Haare sind Vertrauenssache
  </h1>
</div>
```

**Problem:** Two separate h1 elements = two primary headings = SEO/accessibility issue

**Solution - Use Single H1 with Responsive Sizing:**

```jsx
<div className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* ... other content ... */}

  {/* Single h1 with responsive text sizing */}
  <h1 className="font-playfair text-3xl md:text-6xl font-bold text-white">
    Haare sind Vertrauenssache
  </h1>

  {/* Remove the second h1 entirely */}
</div>
```

**Changes:**
- Keep the first h1 with responsive classes
- Remove the duplicate h1 that was hidden on mobile
- Tailwind classes `text-3xl md:text-6xl` handle responsive sizing

**Before/After:**
```
Before: <h1> (mobile hidden) + <h1> (desktop visible) = 2 h1s
After:  <h1 class="text-3xl md:text-6xl"> = 1 responsive h1
```

---

## Fix #2: PriceList Component - Change H3 to H2

**File:** `components/shared/PriceList.tsx`

**Issue:** Primary category sections (Damen, Herren, Kosmetik) incorrectly use h3 instead of h2

**Current Code (Line 40):**
```jsx
export function PriceList({ title, services }: PriceListProps) {
  return (
    <div className="space-y-8">
      <h3 className="font-playfair text-2xl font-bold mb-6 text-gray-900">
        {title}
      </h3>
      {/* ... rest of component ... */}
    </div>
  );
}
```

**Problem:** Title should be h2 (it's a main content section), not h3 (subsection)

**Solution:**
```jsx
export function PriceList({ title, services }: PriceListProps) {
  return (
    <div className="space-y-8">
      <h2 className="font-playfair text-2xl font-bold mb-6 text-gray-900">
        {title}
      </h2>
      {/* ... rest of component ... */}
    </div>
  );
}
```

**Why h2?**
- PriceList is a primary content section on pages
- Title should reflect importance in hierarchy
- Usage on service pages: `<h1>Service</h1> > <h2>Prices</h2>`

---

## Fix #3: Kontakt Page - Add H1 and Fix H3 Nesting

**File:** `app/kontakt/page.tsx`

**Issue:**
- Missing page-level h1
- Multiple h3s without h2 parent (Telefon, WhatsApp, E-Mail are orphaned)

**Current Structure:**
```jsx
export default function KontaktPage() {
  return (
    <>
      <ServicePageHeader title="Kontakt - Friseur Hamburg Hamm" />

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          {/* Multiple h3s with no h2 parent */}
          <h3 className="...">Telefon</h3>
          {/* phone content */}

          <h3 className="...">WhatsApp</h3>
          {/* whatsapp content */}

          <h3 className="...">E-Mail</h3>
          {/* email content */}
        </div>
      </section>
    </>
  );
}
```

**Problem:**
- ServicePageHeader renders h1 ✓
- But h3s directly under page with no h2 = broken hierarchy

**Solution 1: Add H2 Wrapper (Recommended)**

```jsx
export default function KontaktPage() {
  return (
    <>
      <ServicePageHeader title="Kontakt - Friseur Hamburg Hamm" />
      {/* This renders h1 */}

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          {/* Add h2 section */}
          <h2 className="font-playfair text-3xl font-bold mb-12">
            Kontaktieren Sie uns
          </h2>

          {/* Now h3s have proper h2 parent */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="...">Telefon</h3>
              {/* phone content */}
            </div>

            <div>
              <h3 className="...">WhatsApp</h3>
              {/* whatsapp content */}
            </div>

            <div>
              <h3 className="...">E-Mail</h3>
              {/* email content */}
            </div>

            <div>
              <h3 className="...">Adresse</h3>
              {/* address content */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

**Hierarchy After Fix:**
```
h1: Kontakt - Friseur Hamburg Hamm (in ServicePageHeader)
  h2: Kontaktieren Sie uns
    h3: Telefon
    h3: WhatsApp
    h3: E-Mail
    h3: Adresse
```

---

## Fix #4: Leistungen Page - Add H2 Wrapper for Orphaned H3s

**File:** `app/leistungen/page.tsx`

**Issue:**
- Missing page-level h1
- h3 "Afterwork Specials" has no h2 parent

**Current Code (Lines 40-50):**
```jsx
export default function LeistungenPage() {
  return (
    <>
      <ServicePageHeader title="Leistungen & Preise" />
      {/* renders h1 */}

      <section className="section-padding">
        <div className="container-custom">
          {/* h3 with no h2 parent = BROKEN */}
          <h3 className="font-playfair text-2xl font-bold mb-6">
            Afterwork Specials
          </h3>
          {/* ... content ... */}
        </div>
      </section>
    </>
  );
}
```

**Solution: Wrap in H2 Section**

```jsx
export default function LeistungenPage() {
  return (
    <>
      <ServicePageHeader title="Leistungen & Preise" />
      {/* renders h1 */}

      <section className="section-padding">
        <div className="container-custom">
          {/* Add h2 wrapper */}
          <h2 className="font-playfair text-3xl font-bold mb-8">
            Spezielle Angebote
          </h2>

          {/* Change h3 to h3 under h2 */}
          <h3 className="font-playfair text-2xl font-bold mb-6">
            Afterwork Specials
          </h3>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
            {/* ... content ... */}
          </div>
        </div>
      </section>
    </>
  );
}
```

**Hierarchy After Fix:**
```
h1: Leistungen & Preise (in ServicePageHeader)
  h2: Services by type (other content)
  h2: Spezielle Angebote
    h3: Afterwork Specials
```

---

## Fix #5: Service Pages - Convert First H3 to H2

**Files Affected:**
- `app/damenfriseur-hamburg-hamm/page.tsx` (features section)
- `app/herrenfriseur-hamburg-hamm/page.tsx` (features section)
- `app/balayage-hamburg-hamm/page.tsx` (features section)
- `app/haare-faerben-hamburg-hamm/page.tsx`

**Issue:** First content section after ServicePageHeader h1 uses h3 instead of h2

**Current Example (Damenfriseur Page, Line ~85):**
```jsx
export default function DamenfriseurPage() {
  return (
    <>
      <ServicePageHeader title="Damenfriseur Hamburg Hamm" />
      {/* renders h1 */}

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          {/* h3 without h2 parent = BROKEN */}
          <h3 className="font-playfair text-2xl font-bold mb-4">
            Warum Ihr Frisuren-Studio für Damen?
          </h3>
        </div>
      </section>
    </>
  );
}
```

**Solution:**

```jsx
export default function DamenfriseurPage() {
  return (
    <>
      <ServicePageHeader title="Damenfriseur Hamburg Hamm" />
      {/* renders h1 */}

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          {/* Change h3 to h2 */}
          <h2 className="font-playfair text-2xl font-bold mb-4">
            Warum Ihr Frisuren-Studio für Damen?
          </h2>

          {/* Content can stay the same */}
          <ul className="space-y-3">
            {[
              'Meisterqualität seit 2004 in Hamburg Hamm',
              'Spezialisiert auf Balayage und moderne Färbetechniken',
              'Hochwertige Produkte für langanhaltende Ergebnisse',
              'Mehrsprachige Beratung (Deutsch, Englisch, Türkisch, Persisch)',
              'Afterwork-Termine nach 19:00 Uhr möglich',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
```

**Apply to All Service Pages:**
- Damenfriseur
- Herrenfriseur
- Balayage
- Haare färben

---

## Fix #6: Balayage Page - Fix H4 Nesting

**File:** `app/balayage-hamburg-hamm/page.tsx`

**Issue:** Orphaned h4 tag (line 153) should be h3

**Current Code (Lines 134-148):**
```jsx
<div className="grid md:grid-cols-2 gap-8">
  <div>
    <p className="text-gray-700 mb-4">
      Balayage (französisch für "fegen")...
    </p>
  </div>
  <div>
    {/* h4 without h3 parent = WRONG */}
    <h4 className="font-bold mb-3">
      Vorteile von Balayage:
    </h4>
    <ul className="space-y-2">
      {/* ... items ... */}
    </ul>
  </div>
</div>
```

**Solution: Change h4 to h3**

```jsx
<div className="grid md:grid-cols-2 gap-8">
  <div>
    <p className="text-gray-700 mb-4">
      Balayage (französisch für "fegen")...
    </p>
  </div>
  <div>
    {/* Change h4 to h3 */}
    <h3 className="font-bold mb-3">
      Vorteile von Balayage:
    </h3>
    <ul className="space-y-2">
      {/* ... items ... */}
    </ul>
  </div>
</div>
```

**Why h3?**
- h4 implies h3 parent (which doesn't exist)
- "Vorteile" is subsection of "Was ist Balayage?" h2
- Should be h3, not h4

---

## Implementation Steps

### Step 1: Backup Current Code
```bash
git add -A
git commit -m "backup: before header structure fixes"
```

### Step 2: Apply Fix #1 (HeroSection)
- Edit: `components/home/HeroSection.tsx`
- Change: Remove duplicate h1, keep single responsive h1
- Test: Verify only 1 h1 in DevTools

### Step 3: Apply Fix #2 (PriceList)
- Edit: `components/shared/PriceList.tsx`
- Change: h3 → h2
- Test: Check all price sections show h2

### Step 4: Apply Fix #3 (Kontakt Page)
- Edit: `app/kontakt/page.tsx`
- Change: Add h2 wrapper for h3 contact methods
- Test: Verify h1 > h2 > h3 hierarchy

### Step 5: Apply Fix #4 (Leistungen Page)
- Edit: `app/leistungen/page.tsx`
- Change: Add h2 wrapper for "Afterwork Specials" h3
- Test: Verify no orphaned h3s

### Step 6: Apply Fix #5 (Service Pages)
- Edit all 4 service pages
- Change: First h3 → h2 in each
- Test: Each page shows h1 > h2 > h3 hierarchy

### Step 7: Apply Fix #6 (Balayage H4)
- Edit: `app/balayage-hamburg-hamm/page.tsx`
- Change: h4 → h3
- Test: No orphaned h4s

### Step 8: Build & Test
```bash
npm run build
npm run typecheck
```

### Step 9: Manual Testing

**Browser DevTools - Outline View:**
1. Right-click any page → Inspect
2. Search for: "Outline" or use accessibility panel
3. Verify all pages show proper h1 > h2 > h3 structure

**Screen Reader Test (VoiceOver on Mac):**
```
Cmd+F5 → Enable VoiceOver
VO+U → Open rotor (Web Rotor)
Select Headings
Navigate through all headings
Verify logical order and hierarchy
```

**Automated Check (Lighthouse):**
1. Open DevTools → Lighthouse tab
2. Run Accessibility audit
3. Check: "Heading levels do not increase by more than one"
4. Score should improve to 95+

---

## Verification Checklist

After implementing all fixes:

- [ ] HeroSection has single h1 (not duplicated)
- [ ] PriceList renders h2 (not h3)
- [ ] Kontakt page has h1 > h2 > h3 structure
- [ ] Leistungen page has no orphaned h3s
- [ ] All 4 service pages have h1 > h2 > h3 structure
- [ ] Balayage page has h3 (not h4) for subsections
- [ ] `npm run build` completes without errors
- [ ] DevTools Outline shows proper hierarchy on all pages
- [ ] Lighthouse accessibility score ≥ 95
- [ ] Screen reader correctly announces all headings

---

## File Summary

| File | Change | Line(s) |
|------|--------|---------|
| `components/home/HeroSection.tsx` | Remove duplicate h1 | ~117, 219 |
| `components/shared/PriceList.tsx` | h3 → h2 | 40 |
| `app/kontakt/page.tsx` | Add h2 wrapper for h3s | Various |
| `app/leistungen/page.tsx` | Add h2 wrapper for h3 | Various |
| `app/damenfriseur-hamburg-hamm/page.tsx` | h3 → h2 in features | ~97 |
| `app/herrenfriseur-hamburg-hamm/page.tsx` | h3 → h2 in features | ~97 |
| `app/balayage-hamburg-hamm/page.tsx` | h3 → h2 + h4 → h3 | ~97, 153 |
| `app/haare-faerben-hamburg-hamm/page.tsx` | h3 → h2 (if applicable) | Various |

---

**Ready to implement?**

Apply these fixes in order, test after each major change, and verify with automated tools before committing.
