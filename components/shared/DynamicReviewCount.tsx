'use client';

import { useReviewCount } from '@/hooks/use-review-count';

interface DynamicReviewCountProps {
  fallback?: number;
  suffix?: string;
  className?: string;
}

export function DynamicReviewCount({ 
  fallback, 
  suffix = '+', 
  className = '' 
}: DynamicReviewCountProps) {
  const { reviewCount } = useReviewCount();
  
  return (
    <span className={className}>
      {reviewCount || fallback}{suffix}
    </span>
  );
}
