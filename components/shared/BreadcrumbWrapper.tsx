'use client';

import { usePathname } from 'next/navigation';
import { Breadcrumb } from './Breadcrumb';

export function BreadcrumbWrapper() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return <Breadcrumb />;
}
