export const runtime = "edge";

const skillGroups = [
  {
    label: "Frontend",
    value: "React (hooks & class-based), JavaScript, HTML, CSS",
  },
  {
    label: "Backend",
    value: "C# (.NET), Go",
  },
  {
    label: "Scripting",
    value: "Python, PowerShell",
  },
  {
    label: "Database",
    value: "SQL Server, PostgreSQL",
  },
  {
    label: "Cloud & DevOps",
    value: "Azure DevOps, Okta authentication",
  },
  {
    label: "Data Analysis",
    value: "Power BI, EdgeTI, Excel",
  },
  {
    label: "Other",
    value: "SharePoint, Power Automate, LDAP, SFTP, Regular Expressions",
  },
];

const experience = [
  {
    title: "Full Stack Developer",
    company: "North Wind Group",
    period: "February 2022 - February 2026",
    highlights: [
      "Developed and maintained full-stack React and .NET applications for enterprise and government clients including Lawrence Livermore National Laboratory and the US Army Corps of Engineers.",
      "Implemented Okta SPA authentication to improve application security.",
      "Reduced helpdesk backlog by resolving complex SharePoint issues.",
      "Built EdgeTI dashboards by integrating BambooHR, Azure DevOps, and SharePoint APIs.",
      "Automated database migration workflows with Python to reduce manual effort.",
      "Refactored legacy systems to improve performance and maintainability.",
    ],
  },
  {
    title: "Quality Assurance (QA) Intern",
    company: "North Wind Group",
    period: "October 2020 - February 2022",
    highlights: [
      "Designed and maintained a QA SharePoint site to streamline team access to information.",
      "Automated QA processes with Microsoft Forms and Power Automate to reduce manual data entry.",
      "Created an issues management tracker used across multiple departments.",
      "Produced data visualization reports with Python, Excel, and Power BI.",
    ],
  },
  {
    title: "Software Consultant",
    company: "Snake River School District",
    period: "February 2019 - November 2021",
    highlights: [
      "Built Python scripts to automate student account lifecycle management, cutting processing time from days to minutes.",
      "Partnered with IT leadership to align software priorities with district needs.",
      "Implemented data management improvements to strengthen overall system performance.",
    ],
  },
];

const projects = [
  {
    name: "Student Account Management System",
    description:
      "Automated account creation and deletion workflows for a school district using Python.",
    href: "https://github.com/jordankalebpage/SRSDAccountCreation",
  },
  {
    name: "Projects/Invoice Portal",
    description: "Next.js application built with a colleague for a small business workflow.",
    href: "https://github.com/jordankalebpage/next-geo-invoice",
  },
  {
    name: "Twitter Color Changer",
    description:
      "Chrome extension that lets users customize Twitter background, text, and border colors.",
    href: "https://github.com/jordankalebpage/twitter-background-thing",
  },
  {
    name: "Anime Subtitle Renamer",
    description:
      "Go utility that renames anime videos and subtitle files for automatic subtitle loading in MPV.",
    href: "https://github.com/jordankalebpage/anime-subtitle-renamer-thing",
  },
  {
    name: "Anime Remove Torrenter Name and Hash",
    description: "Go script that strips release group names and hashes from anime filenames.",
    href: "https://github.com/jordankalebpage/anime-remove-torrenter-name-thing",
  },
];

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

        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          <li className="rounded-md border border-white/10 px-3 py-2 text-zinc-300">
            Greenville, SC
          </li>
          <li className="rounded-md border border-white/10 px-3 py-2 text-zinc-300">
            [REDACTED_PHONE]
          </li>
          <li>
            <a
              className="inline-flex rounded-md border border-sky-400/40 px-3 py-2 text-sky-300 transition-colors hover:bg-sky-400/10"
              href="mailto:[REDACTED_EMAIL]"
            >
              [REDACTED_EMAIL]
            </a>
          </li>
          <li>
            <a
              className="inline-flex rounded-md border border-sky-400/40 px-3 py-2 text-sky-300 transition-colors hover:bg-sky-400/10"
              href="https://www.linkedin.com/in/jordankalebpage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="inline-flex rounded-md border border-sky-400/40 px-3 py-2 text-sky-300 transition-colors hover:bg-sky-400/10"
              href="https://github.com/jordankalebpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
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

      <section className="mt-8 rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
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

      <section className="mt-8 rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Selected Projects</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="rounded-lg border border-white/10 p-4">
              <h3 className="text-base font-semibold text-zinc-100">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{project.description}</p>
              <a
                className="mt-3 inline-flex text-sm font-medium text-sky-300 transition-colors hover:text-sky-200"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
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
