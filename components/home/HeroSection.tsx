'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneOff, Scissors, Award, Star, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';
import { PaymentBadges } from '@/components/shared/PaymentBadges';

export function HeroSection() {
  const sliderResetRef = useRef<() => void>(() => {});

  const handleAnswer = () => {
    setTimeout(() => {
      sliderResetRef.current();
    }, 100);
    window.location.href = `tel:${BUSINESS_INFO.phoneInternational}`;
  };

  const handleDecline = () => {
    sliderResetRef.current();
    const nextSection = document.getElementById('usp-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Call Screen Version */}
      <section aria-label="Willkommen bei Ihr Frisuren-Studio Hamburg Hamm" className="md:hidden relative h-screen flex items-center justify-center overflow-hidden">
        {/* Authentic Call Screen Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-between h-full w-full max-w-lg mx-auto px-4 sm:px-8 py-12 sm:py-16">

          {/* Top Section - Incoming Call Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-light text-white/90 tracking-wide">
                Eingehender Anruf
              </span>
            </div>
          </motion.div>

          {/* Middle Section - Caller Info */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">

            {/* Avatar with pulse animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Outer pulse rings */}
              <div className="absolute inset-0 -m-12" aria-hidden="true">
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1.4, 1],
                    opacity: [0.5, 0, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1.3, 1],
                    opacity: [0.6, 0, 0, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-0 rounded-full bg-emerald-500/30 blur-lg"
                />
              </div>

              {/* Main Avatar Circle - Logo only, no white background */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dqkld61zu/image/upload/v1770241885/ihrfrisurenstudio_Logo_Wei%C3%9Ferbg_az4ghu.png"
                  alt="Ihr Frisuren-Studio Logo"
                  width={320}
                  height={320}
                  className="w-64 h-64 sm:w-72 sm:h-72 object-contain"
                />
              </div>
            </motion.div>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center max-w-lg px-2 sm:px-4"
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-light text-white leading-tight mb-2 md:hidden break-words">
                Haare sind Vertrauenssache.
              </h1>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300 bg-clip-text text-transparent leading-tight font-light tracking-tight break-words">
                Überlass sie nicht dem Zufall.
              </h2>
            </motion.div>
          </div>

          {/* Bottom Section - Call Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-full space-y-8"
          >

            {/* Swipe to Answer Slider */}
            <div className="w-full px-2">
              <SwipeToAnswerSlider onAnswer={handleAnswer} resetRef={sliderResetRef} />
            </div>

            {/* Secondary Actions */}
            <div className="flex items-center justify-center gap-6">
              <motion.button
                onClick={handleDecline}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 group"
                aria-label="Ablehnen"
              >
                <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                  <PhoneOff className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-xs text-white/60 font-light">Ablehnen</span>
              </motion.button>

              <motion.a
                href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 group"
                aria-label="Nachricht hinterlassen"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <span className="text-xs text-white/60 font-light">Nachricht</span>
              </motion.a>
            </div>

            {/* Payment Trust Signals */}
            <PaymentBadges variant="dark" showLabel={true} className="pt-2" />
          </motion.div>

        </div>
      </section>

      {/* Desktop Version - Premium Hero */}
      <section aria-label="Willkommen bei Ihr Frisuren-Studio Hamburg Hamm" className="hidden md:flex relative h-screen items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Premium Friseursalon Ihr Frisuren-Studio Hamburg Hamm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Radial Overlay - Center Focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.7)_100%)]" />

        <div className="relative z-10 container mx-auto max-w-7xl px-6 py-12 h-full flex flex-col">
          <div className="max-w-5xl mx-auto flex-1 flex flex-col justify-center">

            {/* Premium Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center mb-10"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-md" style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.8)' }}>
                <Award className="w-4 h-4 text-amber-400 drop-shadow-lg" />
                <span className="text-xs font-light text-white tracking-wider uppercase">
                  Meisterbetrieb seit {BUSINESS_INFO.founded}
                </span>
                <span className="w-px h-4 bg-white/30" />
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-lg" />
                  <span className="text-xs font-light text-white">
                    {BUSINESS_INFO.reviews.rating} ({BUSINESS_INFO.reviews.count}+ Bewertungen)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Headline - Premium Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-center mb-6 px-4 max-w-full"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.15] tracking-tight mb-4 break-words" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 4px 30px rgba(0, 0, 0, 0.6)' }}>
                Haare sind Vertrauenssache.
                <br />
                <span className="text-amber-400 font-normal" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 4px 30px rgba(0, 0, 0, 0.6)' }}>
                  Überlass sie nicht dem Zufall.
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide" style={{ textShadow: '0 3px 25px rgba(0, 0, 0, 0.9), 0 0 40px rgba(251, 146, 60, 0.3)' }}>
                Dein Friseur in Hamburg Hamm
              </h2>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mb-12"
            >
              <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-medium transition-all duration-300 px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
                  aria-label="Jetzt anrufen"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base whitespace-nowrap">Jetzt anrufen</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium transition-all duration-300 px-6 sm:px-10 py-3 sm:py-4 rounded-full border border-white/20 hover:border-white/30 hover:scale-105"
                  aria-label="WhatsApp schreiben"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base whitespace-nowrap">WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Premium Stats Grid - Positioned at Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-8 w-full mt-auto"
            >
            <div className="grid grid-cols-3 gap-8 max-w-3xl w-full pt-12 border-t border-white/10">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-all duration-300 group-hover:scale-110">
                  20+
                </div>
                <div className="text-xs uppercase text-white/50 font-light tracking-widest">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-all duration-300 group-hover:scale-110">
                  {BUSINESS_INFO.reviews.count}+
                </div>
                <div className="text-xs uppercase text-white/50 font-light tracking-widest">
                  Zufriedene Kunden
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-extralight text-amber-400 mb-2 transition-all duration-300 group-hover:scale-110">
                  4
                </div>
                <div className="text-xs uppercase text-white/50 font-light tracking-widest">
                  Sprachen
                </div>
              </div>
            </div>
            <PaymentBadges variant="dark" showLabel={true} />
            </motion.div>
        </div>
      </section>
    </>
  );
}

function SwipeToAnswerSlider({
  onAnswer,
  resetRef
}: {
  onAnswer: () => void;
  resetRef: React.MutableRefObject<() => void>;
}) {
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
      e.preventDefault();
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

      {/* Animated shimmer effect */}
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

      {/* Text Label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-16">
        <span className="text-white/80 text-xs sm:text-sm font-light tracking-wider">
          Jetzt antworten
        </span>
      </div>

      {/* Swipeable Button - Only draggable, no click */}
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

        {/* Glow effect */}
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
