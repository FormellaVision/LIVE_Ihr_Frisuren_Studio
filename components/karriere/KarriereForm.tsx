'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CircleCheck as CheckCircle, User, Phone, Mail, Briefcase, MessageSquare, Calendar, Upload, ChevronDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';
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

interface FormData {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  position: string;
  message: string;
  experience: string;
  earliest_start: string;
  work_model: string;
  resume_filename: string;
}

const initialForm: FormData = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  position: '',
  message: '',
  experience: '',
  earliest_start: '',
  work_model: '',
  resume_filename: '',
};

export function KarriereForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.first_name.trim()) newErrors.first_name = 'Bitte Vorname eingeben';
    if (!form.last_name.trim()) newErrors.last_name = 'Bitte Nachname eingeben';
    if (!form.phone.trim()) newErrors.phone = 'Bitte Telefonnummer eingeben';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Bitte gültige E-Mail eingeben';
    if (!form.position) newErrors.position = 'Bitte Stelle auswählen';
    if (!form.message.trim() || form.message.trim().length < 10)
      newErrors.message = 'Bitte kurze Nachricht eingeben (min. 10 Zeichen)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleChange('resume_filename', file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError('');

    const { error } = await supabase.from('job_applications').insert([form]);

    if (error) {
      setSubmitError('Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder ruf uns an.');
      setIsSubmitting(false);
      return;
    }

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 px-6"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-50 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-teal-600" />
        </div>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Vielen Dank, {form.first_name}!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
          Deine Bewerbung ist bei uns eingegangen. Wir melden uns persönlich bei dir – in der Regel innerhalb von 1–2 Werktagen.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+49402509029"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            040 2509029
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-teal-500 text-gray-700 hover:text-teal-700 font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Zur Startseite
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </FormField>

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

      <div className="border-t border-gray-100 pt-6">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Optionale Angaben</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              type="text"
              value={form.earliest_start}
              onChange={(e) => handleChange('earliest_start', e.target.value)}
              placeholder="z.B. ab sofort, 01.03.2025"
              className={fieldClass(false)}
            />
          </FormField>
        </div>

        <div className="mt-5">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Arbeitsmodell</label>
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
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            <span className="flex items-center gap-2">
              <Upload className="w-4 h-4 text-gray-400" />
              Lebenslauf hochladen <span className="text-gray-400 font-normal">(optional)</span>
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer border border-dashed border-gray-300 hover:border-teal-400 rounded-xl px-4 py-4 transition-colors duration-200 group">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="sr-only"
            />
            <div className="flex-1">
              {form.resume_filename ? (
                <span className="text-teal-700 font-medium text-sm">{form.resume_filename}</span>
              ) : (
                <span className="text-gray-400 text-sm group-hover:text-teal-600 transition-colors">
                  PDF, Word – bis 5 MB
                </span>
              )}
            </div>
            <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full group-hover:bg-teal-100 transition-colors">
              Datei wählen
            </span>
          </label>
          {form.resume_filename && (
            <p className="text-xs text-gray-400 mt-1.5">
              Hinweis: Der Dateiname wird gespeichert. Sende deinen Lebenslauf bei Bedarf zusätzlich per E-Mail.
            </p>
          )}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500 leading-relaxed">
        Mit dem Absenden stimmst du zu, dass deine Daten zur Bearbeitung deiner Bewerbung gespeichert werden. Weitere Informationen findest du in unserer{' '}
        <Link href="/datenschutz" className="text-teal-600 hover:underline underline-offset-2">
          Datenschutzerklärung
        </Link>.
      </div>

      <AnimatePresence>
        {submitError && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3"
          >
            {submitError}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-amber-200"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Wird gesendet …
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Jetzt bewerben
          </>
        )}
      </button>
    </form>
  );
}

function fieldClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-3.5 text-gray-900 text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
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
    <div>
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
