'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '@/lib/constants';

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

export function ReviewsSection() {
  const displayReviews = REVIEWS.slice(0, 3);

  return (
    <section id="bewertungen" aria-labelledby="reviews-heading" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 px-6 py-3 rounded-full mb-4">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="font-bold text-teal-700">
              {BUSINESS_INFO.reviews.rating} Sterne - {BUSINESS_INFO.reviews.count}+ Bewertungen
            </span>
          </div>
          <h2 id="reviews-heading" className="heading-lg mb-4">Das sagen unsere Kunden</h2>
          <p className="text-xl text-gray-600">
            Über {BUSINESS_INFO.reviews.count} zufriedene Kunden aus Hamburg Hamm & Umgebung
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {displayReviews.map((review, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              aria-label={`Bewertung von ${review.author}`}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <div
                className="flex gap-1 text-amber-500 mb-4"
                role="img"
                aria-label={`${review.rating} von 5 Sternen`}
              >
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-xl font-bold text-teal-600"
                  role="img"
                  aria-label={`Avatar von ${review.author}`}
                >
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=Ihr+Frisuren-Studio+Hamburg+Rezensionen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Alle ${BUSINESS_INFO.reviews.count}+ Bewertungen auf Google ansehen (öffnet in neuem Tab)`}
            className="btn-outline"
          >
            <ExternalLink className="w-5 h-5" aria-hidden="true" />
            Alle {BUSINESS_INFO.reviews.count}+ Bewertungen auf Google ansehen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
