'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function StickyDesktopCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            const scrollThreshold = heroHeight * 1.2;
            setIsVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            role="complementary"
            aria-label="Schnell-Kontakt Desktop"
            className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'
                }`}
        >
            <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                aria-label={`Jetzt anrufen: ${BUSINESS_INFO.phone}`}
                className="group relative"
            >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-200 hover:scale-110">
                    <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {BUSINESS_INFO.phone}
                </div>
            </a>

            <a
                href={`https://wa.me/${BUSINESS_INFO.phoneFormatted.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Nachricht senden"
                className="group relative"
            >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-200 hover:scale-110">
                    <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    WhatsApp
                </div>
            </a>
        </div>
    );
}
