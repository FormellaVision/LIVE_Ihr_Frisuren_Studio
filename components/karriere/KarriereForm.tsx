'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  User,
  Phone,
  Mail,
  Briefcase,
  MessageSquare,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

const POSITION_OPTIONS = [
  'Friseur:in (Geselle/Gesellin)',
  'Friseur:in (Meister/Meisterin)',
  'Auszubildende:r',
  'Colorations- / Balayage-Spezialist:in',
  'Quereinsteiger:in',
  'Berufsrückkehrer:in',
  'Sonstiges',
];

const WORK_MODEL_OPTIONS = ['Vollzeit', 'Teilzeit', 'Mini-Job'];

const APPLICATION_EMAIL = 'ihr.frisuren.studio.hamburg@gmail.com';
const WHATSAPP_NUMBER = '49402509029';

interface FormData {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  position: string;
  experience: string;
  earliest_start: string;
  work_model: string;
  message: string;
}

const initialForm: FormData = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  position: '',
  experience: '',
  earliest_start: '',
  work_model: '',
  message: '',
};

export function KarriereForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const today = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.first_name.trim()) newErrors.first_name = 'Bitte Vorname eingeben';
    if (!form.last_name.trim()) newErrors.last_name = 'Bitte Nachname eingeben';
    if (!form.phone.trim()) newErrors.phone = 'Bitte Telefonnummer eingeben';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Bitte gültige E-Mail eingeben';
    }
    if (!form.position) newErrors.position = 'Bitte Stelle auswählen';
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Bitte kurze Nachricht eingeben (min. 10 Zeichen)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const buildApplicationText = () => {
  const formattedDate = form.earliest_start
    ? new Date(form.earliest_start).toLocaleDateString('de-DE')
    : '';

  return [
    'Hallo,',
    '',
    'hiermit bewerbe ich mich über die Website.',
    '',
    'Persönliche Daten',
    `• Vorname: ${form.first_name}`,
    `• Nachname: ${form.last_name}`,
    `• Telefon: ${form.phone}`,
    `• E-Mail: ${form.email}`,
    '',
    'Bewerbung',
    `• Stelle / Position: ${form.position}`,
    form.work_model ? `• Arbeitsmodell: ${form.work_model}` : '',
    form.experience ? `• Berufserfahrung: ${form.experience}` : '',
    formattedDate ? `• Frühester Starttermin: ${formattedDate}` : '',
    '',
    'Nachricht',
    form.message,
    '',
    'Viele Grüße',
    `${form.first_name} ${form.last_name}`,
  ]
    .filter(Boolean)
    .join('\n');
};

  const handleEmailApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `Bewerbung – ${form.position} – ${form.first_name} ${form.last_name}`
    );
    const body = encodeURIComponent(buildApplicationText());

    window.location.href = `mailto:${APPLICATION_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppApply = () => {
    if (!validate()) return;

    const text = encodeURIComponent(buildApplicationText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleEmailApply} noValidate className="space-y-6 w-full min-w-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
        <FormField
          label="Vorname"
          required
          icon={<User className="w-4 h-4" />}
          error={errors.first_name}
        >
          <input
            type="text"
            value={form.first_name}
            onChange={(e) => handleChange('first_name', e.target.value)}
            placeholder="Max"
            className={fieldClass(!!errors.first_name)}
          />
        </FormField>

        <FormField
          label="Nachname"
          required
          icon={<User className="w-4 h-4" />}
          error={errors.last_name}
        >
          <input
            type="text"
            value={form.last_name}
            onChange={(e) => handleChange('last_name', e.target.value)}
            placeholder="Mustermann"
            className={fieldClass(!!errors.last_name)}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
        <FormField
          label="Telefonnummer"
          required
          icon={<Phone className="w-4 h-4" />}
          error={errors.phone}
        >
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="040 123456"
            className={fieldClass(!!errors.phone)}
          />
        </FormField>

        <FormField
          label="E-Mail"
          required
          icon={<Mail className="w-4 h-4" />}
          error={errors.email}
        >
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="max@beispiel.de"
            className={fieldClass(!!errors.email)}
          />
        </FormField>
      </div>

      <FormField
        label="Stelle / Position"
        required
        icon={<Briefcase className="w-4 h-4" />}
        error={errors.position}
      >
        <div className="relative">
          <select
            value={form.position}
            onChange={(e) => handleChange('position', e.target.value)}
            className={`${fieldClass(!!errors.position)} appearance-none pr-10`}
          >
            <option value="">Bitte auswählen …</option>
            {POSITION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </FormField>

      <div className="border-t border-gray-100 pt-6">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Optionale Angaben
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
          <FormField label="Berufserfahrung" icon={<Briefcase className="w-4 h-4" />}>
            <input
              type="text"
              value={form.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              placeholder="z.B. 3 Jahre als Friseur:in"
              className={fieldClass(false)}
            />
          </FormField>

          <FormField label="Frühester Starttermin" icon={<Calendar className="w-4 h-4" />}>
            <input
              type="date"
              value={form.earliest_start}
              min={today}
              onChange={(e) => handleChange('earliest_start', e.target.value)}
              className={fieldClass(false)}
            />
          </FormField>
        </div>

        <div className="mt-5">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Arbeitsmodell
          </label>
          <div className="flex flex-wrap gap-3">
            {WORK_MODEL_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleChange('work_model', form.work_model === opt ? '' : opt)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  form.work_model === opt
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-teal-400 hover:text-teal-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <FormField
            label="Deine Nachricht"
            required
            icon={<MessageSquare className="w-4 h-4" />}
            error={errors.message}
          >
            <textarea
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Erzähl uns kurz etwas über dich – was motiviert dich, bei uns zu arbeiten?"
              rows={4}
              className={`${fieldClass(!!errors.message)} resize-none`}
            />
          </FormField>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500 leading-relaxed">
        Nach dem Klick auf E-Mail oder WhatsApp werden deine Angaben automatisch übernommen. Du
        kannst die Bewerbung dort kurz prüfen und anschließend selbst absenden. Weitere
        Informationen findest du in unserer{' '}
        <Link href="/datenschutz" className="text-teal-600 hover:underline underline-offset-2">
          Datenschutzerklärung
        </Link>.
      </div>

      <div className="flex flex-col gap-3 w-full">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold text-base px-4 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-amber-200"
        >
          <Mail className="w-5 h-5 flex-shrink-0" />
          Per E-Mail bewerben
        </button>

        <button
          type="button"
          onClick={handleWhatsAppApply}
          className="w-full inline-flex items-center justify-center gap-2.5 border border-gray-200 hover:border-teal-500 text-gray-700 hover:text-teal-700 font-bold text-base px-4 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] bg-white"
        >
          <Send className="w-5 h-5 flex-shrink-0" />
          Per WhatsApp bewerben
        </button>
      </div>
    </form>
  );
}

function fieldClass(hasError: boolean) {
  return `w-full min-w-0 rounded-xl border px-4 py-3.5 text-gray-900 text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
    hasError
      ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
      : 'border-gray-200 focus:ring-teal-100 focus:border-teal-500'
  }`;
}

interface FormFieldProps {
  label: string;
  required?: boolean;
  icon?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, required, icon, error, children }: FormFieldProps) {
  return (
    <div className="min-w-0 w-full">
      <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-1.5">
        {icon && <span className="text-gray-400">{icon}</span>}
        {label}
        {required && <span className="text-amber-500">*</span>}
      </label>

      {children}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-500 text-xs mt-1.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}