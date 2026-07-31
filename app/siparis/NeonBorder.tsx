"use client";

import { useEffect, useRef } from "react";

type NeonBorderProps = {
  className?: string;
};

export default function NeonBorder({
  className = "",
}: NeonBorderProps) {
  const runnerRef = useRef<SVGRectElement | null>(null);
  const sparkRef = useRef<SVGRectElement | null>(null);

  useEffect(() => {
    let animationFrameId = 0;

    const duration = 2600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;

      if (runnerRef.current) {
        runnerRef.current.style.strokeDashoffset = String(
          -100 * progress
        );
      }

      if (sparkRef.current) {
        sparkRef.current.style.strokeDashoffset = String(
          -8 - 100 * progress
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Hafif sabit temel çerçeve */}
      <rect
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
        fill="none"
        stroke="var(--neon-color)"
        strokeWidth="1.1"
        opacity="0.22"
        vectorEffect="non-scaling-stroke"
      />

      {/* Kart çevresinde dolaşan renkli ışık */}
      <rect
        ref={runnerRef}
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
        fill="none"
        stroke="var(--neon-color)"
        strokeWidth="2.3"
        strokeDasharray="20 80"
        strokeDashoffset="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{
          filter:
            "drop-shadow(0 0 2px var(--neon-color)) drop-shadow(0 0 6px var(--neon-color))",
        }}
      />

      {/* Renkli ışığın önündeki beyaz parlak uç */}
      <rect
        ref={sparkRef}
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeDasharray="4 96"
        strokeDashoffset="-8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{
          filter:
            "drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 5px var(--neon-color))",
        }}
      />
    </svg>
  );
}