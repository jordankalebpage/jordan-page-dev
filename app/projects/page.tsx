import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected side projects, experiments, and showcase work from Jordan Page.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects",
    description:
      "Selected side projects, experiments, and showcase work from Jordan Page.",
    url: "/projects",
  },
  twitter: {
    title: "Projects",
    description:
      "Selected side projects, experiments, and showcase work from Jordan Page.",
  },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-(--text-primary)">
        Projects
      </h1>

      <p className="mt-4 max-w-2xl text-(--text-secondary)">
        Coming soon. This area will highlight fun experiments and side projects
        built with Next.js and other technologies.
      </p>
    </section>
  );
}
