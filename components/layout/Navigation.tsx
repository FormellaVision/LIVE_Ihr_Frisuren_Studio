'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, m } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Calendar, ChevronDown } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

function useFocusTrap(isActive: boolean, onEscape?: () => void) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    const getFocusable = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

    const closeBtn = container.querySelector<HTMLElement>('button[aria-label="Menü schließen"]');
    setTimeout(() => closeBtn?.focus(), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape?.();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onEscape]);

  useEffect(() => {
    if (!isActive && previousFocusRef.current) {
      const el = previousFocusRef.current;
      previousFocusRef.current = null;
      setTimeout(() => el.focus(), 50);
    }
  }, [isActive]);

  return containerRef;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const menuRef = useFocusTrap(isOpen, closeMenu);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setMobileExpanded(null); // Reset sub-menu state when opening the hamburger menu
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
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
  }, [isMobile]);

  return (
    <>
      <m.header
        role="banner"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
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
            <m.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <Link href="/" className="flex items-center gap-3 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 rounded">
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
            </m.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8" ref={dropdownRef}>
              {NAV_LINKS.map((link) => {
                const hasChildren = 'children' in link && link.children && link.children.length > 0;
                const isDropdownOpen = openDropdown === link.href;
                const isActive = pathname === link.href || ('children' in link && link.children?.some(c => pathname === c.href));

                if (hasChildren) {
                  return (
                    <div key={link.href} className="relative">
                      <button
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : link.href)}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                        className={cn(
                          'relative flex items-center gap-1 text-base font-medium transition-all duration-300 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 rounded',
                          isActive ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900',
                          'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-700 after:transition-transform after:duration-300',
                          isActive ? 'after:scale-x-100 after:origin-left' : 'after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn('w-4 h-4 transition-transform duration-200', isDropdownOpen && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <m.div
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                            role="menu"
                          >
                            <Link
                              href={link.href}
                              role="menuitem"
                              className="block px-4 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50 transition-colors border-b border-gray-100"
                              onClick={() => setOpenDropdown(null)}
                            >
                              Alle Leistungen & Preise →
                            </Link>
                            {'children' in link && link.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                aria-current={pathname === child.href ? 'page' : undefined}
                                className={cn(
                                  'block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50',
                                  pathname === child.href ? 'text-teal-600 font-semibold bg-teal-50/50' : 'text-gray-700 hover:text-gray-900'
                                )}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={cn(
                      'relative text-base font-medium transition-all duration-300 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 rounded',
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
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/termin-buchen"
                className="group relative overflow-hidden bg-teal-600 px-4 lg:px-6 py-2.5 rounded-full font-medium text-white shadow-lg shadow-teal-600/20 hover:bg-teal-500 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                <span className="relative z-10 text-sm lg:text-base whitespace-nowrap">Termin buchen</span>
              </Link>
            </div>

            <m.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 min-w-[44px] min-h-[44px] p-2.5 text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 transition-all duration-300 rounded-xl bg-white shadow-md border border-gray-200 hover:bg-gray-50 active:bg-gray-100 flex items-center justify-center"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-haspopup="dialog"
            >
              <Menu className="w-6 h-6 text-teal-800" aria-hidden="true" />
            </m.button>
          </div>
        </nav>
      </m.header>

      <AnimatePresence>
        {isOpen && (
          <m.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Hauptmenü"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-gray-900/96 backdrop-blur-2xl flex flex-col items-center justify-center px-8 space-y-5"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            <m.button
              whileTap={{ scale: 0.9 }}
              onClick={closeMenu}
              className="absolute top-[10px] right-4 z-[101] min-w-[44px] min-h-[44px] p-2.5 bg-white backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 hover:bg-gray-50 shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent flex items-center justify-center"
              aria-label="Menü schließen"
            >
              <X className="w-6 h-6 text-teal-800" aria-hidden="true" />
            </m.button>

            <nav aria-label="Mobilnavigation" className="w-full max-w-md">
              <m.ul
                className="list-none p-0 m-0 space-y-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                <m.div
                  key={mobileExpanded ?? 'main'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-3 w-full"
                >
                  {mobileExpanded ? (
                    <>
                      {/* Back button — teal/active, centered text */}
                      <button
                        onClick={() => setMobileExpanded(null)}
                        aria-expanded={true}
                        className="relative flex items-center justify-center w-full px-6 sm:px-8 py-4 sm:py-5 border-2 rounded-2xl text-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-teal-500/95 border-teal-400 text-white shadow-teal-500/50"
                      >
                        <ChevronDown className="absolute left-6 w-5 h-5 rotate-90" aria-hidden="true" />
                        Leistungen
                      </button>

                      {/* Alle Leistungen */}
                      <Link
                        href="/leistungen"
                        onClick={closeMenu}
                        className="block w-full px-6 sm:px-8 py-4 sm:py-5 border-2 border-teal-400 rounded-2xl text-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 bg-white/90 text-teal-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                      >
                        Alle Leistungen & Preise
                      </Link>

                      {/* Sub-items as identical full buttons */}
                      {(NAV_LINKS.find(l => l.href === mobileExpanded) as { children?: { href: string; label: string }[] } | undefined)?.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          aria-current={pathname === child.href ? 'page' : undefined}
                          className={cn(
                            'block w-full px-6 sm:px-8 py-4 sm:py-5 border-2 rounded-2xl text-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 break-words focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                            pathname === child.href
                              ? 'bg-teal-500/95 border-teal-400 text-white shadow-teal-500/50'
                              : 'bg-white/90 border-gray-200 text-gray-900 hover:bg-white hover:border-teal-700 hover:text-teal-700 hover:shadow-teal-700/30'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <>
                      {/* Main nav links */}
                      {NAV_LINKS.map((link) => {
                        const hasChildren = 'children' in link && link.children && link.children.length > 0;
                        const isActiveLink = pathname === link.href || ('children' in link && (link as { children: { href: string }[] }).children?.some(c => pathname === c.href));
                        return (
                          <div key={link.href}>
                            {hasChildren ? (
                              <button
                                onClick={() => setMobileExpanded(link.href)}
                                className={cn(
                                  'relative flex items-center justify-center w-full px-6 sm:px-8 py-4 sm:py-5 border-2 rounded-2xl text-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                                  isActiveLink
                                    ? 'bg-teal-500/95 border-teal-400 text-white shadow-teal-500/50'
                                    : 'bg-white/90 border-gray-200 text-gray-900 hover:bg-white hover:border-teal-700 hover:text-teal-700 hover:shadow-teal-700/30'
                                )}
                              >
                                {link.label}
                                <ChevronDown className="absolute right-6 w-5 h-5" aria-hidden="true" />
                              </button>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={closeMenu}
                                aria-current={pathname === link.href ? 'page' : undefined}
                                className={cn(
                                  'block w-full px-6 sm:px-8 py-4 sm:py-5 border-2 rounded-2xl text-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 break-words focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                                  pathname === link.href
                                    ? 'bg-teal-500/95 border-teal-400 text-white shadow-teal-500/50'
                                    : 'bg-white/90 border-gray-200 text-gray-900 hover:bg-white hover:border-teal-700 hover:text-teal-700 hover:shadow-teal-700/30'
                                )}
                              >
                                {link.label}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </>
                  )}
                </m.div>

                <m.li
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="pt-4 flex flex-col gap-3"
                >
                  <a
                    href={`tel:${BUSINESS_INFO.phoneInternational}`}
                    onClick={closeMenu}
                    aria-label={`Jetzt anrufen: ${BUSINESS_INFO.phone}`}
                    className="group relative overflow-hidden block w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-center text-lg sm:text-xl font-bold text-white shadow-2xl shadow-amber-500/50 hover:from-amber-600 hover:to-amber-700 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                      <span className="break-words">Jetzt anrufen</span>
                    </span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                    onClick={closeMenu}
                    aria-label="Per WhatsApp schreiben (öffnet in neuem Tab)"
                    className="group relative overflow-hidden block w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl text-center text-lg sm:text-xl font-bold text-white shadow-2xl shadow-emerald-500/50 hover:from-emerald-600 hover:to-emerald-700 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                      <span className="break-words">Per WhatsApp schreiben</span>
                    </span>
                  </a>
                  <a
                    href={BUSINESS_INFO.treatwell}
                    onClick={closeMenu}
                    aria-label="Online bei Treatwell buchen (öffnet in neuem Tab)"
                    className="group relative overflow-hidden block w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-violet-600 to-violet-700 rounded-2xl text-center text-lg sm:text-xl font-bold text-white shadow-2xl shadow-violet-600/50 hover:from-violet-700 hover:to-violet-800 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                      <span className="break-words">Online buchen (Treatwell)</span>
                    </span>
                  </a>
                </m.li>
              </m.ul>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

