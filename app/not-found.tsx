import Link from 'next/link';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-8xl font-bold text-teal-600 mb-4">404</div>
          <h1 className="heading-lg mb-4">Seite nicht gefunden</h1>
          <p className="text-xl text-gray-600 mb-8">
            Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="btn-primary">
              <Home className="w-5 h-5" />
              Zur Startseite
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneInternational}`} className="btn-secondary">
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8">
            <Link
              href="javascript:history.back()"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur vorherigen Seite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
