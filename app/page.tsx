import Link from "next/link";
import { experience, resumeProjects, skillGroups } from "./content";

const jumpLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#selected-projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)";

const socialLinkClass = `inline-flex items-center gap-3 rounded-full border border-(--border-strong) px-5 py-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-(--text-primary) transition-colors hover:border-(--text-primary) hover:bg-(--text-primary) hover:text-(--background) ${focusRingClass}`;

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

function Section({
  id,
  index,
  title,
  children,
}: Readonly<{
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section
      id={id}
      className="grid gap-8 border-t border-(--border-strong) pt-6 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <span
            className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-(--accent)"
            aria-hidden="true"
          >
            № {index}
          </span>
          <h2 className="mt-3 font-serif text-5xl leading-[0.95] tracking-[-0.02em] text-(--text-primary) sm:text-6xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="lg:col-span-8">{children}</div>
    </section>
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

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
        width="18"
        x="3"
        y="5"
      />
      <path
        d="m3.5 6.5 8.5 6.5 8.5-6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-28 sm:px-8 sm:pb-36 sm:pt-32 lg:px-12">
      <section aria-labelledby="intro-heading">
        <h1 id="intro-heading" className="sr-only">
          Jordan Page
        </h1>

        <div className="flex items-center justify-between gap-4 border-y border-(--border-strong) py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-(--text-muted) motion-safe:animate-rise">
          <p className="flex items-center gap-3 text-(--accent)">
            <span
              className="size-1.5 rounded-full bg-(--accent)"
              aria-hidden="true"
            />
            Full Stack Developer
          </p>
          <p>Profile / 2026</p>
        </div>

        <div className="mt-10 grid gap-12 motion-safe:animate-rise motion-safe:[animation-delay:100ms] sm:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-(--text-secondary) first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-(--accent) sm:text-xl">
              Full Stack Developer with 4 years of enterprise experience
              building React/.NET applications for clients including Lawrence
              Livermore National Laboratory and the US Army Corps of Engineers.
              Proven track record in developing and maintaining
              enterprise-level applications, automating processes, and
              performing data analytics.
            </p>

            <ul className="mt-10 flex flex-wrap gap-3">
              <li>
                <a
                  aria-label="LinkedIn (opens in new tab)"
                  className={socialLinkClass}
                  href="https://www.linkedin.com/in/jordankalebpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  LinkedIn
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
                  <GitHubIcon />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className={socialLinkClass}
                  href="mailto:jp@jordanpage.dev"
                >
                  <MailIcon />
                  jp@jordanpage.dev
                </a>
              </li>
            </ul>
          </div>

          <nav
            aria-labelledby="contents-heading"
            className="lg:col-span-4 lg:col-start-9"
          >
            <p
              id="contents-heading"
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-(--text-muted)"
            >
              Contents
            </p>

            <ul className="mt-3 border-t border-(--border-subtle)">
              {jumpLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="border-b border-(--border-subtle)"
                >
                  <a
                    className={`group flex items-baseline gap-3 py-3 text-(--text-primary) transition-colors hover:text-(--accent) ${focusRingClass}`}
                    href={link.href}
                  >
                    <span
                      className="font-mono text-[0.7rem] text-(--text-muted)"
                      aria-hidden="true"
                    >
                      {formatIndex(index)}
                    </span>
                    <span className="font-serif text-2xl leading-none">
                      {link.label}
                    </span>
                    <span
                      className="flex-1 border-b border-dotted border-(--border-strong)"
                      aria-hidden="true"
                    />
                    <span
                      className="font-mono text-xs transition-transform duration-300 group-hover:translate-y-1"
                      aria-hidden="true"
                    >
                      &darr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-32">
        <Section id="skills" index="01" title="Skills">
          <dl className="border-b border-(--border-subtle)">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid gap-1 border-t border-(--border-subtle) py-4 first:border-t-0 first:pt-0 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-6"
              >
                <dt className="font-serif text-2xl italic leading-tight text-(--text-primary)">
                  {group.label}
                </dt>
                <dd className="text-base leading-relaxed text-(--text-secondary)">
                  {group.value}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" index="02" title="Experience">
          {experience.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="border-t border-(--border-subtle) py-10 first:border-t-0 first:pt-0 last:pb-0"
            >
              <h3 className="font-serif text-3xl leading-tight tracking-[-0.01em] text-(--text-primary) sm:text-4xl">
                {role.title}
              </h3>

              <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.14em]">
                <span className="font-medium text-(--accent)">
                  {role.company}
                </span>
                <span className="h-px w-6 bg-(--border-strong)" aria-hidden="true" />
                <span className="text-(--text-muted)">{role.period}</span>
              </p>

              <ul className="mt-6 space-y-3 text-base leading-relaxed text-(--text-secondary)">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-6">
                    <span
                      className="absolute left-0 top-[0.8em] h-px w-3 bg-(--accent)"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Section>

        <Section id="selected-projects" index="03" title="Selected Projects">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base leading-relaxed text-(--text-secondary)">
              These highlight real-world work and utilities.
            </p>

            <Link
              className={`inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-(--accent) px-5 py-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-(--accent-contrast) transition-colors hover:bg-(--accent-hover) ${focusRingClass}`}
              href="/projects"
            >
              Explore Showcase
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="mt-8 border-b border-(--border-subtle)">
            {resumeProjects.map((project, index) => (
              <article
                key={project.name}
                className="group grid grid-cols-[2.25rem_1fr] gap-y-4 border-t border-(--border-subtle) py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-x-6"
              >
                <span
                  className="font-mono text-[0.7rem] text-(--text-muted)"
                  aria-hidden="true"
                >
                  {formatIndex(index)}
                </span>

                <div>
                  <h3 className="font-serif text-2xl leading-tight text-(--text-primary) transition-colors group-hover:italic group-hover:text-(--accent) sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-(--text-secondary)">
                    {project.description}
                  </p>
                </div>

                <a
                  aria-label={`${project.name} repository (opens in new tab)`}
                  className={`col-start-2 inline-flex w-fit items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-(--text-secondary) underline decoration-(--border-strong) underline-offset-4 transition-colors hover:text-(--accent) hover:decoration-(--accent) sm:col-start-3 ${focusRingClass}`}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                  View on GitHub
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" index="04" title="Education">
          <h3 className="font-serif text-3xl leading-tight tracking-[-0.01em] text-(--text-primary) sm:text-4xl">
            Bachelor of Science in Computer Science
          </h3>

          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.14em]">
            <span className="font-medium text-(--accent)">
              Saint Vincent College, Latrobe, PA
            </span>
            <span className="h-px w-6 bg-(--border-strong)" aria-hidden="true" />
            <span className="text-(--text-muted)">May 2018</span>
          </p>

          <p className="mt-6 text-base leading-relaxed text-(--text-secondary)">
            <strong className="font-semibold text-(--text-primary)">
              Relevant coursework:
            </strong>{" "}
            Applied Cryptography, Data Communications, Server-Side Programming,
            Computer Architecture, Software Engineering, Database Concepts, Data
            Structures.
          </p>
        </Section>
      </div>
    </div>
  );
}
