import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    // Apply middleware to all paths except:
    // - Next internals (_next)
    // - API routes (api)
    // - static assets (images/fonts/css/js/maps)
    '/((?!api|_next|.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|woff|woff2|ttf|otf)$).*)',
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
