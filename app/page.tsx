import Link from "next/link";
import { experience, resumeProjects, skillGroups } from "./content";

export const runtime = "edge";

const sectionClass = "mt-8 rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8";
const staticPillClass = "rounded-md border border-white/10 px-3 py-2 text-zinc-300";
const linkPillClass =
  "inline-flex rounded-md border border-sky-400/40 px-3 py-2 text-sky-300 transition-colors hover:bg-sky-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
const sectionJumpLinkClass =
  "rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

function ExternalIndicator() {
  return (
    <>
      <span aria-hidden="true" className="ml-1">
        ↗
      </span>
      <span className="sr-only"> (opens in new tab)</span>
    </>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">Full Stack Developer</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Jordan Page
        </h1>

        <p className="mt-6 max-w-3xl text-zinc-300">
          Full Stack Developer with 4 years of enterprise experience building React/.NET
          applications for clients including Lawrence Livermore National Laboratory and the US
          Army Corps of Engineers. Proven track record in developing and maintaining
          enterprise-level applications, automating processes, and performing data analytics.
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
          <li className={staticPillClass}>Greenville, SC</li>
          <li>
            <a
              className={linkPillClass}
              href="tel:[REDACTED_PHONE]"
            >
              [REDACTED_PHONE]
            </a>
          </li>
          <li>
            <a
              className={linkPillClass}
              href="mailto:[REDACTED_EMAIL]"
            >
              [REDACTED_EMAIL]
            </a>
          </li>
          <li>
            <a
              aria-label="LinkedIn (opens in new tab)"
              className={linkPillClass}
              href="https://www.linkedin.com/in/jordankalebpage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ExternalIndicator />
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
              <ExternalIndicator />
            </a>
          </li>
        </ul>
      </section>

      <section id="skills" className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Skills</h2>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-lg border border-white/10 p-4">
              <dt className="text-sm font-semibold text-zinc-200">{group.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">{group.value}</dd>
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
            <article key={`${role.company}-${role.title}`} className="rounded-lg border border-white/10 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-100">{role.title}</h3>
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
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Selected Projects</h2>
        <p className="mt-3 text-sm text-zinc-300">
          These highlight real-world work and utilities. For dedicated React/Next.js showcase
          builds, visit the Projects page.
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
            <article key={project.name} className="rounded-lg border border-white/10 p-4">
              <h3 className="text-base font-semibold text-zinc-100">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{project.description}</p>
              <a
                aria-label={`${project.name} repository (opens in new tab)`}
                className="mt-3 inline-flex text-sm font-medium text-sky-300 transition-colors hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ExternalIndicator />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Education</h2>
        <p className="mt-4 text-zinc-200">Bachelor of Science in Computer Science</p>
        <p className="mt-1 text-sm text-zinc-300">
          Saint Vincent College, Latrobe, PA | Graduated: May 2018
        </p>
        <p className="mt-4 text-sm leading-6 text-zinc-300">
          Relevant coursework: Applied Cryptography, Data Communications, Server-Side Programming,
          Computer Architecture, Software Engineering, Database Concepts, Data Structures.
        </p>
      </section>
    </div>
  );
}
