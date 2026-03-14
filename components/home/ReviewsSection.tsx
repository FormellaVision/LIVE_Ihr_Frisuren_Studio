'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '@/lib/constants';

const tween = (delay: number) => ({
  duration: 0.4,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

export function ReviewsSection() {
  const prefersReducedMotion = useReducedMotion();
  const displayReviews = REVIEWS.slice(0, 3);

  return (
    <section id="bewertungen" aria-labelledby="reviews-heading" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={tween(0)}
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {displayReviews.map((review, index) => (
            <motion.article
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={tween(index * 0.07)}
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
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={tween(0.15)}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?sca_esv=53f9ef8ad52bf813&sxsrf=ANbL-n7wtq05pqHV_w3nIoBUs5SHrciZqw:1773511578393&q=ihr+frisuren-studio+rezensionen&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_xzusQ4-hKiZyijZmCmVGeW9hjTRxZB0UswrtwUzbWhrC440O5a3tfwqPU069AIWbzH8-nOs%3D&uds=ALYpb_mVCDtJE7tUaAp18ol_X8XU-xWLUEqHxWZr2ypjn4p3Jg1Q84aPRgbH25qzUdgqUTgD2iQ104Z6wfwUjpz81BG_goHTA-QYeL5aopOSutjd05LcQDSPggWNDOD5-tgABes2qx-y&sa=X&sqi=2&ved=2ahUKEwiPiIq9_Z-TAxVGBdsEHaoEM5EQ3PALegQILRAF&biw=1904&bih=960&dpr=1"
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
