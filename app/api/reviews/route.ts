import { NextResponse } from 'next/server';
import { BUSINESS_INFO } from '@/lib/constants';

export const revalidate = 86400; // Cache for 24 hours

export async function GET() {
  try {
    const response = await fetch(BUSINESS_INFO.googleMapsEmbed, {
      next: { revalidate: 86400 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Google Maps embed');
    }

    const html = await response.text();
    
    // Look for patterns like "277 reviews" or "277 Rezensionen"
    // Google often embeds this in a JSON-like structure or plain text in the HTML
    // We use a broader match for number followed by word Rezensionen/reviews
    const reviewMatch = html.match(/(\d+)[\s\u00A0]+(Rezensionen|reviews)/i);
    
    if (reviewMatch && reviewMatch[1]) {
      const count = parseInt(reviewMatch[1], 10);
      return NextResponse.json({ count });
    }

    // Fallback if regex fails
    return NextResponse.json({ count: BUSINESS_INFO.reviews.count, fallback: true });
  } catch (error) {
    console.error('Error fetching review count:', error);
    return NextResponse.json({ count: BUSINESS_INFO.reviews.count, error: true }, { status: 500 });
  }
}
