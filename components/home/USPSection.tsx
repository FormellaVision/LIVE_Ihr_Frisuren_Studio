'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Award, Globe, Star, MapPin, Clock, Palette, Sparkles } from 'lucide-react';
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
    description: 'Kosmetik in Hamburg Hamm: Gesichtsbehandlung, Maniküre & med. Fußpflege – alles unter einem Dach.',
  },
];

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function USPSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="usp-section" aria-labelledby="usp-heading" className="section-padding bg-warm-white">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={tween(0)}
          className="text-center mb-16"
        >
          <h2 id="usp-heading" className="heading-lg mb-4">
            Warum Ihr Frisuren-Studio in Hamburg Hamm?
          </h2>
          <p className="text-xl text-gray-600">
            Ihr Premium Friseur seit {BUSINESS_INFO.founded} - Qualität, die begeistert
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={tween(index * 0.08)}
              className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <div
                className={`w-20 h-20 ${usp.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                aria-hidden="true"
              >
                <usp.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">{usp.title}</h3>
              <p className="text-gray-600">{usp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={tween(index * 0.07)}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md card-hover"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <feature.icon className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
