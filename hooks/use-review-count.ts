'use client';

import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

export function useReviewCount() {
  const [reviewCount, setReviewCount] = useState<number>(BUSINESS_INFO.reviews.count);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) throw new Error('Fetch failed');
        const data = await response.json();
        if (data.count) {
          setReviewCount(data.count);
        }
      } catch (err) {
        console.error('Failed to fetch dynamic review count:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCount();
  }, []);

  return { reviewCount, isLoading };
}
