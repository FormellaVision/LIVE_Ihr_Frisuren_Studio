import { KarriereForm } from './KarriereForm';

export function KarriereFormSection() {
  return (
    <section id="bewerbung" className="section-padding bg-warm-white">
      <div className="container-custom max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Bewerbung</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            In einer Minute bewerben
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
            Kein langer Bewerbungsprozess. Füll das Formular aus – wir melden uns persönlich bei dir.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <KarriereForm />
        </div>
      </div>
    </section>
  );
}
