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
    <section className="mx-auto w-full max-w-4xl px-6 py-24 sm:py-32">
      <h1 className="font-serif text-4xl italic tracking-tight text-(--text-primary) sm:text-5xl">
        Projects
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
        This page will be updated with my latest projects and experiments.
      </p>
    </section>
  );
}
