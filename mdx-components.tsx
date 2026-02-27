import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="mt-8 text-2xl font-semibold" {...props} />,
    h3: (props) => <h3 className="mt-6 text-xl font-semibold" {...props} />,
    p: (props) => <p className="mt-4 leading-7 text-[color:var(--text-muted)]" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--text-muted)]" {...props} />,
    li: (props) => <li {...props} />,
    strong: (props) => <strong className="text-[color:var(--text)]" {...props} />,
    code: (props) => (
      <code
        className="mono rounded bg-[color:var(--surface-muted)] px-1.5 py-0.5 text-[0.92em] text-[color:var(--text)]"
        {...props}
      />
    ),
    ...components
  };
}
