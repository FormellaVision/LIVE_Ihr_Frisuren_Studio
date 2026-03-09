'use client';

import { useState, useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function CallSliderCTA() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const maxPosition = trackRef.current ? trackRef.current.offsetWidth - 64 : 0;

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX - position;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;

    const newPosition = clientX - startXRef.current;
    const clampedPosition = Math.max(0, Math.min(newPosition, maxPosition));
    setPosition(clampedPosition);

    if (clampedPosition >= maxPosition * 0.85) {
      handleComplete();
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;

    if (position < maxPosition * 0.85) {
      setPosition(0);
    }
    setIsDragging(false);
  };

  const handleComplete = () => {
    window.location.href = `tel:${BUSINESS_INFO.phoneInternational}`;
  };

  const handleClick = () => {
    if (!isDragging) {
      handleComplete();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
      handleMove(e.touches[0].clientX);
    };
    const handleMouseUp = () => handleEnd();
    const handleTouchEnd = () => handleEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, position]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <p className="text-center text-xs text-white/50 mb-3 font-light tracking-wide">
        Ihr Frisuren-Studio ruft an …
      </p>

      <div
        ref={trackRef}
        className="relative h-16 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 overflow-hidden"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
            animation: 'shimmer 2s infinite',
          }}
        />

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center pointer-events-none">
          <span className="text-white/70 text-sm font-medium tracking-wide">
            Termin vereinbaren
          </span>
        </div>

        <div
          ref={sliderRef}
          className="absolute top-1 left-1 h-14 w-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center cursor-grab active:cursor-grabbing transition-shadow duration-200"
          style={{
            transform: `translateX(${position}px)`,
            boxShadow: isDragging
              ? '0 8px 24px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)'
              : '0 4px 12px rgba(16, 185, 129, 0.4), 0 0 20px rgba(16, 185, 129, 0.2)',
          }}
          onMouseDown={(e) => handleStart(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onClick={handleClick}
          aria-label="Termin vereinbaren – Anruf starten"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleComplete();
            }
          }}
        >
          <Phone className="w-6 h-6 text-white" />

          <div
            className="absolute inset-0 rounded-full bg-emerald-400/50"
            style={{
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
