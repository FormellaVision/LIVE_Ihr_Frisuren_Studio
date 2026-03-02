'use client';

import Image from 'next/image';

export function TeamCoverImage() {
  return (
    <Image
      src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772474796/Teamfoto2_w3uxfj.webp"
      alt="Unser Team in Hamburg Hamm"
      fill
      className="object-cover"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
    />
  );
}
