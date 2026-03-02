'use client';

import { ReactNode } from 'react';

interface MapEmbedProps {
  children: ReactNode;
  className?: string;
}

export function MapEmbed({ children, className = '' }: MapEmbedProps) {
  return (
    <div className={`relative w-full rounded-2xl shadow-xl h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] ${className}`}>
      <div className="absolute inset-0 flex">
        {children}
      </div>
    </div>
  );
}
