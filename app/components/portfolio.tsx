import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

type CardProps = {
  as?: "article" | "aside" | "div";
  className?: string;
  children: ReactNode;
};

type TagListProps = {
  items: string[];
  className?: string;
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cx("reveal reveal-delay-1 py-8 sm:py-10", className)}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {description ? <p className="mt-2 text-[color:var(--text-muted)]">{description}</p> : null}
      {children}
    </section>
  );
}

export function Card({ as = "article", className, children }: CardProps) {
  const Component = as;

  return <Component className={cx("glass hover-lift reveal rounded-2xl p-5", className)}>{children}</Component>;
}

export function TagList({ items, className }: TagListProps) {
  return (
    <div className={cx("mt-4 flex flex-wrap gap-2", className)}>
      {items.map((tag) => (
        <span
          key={tag}
          className="mono rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-1 text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
