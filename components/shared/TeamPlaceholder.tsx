const placeholderConfigs = [
  { bg: '#2D5A3D', icon: '✂️' },
  { bg: '#F4D474', icon: '🪮' },
  { bg: '#4A7BA7', icon: '💨' },
  { bg: '#E8A9B8', icon: '🖌️' },
  { bg: '#FF9F43', icon: '🌀' },
  { bg: '#9B6BB3', icon: '✨' },
];

function getPlaceholderConfig(index: number) {
  return placeholderConfigs[index % placeholderConfigs.length];
}

export function PlaceholderImage({ index }: { index: number }) {
  const config = getPlaceholderConfig(index);
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <rect width="400" height="400" fill={config.bg} />
      <text
        x="200"
        y="220"
        fontSize="120"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {config.icon}
      </text>
    </svg>
  );
}
