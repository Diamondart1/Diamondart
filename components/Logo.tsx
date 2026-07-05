export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const wordmarkColor = light ? "text-paper" : "text-charcoal";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 100 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        className={wordmarkColor}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M24 8 L88 46 L36 84 L48 40 Z" />
      </svg>
      <span className="font-display font-bold tracking-tight text-lg leading-none">
        <span className={wordmarkColor}>Diamond</span>
        <span className="text-plume">art</span>
      </span>
    </span>
  );
}
