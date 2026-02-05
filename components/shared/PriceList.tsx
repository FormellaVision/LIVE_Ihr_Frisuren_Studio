'use client';

import { motion } from 'framer-motion';

interface Service {
  name: string;
  price: string;
  description?: string;
}

interface PriceListProps {
  title: string;
  services: readonly Service[];
}

const colorMap = {
  Damen: { text: 'text-teal-600', bg: 'bg-teal-50' },
  Herren: { text: 'text-gray-900', bg: 'bg-gray-50' },
  Kosmetik: { text: 'text-amber-600', bg: 'bg-amber-50' },
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function PriceList({ title, services }: PriceListProps) {
  const colors = colorMap[title as keyof typeof colorMap] || { text: 'text-teal-600', bg: 'bg-teal-50' };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className={`font-playfair text-2xl font-bold mb-6 ${colors.text}`}>{title}</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex-1 pr-4">
              <span className="font-medium text-gray-900">{service.name}</span>
              {service.description && (
                <p className="text-sm text-gray-500 mt-1">{service.description}</p>
              )}
            </div>
            <span className={`font-bold ${colors.text} whitespace-nowrap`}>
              {service.price}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
