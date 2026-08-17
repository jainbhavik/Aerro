import { Logo } from "@/components/brand/Logo";
import { SITE, CONTACT } from "@/lib/constants";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 4A1.84 1.84 0 1 0 5.35 7.68 1.84 1.84 0 0 0 5.34 4zM20.25 20h-3.18v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20H9.88V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3-1.65 3.21 0 3.8 2.11 3.8 4.86V20z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M23 12.2s0-3.3-.42-4.8c-.23-.84-.9-1.5-1.74-1.74C19.35 5.2 12 5.2 12 5.2s-7.35 0-8.84.46c-.84.23-1.5.9-1.74 1.74C1 8.9 1 12.2 1 12.2s0 3.3.42 4.8c.23.84.9 1.5 1.74 1.74C4.65 19.2 12 19.2 12 19.2s7.35 0 8.84-.46c.84-.23 1.5-.9 1.74-1.74.42-1.5.42-4.8.42-4.8zM9.75 15.45v-6.5l6.2 3.25-6.2 3.25z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo size="footer" />
          <p className="mt-4 font-display text-lg tracking-tight text-foreground">
            {SITE.tagline}
          </p>
          <p className="mt-2 text-sm text-body">{SITE.brandLine}</p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-body">
            <a href={`tel:${CONTACT.phone}`} className="hover:text-accent transition">+91 {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition">{CONTACT.email}</a>
            <span>{CONTACT.address}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs text-body sm:px-8">
          <span>© {new Date().getFullYear()} AERRO EV</span>
          <span className="font-mono tracking-widest uppercase">{SITE.domain}</span>
        </div>
      </div>
    </footer>
  );
}
