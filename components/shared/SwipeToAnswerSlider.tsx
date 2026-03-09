'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

interface SwipeToAnswerSliderProps {
  onAnswer: () => void;
  resetRef: React.MutableRefObject<() => void>;
}

export function SwipeToAnswerSlider({
  onAnswer,
  resetRef
}: SwipeToAnswerSliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const maxPosition = trackRef.current ? trackRef.current.offsetWidth - 56 : 0;
  const TRIGGER_THRESHOLD = 0.85;

  const resetSlider = useCallback(() => {
    setPosition(0);
    setHasAnswered(false);
    setIsDragging(false);
  }, []);

  useEffect(() => {
    resetRef.current = resetSlider;
  }, [resetSlider, resetRef]);

  const handleStart = (clientX: number) => {
    if (hasAnswered) return;
    setIsDragging(true);
    startXRef.current = clientX - position;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || hasAnswered) return;

    const newPosition = clientX - startXRef.current;
    const clampedPosition = Math.max(0, Math.min(newPosition, maxPosition));
    setPosition(clampedPosition);

    if (clampedPosition >= maxPosition * TRIGGER_THRESHOLD) {
      setHasAnswered(true);
      setIsDragging(false);
      onAnswer();
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (position < maxPosition * TRIGGER_THRESHOLD) {
      setPosition(0);
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
  }, [isDragging, position, hasAnswered]);

  return (
    <div
      ref={trackRef}
      className="relative w-full h-16 rounded-full bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group"
    >
      <motion.div
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-1/2"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-16">
        <span className="text-white/80 text-xs sm:text-sm font-light tracking-wider">
          Jetzt antworten
        </span>
      </div>

      <div
        ref={sliderRef}
        className="absolute top-2 left-2 h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 cursor-grab active:cursor-grabbing z-10 transition-colors hover:from-emerald-400 hover:to-emerald-500"
        style={{
          transform: `translateX(${position}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onAnswer();
          }
        }}
        aria-label="Schieben oder Enter drücken zum Anrufen"
        role="button"
        tabIndex={0}
      >
        <Phone className="w-5 h-5 text-white" />

        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-emerald-400/50 blur-sm -z-10"
        />
      </div>
    </div>
  );
}
