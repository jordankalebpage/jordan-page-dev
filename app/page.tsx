import Link from "next/link";
import { experience, resumeProjects, skillGroups } from "./content";

const sectionClass =
  "mt-8 rounded-3xl border border-(--border-subtle) bg-(--surface-card) p-6 sm:p-10 shadow-sm backdrop-blur-sm transition-all";
const linkPillClass =
  "inline-flex items-center gap-1.5 rounded-full border border-(--accent-border) px-4 py-2 text-sm font-medium text-(--accent) transition-all hover:bg-(--accent) hover:text-white dark:hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) hover:-translate-y-0.5 active:translate-y-0";
const sectionJumpLinkClass =
  "inline-flex items-center justify-center rounded-full border border-(--border-subtle) bg-(--surface-active) px-4 py-2 text-sm font-medium text-(--text-secondary) transition-all hover:border-(--border-strong) hover:bg-(--surface-hover) hover:text-(--text-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) hover:-translate-y-0.5 active:translate-y-0";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.46c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88V21h-4V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.477 2 2 6.59 2 12.252c0 4.53 2.865 8.374 6.839 9.73.5.096.682-.22.682-.487 0-.24-.008-.875-.013-1.718-2.782.62-3.37-1.367-3.37-1.367-.455-1.186-1.11-1.5-1.11-1.5-.907-.636.07-.623.07-.623 1.004.072 1.533 1.058 1.533 1.058.892 1.567 2.338 1.114 2.908.852.092-.67.35-1.13.636-1.39-2.22-.258-4.555-1.138-4.555-5.066 0-1.12.392-2.034 1.03-2.752-.103-.26-.446-1.303.098-2.715 0 0 .84-.275 2.75 1.052A9.3 9.3 0 0 1 12 6.958c.85.004 1.705.118 2.503.345 1.91-1.327 2.749-1.052 2.749-1.052.545 1.412.202 2.455.1 2.715.64.718 1.03 1.633 1.03 2.752 0 3.938-2.338 4.806-4.566 5.058.36.319.68.948.68 1.913 0 1.382-.013 2.497-.013 2.836 0 .27.18.587.688.487C19.138 20.624 22 16.78 22 12.252 22 6.59 17.523 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 sm:py-32">
      <section className="relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--surface-card) p-8 shadow-sm backdrop-blur-sm sm:p-12 transition-all">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-(--accent) opacity-20 blur-3xl"></div>
        <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">
          Full Stack Developer
        </p>
        <h1 className="relative mt-3 text-5xl font-extrabold tracking-tight text-(--text-primary) sm:text-6xl md:text-7xl">
          Jordan Page
        </h1>
        <a
          href="mailto:jp@jordanpage.dev"
          className="relative mt-2 inline-block text-sm font-medium tracking-wide text-(--text-muted) transition-colors hover:text-(--accent)"
        >
          jp@jordanpage.dev
        </a>

        <p className="relative mt-8 max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
          Full Stack Developer with 4 years of enterprise experience building
          React/.NET applications for clients including Lawrence Livermore
          National Laboratory and the US Army Corps of Engineers. Proven track
          record in developing and maintaining enterprise-level applications,
          automating processes, and performing data analytics.
        </p>

        <nav aria-label="Jump to section" className="relative mt-10">
          <ul className="flex flex-wrap gap-x-3 gap-y-4 sm:gap-3">
            <li>
              <a className={sectionJumpLinkClass} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className={sectionJumpLinkClass} href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className={sectionJumpLinkClass} href="#selected-projects">
                Projects
              </a>
            </li>
            <li>
              <a className={sectionJumpLinkClass} href="#education">
                Education
              </a>
            </li>
          </ul>
        </nav>

        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          <li>
            <a
              aria-label="LinkedIn (opens in new tab)"
              className={linkPillClass}
              href="https://www.linkedin.com/in/jordankalebpage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub (opens in new tab)"
              className={linkPillClass}
              href="https://github.com/jordankalebpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </section>

      <section id="skills" className={sectionClass}>
        <h2 className="text-3xl font-bold tracking-tight text-(--text-primary)">
          Skills
        </h2>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="group rounded-2xl border border-(--border-subtle) bg-(--surface-header) p-5 transition-all hover:-translate-y-1 hover:border-(--accent-border) hover:shadow-md"
            >
              <dt className="text-sm font-bold text-(--text-strong) group-hover:text-(--accent)">
                {group.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                {group.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="experience" className={sectionClass}>
        <h2 className="text-3xl font-bold tracking-tight text-(--text-primary)">
          Professional Experience
        </h2>

        <div className="mt-8 space-y-6">
          {experience.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="group rounded-2xl border border-(--border-subtle) bg-(--surface-header) p-6 transition-all hover:border-(--border-strong) hover:shadow-sm"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-(--text-primary) group-hover:text-(--accent)">
                  {role.title}
                </h3>
                <span className="inline-flex w-fit items-center rounded-full bg-(--surface-active) px-3 py-1 text-xs font-medium text-(--text-secondary)">
                  {role.period}
                </span>
              </div>

              <p className="mt-3 text-base font-medium text-(--text-strong)">
                {role.company}
              </p>

              <ul className="mt-4 list-none space-y-3 text-sm leading-relaxed text-(--text-secondary)">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-6">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-(--accent-border) group-hover:bg-(--accent)"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="selected-projects" className={sectionClass}>
        <h2 className="text-3xl font-bold tracking-tight text-(--text-primary)">
          Selected Projects
        </h2>
        <p className="mt-4 text-base leading-relaxed text-(--text-secondary)">
          These highlight real-world work and utilities. For dedicated
          React/Next.js showcase builds, visit the Projects page.
        </p>
        <div className="mt-6">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-(--accent-border) bg-(--accent-hover-bg) px-5 py-2.5 text-sm font-semibold text-(--accent) transition-all hover:bg-(--accent) hover:text-white dark:hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) hover:-translate-y-0.5"
            href="/projects"
          >
            Explore React and Next.js Showcase
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {resumeProjects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-(--border-subtle) bg-(--surface-header) p-6 transition-all hover:-translate-y-1 hover:border-(--accent-border) hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-(--text-primary) group-hover:text-(--accent)">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                  {project.description}
                </p>
              </div>
              <a
                aria-label={`${project.name} repository (opens in new tab)`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-(--surface-active) px-4 py-2 text-sm font-semibold text-(--accent) transition-all hover:bg-(--accent) hover:text-white dark:hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <GitHubIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className={sectionClass}>
        <h2 className="text-3xl font-bold tracking-tight text-(--text-primary)">
          Education
        </h2>
        <div className="mt-8 rounded-2xl border border-(--border-subtle) bg-(--surface-header) p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-(--text-strong)">
              Bachelor of Science in Computer Science
            </h3>
            <span className="inline-flex w-fit items-center rounded-full bg-(--surface-active) px-3 py-1 text-xs font-medium text-(--text-secondary)">
              Graduated: May 2018
            </span>
          </div>
          <p className="mt-3 text-base font-medium text-(--accent)">
            Saint Vincent College, Latrobe, PA
          </p>
          <p className="mt-4 text-sm leading-relaxed text-(--text-secondary)">
            <strong className="text-(--text-strong)">
              Relevant coursework:
            </strong>{" "}
            Applied Cryptography, Data Communications, Server-Side Programming,
            Computer Architecture, Software Engineering, Database Concepts, Data
            Structures.
          </p>
        </div>
      </section>
    </div>
  );
}
