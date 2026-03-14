'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const isOpen = activeIndex !== null;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setSlideDirection(null);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const goTo = useCallback((index: number, direction: 'left' | 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setTimeout(() => {
      setActiveIndex(index);
      setSlideDirection(null);
      setIsAnimating(false);
    }, 200);
  }, [isAnimating]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    const prev = (activeIndex - 1 + images.length) % images.length;
    goTo(prev, 'right');
  }, [activeIndex, images.length, goTo]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    const next = (activeIndex + 1) % images.length;
    goTo(next, 'left');
  }, [activeIndex, images.length, goTo]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, goPrev, goNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStartX(null);
  };

  const directions: Array<'up' | 'down' | 'left' | 'right' | 'diagonal-up-left' | 'diagonal-up-right'> = [
    'up', 'left', 'right', 'diagonal-up-left', 'diagonal-up-right', 'up', 'left', 'right', 'down',
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <ScrollAnimationCard
            key={index}
            direction={directions[index % directions.length]}
            delay={index * 0.08}
            hasScale
          >
            <button
              onClick={() => openLightbox(index)}
              className="relative group overflow-hidden rounded-xl shadow-lg aspect-square w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              aria-label={`Foto öffnen: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white font-semibold text-sm">{image.category}</span>
                </div>
              </div>
            </button>
          </ScrollAnimationCard>
        ))}
      </div>

      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie"
        >
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-black/60 border border-white/20 hover:bg-black/80 flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > activeIndex ? 'left' : 'right')}
                className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-white w-3 h-3' : 'bg-white/40 hover:bg-white/70 w-2 h-2'}`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-black/60 border border-white/20 hover:bg-black/80 flex items-center justify-center text-white transition-colors shadow-xl"
            aria-label="Vorheriges Foto"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-black/60 border border-white/20 hover:bg-black/80 flex items-center justify-center text-white transition-colors shadow-xl"
            aria-label="Nächstes Foto"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            className="relative z-[105] w-full h-full flex items-center justify-center px-16 md:px-20"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={closeLightbox}
          >
            <div
              className="flex flex-col items-center max-w-5xl w-full transition-opacity duration-200"
              style={{ opacity: slideDirection ? 0 : 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeIndex].src.replace('w=800', 'w=1400')}
                alt={images[activeIndex].alt}
                decoding="async"
                className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-3 text-center">
                <span className="text-white/70 text-sm">{images[activeIndex].category}</span>
                <span className="text-white/40 text-sm mx-2">·</span>
                <span className="text-white/40 text-sm">{activeIndex + 1} / {images.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
