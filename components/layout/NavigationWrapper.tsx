'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';

export function NavigationWrapper() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return <Navigation />;
}
