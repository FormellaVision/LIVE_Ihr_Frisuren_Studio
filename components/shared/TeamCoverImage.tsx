export function TeamCoverImage() {
  return (
    <svg viewBox="0 0 1200 600" className="w-full h-full">
      <defs>
        <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#FBBF24', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>

      <rect width="1200" height="600" fill="url(#teamGradient)" />

      <circle cx="150" cy="100" r="80" fill="#ffffff" opacity="0.1" />
      <circle cx="1050" cy="500" r="100" fill="#ffffff" opacity="0.1" />
      <circle cx="900" cy="150" r="60" fill="#ffffff" opacity="0.15" />

      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="70" fill="#ffffff" opacity="0.9" />
        <text x="0" y="15" fontSize="60" textAnchor="middle" fill="#0D9488">✂️</text>
      </g>

      <g transform="translate(400, 350)">
        <circle cx="0" cy="0" r="65" fill="#ffffff" opacity="0.9" />
        <text x="0" y="12" fontSize="55" textAnchor="middle" fill="#0D9488">🪮</text>
      </g>

      <g transform="translate(600, 250)">
        <circle cx="0" cy="0" r="75" fill="#ffffff" opacity="0.95" />
        <text x="0" y="18" fontSize="65" textAnchor="middle" fill="#0D9488">💇</text>
      </g>

      <g transform="translate(800, 380)">
        <circle cx="0" cy="0" r="60" fill="#ffffff" opacity="0.9" />
        <text x="0" y="10" fontSize="50" textAnchor="middle" fill="#0D9488">💨</text>
      </g>

      <g transform="translate(1000, 220)">
        <circle cx="0" cy="0" r="68" fill="#ffffff" opacity="0.9" />
        <text x="0" y="14" fontSize="58" textAnchor="middle" fill="#0D9488">✨</text>
      </g>

      <rect x="100" y="500" width="1000" height="8" fill="url(#accentGradient)" rx="4" opacity="0.6" />

      <text
        x="600"
        y="100"
        fontSize="72"
        fontWeight="bold"
        textAnchor="middle"
        fill="#ffffff"
        opacity="0.15"
        fontFamily="Playfair Display, serif"
      >
        Ihr Frisuren-Studio
      </text>
    </svg>
  );
}
