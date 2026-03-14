'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface HistorySectionProps {
  businessInfo: {
    founded: string;
    owner: string;
    reviews: {
      count: number;
    };
  };
}

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: tween(0),
  },
};

export function HistorySection({ businessInfo }: HistorySectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const historyItems = [
    {
      title: 'Der Anfang',
      content: `Seit ${businessInfo.founded} ist Ihr Frisuren-Studio die erste Adresse
        für professionelle Friseur- und Kosmetikdienstleistungen in Hamburg Hamm.
        Was als kleiner Salon begann, ist heute ein moderner Meisterbetrieb mit einem
        vielseitigen Team.`,
    },
    {
      title: 'Unsere Philosophie',
      content: `Unser Inhaber, ${businessInfo.owner}, ist selbst
        Friseurmeister und bildet seit Jahren erfolgreich Nachwuchs aus. Seine Leidenschaft
        für das Handwerk und sein Auge für Trends prägen den Stil unseres Studios.`,
    },
    {
      title: 'Heute und Zukunft',
      content: `Wir sind stolz auf über ${businessInfo.reviews.count} positive Bewertungen bei
        Google und eine treue Stammkundschaft aus Hamburg Hamm und Umgebung. Unser Erfolgsgeheimnis?
        Qualität, Herzlichkeit und ein Team, das wirklich für Sie da ist.`,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={tween(0)}
          className="mb-12"
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="heading-md text-center">Unsere Geschichte</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          {historyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-500"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed flex-grow text-sm md:text-base">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
