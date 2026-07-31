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
      <rect
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        fill="none"
        stroke="var(--neon-color)"
        strokeWidth="1.4"
        opacity="0.58"
        vectorEffect="non-scaling-stroke"
        style={{
          filter: "drop-shadow(0 0 4px var(--neon-color))",
        }}
      />
    </svg>
  );
}