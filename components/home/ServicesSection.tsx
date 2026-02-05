'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Scissors, Moon, Phone } from 'lucide-react';
import { SERVICES_DAMEN, SERVICES_HERREN, SERVICES_KOSMETIK, BUSINESS_INFO, OPENING_HOURS } from '@/lib/constants';

const serviceCategories = [
  {
    title: 'Damen',
    icon: Sparkles,
    description: 'Professionelle Damenhaarschnitte & Colorationen in Hamburg-Hamm',
    services: SERVICES_DAMEN.slice(0, 5),
    href: '/damenfriseur-hamburg-hamm',
    gradient: 'from-teal-600 to-teal-700',
    buttonText: 'text-teal-600',
  },
  {
    title: 'Herren',
    icon: Scissors,
    description: 'Moderne Herrenhaarschnitte, Bartpflege & Gentleman-Service',
    services: SERVICES_HERREN.slice(0, 5),
    href: '/herrenfriseur-hamburg-hamm',
    gradient: 'from-gray-800 to-gray-900',
    buttonText: 'text-gray-900',
  },
  {
    title: 'Kosmetik',
    icon: Sparkles,
    description: 'Gesichtsbehandlungen, Maniküre & Fußpflege in Hamburg-Hamm',
    services: SERVICES_KOSMETIK.slice(0, 5),
    href: '/leistungen#kosmetik',
    gradient: 'from-amber-500 to-amber-600',
    buttonText: 'text-amber-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function ServicesSection() {
  return (
    <section id="leistungen" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Unsere Leistungen in Hamburg Hamm</h2>
          <p className="text-xl text-gray-600">Damen - Herren - Balayage - Kosmetik</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${category.gradient} p-4 sm:p-6 md:p-8 rounded-2xl text-white shadow-xl card-hover`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0">
                <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 break-words">{category.title}</h3>
              <p className="mb-4 sm:mb-6 text-white/90 text-base sm:text-lg break-words">{category.description}</p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-sm sm:text-base">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between gap-2 border-b border-white/20 pb-2 last:border-0"
                  >
                    <span className="break-words min-w-0 flex-1">{service.name}</span>
                    <span className="font-bold whitespace-nowrap flex-shrink-0">{service.price}</span>
                  </div>
                ))}
              </div>

              <Link
                href={category.href}
                className={`block w-full bg-white ${category.buttonText} py-3 rounded-lg text-center font-semibold hover:bg-gray-100 transition-colors`}
              >
                Alle {category.title}-Leistungen
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto bg-gradient-to-r from-amber-300 to-amber-400 p-4 sm:p-8 md:p-12 rounded-2xl shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Moon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 break-words">
                Afterwork Spezialcut
              </h3>
              <p className="text-base sm:text-lg mb-4 text-gray-800 break-words leading-relaxed">
                Arbeiten Sie bis spät? Kein Problem! Genießen Sie eine exklusive 1-zu-1 Behandlung
                nach Feierabend in privater Atmosphäre.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <span className="bg-white/40 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
                  {OPENING_HOURS.afterwork.weekdays}
                </span>
                <span className="bg-white/40 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
                  {OPENING_HOURS.afterwork.saturday}
                </span>
                <span className="bg-white/40 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  Regulärer Preis {OPENING_HOURS.afterwork.surcharge}
                </span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="break-words">Afterwork-Termin: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
