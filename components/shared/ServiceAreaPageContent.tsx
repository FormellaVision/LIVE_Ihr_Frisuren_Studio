'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Check } from 'lucide-react';
import { CTABanner } from '@/components/shared/CTABanner';
import { BUSINESS_INFO } from '@/lib/constants';

interface ServiceAreaContentProps {
  service: string;
  serviceSlug: string;
  area: string;
  areaSlug: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export function ServiceAreaPageContent({
  service,
  serviceSlug,
  area,
  areaSlug,
  description,
  benefits,
  imageUrl,
}: ServiceAreaContentProps) {
  return (
    <>
      <section className="relative h-[calc(100dvh-4rem)] min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundPosition: 'center 35%',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        <div className="relative z-10 container-custom w-full py-12">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full mb-7 shadow-lg"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">{service} in {area}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 break-words"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
            >
              {service} {area}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-teal-300 font-semibold mb-4"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
            >
              Ihr Frisuren-Studio – Meisterbetrieb seit 2004
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto mb-10"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/termin-buchen"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                Termin buchen
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9F7F4] to-transparent pointer-events-none" />
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold mb-6">
                Warum {service} bei uns in {area}?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Andere Services für {area}
              </h2>
              <p className="text-gray-600 mb-6">
                Entdecken Sie unser komplettes Angebot auch in {area}:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href={`/damenfriseur-hamburg-${areaSlug}`}
                  className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-teal-200"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
                    Damenfriseur
                  </h3>
                  <p className="text-xs text-gray-500">ab 43€</p>
                </Link>
                <Link
                  href={`/herrenfriseur-hamburg-${areaSlug}`}
                  className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-blue-200"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    Herrenfriseur
                  </h3>
                  <p className="text-xs text-gray-500">ab 18€</p>
                </Link>
                <Link
                  href={`/balayage-hamburg-${areaSlug}`}
                  className="group bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-amber-200"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-1">
                    Balayage
                  </h3>
                  <p className="text-xs text-gray-500">ab 179€</p>
                </Link>
                <Link
                  href={`/haare-faerben-hamburg-${areaSlug}`}
                  className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-purple-200"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                    Haare färben
                  </h3>
                  <p className="text-xs text-gray-500">ab 43€</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`${service} in ${area}`}
        description={`Vereinbaren Sie Ihren Termin für professionellen ${service} in ${area} – Meisterbetrieb seit 2004.`}
      />
    </>
  );
}
