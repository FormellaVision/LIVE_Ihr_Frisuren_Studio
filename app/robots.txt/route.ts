import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${origin}/sitemap.xml
Sitemap: ${origin}/image-sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}

export async function HEAD(request: NextRequest) {
  // GET and HEAD are treated similarly, Next.js handles stripping the body for HEAD.
  return GET(request);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex',
    },
  });
}

export async function POST() {
  return new NextResponse(null, {
    status: 405,
    statusText: 'Method Not Allowed',
    headers: {
      'Allow': 'GET, HEAD, OPTIONS',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex',
    },
  });
}

// Fallback for other methods
export async function PUT() { return POST(); }
export async function PATCH() { return POST(); }
export async function DELETE() { return POST(); }
