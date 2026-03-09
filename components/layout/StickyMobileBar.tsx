'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function StickyMobileBar() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollThreshold = heroHeight * 1.6;
      const currentScroll = window.scrollY;
      const footer = document.querySelector('footer');

      if (!footer) {
        setIsVisible(currentScroll > scrollThreshold);
        return;
      }

      const footerTop = footer.getBoundingClientRect().top;
      const isFooterVisible = footerTop <= window.innerHeight;

      if (isFooterVisible) {
        setIsVisible(false);
      } else {
        setIsVisible(currentScroll > scrollThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      role="complementary"
      aria-label="Schnell-Kontakt"
      className={`fixed bottom-8 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-center gap-8 px-8">
        <a
          href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
          className="relative group"
          aria-label="WhatsApp Nachricht senden (öffnet in neuem Tab)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/40 active:scale-95 transition-transform">
            <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />

            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-emerald-400/50 blur-md -z-10"
            />

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-2 border-emerald-400"
            />
          </div>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phoneInternational}`}
          className="relative group"
          aria-label={`Jetzt anrufen: ${BUSINESS_INFO.phone}`}
        >
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/40 active:scale-95 transition-transform">
            <Phone className="w-7 h-7 text-white" aria-hidden="true" />

            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute inset-0 rounded-full bg-red-400/50 blur-md -z-10"
            />

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute inset-0 rounded-full border-2 border-red-400"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
