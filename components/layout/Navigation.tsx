'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Zap } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isSchnellkontaktPage = pathname === '/schnellkontakt';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      if (isMobile && isSchnellkontaktPage) {
        const heroHeight = window.innerHeight;
        const scrollThreshold = heroHeight * 0.8;
        setIsMobileHeaderVisible(scrollY > scrollThreshold);
      }

      const heroSection = document.querySelector('[data-hero-section]');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setShowNavLogo(rect.bottom <= 0);
      } else {
        const breadcrumbLogoEl = document.querySelector('[data-breadcrumb-logo]');
        if (breadcrumbLogoEl) {
          const rect = breadcrumbLogoEl.getBoundingClientRect();
          setShowNavLogo(rect.bottom <= 64);
        } else {
          setShowNavLogo(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isSchnellkontaktPage]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: isMobile && isSchnellkontaktPage ? (isMobileHeaderVisible ? 0 : -80) : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          hasScrolled
            ? 'md:backdrop-blur-sm md:border-b md:border-white/20 md:shadow-lg md:shadow-gray-200/10'
            : 'md:bg-white md:shadow-md'
        )}
        style={
          hasScrolled && !isMobile
            ? {
                backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                backgroundAttachment: 'fixed'
              }
            : undefined
        }
      >
        <nav className="max-w-7xl mx-auto px-4" role="navigation" aria-label="Hauptnavigation">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={false}
              animate={{ opacity: (isSchnellkontaktPage ? showNavLogo : true) ? 1 : 0, scale: (isSchnellkontaktPage ? showNavLogo : true) ? 1 : 0.8 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              style={{ pointerEvents: (isSchnellkontaktPage ? showNavLogo : true) ? 'auto' : 'none' }}
            >
              <Link href="/" className="flex items-center gap-3 z-10">
                <Image
                  src="https://res.cloudinary.com/dqkld61zu/image/upload/v1770245111/Ihr-Frisuren-Studio_transparent_obd4aa.png"
                  alt="Ihr Frisuren-Studio Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
                <div className="hidden sm:block">
                  <span className="font-playfair text-xl font-bold text-gray-900">
                    Ihr Frisuren-Studio
                  </span>
                  <span className="block text-xs text-gray-500">
                    Hamburg Hamm | Seit 2004
                  </span>
                </div>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'relative text-base font-medium transition-all duration-300 py-1',
                    pathname === link.href
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-700 hover:text-gray-900',
                    'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-700 after:transition-transform after:duration-300',
                    pathname === link.href
                      ? 'after:scale-x-100 after:origin-left'
                      : 'after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                aria-label={`Jetzt anrufen: ${BUSINESS_INFO.phone}`}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 px-4 lg:px-6 py-2.5 rounded-full font-medium text-white shadow-lg hover:from-amber-600 hover:to-amber-700 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 relative z-10 flex-shrink-0" aria-hidden="true" />
                <span className="relative z-10 text-sm lg:text-base whitespace-nowrap">Termin: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 rounded-lg bg-white/50 hover:bg-white/80"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Hauptmenü"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-gray-900/96 backdrop-blur-2xl flex flex-col items-center justify-center px-8 space-y-5"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 z-[101] min-w-[44px] min-h-[44px] p-3 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-900 hover:bg-white hover:border-teal-700 hover:text-teal-700 shadow-xl transition-all duration-300"
              aria-label="Menü schließen"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            <motion.div
              className="w-full max-w-md space-y-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'block w-full px-6 sm:px-8 py-4 sm:py-5 border-2 rounded-2xl text-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 break-words',
                      pathname === link.href
                        ? 'bg-teal-500/95 border-teal-400 text-white shadow-teal-500/50'
                        : 'bg-white/90 border-gray-200 text-gray-900 hover:bg-white hover:border-teal-700 hover:text-teal-700 hover:shadow-teal-700/30'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="pt-4 space-y-3"
              >
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  onClick={closeMenu}
                  aria-label={`Jetzt anrufen: ${BUSINESS_INFO.phone}`}
                  className="group relative overflow-hidden block w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-center text-lg sm:text-xl font-bold text-white shadow-2xl shadow-amber-500/50 hover:from-amber-600 hover:to-amber-700 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                    <span className="break-words">Jetzt anrufen</span>
                  </span>
                </a>
                <Link
                  href="/schnellkontakt"
                  onClick={closeMenu}
                  className="group relative overflow-hidden block w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl text-center text-lg sm:text-xl font-bold text-white shadow-2xl shadow-teal-500/50 hover:from-teal-600 hover:to-teal-700 hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Schnellkontakt"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                    <span className="break-words">Schnellkontakt</span>
                  </span>
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                  onClick={closeMenu}
                  aria-label="Termin via WhatsApp vereinbaren (öffnet in neuem Tab)"
                  className="group relative overflow-hidden block w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-center text-lg sm:text-xl font-bold text-white shadow-2xl shadow-green-500/50 hover:from-green-600 hover:to-green-700 hover:scale-105 active:scale-95 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                    <span className="break-words">Termin vereinbaren</span>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
