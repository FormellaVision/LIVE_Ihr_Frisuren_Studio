'use client';

export function TeamCoverImage() {
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a5c3d', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#2d7a52', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3d9b6b', stopOpacity: 1 }} />
        </linearGradient>

        <radialGradient id="accentGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#4cb67d', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#1a5c3d', stopOpacity: 0 }} />
        </radialGradient>

        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect width="1200" height="600" fill="url(#greenGradient)" />

      <circle cx="200" cy="150" r="200" fill="url(#accentGradient)" />
      <circle cx="1000" cy="450" r="250" fill="url(#accentGradient)" />

      <g filter="url(#shadow)">
        <circle cx="100" cy="100" r="80" fill="#ffffff" opacity="0.1" />
        <circle cx="1100" cy="500" r="100" fill="#ffffff" opacity="0.08" />
      </g>

      <g id="scissors" transform="translate(150, 200)" opacity="0.9">
        <circle cx="0" cy="0" r="55" fill="#f0f0f0" opacity="0.95" />
        <circle cx="0" cy="0" r="50" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="-15" cy="-10" r="12" fill="#333333" />
        <circle cx="15" cy="-10" r="12" fill="#333333" />
        <path d="M -25 0 Q -15 15 5 20 Q 15 15 25 0" fill="none" stroke="#333333" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="0" r="4" fill="#d4af37" />
      </g>

      <g id="clippers" transform="translate(1050, 150)" opacity="0.85">
        <circle cx="0" cy="0" r="55" fill="#f0f0f0" opacity="0.95" />
        <circle cx="0" cy="0" r="50" fill="none" stroke="#d4af37" strokeWidth="2" />
        <rect x="-12" y="-25" width="24" height="20" fill="#333333" rx="3" />
        <rect x="-20" y="-5" width="40" height="15" fill="#555555" rx="2" />
        <g opacity="0.6">
          <line x1="-8" y1="12" x2="-8" y2="20" stroke="#666666" strokeWidth="2" />
          <line x1="0" y1="12" x2="0" y2="20" stroke="#666666" strokeWidth="2" />
          <line x1="8" y1="12" x2="8" y2="20" stroke="#666666" strokeWidth="2" />
        </g>
      </g>

      <g id="straight-razor" transform="translate(300, 450)" opacity="0.9">
        <circle cx="0" cy="0" r="55" fill="#f0f0f0" opacity="0.95" />
        <circle cx="0" cy="0" r="50" fill="none" stroke="#d4af37" strokeWidth="2" />
        <rect x="-8" y="-35" width="16" height="30" fill="#8b7355" rx="2" />
        <path d="M -12 -5 L 0 8 L 12 -5 Z" fill="#c0c0c0" />
        <rect x="-10" y="8" width="20" height="12" fill="#333333" rx="1" />
      </g>

      <g id="comb" transform="translate(900, 400)" opacity="0.85">
        <circle cx="0" cy="0" r="55" fill="#f0f0f0" opacity="0.95" />
        <circle cx="0" cy="0" r="50" fill="none" stroke="#d4af37" strokeWidth="2" />
        <rect x="-18" y="-20" width="36" height="18" fill="#d4af37" rx="3" />
        <g opacity="0.8">
          <line x1="-14" y1="0" x2="-14" y2="18" stroke="#333333" strokeWidth="2" />
          <line x1="-6" y1="0" x2="-6" y2="18" stroke="#333333" strokeWidth="2" />
          <line x1="2" y1="0" x2="2" y2="18" stroke="#333333" strokeWidth="2" />
          <line x1="10" y1="0" x2="10" y2="18" stroke="#333333" strokeWidth="2" />
        </g>
      </g>

      <g id="brush" transform="translate(500, 100)" opacity="0.8">
        <circle cx="0" cy="0" r="45" fill="#f0f0f0" opacity="0.95" />
        <circle cx="0" cy="0" r="40" fill="none" stroke="#d4af37" strokeWidth="2" />
        <rect x="-8" y="-28" width="16" height="15" fill="#8b7355" rx="2" />
        <ellipse cx="0" cy="6" rx="14" ry="10" fill="#d4af37" opacity="0.8" />
        <ellipse cx="0" cy="5" rx="12" ry="8" fill="#e6c200" opacity="0.6" />
      </g>

      <g id="spray-bottle" transform="translate(750, 480)" opacity="0.82">
        <circle cx="0" cy="0" r="45" fill="#f0f0f0" opacity="0.95" />
        <circle cx="0" cy="0" r="40" fill="none" stroke="#d4af37" strokeWidth="2" />
        <rect x="-10" y="-25" width="20" height="28" fill="#555555" rx="3" />
        <rect x="-4" y="-28" width="8" height="6" fill="#333333" rx="1" />
        <circle cx="0" cy="-26" r="3" fill="#d4af37" />
        <path d="M -6 8 Q -8 14 -6 20 M 0 8 Q 0 14 2 20 M 6 8 Q 8 14 6 20" stroke="#888888" strokeWidth="1.5" fill="none" opacity="0.7" />
      </g>

      <text x="600" y="320" fontSize="64" fontFamily="serif" fill="white" opacity="0.15" textAnchor="middle" fontWeight="bold">
        HAMBURG HAMM
      </text>

      <text x="600" y="550" fontSize="24" fontFamily="sans-serif" fill="white" opacity="0.2" textAnchor="middle">
        Professional Barbershop Team
      </text>
    </svg>
  );
}
