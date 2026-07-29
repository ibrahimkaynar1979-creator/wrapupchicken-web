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
        className="neonBase"
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
      />

      <rect
        className="neonRunner"
        x="2"
        y="2"
        width="196"
        height="96"
        rx="16"
        ry="16"
        pathLength="100"
      />

      <rect
        className="neonSpark"
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