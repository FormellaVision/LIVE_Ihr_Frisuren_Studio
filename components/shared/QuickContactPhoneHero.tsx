'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneOff, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';
import { PaymentBadges } from '@/components/shared/PaymentBadges';
import { SwipeToAnswerSlider } from '@/components/shared/SwipeToAnswerSlider';

export function QuickContactPhoneHero() {
  const sliderResetRef = useRef<() => void>(() => {});

  const handleAnswer = () => {
    setTimeout(() => {
      sliderResetRef.current();
    }, 100);
    window.location.href = `tel:${BUSINESS_INFO.phoneInternational}`;
  };

  const handleDecline = () => {
    sliderResetRef.current();
    const nextSection = document.querySelector('section:not([aria-label="Schnellkontakt – Anruf von Ihr Frisuren-Studio"])');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section aria-label="Schnellkontakt – Anruf von Ihr Frisuren-Studio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full max-w-lg mx-auto px-4 sm:px-8 py-8 sm:py-12 md:pt-8">

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-light text-white/90 tracking-wide">
              Eingehender Anruf
            </span>
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-8">

          <motion.div
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
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

            <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dqkld61zu/image/upload/v1770246715/ihrfrisurenstudio_Logo_Wei%C3%9Ferbg_az4ghu.png"
                alt="Ihr Frisuren-Studio Logo"
                width={400}
                height={400}
                priority
                unoptimized
                className="w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 object-cover rounded-full drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-lg px-2 sm:px-4"
          >
            <h1 className="sr-only">Schnellkontakt – Friseur Hamburg Hamm</h1>
            <p className="text-2xl xs:text-3xl sm:text-4xl font-light text-white leading-tight mb-2 break-words">
              Haare sind Vertrauenssache.
            </p>
            <p className="text-2xl xs:text-3xl sm:text-4xl bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300 bg-clip-text text-transparent leading-tight font-light tracking-tight break-words">
              Überlass sie nicht dem Zufall.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full space-y-8"
        >

          <div className="w-full px-2">
            <SwipeToAnswerSlider onAnswer={handleAnswer} resetRef={sliderResetRef} />
          </div>

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

          <PaymentBadges variant="dark" showLabel={true} className="pt-2" />
        </motion.div>

      </div>
    </section>
  );
}
