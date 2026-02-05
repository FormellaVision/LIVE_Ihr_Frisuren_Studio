'use client';

import { motion } from 'framer-motion';
import { Award, Globe, Star, Check, MapPin, Clock, Palette, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const usps = [
  {
    icon: Award,
    title: `Meisterbetrieb seit ${BUSINESS_INFO.founded}`,
    description: '20 Jahre Erfahrung und Leidenschaft. Zertifizierte Meisterqualität in Hamburg-Hamm.',
    color: 'bg-teal-600',
  },
  {
    icon: Globe,
    title: 'Mehrsprachiges Team',
    description: 'Beratung in Deutsch, Englisch, Türkisch & Persisch. Ihr Friseur für alle Kulturen.',
    color: 'bg-amber-500',
  },
  {
    icon: Star,
    title: `${BUSINESS_INFO.reviews.count}+ Top-Bewertungen`,
    description: `${BUSINESS_INFO.reviews.rating} Sterne bei Google. Unsere Kunden lieben uns - überzeugen Sie sich selbst!`,
    color: 'bg-coral-500',
  },
];

const features = [
  {
    icon: MapPin,
    title: 'Zentrale Lage Hamburg-Hamm',
    description: 'Perfekt erreichbar mit U2/U4 Burgstraße. Parkplätze vorhanden.',
  },
  {
    icon: Clock,
    title: 'Afterwork-Termine',
    description: 'Exklusive Termine nach 19:00 Uhr & Sa ab 14:00 Uhr möglich.',
  },
  {
    icon: Palette,
    title: 'Balayage-Spezialist',
    description: 'Moderne Färbetechniken von erfahrenen Colorations-Experten.',
  },
  {
    icon: Sparkles,
    title: 'Kosmetik-Services',
    description: 'Gesichtsbehandlungen, Maniküre, Fußpflege - alles aus einer Hand.',
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function USPSection() {
  return (
    <section id="usp-section" className="section-padding bg-warm-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            Warum Ihr Frisuren-Studio in Hamburg Hamm?
          </h2>
          <p className="text-xl text-gray-600">
            Ihr Premium Friseur seit {BUSINESS_INFO.founded} - Qualität, die begeistert
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16"
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <div
                className={`w-20 h-20 ${usp.color} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <usp.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">{usp.title}</h3>
              <p className="text-gray-600">{usp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md card-hover"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
