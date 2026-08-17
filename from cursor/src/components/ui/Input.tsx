import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="block space-y-2" htmlFor={inputId}>
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-body">
        {label}
      </span>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-body/60 focus:border-accent focus:ring-2 focus:ring-accent/20",
          className,
        )}
        {...props}
      />
    </label>
  );
}

export function Select({
  label,
  id,
  children,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="block space-y-2" htmlFor={selectId}>
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-body">
        {label}
      </span>
      <select
        id={selectId}
        className={cn(
          "w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
