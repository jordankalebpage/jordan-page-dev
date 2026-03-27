import Link from "next/link";
import { experience, resumeProjects, skillGroups } from "./content";

const jumpLinkClass =
  "inline-flex items-center rounded-full border border-(--border-subtle) px-4 py-2 text-sm font-medium text-(--text-secondary) transition-all hover:border-(--accent-border) hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)";

const socialLinkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-(--accent-border) px-4 py-2 text-sm font-medium text-(--accent) transition-all hover:bg-(--accent) hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) hover:-translate-y-0.5 active:translate-y-0";

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
    <div className="mx-auto w-full max-w-4xl px-6 py-24 sm:py-32">
      <section>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-(--accent)">
          Full Stack Developer
        </p>

        <h1 className="mt-4 font-serif text-5xl italic tracking-tight text-(--text-primary) sm:text-6xl md:text-7xl lg:text-8xl">
          Jordan Page
        </h1>

        <a
          href="mailto:jp@jordanpage.dev"
          className="mt-3 inline-block font-mono text-sm text-(--text-muted) transition-colors hover:text-(--accent)"
        >
          jp@jordanpage.dev
        </a>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
          Full Stack Developer with 4 years of enterprise experience building
          React/.NET applications for clients including Lawrence Livermore
          National Laboratory and the US Army Corps of Engineers. Proven track
          record in developing and maintaining enterprise-level applications,
          automating processes, and performing data analytics.
        </p>

        <nav aria-label="Jump to section" className="mt-10">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a className={jumpLinkClass} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className={jumpLinkClass} href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className={jumpLinkClass} href="#selected-projects">
                Projects
              </a>
            </li>
            <li>
              <a className={jumpLinkClass} href="#education">
                Education
              </a>
            </li>
          </ul>
        </nav>

        <ul className="mt-6 flex flex-wrap gap-3">
          <li>
            <a
              aria-label="LinkedIn (opens in new tab)"
              className={socialLinkClass}
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
              className={socialLinkClass}
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

      <hr className="my-16 border-t border-(--border-subtle)" />

      <section id="skills">
        <h2 className="text-2xl font-bold tracking-tight text-(--text-primary)">
          Skills
        </h2>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl bg-(--surface-card) p-5 transition-colors hover:bg-(--surface-hover)"
            >
              <dt className="font-mono text-xs font-medium uppercase tracking-wider text-(--accent)">
                {group.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                {group.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <hr className="my-16 border-t border-(--border-subtle)" />

      <section id="experience">
        <h2 className="text-2xl font-bold tracking-tight text-(--text-primary)">
          Experience
        </h2>

        <div className="mt-8 space-y-8">
          {experience.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="group border-l-2 border-(--border-subtle) pl-6 transition-colors hover:border-(--accent)"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold text-(--text-primary)">
                  {role.title}
                </h3>
                <span className="font-mono text-xs text-(--text-muted)">
                  {role.period}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-(--accent)">
                {role.company}
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-(--text-secondary)">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-4">
                    <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-(--text-muted)"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <hr className="my-16 border-t border-(--border-subtle)" />

      <section id="selected-projects">
        <h2 className="text-2xl font-bold tracking-tight text-(--text-primary)">
          Selected Projects
        </h2>

        <p className="mt-4 text-base leading-relaxed text-(--text-secondary)">
          These highlight real-world work and utilities.
        </p>

        <div className="mt-6">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) hover:-translate-y-0.5 active:translate-y-0"
            href="/projects"
          >
            Explore Showcase
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {resumeProjects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col justify-between rounded-xl bg-(--surface-card) p-6 transition-colors hover:bg-(--surface-active)"
            >
              <div>
                <h3 className="font-bold text-(--text-primary) transition-colors group-hover:text-(--accent)">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                  {project.description}
                </p>
              </div>

              <a
                aria-label={`${project.name} repository (opens in new tab)`}
                className="mt-5 inline-flex w-fit items-center gap-2 font-mono text-xs font-medium text-(--accent) transition-colors hover:text-(--accent-hover)"
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

      <hr className="my-16 border-t border-(--border-subtle)" />

      <section id="education">
        <h2 className="text-2xl font-bold tracking-tight text-(--text-primary)">
          Education
        </h2>

        <div className="mt-8 border-l-2 border-(--accent-border) pl-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-bold text-(--text-strong)">
              Bachelor of Science in Computer Science
            </h3>
            <span className="font-mono text-xs text-(--text-muted)">
              May 2018
            </span>
          </div>

          <p className="mt-1 text-sm font-medium text-(--accent)">
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
