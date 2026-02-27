export type SkillGroup = {
  label: string;
  value: string;
};

export type ExperienceRole = {
  title: string;
  company: string;
  period: string;
  highlights: string[];
};

export type ResumeProject = {
  name: string;
  description: string;
  href: string;
};

export type ShowcaseProjectStatus = "In Progress" | "Planned";

export type ShowcaseProject = {
  name: string;
  summary: string;
  status: ShowcaseProjectStatus;
  stack: string[];
  goals: string[];
  repoHref?: string;
  liveHref?: string;
};

export const skillGroups: SkillGroup[] = [
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

export const experience: ExperienceRole[] = [
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

export const resumeProjects: ResumeProject[] = [
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

export const showcaseProjects: ShowcaseProject[] = [
  {
    name: "Grid Runner",
    summary:
      "A browser game built with React state machines and keyboard controls. Focused on performance and responsive interactions.",
    status: "In Progress",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    goals: [
      "Build smooth game-loop updates without dropped frames",
      "Use accessible controls and clear focus management",
      "Ship both keyboard and touch-friendly interactions",
    ],
  },
  {
    name: "Component Patterns Lab",
    summary:
      "A collection of reusable React component patterns with strong UX defaults, testing strategy, and clean composition.",
    status: "In Progress",
    stack: ["Next.js", "React", "TypeScript", "Vitest"],
    goals: [
      "Demonstrate compound components and slot-like composition",
      "Document accessibility-first interaction patterns",
      "Keep components easy to reuse across multiple pages",
    ],
  },
  {
    name: "Realtime Team Quiz",
    summary:
      "A small multiplayer quiz app showing collaborative state updates, optimistic UI, and reconnect-safe sessions.",
    status: "Planned",
    stack: ["Next.js", "React", "TypeScript", "WebSockets"],
    goals: [
      "Synchronize room state in real time",
      "Handle reconnect and stale state scenarios cleanly",
      "Design a responsive host and player experience",
    ],
  },
];
