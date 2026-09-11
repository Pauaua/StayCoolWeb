const COLORS = [
  "var(--color-purple)",
  "var(--color-yellow)",
  "var(--color-green)",
  "var(--color-blue-light)",
  "var(--color-blue-light)",
  "var(--color-purple)",
  "var(--color-yellow)",
  "var(--color-green)",
  "var(--color-blue-deep)",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const DOT_COUNT = 12;

const dots = Array.from({ length: DOT_COUNT }, (_, i) => {
  const left = seededRandom(i * 3.1) * 100;
  const size = 3 + seededRandom(i * 7.7) * 5;
  const duration = 24 + seededRandom(i * 5.3) * 18;
  const delay = -seededRandom(i * 9.9) * duration;
  const color = COLORS[i % COLORS.length];
  const opacity = color === "var(--color-blue-deep)" ? 0.08 : 0.16;

  return { left, size, duration, delay, color, opacity, key: i };
});

export default function FallingDots() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {dots.map((dot) => (
        <span
          key={dot.key}
          className="falling-dot"
          style={{
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
