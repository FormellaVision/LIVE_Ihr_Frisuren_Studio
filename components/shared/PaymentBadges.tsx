import { cn } from '@/lib/utils';

interface PaymentBadgesProps {
  variant?: 'dark' | 'light';
  className?: string;
  showLabel?: boolean;
}

function EcCardIcon({ isDark }: { isDark: boolean }) {
  return (
    <div className={cn(
      'flex items-center justify-center w-10 h-6 rounded text-[10px] font-bold tracking-tight',
      isDark ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
    )}>
      EC
    </div>
  );
}

function CashIcon({ isDark }: { isDark: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('w-6 h-6', isDark ? 'text-white' : 'text-gray-600')}
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function NfcIcon({ isDark }: { isDark: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('w-6 h-6', isDark ? 'text-white' : 'text-gray-600')}
      aria-hidden="true"
    >
      <path d="M20 12a8 8 0 0 0-8-8" />
      <path d="M17 12a5 5 0 0 0-5-5" />
      <path d="M14 12a2 2 0 0 0-2-2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function ApplePayIcon({ isDark }: { isDark: boolean }) {
  return (
    <div className={cn('flex items-center gap-0.5', isDark ? 'text-white' : 'text-gray-800')}>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.44c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.56-1.32 3.1-2.53 3.95zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <span className="text-[11px] font-semibold tracking-tight">Pay</span>
    </div>
  );
}

const PAYMENT_METHODS = [
  { id: 'ec', label: 'EC-Karte' },
  { id: 'cash', label: 'Barzahlung' },
  { id: 'nfc', label: 'Kontaktlos' },
  { id: 'apple', label: 'Apple Pay' },
] as const;

function PaymentIcon({ id, isDark }: { id: string; isDark: boolean }) {
  switch (id) {
    case 'ec': return <EcCardIcon isDark={isDark} />;
    case 'cash': return <CashIcon isDark={isDark} />;
    case 'nfc': return <NfcIcon isDark={isDark} />;
    case 'apple': return <ApplePayIcon isDark={isDark} />;
    default: return null;
  }
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
            title={method.label}
            className={cn(
              'inline-flex items-center justify-center w-14 h-9 rounded-lg border transition-colors',
              isDark
                ? 'bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15'
                : 'bg-white border-gray-200 shadow-sm hover:border-gray-300'
            )}
          >
            <PaymentIcon id={method.id} isDark={isDark} />
          </div>
        ))}
      </div>
    </div>
  );
}
