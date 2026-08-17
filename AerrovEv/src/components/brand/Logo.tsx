import Image from "next/image";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /**
   * - wordmark: full official logo (hero, footer)
   * - compact: mark + AERRO text (navbar)
   */
  variant?: "wordmark" | "compact";
  size?: "nav" | "hero" | "footer";
  priority?: boolean;
  href?: string;
};

const wordmarkSizes = {
  nav: {
    className: "h-8 w-auto object-left sm:h-9",
    width: 220,
    height: 48,
  },
  hero: {
    className: "h-12 w-auto object-center sm:h-16 md:h-[4.5rem]",
    width: 420,
    height: 90,
  },
  footer: {
    className: "h-9 w-auto object-left sm:h-10",
    width: 240,
    height: 52,
  },
} as const;

/**
 * Official AERRO branding from repository assets.
 * Wordmark: `/brand/logo.jpeg` · Mark: `/favicon.jpeg`
 */
export function Logo({
  className,
  variant = "wordmark",
  size = "nav",
  priority = false,
  href = "#home",
}: LogoProps) {
  if (variant === "compact") {
    return (
      <a
        href={href}
        className={cn("group inline-flex items-center gap-2.5", className)}
        aria-label="AERRO EV home"
      >
        <Image
          src={SITE.favicon}
          alt=""
          width={36}
          height={36}
          priority={priority}
          className="h-8 w-8 object-contain transition group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.55)] sm:h-9 sm:w-9"
        />
        <span className="font-display text-xl font-bold italic tracking-[0.12em] text-foreground">
          AERRO
        </span>
      </a>
    );
  }

  const dims = wordmarkSizes[size];

  return (
    <a
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label="AERRO EV home"
    >
      <Image
        src={SITE.logo}
        alt="AERRO — Electrify the Future"
        width={dims.width}
        height={dims.height}
        priority={priority}
        className={cn("object-contain", dims.className)}
      />
    </a>
  );
}
