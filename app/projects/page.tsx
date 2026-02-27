import Link from "next/link";
import { portfolioProjects } from "../../lib/projects";

export const metadata = {
  title: "Projects | Nicolas Papageorgiou",
  description: "Detailed project case studies from Nicolas Papageorgiou's software engineering portfolio."
};

export default function ProjectsIndexPage() {
  return (
    <main className="mx-auto w-[min(1120px,92vw)] py-12 sm:py-16">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">Case studies</p>
        <h1 className="mt-2 text-4xl font-bold">Projects</h1>
        <p className="mt-3 max-w-3xl text-[color:var(--text-muted)]">
          A deeper breakdown of engineering decisions, delivery constraints, and measurable outcomes.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <article key={project.slug} className="glass hover-lift reveal project-card group rounded-2xl p-5">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">{project.subtitle}</p>
            <p className="mt-3 text-sm text-[color:var(--text-muted)]">{project.description}</p>
            <Link
              href={`/projects/${project.slug}`}
              className="project-cta mt-4 inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold"
            >
              Open case study <span aria-hidden="true" className="project-cta-arrow">→</span>
            </Link>
          </article>
        ))}
      </div>

      <Link href="/#projects" className="mt-8 inline-flex text-sm font-semibold text-[color:var(--brand)] hover:underline">
        Back to portfolio
      </Link>
    </main>
  );
}
