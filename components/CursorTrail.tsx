"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    function spawnSparkle(x: number, y: number) {
      const sparkle = document.createElement("span");
      const size = 10 + Math.random() * 10;

      sparkle.className = "cursor-sparkle";
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      container!.appendChild(sparkle);

      sparkle.addEventListener(
        "animationend",
        () => {
          sparkle.remove();
        },
        { once: true },
      );
    }

    function handlePointerMove(event: PointerEvent) {
      const now = performance.now();
      if (now - lastSpawnRef.current < 30) return;
      lastSpawnRef.current = now;
      spawnSparkle(event.clientX, event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    />
  );
}
