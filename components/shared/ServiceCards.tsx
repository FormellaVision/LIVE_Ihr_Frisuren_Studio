'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
}

interface ServiceCardsProps {
  title: string;
  subtitle?: string;
  items: ServiceCard[];
  columns?: 'auto' | 3 | 4;
}

export function ServiceCards({
  title,
  subtitle,
  items,
  columns = 'auto',
}: ServiceCardsProps) {
  const gridClass = {
    auto: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    3: 'grid sm:grid-cols-2 md:grid-cols-3 gap-4',
    4: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
  }[columns];


  return (
    <div>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {title && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                {title}
              </h2>
              {subtitle && (
                <p className="text-gray-600">{subtitle}</p>
              )}
            </motion.div>
          )}

          <motion.div
            className={gridClass}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium text-sm">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
