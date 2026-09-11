const sparkles = [
  { top: "15%", left: "8%", size: 14, color: "var(--color-purple)", duration: 2.4, delay: 0 },
  { top: "70%", left: "14%", size: 10, color: "var(--color-yellow)", duration: 3, delay: 0.6 },
  { top: "30%", left: "22%", size: 8, color: "var(--color-green)", duration: 2.2, delay: 1.2 },
  { top: "50%", left: "5%", size: 12, color: "var(--color-blue-light)", duration: 2.8, delay: 0.3 },
  { top: "20%", left: "40%", size: 10, color: "var(--color-yellow)", duration: 2.6, delay: 1.5 },
  { top: "78%", left: "45%", size: 14, color: "var(--color-purple)", duration: 3.2, delay: 0.9 },
  { top: "12%", left: "60%", size: 9, color: "var(--color-green)", duration: 2.3, delay: 1.8 },
  { top: "55%", left: "68%", size: 12, color: "var(--color-blue-light)", duration: 2.9, delay: 0.2 },
  { top: "82%", left: "76%", size: 10, color: "var(--color-yellow)", duration: 2.5, delay: 1.1 },
  { top: "25%", left: "85%", size: 14, color: "var(--color-purple)", duration: 3.1, delay: 0.5 },
  { top: "65%", left: "92%", size: 9, color: "var(--color-green)", duration: 2.7, delay: 1.4 },
  { top: "40%", left: "50%", size: 8, color: "var(--color-blue-light)", duration: 2.1, delay: 2 },
];

export default function Banner() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand-purple via-brand-blue-light to-brand-yellow px-6 py-20 text-center sm:py-28"
        style={{
          backgroundImage: "url(/images/banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-blue-deep/40" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {sparkles.map((sparkle, i) => (
            <span
              key={i}
              className="banner-sparkle"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                backgroundColor: sparkle.color,
                boxShadow: `0 0 ${sparkle.size}px ${sparkle.size / 2}px ${sparkle.color}`,
                animationDuration: `${sparkle.duration}s`,
                animationDelay: `${sparkle.delay}s`,
              }}
            />
          ))}
        </div>

        <p className="font-script relative text-5xl text-white sm:text-6xl md:text-7xl">
          StayCool
        </p>
      </div>
    </section>
  );
}
