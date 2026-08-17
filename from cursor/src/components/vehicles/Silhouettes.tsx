import { cn } from "@/lib/utils";

type SilhouetteProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ScooterSilhouette({ className }: SilhouetteProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      className={cn("h-auto w-full text-foreground/80", className)}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="scooterMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f4f4f4" />
          <stop offset="75%" stopColor="#cfcfcf" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <ellipse cx="70" cy="138" rx="34" ry="34" fill="url(#scooterMetal)" stroke="#d4d4d4" />
      <ellipse cx="250" cy="138" rx="38" ry="38" fill="url(#scooterMetal)" stroke="#d4d4d4" />
      <circle cx="70" cy="138" r="12" fill="#111" opacity="0.15" />
      <circle cx="250" cy="138" r="14" fill="#111" opacity="0.15" />
      <path
        d="M70 138 L110 70 H168 L188 110 H236 L250 138"
        {...stroke}
        strokeWidth="2.2"
      />
      <path d="M110 70 L110 48 H132" {...stroke} />
      <path d="M168 110 L148 110 L140 90" {...stroke} />
      <path
        d="M188 90 H228 C236 90 242 96 242 104"
        fill="url(#scooterMetal)"
        stroke="#d1d5db"
      />
      <path d="M205 70 L230 48" stroke="#00D4FF" strokeWidth="2" opacity="0.7" />
      <path d="M40 100 C20 100 18 80 40 78" stroke="#00D4FF" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

export function BikeSilhouette({ className }: SilhouetteProps) {
  return (
    <svg
      viewBox="0 0 340 180"
      className={cn("h-auto w-full text-foreground/80", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bikeMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#f4f4f4" />
          <stop offset="70%" stopColor="#dadada" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <circle cx="72" cy="132" r="36" fill="url(#bikeMetal)" stroke="#d4d4d4" />
      <circle cx="268" cy="132" r="36" fill="url(#bikeMetal)" stroke="#d4d4d4" />
      <circle cx="72" cy="132" r="14" fill="#111" opacity="0.12" />
      <circle cx="268" cy="132" r="14" fill="#111" opacity="0.12" />
      <path
        d="M72 132 L130 70 H190 L230 110 L268 132"
        {...stroke}
        strokeWidth="2.4"
      />
      <path d="M130 70 L118 48 H148" {...stroke} />
      <path d="M190 70 L190 100 L160 118" {...stroke} />
      <path
        d="M150 100 H210 L230 118 H170 Z"
        fill="url(#bikeMetal)"
        stroke="#d1d5db"
      />
      <path d="M210 58 L248 40" stroke="#00D4FF" strokeWidth="2" opacity="0.65" />
      <path d="M40 88 C16 90 14 68 38 64" stroke="#00D4FF" strokeWidth="1.2" opacity="0.35" />
    </svg>
  );
}

export function CargoSilhouette({ className }: SilhouetteProps) {
  return (
    <svg
      viewBox="0 0 360 180"
      className={cn("h-auto w-full text-foreground/80", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cargoMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f0f0f0" />
          <stop offset="80%" stopColor="#d0d0d0" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <circle cx="78" cy="140" r="30" fill="url(#cargoMetal)" stroke="#d4d4d4" />
      <circle cx="210" cy="140" r="30" fill="url(#cargoMetal)" stroke="#d4d4d4" />
      <circle cx="300" cy="140" r="26" fill="url(#cargoMetal)" stroke="#d4d4d4" />
      <path
        d="M78 140 L110 90 H175 L210 140"
        {...stroke}
        strokeWidth="2.2"
      />
      <rect
        x="175"
        y="58"
        width="130"
        height="70"
        rx="8"
        fill="url(#cargoMetal)"
        stroke="#d1d5db"
      />
      <path d="M110 90 L110 62 H138" {...stroke} />
      <path d="M250 48 L290 34" stroke="#00D4FF" strokeWidth="2" opacity="0.6" />
      <path d="M48 100 C24 102 22 82 46 78" stroke="#00D4FF" strokeWidth="1.2" opacity="0.35" />
    </svg>
  );
}

export function VehicleByType({
  type,
  className,
}: {
  type: "scooter" | "bike" | "cargo";
  className?: string;
}) {
  if (type === "scooter") return <ScooterSilhouette className={className} />;
  if (type === "cargo") return <CargoSilhouette className={className} />;
  return <BikeSilhouette className={className} />;
}
