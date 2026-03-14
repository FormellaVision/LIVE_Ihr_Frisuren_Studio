import { BUSINESS_INFO } from '@/lib/constants';

const baseUrl = BUSINESS_INFO.website;

const imageEntries: Array<{ loc: string; images: Array<{ loc: string; title: string; caption?: string }> }> = [
  {
    loc: `${baseUrl}/`,
    images: [
      {
        loc: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1773015024/Teamfoto2_w3uxfj.webp',
        title: 'Team Ihr Frisuren-Studio Hamburg Hamm',
        caption: 'Das Team Ihres Friseursalons in Hamburg Hamm – Meisterbetrieb seit 2004',
      },
      {
        loc: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=828',
        title: 'Friseursalon Ihr Frisuren-Studio Hamburg Hamm',
        caption: 'Premium Friseursalon für Damen und Herren in Hamburg Hamm',
      },
    ],
  },
  {
    loc: `${baseUrl}/galerie`,
    images: [
      {
        loc: 'https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg?w=800',
        title: 'Balayage Frisur Hamburg Hamm',
        caption: 'Balayage Coloration – Ihr Frisuren-Studio Hamburg Hamm',
      },
      {
        loc: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?w=800',
        title: 'Damenhaarschnitt Hamburg Hamm',
        caption: 'Professioneller Damenhaarschnitt beim Meisterbetrieb in Hamburg Hamm',
      },
      {
        loc: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?w=800',
        title: 'Herrenhaarschnitt Hamburg Hamm',
        caption: 'Moderner Herrenhaarschnitt – Ihr Frisuren-Studio Hamburg Hamm',
      },
      {
        loc: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?w=800',
        title: 'Friseursalon Interieur Hamburg Hamm',
        caption: 'Ihr Frisuren-Studio in Hamburg Hamm – moderner Salon in der Nähe der U-Bahn',
      },
      {
        loc: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?w=800',
        title: 'Haar-Styling Hamburg Hamm',
        caption: 'Professionelles Haar-Styling beim Meisterbetrieb in Hamburg Hamm',
      },
      {
        loc: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=800',
        title: 'Haarcoloration Hamburg Hamm',
        caption: 'Hochwertige Haarcoloration – Ihr Frisuren-Studio Hamburg Hamm',
      },
      {
        loc: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?w=800',
        title: 'Friseurbehandlung Hamburg Hamm',
        caption: 'Fachgerechte Friseurbehandlung im Meisterbetrieb Hamburg Hamm',
      },
      {
        loc: 'https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg?w=800',
        title: 'Haarpflege Hamburg Hamm',
        caption: 'Professionelle Haarpflege – Ihr Frisuren-Studio Hamburg Hamm',
      },
      {
        loc: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?w=800',
        title: 'Haarfarbe Hamburg Hamm',
        caption: 'Individuelle Haarfarbe nach Wunsch – Meisterbetrieb Hamburg Hamm',
      },
    ],
  },
  {
    loc: `${baseUrl}/damenfriseur-hamburg-hamm`,
    images: [
      {
        loc: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?w=1920',
        title: 'Damenfriseur Hamburg Hamm',
        caption: 'Professioneller Damenfriseur in Hamburg Hamm – Ihr Frisuren-Studio',
      },
    ],
  },
  {
    loc: `${baseUrl}/herrenfriseur-hamburg-hamm`,
    images: [
      {
        loc: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?w=1920',
        title: 'Herrenfriseur Hamburg Hamm',
        caption: 'Moderner Herrenfriseur in Hamburg Hamm – Ihr Frisuren-Studio',
      },
    ],
  },
  {
    loc: `${baseUrl}/balayage-hamburg-hamm`,
    images: [
      {
        loc: 'https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg?w=1920',
        title: 'Balayage Hamburg Hamm',
        caption: 'Balayage Spezialist in Hamburg Hamm – Ihr Frisuren-Studio',
      },
    ],
  },
  {
    loc: `${baseUrl}/haare-faerben-hamburg-hamm`,
    images: [
      {
        loc: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=1920',
        title: 'Haare färben Hamburg Hamm',
        caption: 'Professionelles Haarefärben in Hamburg Hamm – Ihr Frisuren-Studio',
      },
    ],
  },
  {
    loc: `${baseUrl}/ueber-uns`,
    images: [
      {
        loc: 'https://res.cloudinary.com/dqkld61zu/image/upload/v1773015024/Teamfoto2_w3uxfj.webp',
        title: 'Team Ihr Frisuren-Studio Hamburg Hamm',
        caption: 'Unser erfahrenes Team im Friseursalon Hamburg Hamm',
      },
    ],
  },
  {
    loc: `${baseUrl}/karriere`,
    images: [
      {
        loc: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?w=1600',
        title: 'Karriere Friseur Hamburg Hamm',
        caption: 'Stellenangebote für Friseure in Hamburg Hamm – Ihr Frisuren-Studio',
      },
    ],
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${imageEntries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${entry.images
  .map(
    (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${img.caption ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
