"use client";

import { useEffect, useMemo, useState } from "react";

type TimelineItem = {
  title: string;
  meta: string;
  bullets: string[];
  tags: string[];
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const timelineItems: TimelineItem[] = [
  {
    title: "Support Developer - Intranet Solutions",
    meta: "Melbourne - Sep 2023 to Present",
    bullets: [
      "ServiceDesk-style support across multiple enterprise clients and production incidents.",
      "Performed root cause analysis and deployed fixes/enhancements in PHP, JavaScript, SQL, and frontend frameworks.",
      "Built and maintained intranet workflows including user permissions, integrations, form automation, and reporting.",
      "Collaborated with stakeholders to gather requirements and deliver sprint-based improvements.",
      "Maintained technical documentation and deployment notes for support continuity."
    ],
    tags: ["PHP", "JavaScript", "Vue", "MySQL", "Prod Support"]
  },
  {
    title: "Founder / Co-owner - Asques Collective Pty Ltd",
    meta: "Melbourne - Apr 2022 to Jan 2024",
    bullets: [
      "Founded an e-commerce jewellery business and achieved $110,000 in sales within six months.",
      "Designed and deployed a Shopify website and customer automations using Klaviyo.",
      "Developed practical skills in customer engagement, analytics, and marketing strategy."
    ],
    tags: ["Shopify", "Automation", "Analytics"]
  },
  {
    title: "Peer Mentor - RMIT",
    meta: "Melbourne - Mar 2022 to Present",
    bullets: [
      "Mentored students in Python and data science fundamentals.",
      "Helped with debugging, coding logic, and algorithm comprehension."
    ],
    tags: ["Python", "Mentoring", "Communication"]
  },
  {
    title: "Software Engineering Intern - Customer Portal Team (AAD)",
    meta: "Melbourne - Apr 2019 to May 2019",
    bullets: [
      "Assisted in building a customer portal using C# and Umbraco CMS.",
      "Developed backend integration endpoints to support customer record management."
    ],
    tags: ["C#", "Umbraco", "APIs"]
  }
];

const projects: Project[] = [
  {
    title: "Stripe Payment Gateway Integration",
    subtitle: "Enterprise intranet form workflows (PHP-based)",
    description:
      "Implemented secure payment processing, improving transaction reliability and increasing client revenue from $5,000 to $15,000 (+200%).",
    tags: ["PHP", "Payments", "Security", "Automation"]
  },
  {
    title: "Capstone: GL Validation System",
    subtitle: "Power Apps, Power Automate, Oracle Fusion rules",
    description:
      "Led a team as SCRUM Master to build real-time validation for single and bulk General Ledger entries, reducing errors and improving finance workflow efficiency.",
    tags: ["Power Platform", "Scrum", "Validation"]
  },
  {
    title: "Social Feed Integration (Meta Graph API)",
    subtitle: "Client intranet enhancement",
    description:
      "Integrated a social media feed application with the Meta Graph API to surface content directly within the intranet.",
    tags: ["API", "JavaScript", "Integration"]
  }
];

function TagList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
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

function formatYear() {
  return new Date().getFullYear();
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copyLabel, setCopyLabel] = useState("Copy");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light") {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const currentYear = useMemo(() => formatYear(), []);

  async function handleCopyEmail() {
    const email = "nicolas.papageorgiou@outlook.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopyLabel("Copied");
      window.setTimeout(() => setCopyLabel("Copy"), 1200);
    } catch {
      setCopyLabel("Copy failed");
      window.setTimeout(() => setCopyLabel("Copy"), 1200);
    }
  }

  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[color:var(--surface)] focus:px-4 focus:py-2">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/85 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-wide sm:text-base">
            <span className="h-3 w-3 rounded-full bg-[color:var(--brand)] shadow-[0_0_0_8px_var(--ring)]" />
            Nicolas Papageorgiou
          </a>

          <nav aria-label="Primary" className="relative">
            <button
              type="button"
              className="glass rounded-xl px-3 py-2 text-sm lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Menu
            </button>

            <ul
              id="site-nav"
              className={`glass absolute right-0 top-12 w-64 flex-col rounded-2xl p-2 ${
                menuOpen ? "flex" : "hidden"
              } lg:static lg:flex lg:w-auto lg:flex-row lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
            >
              {navItems.map((item) => {
                const href = `#${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <a
                      className="block rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-[color:var(--surface-muted)]"
                      href={href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  className="rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold"
                  onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? "Light" : "Dark"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="content" className="mx-auto w-[min(1120px,92vw)]">
        <section id="top" className="relative overflow-hidden py-16 sm:py-20">
          <div className="hero-orb absolute -left-16 top-6 h-44 w-44 rounded-full bg-[color:var(--brand)]" />
          <div className="hero-orb absolute right-0 top-12 h-36 w-36 rounded-full bg-[color:var(--brand-2)]" />

          <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                Graduate Software Engineer (RMIT, 2025) - Melbourne
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                Building dependable software for real teams and real production pressure.
              </h1>

              <div className="mt-6 h-28 w-28 overflow-hidden rounded-full border-2 border-[color:var(--border)]">
                <img
                  src="/assets/profile.jpg"
                  alt="Nicolas Papageorgiou portrait"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-5 max-w-2xl text-lg text-[color:var(--text-muted)]">
                2+ years delivering and supporting enterprise platforms across multiple clients. Strong in PHP, JavaScript, Vue.js, MySQL, and production troubleshooting.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:translate-y-[-1px]">
                  View Projects
                </a>
                <a
                  href="/assets/Nicolas_Papageorgiou_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-xl px-5 py-3 text-sm font-bold"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a className="glass rounded-full px-4 py-2 text-sm font-medium" href="mailto:nicolas.papageorgiou@outlook.com">
                  Email
                </a>
                <a
                  className="glass rounded-full px-4 py-2 text-sm font-medium"
                  href="https://github.com/NicolasP304"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="glass rounded-full px-4 py-2 text-sm font-medium"
                  href="https://linkedin.com/in/nicolas-r-papageorgiou"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="glass rounded-2xl p-5">
              <div className="space-y-4">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-2xl font-extrabold">2+ yrs</p>
                  <p className="text-sm font-medium text-[color:var(--text-muted)]">Professional experience</p>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <p className="text-2xl font-extrabold">15+</p>
                  <p className="text-sm font-medium text-[color:var(--text-muted)]">Enterprise clients supported</p>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <p className="text-2xl font-extrabold">20-30</p>
                  <p className="text-sm font-medium text-[color:var(--text-muted)]">Tickets resolved weekly</p>
                </div>
              </div>

              <div className="my-5 border-t border-[color:var(--border)]" />

              <p className="text-sm text-[color:var(--text-muted)]">
                Highlight: implemented Stripe payment gateway in intranet form workflows, increasing revenue from $5k to $15k (+200%).
              </p>
            </aside>
          </div>
        </section>

        <section id="about" className="py-8 sm:py-10">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-2 max-w-3xl text-[color:var(--text-muted)]">
            I am Nicolas "Nick" Papageorgiou, a Melbourne-based graduate software engineer with a strong background in production support, stakeholder communication, and full-stack development.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">What I am good at</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--text-muted)]">
                <li>Shipping pragmatic fixes and improvements in live environments.</li>
                <li>Root cause analysis and incident-style troubleshooting.</li>
                <li>Building reliable workflows across forms, permissions, integrations, and automation.</li>
                <li>Working with stakeholders to clarify requirements and deliver measurable outcomes.</li>
              </ul>
            </article>

            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">Looking for</h3>
              <p className="mt-3 text-[color:var(--text-muted)]">
                Graduate opportunities in software development, cloud, business systems, or technical consulting.
              </p>
              <TagList items={["Software Engineering", "Cloud", "Business Systems", "Technical Consulting"]} />
            </article>
          </div>
        </section>

        <section id="skills" className="py-8 sm:py-10">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="mt-2 text-[color:var(--text-muted)]">
            Tools and technologies I use to deliver production-ready solutions.
          </p>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">Languages</h3>
              <p className="mono mt-3 text-sm text-[color:var(--text-muted)]">PHP, JavaScript, Python, C#, Java, C++</p>
            </article>
            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">Web</h3>
              <p className="mono mt-3 text-sm text-[color:var(--text-muted)]">
                HTML, CSS, jQuery, Bootstrap, Vue.js, React.js, Flask, Flutter, Umbraco
              </p>
            </article>
            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">Data, Cloud, DevOps</h3>
              <p className="mono mt-3 text-sm text-[color:var(--text-muted)]">MySQL, SQLite, AWS, Docker, Bash, Git</p>
            </article>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">Ways of working</h3>
              <p className="mono mt-3 text-sm text-[color:var(--text-muted)]">
                Agile, Scrum, SDLC, Incident Management, Root Cause Analysis
              </p>
            </article>
            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">Testing</h3>
              <p className="mono mt-3 text-sm text-[color:var(--text-muted)]">JUnit, Mockito</p>
            </article>
          </div>
        </section>

        <section id="experience" className="py-8 sm:py-10">
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="mt-2 text-[color:var(--text-muted)]">
            Roles that shaped my engineering style: practical, reliable, and stakeholder-friendly.
          </p>

          <div className="mt-5 space-y-4">
            {timelineItems.map((item) => (
              <article key={item.title} className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm font-medium text-[color:var(--text-muted)]">{item.meta}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--text-muted)]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <TagList items={item.tags} />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-8 sm:py-10">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-[color:var(--text-muted)]">
            Selected work that shows impact, engineering judgment, and delivery.
          </p>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="glass rounded-2xl p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-[color:var(--text-muted)]">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{project.description}</p>
                <TagList items={project.tags} />
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm text-[color:var(--text-muted)]">
            Additional work samples and code snippets are available upon request due to client confidentiality.
          </p>
        </section>

        <section id="education" className="py-8 sm:py-10">
          <h2 className="text-3xl font-bold">Education and Certifications</h2>
          <p className="mt-2 text-[color:var(--text-muted)]">Academic foundation plus practical credentials.</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">RMIT University - Bachelor of Software Engineering</h3>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">Feb 2022 to Jul 2025</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--text-muted)]">
                <li>Algorithms and Analysis</li>
                <li>Practical Data Science</li>
                <li>Cloud Computing</li>
                <li>Web Programming</li>
                <li>Advanced Programming Techniques</li>
              </ul>
            </article>

            <article className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">Certifications and Micro-credentials</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--text-muted)]">
                <li>AWS Academy Graduate - Cloud Foundations (Training Badge)</li>
                <li>Peer Mentoring</li>
                <li>Business Problem Solving</li>
                <li>Planning a Project</li>
              </ul>
              <div className="my-4 border-t border-[color:var(--border)]" />
              <p className="text-sm text-[color:var(--text-muted)]">Australian working rights. Referees available upon request.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="py-8 sm:py-10">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-[color:var(--text-muted)]">
            If you would like to chat about graduate roles, consulting, or building reliable systems, reach out.
          </p>

          <article className="glass mt-5 rounded-2xl p-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-[color:var(--text-muted)]">Email</p>
                <a className="mt-1 inline-block text-base font-semibold" href="mailto:nicolas.papageorgiou@outlook.com">
                  nicolas.papageorgiou@outlook.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-[color:var(--text-muted)]">Phone</p>
                <a className="mt-1 inline-block text-base font-semibold" href="tel:+61499999412">
                  +61 499 999 412
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-[color:var(--text-muted)]">Links</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href="https://github.com/NicolasP304"
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-full px-3 py-1.5 text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/nicolas-r-papageorgiou"
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-full px-3 py-1.5 text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="copyEmail" className="text-sm font-medium text-[color:var(--text-muted)]">
                Quick copy
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                <input
                  id="copyEmail"
                  type="text"
                  value="nicolas.papageorgiou@outlook.com"
                  readOnly
                  className="mono min-w-[280px] flex-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-3 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="glass rounded-xl px-4 py-2 text-sm font-semibold"
                >
                  {copyLabel}
                </button>
              </div>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                Tip: If you want a real contact form on GitHub Pages, Formspree free tier can be added later.
              </p>
            </div>
          </article>
        </section>
      </main>

      <footer className="mx-auto mt-8 flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-2 border-t border-[color:var(--border)] py-6 text-sm text-[color:var(--text-muted)]">
        <p>&copy; {currentYear} Nicolas Papageorgiou. Built on GitHub Pages.</p>
        <a href="#top" className="font-semibold hover:underline">
          Back to top
        </a>
      </footer>
    </>
  );
}
