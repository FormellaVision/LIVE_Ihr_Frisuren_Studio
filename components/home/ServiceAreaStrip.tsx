'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const areas = [
    { name: 'Hamm', href: '/areas/hamm' },
    { name: 'Borgfelde', href: '/areas/borgfelde' },
    { name: 'Horn', href: '/areas/horn' },
    { name: 'Eilbek', href: '/areas/eilbek' },
];

const postalCodes = ['20537', '20535', '20539'];

export function ServiceAreaStrip() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-padding bg-gradient-to-br from-teal-50 to-white"
            aria-labelledby="service-area-heading"
        >
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
                        <MapPin className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-semibold text-teal-700">Einzugsgebiet</span>
                    </div>

                    <h2 id="service-area-heading" className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                        Ihr Friseur für Hamburg Hamm & Umgebung
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Bestens erreichbar mit U2/U4 Haltestelle Burgstraße — nur 5 Minuten zu Fuß.
                        Wir freuen uns auf Kunden aus der gesamten Umgebung.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                        {areas.map((area) => (
                            <Link
                                key={area.name}
                                href={area.href}
                                className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-semibold text-gray-700 hover:bg-teal-600 hover:text-white transition-colors duration-200"
                            >
                                {area.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {postalCodes.map((code) => (
                            <span
                                key={code}
                                className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-500"
                            >
                                PLZ {code}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
