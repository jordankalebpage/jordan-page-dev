import Link from "next/link";
import { experience, resumeProjects, skillGroups } from "./content";

export const runtime = "edge";

const sectionClass =
  "mt-8 rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8";
const linkPillClass =
  "inline-flex items-center gap-1 rounded-md border border-sky-400/40 px-3 py-2 text-sky-300 transition-colors hover:bg-sky-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
const sectionJumpLinkClass =
  "rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

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
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">
          Full Stack Developer
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Jordan Page
        </h1>

        <p className="mt-6 max-w-3xl text-zinc-300">
          Full Stack Developer with 4 years of enterprise experience building
          React/.NET applications for clients including Lawrence Livermore
          National Laboratory and the US Army Corps of Engineers. Proven track
          record in developing and maintaining enterprise-level applications,
          automating processes, and performing data analytics.
        </p>

        <nav aria-label="Jump to section" className="mt-6">
          <ul className="flex flex-wrap gap-2">
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
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
          Skills
        </h2>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-white/10 p-4"
            >
              <dt className="text-sm font-semibold text-zinc-200">
                {group.label}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">
                {group.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="experience" className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
          Professional Experience
        </h2>

        <div className="mt-6 space-y-5">
          {experience.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="rounded-lg border border-white/10 p-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-100">
                  {role.title}
                </h3>
                <p className="text-sm text-zinc-400">{role.period}</p>
              </div>

              <p className="mt-1 text-sm text-zinc-300">{role.company}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="selected-projects" className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
          Selected Projects
        </h2>
        <p className="mt-3 text-sm text-zinc-300">
          These highlight real-world work and utilities. For dedicated
          React/Next.js showcase builds, visit the Projects page.
        </p>
        <div className="mt-4">
          <Link
            className="inline-flex rounded-md border border-sky-400/40 px-3 py-2 text-sm font-medium text-sky-300 transition-colors hover:bg-sky-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            href="/projects"
          >
            Explore React and Next.js Showcase
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {resumeProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-lg border border-white/10 p-4"
            >
              <h3 className="text-base font-semibold text-zinc-100">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {project.description}
              </p>
              <a
                aria-label={`${project.name} repository (opens in new tab)`}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sky-300 transition-colors hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
          Education
        </h2>
        <p className="mt-4 text-zinc-200">
          Bachelor of Science in Computer Science
        </p>
        <p className="mt-1 text-sm text-zinc-300">
          Saint Vincent College, Latrobe, PA | Graduated: May 2018
        </p>
        <p className="mt-4 text-sm leading-6 text-zinc-300">
          Relevant coursework: Applied Cryptography, Data Communications,
          Server-Side Programming, Computer Architecture, Software Engineering,
          Database Concepts, Data Structures.
        </p>
      </section>
    </div>
  );
}
