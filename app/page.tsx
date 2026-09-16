import Link from "next/link";
import { experience, resumeProjects, skillGroups } from "./content";

const jumpLinkClass =
  "inline-flex items-center border-b border-(--border-strong) py-1 font-mono text-xs font-medium uppercase tracking-[0.14em] text-(--text-secondary) transition-colors hover:border-(--accent) hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)";

const socialLinkClass =
  "inline-flex items-center justify-between gap-6 border border-(--border-strong) px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-(--text-primary) transition-colors hover:border-(--accent) hover:bg-(--accent) hover:text-(--accent-contrast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)";

function SectionHeading({
  index,
  children,
}: Readonly<{
  index: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-end gap-4 border-b border-(--border-strong) pb-4">
      <span className="font-mono text-xs text-(--accent)" aria-hidden="true">
        {index}
      </span>
      <h2 className="text-3xl font-semibold uppercase tracking-[-0.04em] text-(--text-primary) sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

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
    <div className="mx-auto w-full max-w-6xl border-x border-(--border-subtle) px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
      <section className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-(--accent)">
              <span className="size-2 bg-(--accent)" aria-hidden="true" />
              Full Stack Developer
            </p>

            <h1 className="mt-7 max-w-4xl text-[clamp(4.5rem,14vw,10.5rem)] font-semibold leading-[0.78] tracking-[-0.085em] text-(--text-primary)">
              Jordan
              <br />
              Page
            </h1>
          </div>

          <div className="border-t border-(--border-strong) pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-(--text-muted)">
              Profile / 2026
            </p>
            <p className="mt-4 text-base leading-relaxed text-(--text-secondary)">
              I build dependable software for complex, real-world systems.
            </p>
            <a
              href="mailto:jp@jordanpage.dev"
              className="mt-5 inline-block font-mono text-xs text-(--text-primary) underline decoration-(--accent) decoration-2 underline-offset-4 transition-colors hover:text-(--accent)"
            >
              jp@jordanpage.dev
            </a>
          </div>
        </div>

        <p className="mt-14 max-w-3xl border-l-4 border-(--accent) pl-5 text-lg leading-relaxed text-(--text-secondary) sm:text-xl">
          Full Stack Developer with 4 years of enterprise experience building
          React/.NET applications for clients including Lawrence Livermore
          National Laboratory and the US Army Corps of Engineers. Proven track
          record in developing and maintaining enterprise-level applications,
          automating processes, and performing data analytics.
        </p>

        <nav aria-label="Jump to section" className="mt-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
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

        <ul className="mt-10 flex flex-wrap gap-3">
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

      <hr className="my-20 border-t border-(--border-subtle) sm:my-28" />

      <section id="skills">
        <SectionHeading index="01">Skills</SectionHeading>

        <dl className="mt-8 grid border-l border-t border-(--border-subtle) sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className="group border-b border-r border-(--border-subtle) bg-(--surface-card) p-5 transition-colors hover:bg-(--surface-hover)"
            >
              <dt className="flex items-center justify-between font-mono text-xs font-medium uppercase tracking-wider text-(--accent)">
                <span>{group.label}</span>
                <span className="text-(--text-muted)" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                {group.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <hr className="my-20 border-t border-(--border-subtle) sm:my-28" />

      <section id="experience">
        <SectionHeading index="02">Experience</SectionHeading>

        <div className="mt-3">
          {experience.map((role, index) => (
            <article
              key={`${role.company}-${role.title}`}
              className="group grid gap-5 border-b border-(--border-subtle) py-8 sm:grid-cols-[9rem_1fr] sm:gap-8"
            >
              <div>
                <span className="font-mono text-xs text-(--accent)">
                  {String(index + 1).padStart(2, "0")} /
                </span>
                <p className="mt-3 font-mono text-[0.65rem] uppercase leading-relaxed tracking-wider text-(--text-muted)">
                  {role.period}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-(--text-primary) sm:text-2xl">
                  {role.title}
                </h3>

                <p className="mt-1 font-mono text-xs font-medium uppercase tracking-wider text-(--accent)">
                  {role.company}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-(--text-secondary)">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="relative pl-5">
                      <span className="absolute left-0 top-[0.65em] h-px w-2 bg-(--border-strong)" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="my-20 border-t border-(--border-subtle) sm:my-28" />

      <section id="selected-projects">
        <SectionHeading index="03">Selected Projects</SectionHeading>

        <p className="mt-4 text-base leading-relaxed text-(--text-secondary)">
          These highlight real-world work and utilities.
        </p>

        <div className="mt-6">
          <Link
            className="inline-flex items-center gap-8 bg-(--accent) px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-(--accent-contrast) transition-colors hover:bg-(--accent-hover) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
            href="/projects"
          >
            Explore Showcase
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-8 grid border-l border-t border-(--border-subtle) sm:grid-cols-2">
          {resumeProjects.map((project, index) => (
            <article
              key={project.name}
              className="group flex min-h-56 flex-col justify-between border-b border-r border-(--border-subtle) bg-(--surface-card) p-6 transition-colors hover:bg-(--surface-active)"
            >
              <div>
                <span className="font-mono text-[0.65rem] text-(--text-muted)">
                  P-{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-(--text-primary) transition-colors group-hover:text-(--accent)">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                  {project.description}
                </p>
              </div>

              <a
                aria-label={`${project.name} repository (opens in new tab)`}
                className="mt-5 inline-flex w-fit items-center gap-2 border-b border-(--accent-border) pb-1 font-mono text-xs font-medium uppercase tracking-wider text-(--accent) transition-colors hover:border-(--accent) hover:text-(--accent-hover)"
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

      <hr className="my-20 border-t border-(--border-subtle) sm:my-28" />

      <section id="education">
        <SectionHeading index="04">Education</SectionHeading>

        <div className="mt-8 border-l-4 border-(--accent) bg-(--surface-card) p-6 sm:p-8">
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
