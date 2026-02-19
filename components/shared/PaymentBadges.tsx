import { CreditCard, Banknote } from 'lucide-react';
import { cn } from '@/lib/utils';

function NfcIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 20a8 8 0 0 0 0-16" />
      <path d="M12 16a4 4 0 0 0 0-8" />
      <path d="M12 12h.01" />
    </svg>
  );
}

const PAYMENT_METHODS = [
  {
    id: 'ec',
    label: 'EC-Karte',
    sublabel: 'Zertifiziert',
    icon: <CreditCard className="w-4 h-4" aria-hidden="true" />,
  },
  {
    id: 'cash',
    label: 'Barzahlung',
    sublabel: 'Willkommen',
    icon: <Banknote className="w-4 h-4" aria-hidden="true" />,
  },
  {
    id: 'nfc',
    label: 'Kontaktlos',
    sublabel: 'NFC',
    icon: <NfcIcon className="w-4 h-4" />,
  },
  {
    id: 'apple',
    label: 'Apple Pay',
    sublabel: 'Google Pay',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.44c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.56-1.32 3.1-2.53 3.95zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
    ),
  },
] as const;

interface PaymentBadgesProps {
  variant?: 'dark' | 'light';
  className?: string;
  showLabel?: boolean;
}

export function PaymentBadges({ variant = 'light', className, showLabel = true }: PaymentBadgesProps) {
  const isDark = variant === 'dark';

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      {showLabel && (
        <p className={cn('text-xs uppercase tracking-widest font-medium', isDark ? 'text-white/50' : 'text-gray-400')}>
          Zahlungsmethoden
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-2" role="list" aria-label="Akzeptierte Zahlungsmethoden">
        {PAYMENT_METHODS.map((method) => (
          <div
            key={method.id}
            role="listitem"
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
              isDark
                ? 'bg-white/10 border-white/20 text-white/90 backdrop-blur-sm'
                : 'bg-white border-gray-200 text-gray-700 shadow-sm'
            )}
          >
            {method.icon}
            <span>{method.label}</span>
            <span className={cn('text-[10px] font-normal', isDark ? 'text-white/50' : 'text-gray-400')}>
              · {method.sublabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
