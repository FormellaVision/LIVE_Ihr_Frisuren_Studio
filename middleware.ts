import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (Next.js internals like static files and image optimization)
     * - robots.txt, sitemap.xml (metadata files handled via netlify.toml)
     * - static assets (images/fonts/css/js/maps)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)',
  ],
};

export function middleware(request: NextRequest) {
  const { method } = request;

  // 1. Allow GET and HEAD methods
  if (method === 'GET' || method === 'HEAD') {
    return NextResponse.next();
  }

  // 2. Allow OPTIONS and respond with 204 No Content
  if (method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  // 3. For all other methods (POST, PUT, PATCH, DELETE), respond with 405 Method Not Allowed
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
