'use client';

export function CookieResetButton() {
  const handleReset = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-banner'));
  };

  return (
    <button
      onClick={handleReset}
      className="text-gray-400 hover:text-gray-300 transition-colors whitespace-nowrap"
    >
      Cookie-Einstellungen
    </button>
  );
}
