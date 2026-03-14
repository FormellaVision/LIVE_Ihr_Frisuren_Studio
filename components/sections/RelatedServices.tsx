'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface RelatedService {
  href: string;
  label: string;
  description: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: tween(0) },
};

export function RelatedServices({
  services,
  title = 'Auch interessant'
}: RelatedServicesProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="my-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={tween(0)}
        style={{ willChange: 'transform, opacity' }}
      >
        <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-2 text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 mb-8">Entdecken Sie weitere Leistungen</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        className="grid md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{ willChange: 'transform, opacity' }}
      >
        {services.map((service) => (
          <motion.div
            key={service.href}
            variants={cardVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            <Link
              href={service.href}
              className="group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.label}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium text-sm">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
