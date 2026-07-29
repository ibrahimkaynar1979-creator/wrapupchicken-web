type NeonBorderProps = {
  className?: string;
};

export default function NeonBorder({
  className = "",
}: NeonBorderProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <style>
        {`
          .base,
          .runner,
          .spark {
            fill: none;
            vector-effect: non-scaling-stroke;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          .base {
            stroke: var(--neon-color);
            stroke-width: 1.2;
            opacity: 0.28;
          }

          .runner {
            stroke: var(--neon-color);
            stroke-width: 2.4;
            stroke-dasharray: 20 80;
            stroke-dashoffset: 0;
            filter:
              drop-shadow(0 0 3px var(--neon-color))
              drop-shadow(0 0 7px var(--neon-color));
            animation: neonRunnerMove 2.4s linear infinite;
          }

          .spark {
            stroke: #ffffff;
            stroke-width: 1.5;
            stroke-dasharray: 4 96;
            stroke-dashoffset: -8;
            filter:
              drop-shadow(0 0 3px #ffffff)
              drop-shadow(0 0 6px var(--neon-color));
            animation: neonSparkMove 2.4s linear infinite;
          }

          @keyframes neonRunnerMove {
            from {
              stroke-dashoffset: 0;
            }

            to {
              stroke-dashoffset: -100;
            }
          }

          @keyframes neonSparkMove {
            from {
              stroke-dashoffset: -8;
            }

            to {
              stroke-dashoffset: -108;
            }
          }
        `}
      </style>

      <rect
        className="base"
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
      />

      <rect
        className="runner"
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
      />

      <rect
        className="spark"
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
      />
    </svg>
  );
}