'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ScrollAnimationCard } from '@/components/shared/ScrollAnimationCard';
import { TEAM_MEMBERS } from '@/lib/constants';

export function TeamLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const isOpen = activeIndex !== null;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setSlideDirection(null);
  };

  const closeLightbox = () => setActiveIndex(null);

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
    goTo((activeIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length, 'right');
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    goTo((activeIndex + 1) % TEAM_MEMBERS.length, 'left');
  }, [activeIndex, goTo]);

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
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStartX(null);
  };

  const directions: Array<'left' | 'right' | 'up'> = ['left', 'right', 'up'];

  const activeMembers = TEAM_MEMBERS as unknown as typeof TEAM_MEMBERS[number][];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {TEAM_MEMBERS.map((member, index) => (
          <ScrollAnimationCard
            key={index}
            direction={directions[index % directions.length]}
            delay={index * 0.1}
            hasScale
            hasRotation
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
              <button
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-label={`Foto von ${member.name} vergrößern`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium">{member.name}</span>
                </div>
              </button>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-playfair text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3 text-base">{member.role}</p>
                <p className="text-gray-600 mb-4 flex-grow">{member.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.languages.map((lang, idx) => (
                    <span key={idx} className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimationCard>
        ))}

        <ScrollAnimationCard direction="up" delay={TEAM_MEMBERS.length * 0.1} hasScale hasRotation>
          <Link
            href="/karriere"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-teal-600 to-amber-500 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dqkld61zu/image/upload/v1772473119/Name_wrzzyw.webp"
                alt="Karriere bei Ihr Frisuren-Studio"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8 flex flex-col flex-grow items-center text-center">
              <h3 className="font-playfair text-2xl font-bold mb-2">Hier könnte dein Name stehen</h3>
              <p className="text-teal-600 font-semibold mb-3 text-base">Bewerbung</p>
              <p className="text-gray-600 mb-6 flex-grow">
                Werde Teil unseres Teams und entdecke die Chance auf deine Traumposition
              </p>
              <span className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-teal-700 transition-colors">
                Jetzt bewerben
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </ScrollAnimationCard>
      </div>

      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Team Foto"
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={closeLightbox} />

          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-black/60 border border-white/20 hover:bg-black/80 flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-2">
            {TEAM_MEMBERS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > (activeIndex ?? 0) ? 'left' : 'right')}
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
              className="flex flex-col items-center max-w-lg w-full transition-opacity duration-200"
              style={{ opacity: slideDirection ? 0 : 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-square max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={TEAM_MEMBERS[activeIndex].image}
                  alt={TEAM_MEMBERS[activeIndex].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 500px"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{TEAM_MEMBERS[activeIndex].name}</p>
                <p className="text-teal-400 text-sm mt-1">{TEAM_MEMBERS[activeIndex].role}</p>
                <p className="text-white/40 text-sm mt-2">{activeIndex + 1} / {TEAM_MEMBERS.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
