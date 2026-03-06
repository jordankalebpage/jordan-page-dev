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
    <section className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="rounded-3xl border border-(--border-subtle) bg-(--surface-card) p-8 shadow-sm backdrop-blur-sm sm:p-12 transition-all">
        <h1 className="text-4xl font-extrabold tracking-tight text-(--text-primary) sm:text-5xl">
          Projects
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
          This page will be updated with my latest projects and experiments.
        </p>
      </div>
    </section>
  );
}
