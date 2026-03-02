'use client';

import Image from 'next/image';

export function TeamCoverImage() {
  return (
    <Image
      src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772474796/Teamfoto2_w3uxfj.webp"
      alt="Unser Team in Hamburg Hamm"
      width={1200}
      height={800}
      className="w-full h-auto"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 85vw"
    />
  );
}
